/* ==========================================================================
   Interactive Coastal Easter Eggs (Zero Resting Clutter · 60fps Batched)
   1. Stone Skipping (Qingshui Cliffs → Guishan Island): 2.5D Wave Occlusion,
      Crest-Kiss Timing, Procedural Web Audio, Marine Cameos & Aurora/Dawn
   2. 3D Perception Lens (MESH · DEPTH · NORMALS · SEG) + 2D Kalman Tracker
   3. Footer Returning-Tide Origami / Night-Lantern Boats (Guishan Pennant)
   ========================================================================== */

(function () {
  'use strict';

  function boot() {
    const B = window.__COAST_BRIDGE__;
    if (!B || !B.hero || !B.core) return;

    const { hero, footer, core } = B;
    const { lerp, mixRGB, reducedMotion } = core;
    const stage = hero.stage;

    const STORAGE_BEST = 'peteryux_skip_best';
    const STORAGE_GUISHAN = 'peteryux_guishan_reached';

    const readStore = (k, fb) => { try { const v = window.localStorage.getItem(k); return v === null ? fb : v; } catch (_) { return fb; } };
    const writeStore = (k, v) => { try { window.localStorage.setItem(k, String(v)); } catch (_) {} };
    const haptic = (ms) => { if (navigator.vibrate) { try { navigator.vibrate(ms); } catch (_) {} } };

    /* ======================================================================
       1. PROCEDURAL WEB AUDIO (Zero Files · Gesture-Unlocked · Never Throws)
       ====================================================================== */
    const Audio = (() => {
      let ctx = null;
      let noiseBuf = null;
      let muted = false;
      const PENT = [293.66, 329.63, 392.00, 440.00, 493.88, 587.33, 659.25, 783.99, 880.00, 987.77, 1174.66];

      function unlock() {
        if (muted) return;
        try {
          if (!ctx) {
            const AC = window.AudioContext || window.webkitAudioContext;
            if (!AC) return;
            ctx = new AC();
          }
          if (ctx.state === 'suspended') ctx.resume().catch(() => {});
        } catch (_) {}
      }

      function running() {
        return (!muted && ctx && ctx.state === 'running') ? ctx : null;
      }

      function playTone(type, f0, f1, peak, dur, delay) {
        const c = running();
        if (!c) return;
        try {
          const t0 = c.currentTime + (delay || 0);
          const osc = c.createOscillator();
          const g = c.createGain();
          osc.type = type;
          osc.frequency.setValueAtTime(f0, t0);
          if (f1 && f1 !== f0) osc.frequency.exponentialRampToValueAtTime(f1, t0 + dur * 0.85);
          g.gain.setValueAtTime(0.0001, t0);
          g.gain.linearRampToValueAtTime(peak, t0 + Math.min(0.018, dur * 0.12));
          g.gain.exponentialRampToValueAtTime(0.0004, t0 + dur);
          osc.connect(g).connect(c.destination);
          osc.start(t0);
          osc.stop(t0 + dur + 0.02);
        } catch (_) {}
      }

      function whoosh() {
        const c = running();
        if (!c) return;
        try {
          if (!noiseBuf) {
            const len = Math.floor(c.sampleRate * 0.14);
            noiseBuf = c.createBuffer(1, len, c.sampleRate);
            const d = noiseBuf.getChannelData(0);
            for (let i = 0; i < len; i++) d[i] = (Math.random() * 2 - 1) * Math.sin((i / len) * Math.PI);
          }
          const now = c.currentTime;
          const src = c.createBufferSource();
          src.buffer = noiseBuf;
          const flt = c.createBiquadFilter();
          flt.type = 'bandpass';
          flt.frequency.setValueAtTime(520, now);
          flt.frequency.exponentialRampToValueAtTime(1450, now + 0.13);
          flt.Q.value = 1.6;
          const g = c.createGain();
          g.gain.setValueAtTime(0.055, now);
          g.gain.exponentialRampToValueAtTime(0.001, now + 0.14);
          src.connect(flt).connect(g).connect(c.destination);
          src.start(now);
        } catch (_) {}
      }

      return {
        unlock,
        whoosh,
        skipPlink: (step, perf) => {
          const f = PENT[Math.min(PENT.length - 1, Math.max(0, step - 1))];
          playTone('triangle', f, f * 1.014, perf ? 0.09 : 0.062, perf ? 0.34 : 0.22, 0);
          if (perf) playTone('sine', f * 2, f * 2, 0.034, 0.30, 0.006);
        },
        plop: () => playTone('sine', 340, 165, 0.058, 0.13, 0),
        guishanChord: () => [293.66, 440.00, 587.33, 659.25].forEach((f, i) => playTone('triangle', f, f, 0.052, 1.3, i * 0.075)),
        sonarPing: () => playTone('sine', 880, 790, 0.04, 0.44, 0),
        boatDrop: (idx) => playTone('sine', [392.0, 440.0, 587.33, 659.25][idx % 4], 0, 0.045, 0.30, 0),
        isMuted: () => muted,
        toggleMute: () => { muted = !muted; if (!muted) unlock(); return muted; }
      };
    })();

    /* ======================================================================
       2. SHARED STATE & ZERO-RESTING-COST HUD (display: none when closed)
       ====================================================================== */
    const state = {
      bestSkips: Math.max(0, parseInt(readStore(STORAGE_BEST, '0'), 10) || 0),
      guishanReached: readStore(STORAGE_GUISHAN, '0') === '1',
      auroraTarget: 0,
      auroraAlpha: 0,
      dawnBloom: 0,
      guishanRingT: -10,

      mouseX: -1,
      mouseY: -1,
      mouseIn: false,
      guishanHoverStart: 0,
      guishanTellAlpha: 0,
      guishanClicks: [],
      cliffClicks: [],
      themeClicks: [],

      skipHudVisible: false,
      skipHudHideAt: 0,
      lastSkips: 0,
      lastReached: false,
      stone: null,
      drag: null,
      spaceHold: null,
      tapBoostUntil: -1,
      hitstopUntil: 0,
      nextAmbientAt: 18,
      particles: [],
      rings: [],
      creatures: [],
      birds: [],

      perception: {
        active: false,
        channel: 1, // 1 MESH, 2 DEPTH, 3 NORMALS, 4 SEG
        pings: [],
        kalman: null
      }
    };

    const hudRoot = document.createElement('div');
    hudRoot.className = 'coast-hud';

    const ICON_CLOSE = '<svg width="11" height="11" viewBox="0 0 12 12" fill="none" stroke="currentColor" stroke-width="1.4" stroke-linecap="round" aria-hidden="true"><path d="M2.5 2.5l7 7M9.5 2.5l-7 7"/></svg>';
    const ICON_SFX =
      '<svg class="icon-sfx-on" width="13" height="13" viewBox="0 0 16 16" fill="none" stroke="currentColor" stroke-width="1.4" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M2.5 6.2h2.8L9 3v10L5.3 9.8H2.5z"/><path d="M11.6 5.6a3.4 3.4 0 0 1 0 4.8M13.5 3.8a6 6 0 0 1 0 8.4"/></svg>' +
      '<svg class="icon-sfx-off" width="13" height="13" viewBox="0 0 16 16" fill="none" stroke="currentColor" stroke-width="1.4" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M2.5 6.2h2.8L9 3v10L5.3 9.8H2.5z"/><path d="M11.4 6.2l3.2 3.6M14.6 6.2l-3.2 3.6"/></svg>';

    const percBar = document.createElement('div');
    percBar.className = 'coast-hud-bar coast-hud-bar--perc';
    percBar.hidden = true;
    percBar.innerHTML =
      '<button type="button" class="coast-hud-btn is-active" data-ch="1" aria-pressed="true">MESH</button>' +
      '<button type="button" class="coast-hud-btn" data-ch="2" aria-pressed="false">DEPTH</button>' +
      '<button type="button" class="coast-hud-btn" data-ch="3" aria-pressed="false">NORMALS</button>' +
      '<button type="button" class="coast-hud-btn" data-ch="4" aria-pressed="false">SEG</button>' +
      '<button type="button" id="hud-perc-close" class="coast-hud-btn coast-hud-icon" aria-label="Close perception mode">' + ICON_CLOSE + '</button>';

    const skipBar = document.createElement('div');
    skipBar.className = 'coast-hud-bar coast-hud-bar--skip';
    skipBar.hidden = true;
    skipBar.innerHTML =
      '<span id="hud-skip-stat" class="coast-hud-stat" aria-live="polite">0 skips</span>' +
      '<button type="button" id="hud-mute-btn" class="coast-hud-btn coast-hud-icon" aria-pressed="false" aria-label="Toggle sound" title="Toggle sound">' + ICON_SFX + '</button>' +
      '<button type="button" id="hud-skip-close" class="coast-hud-btn coast-hud-icon" aria-label="Close skip counter">' + ICON_CLOSE + '</button>';

    hudRoot.appendChild(percBar);
    hudRoot.appendChild(skipBar);
    const hudHost = stage.querySelector('.hero-content') || stage;
    hudHost.appendChild(hudRoot);

    const skipStatEl = skipBar.querySelector('#hud-skip-stat');
    const muteBtn = skipBar.querySelector('#hud-mute-btn');
    const skipCloseBtn = skipBar.querySelector('#hud-skip-close');
    const percCloseBtn = percBar.querySelector('#hud-perc-close');
    const chButtons = Array.from(percBar.querySelectorAll('[data-ch]'));

    function setBarOpen(bar, open) {
      bar.hidden = !open;
      bar.classList.toggle('is-open', open);
    }

    function refreshSkipHud() {
      const zh = core.getLang() === 'zh';
      const s = state.lastSkips;
      const best = state.bestSkips;
      const reached = state.lastReached;
      const showBest = best > s;
      if (zh) {
        skipStatEl.textContent = `${s} 下${showBest ? ` · 最高 ${best}` : ''}${reached ? ' · 龜山島' : ''}`;
      } else {
        skipStatEl.textContent = `${s} ${s === 1 ? 'skip' : 'skips'}${showBest ? ` · best ${best}` : ''}${reached ? ' · Guishan' : ''}`;
      }
      skipStatEl.classList.toggle('coast-hud-accent', reached);
      muteBtn.setAttribute('aria-pressed', String(Audio.isMuted()));
      setBarOpen(skipBar, state.skipHudVisible);
    }

    function emitPing(x, y) {
      const t = hero.getNow();
      if (state.perception.pings.length > 4) state.perception.pings.shift();
      state.perception.pings.push({ x, y, t0: t });
    }

    function setPerceptionChannel(ch) {
      state.perception.channel = ch;
      chButtons.forEach((b) => {
        const on = Number(b.getAttribute('data-ch')) === ch;
        b.classList.toggle('is-active', on);
        b.setAttribute('aria-pressed', String(on));
      });
      hero.ensureRunning();
    }

    function setPerceptionActive(on, pingX, pingY) {
      state.perception.active = Boolean(on);
      setBarOpen(percBar, state.perception.active);
      if (state.perception.active) {
        const hs = hero.getState();
        emitPing(pingX !== undefined ? pingX : hs.W * 0.80, pingY !== undefined ? pingY : hs.horizonY);
        Audio.sonarPing();
      } else {
        state.perception.pings.length = 0;
        state.perception.kalman = null;
      }
      hero.ensureRunning();
    }

    muteBtn.addEventListener('click', (e) => {
      e.stopPropagation();
      Audio.toggleMute();
      refreshSkipHud();
    });

    skipCloseBtn.addEventListener('click', (e) => {
      e.stopPropagation();
      state.skipHudVisible = false;
      state.stone = null;
      state.spaceHold = null;
      setBarOpen(skipBar, false);
      hero.ensureRunning();
    });

    percCloseBtn.addEventListener('click', (e) => {
      e.stopPropagation();
      setPerceptionActive(false);
    });

    chButtons.forEach((btn) => {
      btn.addEventListener('click', (e) => {
        e.stopPropagation();
        if (!state.perception.active) return;
        Audio.unlock();
        setPerceptionChannel(Number(btn.getAttribute('data-ch')));
        const hs = hero.getState();
        emitPing(hs.W * 0.5, hs.horizonY + 40);
        Audio.sonarPing();
      });
    });

    window.addEventListener('coast:lang', () => {
      if (state.skipHudVisible) refreshSkipHud();
    });

    /* ======================================================================
       3. SHARED GEOMETRY & PALETTE HELPERS (Zero Duplication)
       ====================================================================== */
    const getPalette = (tv) => (tv > 0.5
      ? { ink: [140, 192, 224], hi: [216, 185, 126] }
      : { ink: [27, 74, 104], hi: [182, 69, 44] });

    const getGuishanBounds = (hs) => ({
      cx: hs.W * 0.805 + hs.px * 7.2,
      peakY: hs.horizonY - (0.81 - 0.738) * hs.ridgeH * 0.96
    });

    function drawBrackets(ctx, x0, y0, x1, y1, c, bothSides) {
      ctx.beginPath();
      ctx.moveTo(x0, y0 + c); ctx.lineTo(x0, y0); ctx.lineTo(x0 + c, y0);
      ctx.moveTo(x1 - c, y0); ctx.lineTo(x1, y0); ctx.lineTo(x1, y0 + c);
      if (bothSides) {
        ctx.moveTo(x0, y1 - c); ctx.lineTo(x0, y1); ctx.lineTo(x0 + c, y1);
        ctx.moveTo(x1 - c, y1); ctx.lineTo(x1, y1); ctx.lineTo(x1, y1 - c);
      }
      ctx.stroke();
    }

    function strokeTypedLine(ctx, xs, ys, len) {
      ctx.beginPath();
      for (let i = 0; i < len; i++) {
        if (i === 0) ctx.moveTo(xs[i], ys[i]);
        else ctx.lineTo(xs[i], ys[i]);
      }
      ctx.stroke();
    }

    function pingEnergyAt(x, y, t) {
      let e = 0;
      const pings = state.perception.pings;
      for (let i = 0; i < pings.length; i++) {
        const age = t - pings[i].t0;
        if (age <= 0 || age > 2.6) continue;
        const d = Math.hypot(x - pings[i].x, y - pings[i].y);
        const band = Math.exp(-Math.pow((d - age * 440) / 48, 2)) * Math.exp(-age * 0.9);
        if (band > e) e = band;
      }
      return e;
    }

    /* ======================================================================
       5. STONE SKIPPING GAMEPLAY & MARINE CAMEOS (Runs in beforeRender!)
       ====================================================================== */
    function launchStone(x, y, vx, vy, opts) {
      if (reducedMotion) return;
      const o = opts || {};
      state.stone = {
        x, y,
        vx: Math.max(145, Math.min(480, vx)),
        vy: Math.max(-180, Math.min(60, vy)),
        layer: o.layer !== undefined ? o.layer : 3,
        skips: 0,
        rot: 0,
        trail: [],
        sinking: false,
        sinkDepth: 0,
        isAmbient: Boolean(o.isAmbient),
        reachedGuishan: false,
        lastSkipAt: -10
      };
      if (!o.isAmbient) {
        state.lastSkips = 0;
        state.lastReached = false;
        state.skipHudVisible = true;
        state.skipHudHideAt = hero.getNow() + 14;
        refreshSkipHud();
        Audio.whoosh();
        state.perception.kalman = null;
      }
      hero.ensureRunning();
    }

    function spawnSplash(x, y, layer, count, isPerfect) {
      for (let i = 0; i < count; i++) {
        const ang = -Math.PI * (0.14 + Math.random() * 0.72);
        const spd = (isPerfect ? 95 : 65) + Math.random() * (isPerfect ? 120 : 75);
        state.particles.push({
          x, y,
          vx: Math.cos(ang) * spd + 36,
          vy: Math.sin(ang) * spd,
          r: (isPerfect ? 1.8 : 1.3) + Math.random() * 1.3,
          life: 0,
          maxLife: 0.42 + Math.random() * 0.26,
          layer,
          accent: isPerfect && i === 0
        });
      }
      state.rings.push({ x, y, layer, life: 0, maxLife: isPerfect ? 0.8 : 0.55, maxRx: isPerfect ? 36 : 22, accent: isPerfect });
    }

    function spawnBubbles(x, y, layer) {
      for (let i = 0; i < 4; i++) {
        state.particles.push({
          x: x + (Math.random() - 0.5) * 14,
          y: y + 4 + i * 3,
          vx: (Math.random() - 0.5) * 10,
          vy: -24 - Math.random() * 20,
          r: 1.2 + Math.random() * 1.1,
          life: 0,
          maxLife: 0.75 + Math.random() * 0.3,
          layer,
          bubble: true
        });
      }
    }

    function spawnCreature(x, layer, kind) {
      const baseY = hero.sampleWaveY(layer, x, hero.getNow());
      state.creatures.push({
        kind,
        x,
        y: baseY + 6,
        vx: kind === 'fish' ? 210 : 150,
        vy: kind === 'fish' ? -150 : -195,
        layer,
        age: 0,
        scale: lerp(0.58, 1.0, layer / 3)
      });
    }

    function spawnBirds(W, horizonY) {
      for (let i = 0; i < 3; i++) {
        state.birds.push({
          x: W * (0.76 + i * 0.03),
          y: horizonY - 26 - i * 14,
          vx: -34 - Math.random() * 16,
          vy: -9 - Math.random() * 7,
          phase: Math.random() * Math.PI * 2,
          life: 0,
          maxLife: 5.5
        });
      }
    }

    function triggerGuishanPayoff(t, hs) {
      state.guishanReached = true;
      state.lastReached = true;
      writeStore(STORAGE_GUISHAN, '1');
      state.guishanRingT = t;
      Audio.guishanChord();
      spawnBirds(hs.W, hs.horizonY);
      if (hs.tv > 0.4) state.auroraTarget = 1;
      else state.dawnBloom = 1;
    }

    function stepPhysics(info) {
      const { t, dt } = info;
      if (reducedMotion) {
        state.auroraAlpha = state.auroraTarget;
        return;
      }

      state.auroraAlpha += (state.auroraTarget - state.auroraAlpha) * Math.min(1, dt * 1.15);
      if (state.dawnBloom > 0.002) state.dawnBloom = Math.max(0, state.dawnBloom - dt * 0.22);

      // Subtle idle environmental tell every ~24s
      if (!state.stone && !state.drag && !state.spaceHold && info.isVisible && t > state.nextAmbientAt) {
        state.nextAmbientAt = t + 24 + Math.random() * 10;
        const sx = info.W * 0.14;
        launchStone(sx, hero.sampleWaveY(2, sx, t) - 24, Math.min(270, info.W * 0.24), -48, { layer: 2, isAmbient: true });
      }

      if (state.skipHudVisible && !state.stone && !state.drag && !state.spaceHold && t > state.skipHudHideAt) {
        state.skipHudVisible = false;
        setBarOpen(skipBar, false);
      }

      // Prune expired LiDAR pings cleanly
      for (let i = state.perception.pings.length - 1; i >= 0; i--) {
        if (t - state.perception.pings[i].t0 > 2.6) state.perception.pings.splice(i, 1);
      }

      if (t < state.hitstopUntil) return;

      const st = state.stone;
      if (st) {
        if (st.sinking) {
          st.sinkDepth += dt * 36;
          st.x += st.vx * dt * 0.18;
          if (st.sinkDepth > 34) {
            state.stone = null;
            if (!st.isAmbient) state.skipHudHideAt = t + 7;
          }
        } else {
          st.vy += 480 * dt;
          st.x += st.vx * dt;
          st.y += st.vy * dt;
          st.rot += st.vx * 0.015 * dt;
          st.trail.push([st.x, st.y]);
          if (st.trail.length > (st.skips >= 4 ? 16 : 9)) st.trail.shift();

          const surfaceY = hero.sampleWaveY(st.layer, st.x, t);
          if (st.y >= surfaceY && st.vy > 0 && t - st.lastSkipAt > 0.07) {
            st.y = surfaceY;
            const slope = hero.sampleWaveSlope(st.layer, st.x, t);
            const timed = !st.isAmbient && t <= state.tapBoostUntil;
            const shallowEnough = st.vy / Math.max(90, Math.abs(st.vx)) < 0.92 && st.vx > 115;
            const ambientLimit = st.isAmbient && st.skips >= 2;

            if (!ambientLimit && (timed || shallowEnough)) {
              st.lastSkipAt = t;
              st.skips += 1;
              if (timed) {
                state.tapBoostUntil = -1;
                state.hitstopUntil = t + 0.020;
              }
              if (!st.isAmbient && st.skips > 1 && st.skips % 2 === 0 && st.layer > 0) st.layer -= 1;

              st.vy = timed
                ? -Math.max(155, Math.min(215, Math.abs(st.vy) * 0.94))
                : -Math.max(112, Math.min(175, Math.abs(st.vy) * (0.78 - slope * 0.16)));
              st.vx *= timed ? 0.96 : (st.isAmbient ? 0.72 : 0.85);

              hero.addRipple(st.x, st.layer, timed ? 9.5 : (st.isAmbient ? 4.2 : 6.5));
              spawnSplash(st.x, surfaceY, st.layer, timed ? 10 : (st.isAmbient ? 4 : 6), timed);

              if (!st.isAmbient) {
                state.lastSkips = st.skips;
                if (st.skips > state.bestSkips) {
                  state.bestSkips = st.skips;
                  writeStore(STORAGE_BEST, state.bestSkips);
                }
                Audio.skipPlink(st.skips, timed);
                state.skipHudHideAt = t + 12;

                if (st.skips === 4) spawnCreature(st.x + 24, st.layer, 'fish');
                if (st.skips === 6) spawnCreature(st.x + 18, st.layer, 'dolphin');
                if (!st.reachedGuishan && (st.skips >= 7 || (st.x >= info.W * 0.735 && st.skips >= 4))) {
                  st.reachedGuishan = true;
                  triggerGuishanPayoff(t, info);
                }
                refreshSkipHud();
              }
            } else {
              st.sinking = true;
              st.sinkDepth = 0;
              hero.addRipple(st.x, st.layer, st.isAmbient ? 3.5 : 5.5);
              spawnBubbles(st.x, surfaceY, st.layer);
              if (!st.isAmbient) {
                Audio.plop();
                state.skipHudHideAt = t + 7;
              }
            }
          }

          if (st.x > info.W + 24) {
            if (!st.isAmbient && !st.reachedGuishan && st.skips >= 4) {
              st.reachedGuishan = true;
              triggerGuishanPayoff(t, info);
              refreshSkipHud();
            }
            state.stone = null;
            if (!st.isAmbient) state.skipHudHideAt = t + 7;
          }
        }
      }

      for (let i = state.particles.length - 1; i >= 0; i--) {
        const p = state.particles[i];
        p.life += dt;
        if (p.life >= p.maxLife) { state.particles.splice(i, 1); continue; }
        p.x += p.vx * dt;
        p.y += p.vy * dt;
        if (!p.bubble) p.vy += 380 * dt;
      }

      for (let i = state.rings.length - 1; i >= 0; i--) {
        state.rings[i].life += dt;
        if (state.rings[i].life >= state.rings[i].maxLife) state.rings.splice(i, 1);
      }

      for (let i = state.creatures.length - 1; i >= 0; i--) {
        const c = state.creatures[i];
        c.age += dt;
        c.vy += 360 * dt;
        c.x += c.vx * dt;
        c.y += c.vy * dt;
        const wy = hero.sampleWaveY(c.layer, c.x, t);
        if ((c.age > 0.25 && c.y > wy + 18) || c.age > 1.65) {
          if (c.age <= 1.65) {
            hero.addRipple(c.x, c.layer, 6.0);
            spawnSplash(c.x, wy, c.layer, 6, false);
          }
          state.creatures.splice(i, 1);
        }
      }

      for (let i = state.birds.length - 1; i >= 0; i--) {
        const b = state.birds[i];
        b.life += dt;
        b.x += b.vx * dt;
        b.y += b.vy * dt + Math.sin(t * 3.2 + b.phase) * 0.25;
        if (b.life >= b.maxLife || b.x < -40) state.birds.splice(i, 1);
      }

      // 2D Kalman Tracker (runs in same frame BEFORE rendering!)
      if (state.perception.active) {
        const tgt = (state.stone && !state.stone.isAmbient && !state.stone.sinking)
          ? state.stone
          : (state.creatures[0] || null);
        if (tgt) {
          if (!state.perception.kalman) {
            state.perception.kalman = { x: tgt.x, y: tgt.y, vx: tgt.vx, vy: tgt.vy };
          } else {
            const k = state.perception.kalman;
            const px = k.x + k.vx * dt;
            const py = k.y + k.vy * dt + 0.5 * 480 * dt * dt;
            const pvy = k.vy + 480 * dt;
            k.x = px + 0.42 * (tgt.x - px);
            k.y = py + 0.42 * (tgt.y - py);
            k.vx += 0.28 * (tgt.vx - k.vx);
            k.vy = pvy + 0.28 * (tgt.vy - pvy);
          }
        } else {
          state.perception.kalman = null;
        }
      }
    }

    /* ======================================================================
       6. CANVAS RENDER HOOKS (Batched 60fps · Zero Idle Overhead)
       ====================================================================== */
    function drawAuroraSky(ctx, info) {
      const a = state.auroraAlpha * Math.max(0, (info.tv - 0.15) / 0.85);
      if (a > 0.01) {
        ctx.save();
        const bands = [
          { yMid: 0.44, halfH: 0.28, col: [98, 186, 174], amp: 22, ph: 0.4, op: 0.24, x0: 0.06 },
          { yMid: 0.50, halfH: 0.24, col: [132, 192, 226], amp: 16, ph: 2.3, op: 0.19, x0: 0.18 },
          { yMid: 0.36, halfH: 0.22, col: [118, 146, 196], amp: 24, ph: 4.1, op: 0.14, x0: 0.24 }
        ];
        const segs = 48;
        for (let bi = 0; bi < bands.length; bi++) {
          const b = bands[bi];
          const xStart = info.W * b.x0 + info.px * (4 + bi * 2);
          const xEnd = info.W * 1.04 + info.px * (4 + bi * 2);
          const topPts = [];
          const botPts = [];
          for (let i = 0; i <= segs; i++) {
            const u = i / segs;
            const x = lerp(xStart, xEnd, u);
            const env = Math.pow(Math.max(0, Math.sin(u * Math.PI)), 1.35);
            const w = Math.sin(u * 4.6 + info.t * (0.34 + bi * 0.11) + b.ph) + Math.sin(u * 9.2 - info.t * 0.28 + b.ph * 1.4) * 0.35;
            const center = info.horizonY * b.yMid + w * b.amp * env;
            const hSpan = info.horizonY * b.halfH * env;
            topPts.push([x, center - hSpan * 1.25]);
            botPts.push([x, center + hSpan * 0.75]);
          }
          ctx.beginPath();
          ctx.moveTo(topPts[0][0], topPts[0][1]);
          for (let i = 1; i <= segs; i++) ctx.lineTo(topPts[i][0], topPts[i][1]);
          for (let i = segs; i >= 0; i--) ctx.lineTo(botPts[i][0], botPts[i][1]);
          ctx.closePath();

          const g = ctx.createLinearGradient(0, info.horizonY * (b.yMid - b.halfH * 1.35), 0, info.horizonY * (b.yMid + b.halfH * 0.9));
          const peakA = a * b.op;
          g.addColorStop(0.0, `rgba(${b.col[0]},${b.col[1]},${b.col[2]},0)`);
          g.addColorStop(0.45, `rgba(${b.col[0]},${b.col[1]},${b.col[2]},${(peakA * 0.65).toFixed(3)})`);
          g.addColorStop(0.76, `rgba(${b.col[0]},${b.col[1]},${b.col[2]},${peakA.toFixed(3)})`);
          g.addColorStop(1.0, `rgba(${b.col[0]},${b.col[1]},${b.col[2]},0)`);
          ctx.fillStyle = g;
          ctx.fill();

          const rimGrad = ctx.createLinearGradient(xStart, 0, xEnd, 0);
          rimGrad.addColorStop(0.0, `rgba(${b.col[0]},${b.col[1]},${b.col[2]},0)`);
          rimGrad.addColorStop(0.35, `rgba(${b.col[0]},${b.col[1]},${b.col[2]},${(peakA * 0.95).toFixed(3)})`);
          rimGrad.addColorStop(0.75, `rgba(${b.col[0]},${b.col[1]},${b.col[2]},${(peakA * 0.85).toFixed(3)})`);
          rimGrad.addColorStop(1.0, `rgba(${b.col[0]},${b.col[1]},${b.col[2]},0)`);
          ctx.beginPath();
          for (let i = 0; i <= segs; i++) {
            const yRim = lerp(topPts[i][1], botPts[i][1], 0.76);
            if (i === 0) ctx.moveTo(topPts[i][0], yRim);
            else ctx.lineTo(topPts[i][0], yRim);
          }
          ctx.strokeStyle = rimGrad;
          ctx.lineWidth = 1.4;
          ctx.stroke();
        }
        ctx.restore();
      }

      if (state.dawnBloom > 0.01 && info.tv < 0.6) {
        const da = state.dawnBloom * (1 - info.tv);
        const gx = info.W * 0.805 + info.px * 7.2;
        const gy = info.horizonY - 12;
        const len = Math.min(info.W * 0.45, 360);
        ctx.save();
        for (let i = 0; i < 5; i++) {
          const ang = -Math.PI * (0.18 + i * 0.16);
          const grad = ctx.createLinearGradient(gx, gy, gx + Math.cos(ang) * len, gy + Math.sin(ang) * len);
          grad.addColorStop(0, `rgba(248, 224, 174, ${(0.24 * da).toFixed(3)})`);
          grad.addColorStop(1, 'rgba(248, 224, 174, 0)');
          ctx.strokeStyle = grad;
          ctx.lineWidth = 22 + i * 4;
          ctx.beginPath();
          ctx.moveTo(gx, gy);
          ctx.lineTo(gx + Math.cos(ang) * len, gy + Math.sin(ang) * len);
          ctx.stroke();
        }
        ctx.restore();
      }
    }

    function drawCoastOverlays(ctx, info) {
      const { t, tv, W, horizonY, ridgeH, px } = info;
      const { ink, hi } = getPalette(tv);

      if (state.birds.length) {
        ctx.strokeStyle = mixRGB([34, 62, 82], [182, 214, 236], tv, 0.72);
        ctx.lineWidth = 1.1;
        ctx.beginPath();
        for (let i = 0; i < state.birds.length; i++) {
          const b = state.birds[i];
          const wing = Math.sin(t * 7.5 + b.phase) * 3.4;
          ctx.moveTo(b.x - 6, b.y + wing);
          ctx.quadraticCurveTo(b.x - 2, b.y - 2.5, b.x, b.y);
          ctx.quadraticCurveTo(b.x + 2, b.y - 2.5, b.x + 6, b.y + wing);
        }
        ctx.stroke();
      }

      const gAge = t - state.guishanRingT;
      if (gAge > 0 && gAge < 2.4) {
        const gb = getGuishanBounds(info);
        const prog = gAge / 2.4;
        ctx.strokeStyle = `rgba(${hi[0]},${hi[1]},${hi[2]},${(0.55 * (1 - prog)).toFixed(3)})`;
        ctx.lineWidth = 1.1;
        ctx.beginPath();
        ctx.ellipse(gb.cx, horizonY - 12, 24 + prog * 110, 10 + prog * 44, 0, Math.PI, Math.PI * 2);
        ctx.stroke();
      }

      // Subtle desktop hover tell over Guishan Island
      const gb = getGuishanBounds(info);
      const overGuishan = !state.perception.active && state.mouseIn &&
        Math.abs(state.mouseX - gb.cx) < W * 0.085 &&
        state.mouseY > gb.peakY - 40 && state.mouseY < horizonY + 18;
      if (overGuishan) {
        if (!state.guishanHoverStart) state.guishanHoverStart = t;
        const dwell = t - state.guishanHoverStart;
        state.guishanTellAlpha = dwell > 0.7 ? Math.min(1, (dwell - 0.7) * 1.4) : 0;
      } else {
        state.guishanHoverStart = 0;
        state.guishanTellAlpha *= 0.86;
      }

      if (state.guishanTellAlpha > 0.02 && !state.perception.active) {
        const a = state.guishanTellAlpha * 0.42;
        const bw = W * 0.075;
        const x0 = gb.cx - bw;
        const y0 = gb.peakY - 8;
        ctx.strokeStyle = `rgba(${ink[0]},${ink[1]},${ink[2]},${a.toFixed(3)})`;
        ctx.lineWidth = 1;
        drawBrackets(ctx, x0, y0, x0 + bw * 2, y0, 8, false);
        ctx.fillStyle = `rgba(${ink[0]},${ink[1]},${ink[2]},${(a * 1.25).toFixed(3)})`;
        ctx.font = '10px "IBM Plex Mono", ui-monospace, monospace';
        ctx.fillText('z ≈ 12.4 km', x0, y0 - 6);
      }

      if (!state.perception.active) return;
      const ch = state.perception.channel;
      const ridges = [
        { pts: hero.QINGSHUI_NEAR.map(([u, v]) => [u * W + px * 9.5, horizonY + 3 - (0.81 - v) * ridgeH * 0.86]), label: '01:cliff · z=8.8km' },
        { pts: hero.GUISHAN.map(([u, v]) => [u * W + px * 7.2, horizonY + 3 - (0.81 - v) * ridgeH * 0.96]), label: '02:island · z=12.4km' }
      ];

      ctx.save();
      for (let ri = 0; ri < ridges.length; ri++) {
        const pts = ridges[ri].pts;
        if (ch === 1) {
          // Batched wireframe struts + highlight ping vertices
          ctx.strokeStyle = `rgba(${ink[0]},${ink[1]},${ink[2]},0.28)`;
          ctx.lineWidth = 0.75;
          ctx.beginPath();
          for (let i = 0; i < pts.length; i += 3) {
            const [x, y] = pts[i];
            ctx.moveTo(x, y);
            ctx.lineTo(x, horizonY + 2);
            if (i + 3 < pts.length) ctx.lineTo(pts[i + 3][0], pts[i + 3][1]);
          }
          ctx.stroke();
          if (state.perception.pings.length) {
            ctx.fillStyle = `rgba(${hi[0]},${hi[1]},${hi[2]},0.85)`;
            for (let i = 0; i < pts.length; i += 3) {
              if (pingEnergyAt(pts[i][0], pts[i][1], t) > 0.22) ctx.fillRect(pts[i][0] - 1.5, pts[i][1] - 1.5, 3, 3);
            }
          }
        } else if (ch === 3) {
          ctx.strokeStyle = `rgba(${ink[0]},${ink[1]},${ink[2]},0.38)`;
          ctx.lineWidth = 0.8;
          ctx.beginPath();
          for (let i = 2; i < pts.length - 2; i += 3) {
            const dx = pts[i + 1][0] - pts[i - 1][0];
            const dy = pts[i + 1][1] - pts[i - 1][1];
            const len = Math.hypot(dx, dy) || 1;
            ctx.moveTo(pts[i][0], pts[i][1]);
            ctx.lineTo(pts[i][0] + (dy / len) * 12, pts[i][1] - (dx / len) * 12);
          }
          ctx.stroke();
        } else if (ch === 4) {
          ctx.strokeStyle = `rgba(${hi[0]},${hi[1]},${hi[2]},0.55)`;
          ctx.lineWidth = 1;
          ctx.setLineDash([4, 3]);
          ctx.beginPath();
          for (let i = 0; i < pts.length; i++) {
            if (i === 0) ctx.moveTo(pts[i][0], pts[i][1]);
            else ctx.lineTo(pts[i][0], pts[i][1]);
          }
          ctx.stroke();
          ctx.setLineDash([]);
          const peak = pts.reduce((best, p) => (p[1] < best[1] ? p : best), pts[0]);
          ctx.fillStyle = `rgba(${ink[0]},${ink[1]},${ink[2]},0.82)`;
          ctx.font = '10px "IBM Plex Mono", ui-monospace, monospace';
          ctx.fillText(ridges[ri].label, Math.min(W - 135, Math.max(16, peak[0] - 24)), peak[1] - 9);
        }
      }

      if (ch === 2) {
        ctx.strokeStyle = `rgba(${ink[0]},${ink[1]},${ink[2]},0.30)`;
        ctx.setLineDash([3, 5]);
        ctx.beginPath();
        ctx.moveTo(0, horizonY);
        ctx.lineTo(W, horizonY);
        ctx.stroke();
        ctx.setLineDash([]);
        ctx.fillStyle = `rgba(${ink[0]},${ink[1]},${ink[2]},0.72)`;
        ctx.font = '10px "IBM Plex Mono", ui-monospace, monospace';
        ctx.fillText('z = 12.4 km', W - 92, horizonY - 6);
      } else if (ch === 4) {
        ctx.strokeStyle = `rgba(${hi[0]},${hi[1]},${hi[2]},0.52)`;
        ctx.lineWidth = 1;
        drawBrackets(ctx, 24, 68, W - 24, 68, 10, false);
        ctx.fillStyle = `rgba(${ink[0]},${ink[1]},${ink[2]},0.65)`;
        ctx.font = '10px "IBM Plex Mono", ui-monospace, monospace';
        ctx.fillText('00:sky', 38, 76);
      }
      ctx.restore();
    }

    function drawStoneAndEntitiesOnLayer(ctx, li, ptsX, ptsY, ptsLen, baseY, info) {
      const { t, tv, W, H } = info;
      const { ink, hi } = getPalette(tv);

      // Aurora shimmering reflection on Dark ocean waves (batched!)
      const aa = state.auroraAlpha * Math.max(0, (tv - 0.15) / 0.85);
      if (aa > 0.02 && li < 4) {
        ctx.strokeStyle = `rgba(116, 198, 192, ${(aa * (0.24 - li * 0.035)).toFixed(3)})`;
        ctx.lineWidth = 0.9 + li * 0.12;
        ctx.beginPath();
        for (let i = 2; i < ptsLen - 2; i += 3) {
          const x = ptsX[i];
          if (x < W * 0.18) continue;
          const u = (x - W * 0.18) / (W * 0.82);
          const env = Math.sin(Math.max(0, Math.min(1, u)) * Math.PI);
          if (env * (0.5 + 0.5 * Math.sin(x * 0.08 + t * (1.2 + li * 0.25) + li * 1.7)) < 0.25) continue;
          const len = 6 + env * 12;
          const y = ptsY[i] + 4 + li * 1.5;
          ctx.moveTo(x - len * 0.5, y);
          ctx.lineTo(x + len * 0.5, y);
        }
        ctx.stroke();
      }

      // Batched 3D Perception wave overlays
      if (state.perception.active && li < 4) {
        const ch = state.perception.channel;
        const zLabels = ['3.2 km', '1.4 km', '0.5 km', '0.1 km'];
        const hasPings = state.perception.pings.length > 0;

        if (ch === 1) {
          const stride = 5;
          const drop = 16 + li * 6;
          ctx.strokeStyle = `rgba(${ink[0]},${ink[1]},${ink[2]},0.20)`;
          ctx.lineWidth = 0.7;
          ctx.beginPath();
          for (let i = 0; i < ptsLen - stride; i += stride) {
            ctx.moveTo(ptsX[i], ptsY[i]);
            ctx.lineTo(ptsX[i], ptsY[i] + drop);
            ctx.lineTo(ptsX[i + stride], ptsY[i + stride]);
          }
          ctx.stroke();
          if (hasPings) {
            ctx.fillStyle = `rgba(${hi[0]},${hi[1]},${hi[2]},0.85)`;
            for (let i = 0; i < ptsLen - stride; i += stride) {
              if (pingEnergyAt(ptsX[i], ptsY[i], t) > 0.25) ctx.fillRect(ptsX[i] - 1.5, ptsY[i] - 1.5, 3, 3);
            }
          }
        } else if (ch === 2) {
          const nearT = li / 3;
          ctx.beginPath();
          ctx.moveTo(ptsX[0], H + 4);
          for (let i = 0; i < ptsLen; i++) ctx.lineTo(ptsX[i], ptsY[i]);
          ctx.lineTo(ptsX[ptsLen - 1], H + 4);
          ctx.closePath();
          ctx.fillStyle = `rgba(${ink[0]},${ink[1]},${ink[2]},${(0.03 + nearT * 0.12).toFixed(3)})`;
          ctx.fill();

          ctx.strokeStyle = `rgba(${ink[0]},${ink[1]},${ink[2]},${(0.28 + nearT * 0.44).toFixed(3)})`;
          ctx.lineWidth = 1.0 + nearT * 0.65;
          strokeTypedLine(ctx, ptsX, ptsY, ptsLen);
          ctx.fillStyle = li >= 2 ? 'rgba(244, 241, 234, 0.88)' : `rgba(${ink[0]},${ink[1]},${ink[2]},0.86)`;
          ctx.font = '9.5px "IBM Plex Mono", ui-monospace, monospace';
          ctx.fillText(`z = ${zLabels[li]}`, 18, baseY - 4);
        } else if (ch === 3) {
          // Analytic wave normals computed directly from adjacent ptsX/ptsY (zero extra waveY calls!)
          const stride = 6;
          ctx.lineWidth = 0.78;
          ctx.strokeStyle = `rgba(${ink[0]},${ink[1]},${ink[2]},${(0.28 + li * 0.07).toFixed(3)})`;
          ctx.beginPath();
          const hiSegs = hasPings ? [] : null;
          for (let i = stride; i < ptsLen - stride; i += stride) {
            const dx = ptsX[i + 1] - ptsX[i - 1] || 1;
            const slope = (ptsY[i + 1] - ptsY[i - 1]) / dx;
            const inv = 1 / Math.hypot(1, slope);
            const nx = slope * inv;
            const ny = -inv;
            const x = ptsX[i];
            const y = ptsY[i];
            const e = hasPings ? pingEnergyAt(x, y, t) : 0;
            const len = 10 + Math.min(10, Math.abs(slope) * 18) + e * 9;
            if (e > 0.28) {
              hiSegs.push(x, y, x + nx * len, y + ny * len);
            } else {
              ctx.moveTo(x, y);
              ctx.lineTo(x + nx * len, y + ny * len);
            }
          }
          ctx.stroke();
          if (hiSegs && hiSegs.length) {
            ctx.strokeStyle = `rgba(${hi[0]},${hi[1]},${hi[2]},0.82)`;
            ctx.beginPath();
            for (let i = 0; i < hiSegs.length; i += 4) {
              ctx.moveTo(hiSegs[i], hiSegs[i + 1]);
              ctx.lineTo(hiSegs[i + 2], hiSegs[i + 3]);
            }
            ctx.stroke();
          }
        } else if (ch === 4) {
          ctx.strokeStyle = li === 3 ? `rgba(${hi[0]},${hi[1]},${hi[2]},0.55)` : `rgba(${ink[0]},${ink[1]},${ink[2]},0.35)`;
          ctx.lineWidth = 0.85;
          ctx.setLineDash([5, 4]);
          strokeTypedLine(ctx, ptsX, ptsY, ptsLen);
          ctx.setLineDash([]);
          if (li === 1 || li === 3) {
            ctx.fillStyle = li >= 2 ? 'rgba(244, 241, 234, 0.88)' : `rgba(${ink[0]},${ink[1]},${ink[2]},0.84)`;
            ctx.font = '9.5px "IBM Plex Mono", ui-monospace, monospace';
            ctx.fillText(li === 1 ? '03:swell[far]' : '04:swell[near] · foam', 18, baseY + 11);
          }
        }
      }

      // Splash rings (zero save/restore overhead)
      for (let i = 0; i < state.rings.length; i++) {
        const r = state.rings[i];
        if (r.layer !== li) continue;
        const p = r.life / r.maxLife;
        const rx = Math.max(1, lerp(4, r.maxRx, p));
        ctx.strokeStyle = r.accent
          ? `rgba(${hi[0]},${hi[1]},${hi[2]},${(0.72 * (1 - p)).toFixed(3)})`
          : mixRGB([248, 246, 239], [198, 224, 244], tv, (0.75 * (1 - p)).toFixed(3));
        ctx.lineWidth = r.accent ? 1.3 : 1.0;
        ctx.beginPath();
        ctx.ellipse(r.x, r.y, rx, rx * 0.28, 0, 0, Math.PI * 2);
        ctx.stroke();
      }

      // Breaching marine creatures (2.5D wave occlusion)
      for (let i = 0; i < state.creatures.length; i++) {
        const c = state.creatures[i];
        if (c.layer !== li) continue;
        ctx.save();
        ctx.translate(c.x, c.y);
        ctx.rotate(Math.atan2(c.vy, c.vx));
        ctx.scale(c.scale, c.scale);
        ctx.fillStyle = mixRGB([26, 56, 78], [170, 206, 230], tv, 0.92);
        if (c.kind === 'dolphin') {
          ctx.beginPath();
          ctx.moveTo(18, 0);
          ctx.quadraticCurveTo(6, -8, -10, -4);
          ctx.quadraticCurveTo(-18, -2, -24, -7);
          ctx.lineTo(-20, 0);
          ctx.lineTo(-24, 6);
          ctx.quadraticCurveTo(-14, 3, -4, 4);
          ctx.quadraticCurveTo(8, 5, 18, 0);
          ctx.closePath();
          ctx.fill();
          ctx.beginPath();
          ctx.moveTo(-2, -6);
          ctx.quadraticCurveTo(-6, -13, -9, -5);
          ctx.closePath();
          ctx.fill();
        } else {
          ctx.beginPath();
          ctx.moveTo(12, 0);
          ctx.quadraticCurveTo(2, -4, -11, -1);
          ctx.lineTo(-14, -4);
          ctx.lineTo(-12, 0);
          ctx.lineTo(-14, 4);
          ctx.lineTo(-10, 2);
          ctx.quadraticCurveTo(2, 3, 12, 0);
          ctx.closePath();
          ctx.fill();
          ctx.strokeStyle = mixRGB([248, 246, 239], [208, 232, 248], tv, 0.78);
          ctx.lineWidth = 1.2;
          ctx.beginPath();
          ctx.moveTo(3, -1);
          ctx.quadraticCurveTo(-4, -10, -10, -7);
          ctx.stroke();
        }
        ctx.restore();
      }

      // Active skipping stone on its exact depth layer
      const st = state.stone;
      if (st && st.layer === li) {
        const depthScale = lerp(0.56, 1.0, st.layer / 3);
        const alpha = st.isAmbient
          ? (st.sinking ? Math.max(0, 0.45 * (1 - st.sinkDepth / 34)) : 0.48)
          : (st.sinking ? Math.max(0, 1 - st.sinkDepth / 34) : 1.0);

        if (st.trail.length > 1 && !st.sinking) {
          for (let i = 1; i < st.trail.length; i++) {
            const frac = i / st.trail.length;
            ctx.strokeStyle = st.skips >= 4
              ? `rgba(${hi[0]},${hi[1]},${hi[2]},${(frac * 0.45 * alpha).toFixed(3)})`
              : `rgba(${ink[0]},${ink[1]},${ink[2]},${(frac * 0.35 * alpha).toFixed(3)})`;
            ctx.lineWidth = (st.skips >= 4 ? 2.1 : 1.3) * frac * depthScale;
            ctx.beginPath();
            ctx.moveTo(st.trail[i - 1][0], st.trail[i - 1][1]);
            ctx.lineTo(st.trail[i][0], st.trail[i][1]);
            ctx.stroke();
          }
        }

        ctx.save();
        ctx.translate(st.x, st.y + (st.sinking ? st.sinkDepth : 0));
        ctx.rotate(st.sinking ? st.rot * 0.3 : Math.sin(st.rot) * 0.25);
        ctx.scale(depthScale, depthScale);
        ctx.globalAlpha = alpha;
        ctx.fillStyle = mixRGB([22, 34, 46], [224, 236, 246], tv);
        ctx.beginPath();
        ctx.ellipse(0, 0, 6.5, 2.7, 0, 0, Math.PI * 2);
        ctx.fill();
        ctx.strokeStyle = mixRGB([244, 241, 234], [24, 42, 60], tv, 0.72);
        ctx.lineWidth = 0.8;
        ctx.stroke();
        ctx.restore();
      }

      // Splash droplets & sink bubbles (zero save/restore overhead)
      for (let i = 0; i < state.particles.length; i++) {
        const p = state.particles[i];
        if (p.layer !== li) continue;
        const a = Math.max(0, 1 - p.life / p.maxLife);
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
        if (p.bubble) {
          ctx.strokeStyle = mixRGB([244, 241, 234], [186, 218, 238], tv, (a * 0.65).toFixed(3));
          ctx.lineWidth = 0.8;
          ctx.stroke();
        } else {
          ctx.fillStyle = p.accent
            ? `rgba(${hi[0]},${hi[1]},${hi[2]},${(a * 0.9).toFixed(3)})`
            : mixRGB([248, 246, 239], [198, 224, 244], tv, (a * 0.85).toFixed(3));
          ctx.fill();
        }
      }
    }

    function computeCurrentAim(hs) {
      const mobile = hs.W < 640;
      if (state.drag && state.drag.moved) {
        const dx = state.drag.curX - state.drag.startX;
        const dy = state.drag.curY - state.drag.startY;
        if (Math.hypot(dx, dy) < 16) return null;
        const isPullBack = dx < -10;
        const minVx = mobile ? 145 : 190;
        const maxVx = mobile ? Math.min(265, hs.W * 0.68) : Math.min(480, Math.max(300, hs.W * 0.36));
        const gain = mobile ? 1.8 : 2.7;
        const vx = Math.min(maxVx, Math.abs(dx) * gain + minVx);
        const vy = isPullBack
          ? Math.max(mobile ? -135 : -165, Math.min(-48, -dy * 1.4 - (mobile ? 68 : 78)))
          : Math.max(mobile ? -135 : -165, Math.min(-48, dy * 1.1 - (mobile ? 74 : 86)));
        return { x: state.drag.startX, y: Math.min(state.drag.startY, hero.sampleWaveY(3, state.drag.startX, hs.t) - 16), vx, vy };
      }
      if (state.spaceHold) {
        const held = Math.min(1.15, Math.max(0, hero.getNow() - state.spaceHold.t0));
        const p = 0.25 + 0.75 * Math.sin((held / 1.15) * Math.PI * 0.5);
        const sx = hs.W * 0.14;
        return { x: sx, y: hero.sampleWaveY(3, sx, hs.t) - 22, vx: lerp(215, Math.min(460, hs.W * 0.36), p), vy: lerp(-74, -145, p) };
      }
      return null;
    }

    function drawForegroundOverlays(ctx, info) {
      const { t, tv, W, H, horizonY } = info;
      const { ink, hi } = getPalette(tv);

      // Stone-in-hand + dotted aim arc
      const aim = computeCurrentAim(info);
      if (aim) {
        ctx.save();
        ctx.fillStyle = mixRGB([22, 34, 46], [224, 236, 246], tv);
        ctx.beginPath();
        ctx.ellipse(aim.x, aim.y, 6.5, 2.7, -0.14, 0, Math.PI * 2);
        ctx.fill();
        ctx.strokeStyle = mixRGB([244, 241, 234], [24, 42, 60], tv, 0.78);
        ctx.lineWidth = 0.85;
        ctx.stroke();

        ctx.fillStyle = `rgba(${ink[0]},${ink[1]},${ink[2]},0.78)`;
        for (let i = 1; i <= 7; i++) {
          const dtA = i * 0.042;
          ctx.globalAlpha = lerp(0.85, 0.18, i / 7);
          ctx.beginPath();
          ctx.arc(aim.x + aim.vx * dtA, aim.y + aim.vy * dtA + 0.5 * 480 * dtA * dtA, lerp(2.6, 1.1, i / 7), 0, Math.PI * 2);
          ctx.fill();
        }
        ctx.restore();
      }

      if (!state.perception.active) return;

      // Expanding 3D LiDAR wavefront circles
      const pings = state.perception.pings;
      ctx.lineWidth = 1.1;
      for (let i = 0; i < pings.length; i++) {
        const age = t - pings[i].t0;
        if (age <= 0 || age > 2.6) continue;
        ctx.strokeStyle = `rgba(${ink[0]},${ink[1]},${ink[2]},${(0.48 * Math.exp(-age * 1.15)).toFixed(3)})`;
        ctx.beginPath();
        ctx.arc(pings[i].x, pings[i].y, Math.max(1, age * 440), 0, Math.PI * 2);
        ctx.stroke();
      }

      // Live cursor depth probe (clamped clear of sticky header & right edge)
      if (state.mouseIn && state.mouseY > 56 && state.mouseY < H - 14) {
        const relY = (state.mouseY - horizonY) / Math.max(1, H - horizonY);
        const zStr = relY < 0 ? 'z = ∞ (sky)' : `z = ${(Math.max(0.05, 12.4 * Math.exp(-relY * 4.2))).toFixed(2)} km`;
        ctx.strokeStyle = `rgba(${ink[0]},${ink[1]},${ink[2]},0.45)`;
        ctx.lineWidth = 0.8;
        ctx.beginPath();
        ctx.moveTo(state.mouseX - 7, state.mouseY); ctx.lineTo(state.mouseX + 7, state.mouseY);
        ctx.moveTo(state.mouseX, state.mouseY - 7); ctx.lineTo(state.mouseX, state.mouseY + 7);
        ctx.stroke();
        ctx.fillStyle = `rgba(${ink[0]},${ink[1]},${ink[2]},0.78)`;
        ctx.font = '10px "IBM Plex Mono", ui-monospace, monospace';
        ctx.fillText(zStr, state.mouseX > W - 120 ? state.mouseX - 96 : state.mouseX + 10, Math.max(74, state.mouseY - 8));
      }

      // 2D Kalman Tracker lock-on
      const k = state.perception.kalman;
      if (k) {
        ctx.save();
        ctx.strokeStyle = `rgba(${hi[0]},${hi[1]},${hi[2]},0.65)`;
        ctx.lineWidth = 1;
        ctx.setLineDash([3, 4]);
        ctx.beginPath();
        for (let i = 0; i <= 12; i++) {
          const dtP = i * 0.045;
          const px = k.x + k.vx * dtP;
          const py = k.y + k.vy * dtP + 0.5 * 480 * dtP * dtP;
          if (i === 0) ctx.moveTo(px, py);
          else ctx.lineTo(px, py);
        }
        ctx.stroke();
        ctx.setLineDash([]);

        const box = 16;
        ctx.strokeStyle = `rgba(${hi[0]},${hi[1]},${hi[2]},0.9)`;
        ctx.lineWidth = 1.1;
        drawBrackets(ctx, k.x - box, k.y - box, k.x + box, k.y + box, 5, true);

        ctx.fillStyle = `rgba(${hi[0]},${hi[1]},${hi[2]},0.95)`;
        const pts5 = [[-7, -1], [-3, -3], [0, 0], [4, -2], [8, 0]];
        for (let i = 0; i < 5; i++) ctx.fillRect(k.x + pts5[i][0] - 1, k.y + pts5[i][1] - 1, 2, 2);

        const spd = (Math.hypot(k.vx, k.vy) * 0.018).toFixed(1);
        ctx.font = '9.5px "IBM Plex Mono", ui-monospace, monospace';
        ctx.fillText(`trk:01 · ${spd}m/s`, Math.min(W - 112, Math.max(8, k.x + box + 5)), Math.max(74, k.y - box + 6));
        ctx.restore();
      }
    }

    hero.hooks.beforeRender = stepPhysics;
    hero.hooks.afterSky = drawAuroraSky;
    hero.hooks.afterCoast = drawCoastOverlays;
    hero.hooks.afterWaveLayer = drawStoneAndEntitiesOnLayer;
    hero.hooks.afterScene = drawForegroundOverlays;

    /* ======================================================================
       7. INPUT & DISCOVERY TRIGGERS (Desktop + Mobile Touch Ergonomics)
       ====================================================================== */
    let longPressTimer = null;
    function clearLongPress() {
      if (longPressTimer) { clearTimeout(longPressTimer); longPressTimer = null; }
    }

    function updateDragFromEvent(e) {
      if (!state.drag) return;
      const r = hero.getRect();
      state.drag.curX = e.clientX - r.left;
      state.drag.curY = e.clientY - r.top;
      const dx = state.drag.curX - state.drag.startX;
      const dy = state.drag.curY - state.drag.startY;
      if (Math.hypot(dx, dy) > 10) clearLongPress();
      if (e.pointerType === 'touch' && Math.abs(dy) > Math.abs(dx) * 1.45 && Math.abs(dy) > 14) {
        state.drag = null;
        return;
      }
      if (Math.hypot(dx, dy) > 14) state.drag.moved = true;
    }

    stage.addEventListener('pointermove', (e) => {
      const r = hero.getRect();
      state.mouseX = e.clientX - r.left;
      state.mouseY = e.clientY - r.top;
      state.mouseIn = e.pointerType !== 'touch';
    });

    // Track drag globally on window so pulling past hero edge never aborts your aim!
    window.addEventListener('pointermove', updateDragFromEvent, { passive: true });

    stage.addEventListener('pointerleave', () => {
      state.mouseIn = false;
      clearLongPress();
    });

    window.addEventListener('pointercancel', () => {
      state.drag = null;
      clearLongPress();
    });

    window.addEventListener('blur', () => {
      state.drag = null;
      state.spaceHold = null;
      clearLongPress();
    });

    window.addEventListener('resize', () => {
      state.drag = null;
    }, { passive: true });

    stage.addEventListener('pointerdown', (e) => {
      if (e.pointerType === 'mouse' && e.button !== 0) return;
      if (e.target && e.target.closest && e.target.closest('a, button, .coast-hud')) return;
      Audio.unlock();

      const inHeroText = Boolean(e.target && e.target.closest && e.target.closest('.hero-content'));
      const isTouch = e.pointerType === 'touch';
      const r = hero.getRect();
      const x = e.clientX - r.left;
      const y = e.clientY - r.top;
      const rx = x / Math.max(1, r.width);
      const ry = y / Math.max(1, r.height);
      const t = hero.getNow();
      const hs = hero.getState();

      // 1. Guishan Island -> Double-tap / hover-click / mobile long-press toggles 3D Perception Mode
      const gb = getGuishanBounds(hs);
      const gHalfW = isTouch ? Math.max(54, hs.W * 0.14) : hs.W * 0.085;
      const hitGuishan = Math.abs(x - gb.cx) < gHalfW && y > gb.peakY - (isTouch ? 44 : 36) && y < hs.horizonY + (isTouch ? 34 : 18);
      if (hitGuishan) {
        state.guishanClicks.push(t);
        state.guishanClicks = state.guishanClicks.filter((ts) => t - ts < 1.8);
        if (state.guishanTellAlpha > 0.15 || state.guishanClicks.length >= 2) {
          state.guishanClicks.length = 0;
          clearLongPress();
          haptic(14);
          setPerceptionActive(!state.perception.active, x, y);
          return;
        }
        if (isTouch) {
          clearLongPress();
          longPressTimer = setTimeout(() => {
            longPressTimer = null;
            state.drag = null;
            haptic(16);
            setPerceptionActive(!state.perception.active, x, y);
          }, 420);
        }
      }

      // 2. LiDAR ping when 3D Perception Mode is active
      if (state.perception.active && !(state.stone && !state.stone.isAmbient && !state.stone.sinking)) {
        emitPing(x, y);
        Audio.sonarPing();
      }

      // 3. Crest-Kiss Boost if a stone is already airborne
      if (!reducedMotion && state.stone && !state.stone.isAmbient && !state.stone.sinking && ry > 0.42) {
        state.tapBoostUntil = t + (isTouch ? 0.24 : 0.19);
        haptic(8);
        return;
      }

      // 4. Open waterline drag-flick OR 3-tap Qingshui shore launch (never blocks hero text selection!)
      if (!reducedMotion && ry > 0.46 && !inHeroText) {
        if (!isTouch) e.preventDefault();
        state.drag = { startX: x, startY: y, curX: x, curY: y, moved: false };
        if (rx < (isTouch ? 0.42 : 0.32)) {
          state.cliffClicks.push(t);
          state.cliffClicks = state.cliffClicks.filter((ts) => t - ts < 3.0);
          if (state.cliffClicks.length >= 3) {
            state.cliffClicks.length = 0;
            clearLongPress();
            haptic(10);
            launchStone(x, hero.sampleWaveY(3, x, t) - 20, Math.min(440, Math.max(210, hs.W * 0.54)), -110, { layer: 3 });
            state.drag = null;
          }
        }
      }
    });

    window.addEventListener('pointerup', () => {
      clearLongPress();
      if (!state.drag) return;
      const hs = hero.getState();
      const aim = computeCurrentAim({ ...hs, t: hero.getNow() });
      state.drag = null;
      if (aim) {
        haptic(10);
        launchStone(aim.x, aim.y, aim.vx, aim.vy, { layer: 3 });
      }
    });

    // Triple-click Taipei clock (Desktop) -> 3D Perception Mode
    const clockEl = document.getElementById('taipei-clock');
    if (clockEl) {
      let clockClicks = [];
      clockEl.style.cursor = 'pointer';
      clockEl.addEventListener('click', () => {
        Audio.unlock();
        const now = performance.now();
        clockClicks.push(now);
        clockClicks = clockClicks.filter((ts) => now - ts < 900);
        if (clockClicks.length >= 3) {
          clockClicks.length = 0;
          setPerceptionActive(!state.perception.active);
        }
      });
    }

    // Long-press brand name (Mobile + Desktop) -> 3D Perception Mode (delegated so it survives #site-header remount)
    {
      let brandHold = null;
      let brandStart = null;
      let suppressBrandClick = false;
      const cancelBrand = () => { if (brandHold) { clearTimeout(brandHold); brandHold = null; } brandStart = null; };
      const isBrand = (t) => Boolean(t && t.closest && t.closest('#brand-name'));

      document.addEventListener('pointerdown', (e) => {
        if (!isBrand(e.target)) return;
        if (e.pointerType === 'mouse' && e.button !== 0) return;
        Audio.unlock();
        suppressBrandClick = false;
        brandStart = [e.clientX, e.clientY];
        brandHold = setTimeout(() => {
          brandHold = null;
          suppressBrandClick = true;
          haptic(16);
          setPerceptionActive(!state.perception.active);
        }, 480);
      });
      document.addEventListener('pointermove', (e) => {
        if (brandStart && Math.hypot(e.clientX - brandStart[0], e.clientY - brandStart[1]) > 8) cancelBrand();
      }, { passive: true });
      ['pointerup', 'pointercancel'].forEach((ev) => document.addEventListener(ev, cancelBrand));
      document.addEventListener('contextmenu', (e) => { if (isBrand(e.target) && (brandHold || suppressBrandClick)) e.preventDefault(); });
      document.addEventListener('click', (e) => {
        if (isBrand(e.target) && suppressBrandClick) {
          suppressBrandClick = false;
          e.preventDefault();
        }
      });
    }

    // 5× rapid theme toggle -> Unfurl Aurora (Dark) or Dawn Rays + Birds (Light) (delegated)
    document.addEventListener('click', (e) => {
      if (!e.target || !e.target.closest || !e.target.closest('#btn-theme')) return;
      Audio.unlock();
      const now = performance.now();
      state.themeClicks.push(now);
      state.themeClicks = state.themeClicks.filter((ts) => now - ts < 2800);
      if (state.themeClicks.length >= 5) {
        state.themeClicks.length = 0;
        haptic(18);
        Audio.guishanChord();
        if (core.getTheme() === 'dark') {
          state.auroraTarget = state.auroraTarget > 0.5 ? 0 : 1;
        } else {
          const hs = hero.getState();
          state.dawnBloom = 1;
          spawnBirds(hs.W, hs.horizonY);
        }
        hero.ensureRunning();
      }
    });

    // Keyboard: D (Perception), 1-4 (Channels), S (Launch skip), Space (active-game boost/rethrow without hijacking normal scroll), Esc, Konami
    const KONAMI = ['ArrowUp', 'ArrowUp', 'ArrowDown', 'ArrowDown', 'ArrowLeft', 'ArrowRight', 'ArrowLeft', 'ArrowRight', 'b', 'a'];
    let konamiIdx = 0;
    const isEditable = (el) => el && (['INPUT', 'TEXTAREA', 'SELECT'].includes((el.tagName || '').toUpperCase()) || el.isContentEditable);

    window.addEventListener('keydown', (e) => {
      if (e.metaKey || e.ctrlKey || e.altKey || isEditable(document.activeElement)) return;
      Audio.unlock();

      const expected = KONAMI[konamiIdx];
      if (e.key === expected || e.key.toLowerCase() === expected) {
        konamiIdx += 1;
        if (konamiIdx === KONAMI.length) {
          konamiIdx = 0;
          state.auroraTarget = 1;
          setPerceptionActive(true);
          Audio.guishanChord();
        }
      } else {
        konamiIdx = e.key === KONAMI[0] ? 1 : 0;
      }

      if (e.key === 'Escape') {
        if (state.perception.active) setPerceptionActive(false);
        state.stone = null;
        state.drag = null;
        state.spaceHold = null;
        state.auroraTarget = 0;
        if (state.skipHudVisible) {
          state.skipHudVisible = false;
          setBarOpen(skipBar, false);
        }
        hero.ensureRunning();
        return;
      }

      if (e.key === 'd' || e.key === 'D') {
        setPerceptionActive(!state.perception.active);
        return;
      }

      if (state.perception.active && ['1', '2', '3', '4'].includes(e.key)) {
        setPerceptionChannel(Number(e.key));
        const hs = hero.getState();
        emitPing(hs.W * 0.5, hs.horizonY + 35);
        Audio.sonarPing();
        return;
      }

      // S launches/charges a stone; Space ONLY boosts/rethrows once stone-skip is active (never hijacks normal Space scroll!)
      if (!reducedMotion && hero.getState().isVisible && document.activeElement === document.body) {
        const isS = e.key === 's' || e.key === 'S';
        const isActiveSpace = e.code === 'Space' && (state.skipHudVisible || (state.stone && !state.stone.isAmbient));
        if (isS || isActiveSpace) {
          e.preventDefault();
          if (e.repeat) return;
          const t = hero.getNow();
          if (state.stone && !state.stone.isAmbient && !state.stone.sinking) {
            state.tapBoostUntil = t + 0.19;
          } else if (!state.spaceHold) {
            state.spaceHold = { t0: t };
          }
        }
      }
    });

    window.addEventListener('keyup', (e) => {
      if ((e.code === 'Space' || e.key === 's' || e.key === 'S') && state.spaceHold) {
        const hs = hero.getState();
        const aim = computeCurrentAim({ ...hs, t: hero.getNow() });
        state.spaceHold = null;
        if (aim) launchStone(aim.x, aim.y, aim.vx, aim.vy, { layer: 3 });
      }
    });

    /* ======================================================================
       8. FOOTER RETURNING-TIDE BOATS (Cached Lantern Glow · Guishan Pennant)
       ====================================================================== */
    if (footer && footer.canvas) {
      const boats = [];
      let lanternGrad = null;

      footer.canvas.addEventListener('pointerdown', (e) => {
        if (e.pointerType === 'mouse' && e.button !== 0) return;
        Audio.unlock();
        const r = footer.getRect();
        const x = e.clientX - r.left;

        for (let i = 0; i < boats.length; i++) {
          if (Math.abs(boats[i].x - x) < 36) {
            boats[i].vx += boats[i].dir * 28;
            boats[i].bob = -6.5;
            haptic(8);
            Audio.boatDrop(i);
            footer.ensureRunning();
            return;
          }
        }

        if (boats.length >= 4) boats.shift();
        const dir = x > r.width * 0.62 ? -1 : 1;
        boats.push({ x, dir, vx: dir * (18 + Math.random() * 14), bob: -5, bobV: 0, scale: 0.85 + Math.random() * 0.25 });
        haptic(8);
        Audio.boatDrop(boats.length);
        footer.ensureRunning();
      });

      footer.hooks.afterWaveLayer = (ctx, i, fInfo) => {
        if (i !== 1 || !boats.length) return;
        const dt = fInfo.dt;
        const isDark = fInfo.tv > 0.5;
        if (isDark && !lanternGrad) {
          lanternGrad = ctx.createRadialGradient(5, -10, 0.5, 5, -10, 14);
          lanternGrad.addColorStop(0, 'rgba(246, 212, 138, 0.85)');
          lanternGrad.addColorStop(0.45, 'rgba(232, 184, 102, 0.28)');
          lanternGrad.addColorStop(1, 'rgba(232, 184, 102, 0)');
        }

        for (let bi = 0; bi < boats.length; bi++) {
          const b = boats[bi];
          if (!reducedMotion) {
            b.x += b.vx * dt;
            b.vx += (b.dir * 20 - b.vx) * Math.min(1, dt * 1.4);
            b.bobV += (-b.bob * 28 - b.bobV * 4.5) * dt;
            b.bob += b.bobV * dt;
            if (b.x > fInfo.W + 40) b.x = -36;
            if (b.x < -40) b.x = fInfo.W + 36;
          }

          const wy = footer.sampleWaveY(1, b.x, fInfo.t);
          const pitch = Math.atan(footer.sampleWaveSlope(1, b.x, fInfo.t)) * 0.85;

          ctx.save();
          ctx.translate(b.x, wy + b.bob - 1.5);
          ctx.rotate(pitch);
          ctx.scale(b.scale * b.dir, b.scale);

          ctx.strokeStyle = mixRGB([244, 241, 234], [186, 218, 238], fInfo.tv, 0.42);
          ctx.lineWidth = 0.85;
          ctx.beginPath();
          ctx.moveTo(-14, 1);
          ctx.lineTo(-28 - Math.sin(fInfo.t * 4 + bi) * 3, 2.5);
          ctx.stroke();

          if (!isDark) {
            ctx.fillStyle = '#f4f1ea';
            ctx.strokeStyle = '#1b4a68';
            ctx.lineWidth = 1.0;
            ctx.beginPath();
            ctx.moveTo(-14, -1); ctx.lineTo(14, -1); ctx.lineTo(9, 4); ctx.lineTo(-10, 4);
            ctx.closePath(); ctx.fill(); ctx.stroke();
            ctx.beginPath();
            ctx.moveTo(-6, -1); ctx.lineTo(0, -13); ctx.lineTo(7, -1);
            ctx.closePath(); ctx.fill(); ctx.stroke();
          } else {
            ctx.fillStyle = '#162738';
            ctx.strokeStyle = '#8cc0e0';
            ctx.lineWidth = 0.9;
            ctx.beginPath();
            ctx.moveTo(-15, -1); ctx.lineTo(16, -2.5); ctx.lineTo(10, 4); ctx.lineTo(-11, 4);
            ctx.closePath(); ctx.fill(); ctx.stroke();
            ctx.fillStyle = '#20374d';
            ctx.fillRect(-5, -6, 7, 5);
            ctx.beginPath(); ctx.moveTo(4, -2); ctx.lineTo(4, -12); ctx.stroke();
            ctx.fillStyle = lanternGrad;
            ctx.beginPath(); ctx.arc(5, -10, 14, 0, Math.PI * 2); ctx.fill();
            ctx.fillStyle = '#f8e2a8';
            ctx.beginPath(); ctx.arc(5, -10, 1.5, 0, Math.PI * 2); ctx.fill();
          }

          if (state.guishanReached) {
            ctx.fillStyle = isDark ? '#d8b97e' : '#b6452c';
            ctx.beginPath();
            ctx.moveTo(isDark ? 4 : 0, isDark ? -12 : -13);
            ctx.lineTo(isDark ? -4 : -7, isDark ? -10 : -11);
            ctx.lineTo(isDark ? 4 : 0, isDark ? -8 : -9);
            ctx.closePath();
            ctx.fill();
          }
          ctx.restore();
        }
      };
    }
  }

  if (window.__COAST_BRIDGE__ && window.__COAST_BRIDGE__.core) {
    boot();
  } else {
    window.addEventListener('coast:ready', boot, { once: true });
  }
})();
