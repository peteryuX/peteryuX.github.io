/* ==========================================================================
   Peter (Kuan-Yu) Huang — Coastal Depth-Field & Editorial Interaction Engine
   Authentic Prussian-Indigo Woodblock Pigments · 3D Depth-Calibrated Parallax ·
   Origin-Aware Ink View Transition · Fluid Bilingual & Copy-Email UX
   ========================================================================== */

(function () {
  'use strict';

  const I18N = {
    en: {
      htmlLang: 'en',
      pageTitle: 'Peter Huang — Computer Vision & 3D Perception',
      brandName: 'Peter Huang',
      navProjects: 'Projects',
      navExp: 'Experience',
      navResearch: 'Research',
      heroName: 'Peter Huang <span class="hero-name-sub">Kuan-Yu Huang</span>',
      heroLead: 'Computer vision & 3D perception.',
      heroBio: 'Currently working on Android XR at <a href="https://arvr.google.com/" target="_blank" rel="noopener noreferrer" class="text-link">Google</a>, previously at <a href="https://www.vive.com/us/" target="_blank" rel="noopener noreferrer" class="text-link">HTC VIVE</a> and Garena. A small index of projects, open-source work, and papers.',
      ctaCv: 'CV ↗',
      railLoc: 'Taipei',
      copyEmailShort: 'Copy Email',
      emailLabel: 'Email',
      copiedText: 'Copied · peter124574@gmail.com',
      copiedShort: 'Copied ✓',
      secProjects: 'Projects & Open Source',
      auroraBadge: 'Side Project',
      liveApp: 'Live App ↗',
      validation: 'Backtest',
      auroraDesc: 'Built during a trip to the Nordics after realizing aurora numbers aren\'t much help without knowing where the clouds clear. It combines NOAA space weather, MET Norway cloud layers, and aviation METAR reports, backtested against over ten years of records.',
      ossLabel: 'Open Source (2019–2020)',
      repoRetina: 'Single-stage face detection and 5-point landmarks in TensorFlow 2, with ResNet50 / MobileNetV2 support.',
      repoArc: 'TensorFlow 2 implementation of ArcFace (CVPR 2019) face recognition.',
      repoEsrgan: 'TensorFlow 2 implementation of ESRGAN (ECCV 2018) image super-resolution.',
      moreReposNote: 'More repos covering GHM-loss, PC-DARTS, and SNPE notes are on GitHub.',
      allReposLink: 'All on GitHub ↗',
      secExp: 'Experience',
      timeline: [
        {
          org: 'Google',
          badge: 'Current',
          current: true,
          role: 'Tech Lead Manager · Android XR Perception',
          detail: 'Working on Android XR on-device perception with teammates across the US and Europe, and leading a team in Taipei.',
          period: 'Feb 2025 — Present'
        },
        {
          org: 'HTC VIVE',
          role: 'Senior Assistant Manager & Tech Lead · XR Scene Understanding',
          detail: 'Worked on real-time depth estimation, semantic segmentation, and 3D room reconstruction for VIVE Focus Vision and XR Elite, and contributed to an indoor 3D capture rig and multi-user labeling system.',
          period: 'Nov 2022 — Feb 2025'
        },
        {
          org: 'Dcard',
          role: 'Senior Machine Learning Engineer · Post Recommendation',
          detail: 'Worked on feed ranking, NLP sentiment analysis, and anomaly detection.',
          period: 'Aug 2022 — Nov 2022'
        },
        {
          org: 'Garena | SEA (BOOYAH! Live)',
          role: 'Senior Data Scientist · Video Recommendation',
          detail: 'Collaborated with teams in Taipei and Singapore on live-video ranking models, data pipelines, A/B testing, and anomalous account detection.',
          period: 'Feb 2021 — Mar 2022'
        },
        {
          org: 'HTC VIVE',
          role: 'Engineer → Principal Engineer · VR/AR Computer Vision',
          detail: 'Worked on on-device hand, face, body, and 6-DoF controller tracking for VIVE Focus 3 and Cosmos, along with model quantization, synthetic data workflows, and a multi-camera motion capture setup.',
          period: 'Dec 2017 — Feb 2021'
        }
      ],
      eduLabel: 'Education',
      education: [
        { school: 'National Tsing Hua University', degree: 'M.S. in Electrical Engineering', period: '2015 — 2017' },
        { school: 'National Chung Cheng University', degree: 'B.S. in Electrical Engineering', period: '2011 — 2015' }
      ],
      secResearch: 'Research',
      research: [
        {
          venue: 'IEEE SAM 2020 · Conference Paper',
          title: 'Coupled Adversarial Net for Single Image Super-Resolution',
          authors: 'S.-Y. Su, <strong>K.-Y. Huang</strong>, C.-W. Lin',
          desc: 'Used a shared Siamese discriminator to compute both adversarial loss and semantic feature distance in single-image super-resolution, removing the need for a separate pretrained perceptual network.',
          links: [
            { label: 'IEEE Xplore ↗', url: 'https://ieeexplore.ieee.org/document/9104288', accent: true },
            { label: 'Slides ↗', url: 'https://drive.google.com/file/d/1vRl-KzjME1YsZ8MMoa1YzVe2M_aSxWBx/view?usp=sharing' }
          ]
        },
        {
          venue: '2017 · M.S. Thesis · NTHU',
          title: 'Pairwise Learning on Image Quality Assessment using Deep Siamese Neural Network',
          desc: 'Trained a deep Siamese network on pairwise comparisons for subjective image quality assessment, letting annotators compare two images rather than assign absolute scores.',
          links: [
            { label: 'Thesis PDF ↗', url: 'https://drive.google.com/file/d/1zC_vFjnTs9s74RT2SB_xEcDwKQv6sKQ_/view?usp=sharing', accent: true }
          ]
        }
      ],
      footerCopy: 'Peter Huang · Taipei',
      backTop: 'Top ↑'
    },

    zh: {
      htmlLang: 'zh-Hant',
      pageTitle: '黃冠諭 (Peter Huang) — 電腦視覺與 3D 感知',
      brandName: '黃冠諭',
      navProjects: '專案',
      navExp: '經歷',
      navResearch: '研究',
      heroName: '黃冠諭 <span class="hero-name-sub">Peter Huang</span>',
      heroLead: '專注於電腦視覺與 3D 感知。',
      heroBio: '目前在 <a href="https://arvr.google.com/" target="_blank" rel="noopener noreferrer" class="text-link">Google</a> 做 Android XR，之前待過 <a href="https://www.vive.com/us/" target="_blank" rel="noopener noreferrer" class="text-link">HTC VIVE</a> 和 Garena。這裡放一些做過的專案、開源實作和論文。',
      ctaCv: '履歷 CV ↗',
      railLoc: '台北',
      copyEmailShort: '複製信箱',
      emailLabel: 'Email',
      copiedText: '已複製 · peter124574@gmail.com',
      copiedShort: '已複製 ✓',
      secProjects: '專案與開源',
      auroraBadge: '個人專案',
      liveApp: '開啟應用 ↗',
      validation: '回測紀錄',
      auroraDesc: '在北歐旅行途中寫的工具。當時發現只看極光指數不太夠，雲層才是關鍵，就把 NOAA、挪威氣象局雲圖與航空氣象 METAR 整在一起，也拿十多年歷史資料跑過回測。',
      ossLabel: '早期開源實作（2019–2020）',
      repoRetina: 'TensorFlow 2 單階段人臉偵測與五點定位，支援 ResNet50 / MobileNetV2。',
      repoArc: 'ArcFace（CVPR 2019）人臉辨識的 TensorFlow 2 實作。',
      repoEsrgan: 'ESRGAN（ECCV 2018）影像超解析度的 TensorFlow 2 實作。',
      moreReposNote: 'GitHub 上還有其他早期實作與筆記，包括 GHM-loss、PC-DARTS 和 SNPE 紀錄。',
      allReposLink: '全部開源專案 ↗',
      secExp: '經歷',
      timeline: [
        {
          org: 'Google',
          badge: '現職',
          current: true,
          role: 'Tech Lead Manager · Android XR Perception',
          detail: '參與 Android XR 裝置端感知開發，在台北帶領團隊，並與美國、歐洲的同組夥伴跨區合作。',
          period: '2025.02 — 至今'
        },
        {
          org: 'HTC VIVE',
          role: '資深副理 & Tech Lead · XR 場景理解',
          detail: '參與 VIVE Focus Vision 與 XR Elite 的即時深度估計、語意分割與 3D 空間建圖開發，並參與建置室內 3D 採集設備與多人標註系統。',
          period: '2022.11 — 2025.02'
        },
        {
          org: 'Dcard',
          role: 'Senior Machine Learning Engineer · 貼文推薦',
          detail: '參與社群貼文排序模型，以及 NLP 情緒分析與異常事件偵測。',
          period: '2022.08 — 2022.11'
        },
        {
          org: 'Garena | SEA (BOOYAH! Live)',
          role: 'Senior Data Scientist · 影音推薦',
          detail: '與台北、新加坡團隊合作開發直播影音推薦排序模型，並參與資料管線、A/B 測試與異常帳號偵測。',
          period: '2021.02 — 2022.03'
        },
        {
          org: 'HTC VIVE',
          role: '工程師 → 主任工程師 · VR/AR 電腦視覺',
          detail: '參與 VIVE Focus 3 與 Cosmos 的裝置端手部、臉部、全身與 6-DoF 控制器追蹤開發，並參與模型量化、合成資料流程與多相機動態捕捉系統建置。',
          period: '2017.12 — 2021.02'
        }
      ],
      eduLabel: '學歷',
      education: [
        { school: '國立清華大學', degree: '電機工程學系碩士', period: '2015 — 2017' },
        { school: '國立中正大學', degree: '電機工程學系學士', period: '2011 — 2015' }
      ],
      secResearch: '研究與論文',
      research: [
        {
          venue: 'IEEE SAM 2020 · 研討會論文',
          title: 'Coupled Adversarial Net for Single Image Super-Resolution',
          authors: 'S.-Y. Su, <strong>K.-Y. Huang</strong>, C.-W. Lin',
          desc: '在單張影像超解析度任務中，以共享權重的 Siamese 鑑別器同時計算對抗損失與語意特徵距離，省去額外的預訓練感知網路。',
          links: [
            { label: 'IEEE Xplore ↗', url: 'https://ieeexplore.ieee.org/document/9104288', accent: true },
            { label: '簡報 ↗', url: 'https://drive.google.com/file/d/1vRl-KzjME1YsZ8MMoa1YzVe2M_aSxWBx/view?usp=sharing' }
          ]
        },
        {
          venue: '2017 · 碩士論文 · 國立清華大學',
          title: 'Pairwise Learning on Image Quality Assessment using Deep Siamese Neural Network',
          desc: '用成對比較資料訓練深度 Siamese 網路做主觀影像品質評估，讓標註者只需比較兩張圖的優劣，不必給絕對分數。',
          links: [
            { label: '論文 PDF ↗', url: 'https://drive.google.com/file/d/1zC_vFjnTs9s74RT2SB_xEcDwKQv6sKQ_/view?usp=sharing', accent: true }
          ]
        }
      ],
      footerCopy: '黃冠諭 · 台北',
      backTop: '回到頂部 ↑'
    }
  };

  let currentLang = 'en';
  let currentTheme = document.documentElement.getAttribute('data-theme') === 'dark' ? 'dark' : 'light';
  const themeListeners = [];
  const reducedMotion = window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  function detectInitialLang() {
    try {
      const saved = window.localStorage.getItem('peteryux_lang');
      if (saved === 'en' || saved === 'zh') return saved;
    } catch (_) {}
    const nav = (navigator.language || '').toLowerCase();
    return nav.startsWith('zh') ? 'zh' : 'en';
  }

  const THEME_FADE_MS = 260;
  let themeFadeTimer = 0;
  let themePostVtTimer = 0;

  // Exact CSS cubic-bezier(0.25, 0.1, 0.25, 1) ("ease") matching Apple UIKit & CSS transitions
  function easeCss(x) {
    if (x <= 0) return 0;
    if (x >= 1) return 1;
    let t = x;
    for (let i = 0; i < 6; i++) {
      const mt = 1 - t;
      const cx = 3 * mt * mt * t * 0.25 + 3 * mt * t * t * 0.25 + t * t * t;
      const dx = 3 * mt * mt * 0.25 + 6 * mt * t * (0.25 - 0.25) + 3 * t * t * (1 - 0.25);
      if (Math.abs(cx - x) < 1e-4 || Math.abs(dx) < 1e-5) break;
      t = Math.max(0, Math.min(1, t - (cx - x) / dx));
    }
    const mt = 1 - t;
    return 3 * mt * mt * t * 0.1 + 3 * mt * t * t * 1.0 + t * t * t;
  }

  function replaceThemeColorMeta(color) {
    document.querySelectorAll('meta[name="theme-color"]').forEach((el) => el.remove());
    const fresh = document.createElement('meta');
    fresh.id = 'theme-color-meta';
    fresh.setAttribute('name', 'theme-color');
    fresh.setAttribute('content', color);
    document.head.appendChild(fresh);
    return fresh;
  }

  function syncThemeColorMeta(theme) {
    const isDark = theme === 'dark';
    const color = isDark ? '#0b1017' : '#f4f1ea';
    // Immediate t=0ms update to root & body (no CSS transition on html/body) so Safari 26+/27+'s
    // live <body> observer & UIKit ~260ms status-bar fade start at exact t=0ms with zero rAF lag.
    document.documentElement.style.colorScheme = theme;
    document.documentElement.style.backgroundColor = color;
    if (document.body) document.body.style.backgroundColor = color;
    // iOS 15–18 & Android: recreate <meta name="theme-color"> immediately at t=0ms
    replaceThemeColorMeta(color);
  }

  function setThemeDOM(theme, animate) {
    const next = theme === 'dark' ? 'dark' : 'light';
    const doFade = Boolean(animate) && !reducedMotion;
    currentTheme = next;
    clearTimeout(themeFadeTimer);
    if (doFade) {
      document.documentElement.classList.add('is-theme-fading');
      void document.documentElement.offsetHeight;
    } else {
      document.documentElement.classList.remove('is-theme-fading');
    }
    document.documentElement.setAttribute('data-theme', currentTheme);
    syncThemeColorMeta(currentTheme);
    try {
      window.localStorage.setItem('peteryux_theme', currentTheme);
    } catch (_) {}
    themeListeners.forEach((fn) => fn(currentTheme, doFade));
    if (doFade) {
      themeFadeTimer = window.setTimeout(() => {
        document.documentElement.classList.remove('is-theme-fading');
      }, THEME_FADE_MS + 40);
    }
  }

  // Origin-aware circular ink-wash View Transition across desktop & iOS (absorbs OS status-bar IPC phase delta naturally)
  let lastThemeToggleMs = 0;
  function toggleTheme(triggerEl) {
    const next = currentTheme === 'dark' ? 'light' : 'dark';
    const now = performance.now();
    const allowVT = !reducedMotion && document.startViewTransition && triggerEl && (now - lastThemeToggleMs > 420);
    lastThemeToggleMs = now;
    clearTimeout(themePostVtTimer);
    if (allowVT) {
      const rect = triggerEl.getBoundingClientRect();
      const x = rect.left + rect.width / 2;
      const y = rect.top + rect.height / 2;
      const maxR = Math.hypot(Math.max(x, window.innerWidth - x), Math.max(y, window.innerHeight - y));
      document.documentElement.style.setProperty('--vt-x', `${Math.round(x)}px`);
      document.documentElement.style.setProperty('--vt-y', `${Math.round(y)}px`);
      document.documentElement.style.setProperty('--vt-r', `${Math.ceil(maxR)}px`);
      const vt = document.startViewTransition(() => setThemeDOM(next, false));
      if (vt && vt.finished) {
        vt.finished.then(() => {
          syncThemeColorMeta(currentTheme);
          themePostVtTimer = window.setTimeout(() => syncThemeColorMeta(currentTheme), 60);
        }).catch(() => {});
      }
    } else {
      setThemeDOM(next, true);
    }
  }

  function updateLangIndicator() {
    const indicator = document.getElementById('lang-indicator');
    const activeBtn = document.getElementById(currentLang === 'zh' ? 'btn-lang-zh' : 'btn-lang-en');
    if (!indicator || !activeBtn) return;
    indicator.style.width = `${activeBtn.offsetWidth}px`;
    indicator.style.transform = `translateX(${activeBtn.offsetLeft}px)`;
  }

  function renderTimeline(items) {
    const list = document.getElementById('timeline-list');
    if (!list) return;
    list.innerHTML = items.map((item) => `
      <li class="timeline-item spotlight-item${item.current ? ' is-current' : ''}">
        <span class="timeline-dot" aria-hidden="true"></span>
        <div class="timeline-head">
          <div class="timeline-org-wrap">
            <span class="timeline-org">${item.org}</span>
            ${item.badge ? `<span class="entry-tag">${item.badge}</span>` : ''}
          </div>
          <span class="timeline-period font-mono">${item.period}</span>
        </div>
        <div class="timeline-role">${item.role}</div>
        <p class="timeline-detail">${item.detail}</p>
      </li>
    `).join('');
  }

  function renderEducation(items) {
    const list = document.getElementById('edu-list');
    if (!list) return;
    list.innerHTML = items.map((item) => `
      <li class="edu-item">
        <div class="edu-main">
          <strong>${item.school}</strong>
          <span class="edu-degree">${item.degree}</span>
        </div>
        <span class="timeline-period font-mono">${item.period}</span>
      </li>
    `).join('');
  }

  function renderResearch(items) {
    const container = document.getElementById('research-list');
    if (!container) return;
    container.innerHTML = items.map((item) => `
      <article class="research-item spotlight-item">
        <div class="research-top">
          <span class="research-venue">${item.venue}</span>
          <div class="inline-links">
            ${item.links.map((l) => `<a href="${l.url}" target="_blank" rel="noopener noreferrer" class="${l.accent ? 'accent-link' : 'text-link'}">${l.label}</a>`).join('')}
          </div>
        </div>
        <h3 class="research-title">${item.title}</h3>
        ${item.authors ? `<div class="research-authors">${item.authors}</div>` : ''}
        <p class="item-desc">${item.desc}</p>
      </article>
    `).join('');
  }

  function applyLang(lang, animate) {
    const nextLang = lang === 'zh' ? 'zh' : 'en';
    const commit = () => {
      currentLang = nextLang;
      const d = I18N[currentLang];

      document.documentElement.lang = d.htmlLang;
      document.title = d.pageTitle;

      const brand = document.getElementById('brand-name');
      if (brand) brand.textContent = d.brandName;

      const heroName = document.getElementById('hero-name');
      if (heroName) heroName.innerHTML = d.heroName;

      const heroBio = document.getElementById('hero-bio');
      if (heroBio) heroBio.innerHTML = d.heroBio;

      document.querySelectorAll('[data-i18n]').forEach((el) => {
        const key = el.getAttribute('data-i18n');
        if (d[key] !== undefined) el.textContent = d[key];
      });

      const auroraLink = document.getElementById('aurora-live-link');
      if (auroraLink) {
        auroraLink.href = `https://peteryux.github.io/nordic-aurora-radar/?lang=${currentLang}`;
      }

      renderTimeline(d.timeline);
      renderEducation(d.education);
      renderResearch(d.research);

      const btnEn = document.getElementById('btn-lang-en');
      const btnZh = document.getElementById('btn-lang-zh');
      if (btnEn && btnZh) {
        btnEn.classList.toggle('is-active', currentLang === 'en');
        btnEn.setAttribute('aria-pressed', String(currentLang === 'en'));
        btnZh.classList.toggle('is-active', currentLang === 'zh');
        btnZh.setAttribute('aria-pressed', String(currentLang === 'zh'));
      }

      requestAnimationFrame(updateLangIndicator);
      window.dispatchEvent(new CustomEvent('coast:lang', { detail: currentLang }));
      try {
        window.localStorage.setItem('peteryux_lang', currentLang);
      } catch (_) {}
    };

    if (animate && !reducedMotion && nextLang !== currentLang) {
      const targets = document.querySelectorAll('.i18n-swap');
      targets.forEach((el) => el.classList.add('is-swapping'));
      window.setTimeout(() => {
        commit();
        requestAnimationFrame(() => targets.forEach((el) => el.classList.remove('is-swapping')));
      }, 110);
    } else {
      commit();
    }
  }

  /* ========================================================================
     TACTILE MICRO-INTERACTIONS: Copy Email · Live Taipei Clock · Scroll Tide
     ======================================================================== */
  function initCopyEmail() {
    const sr = document.getElementById('sr-status');
    document.querySelectorAll('.copy-email-btn').forEach((btn) => {
      let timer = null;
      btn.addEventListener('click', (e) => {
        const email = btn.getAttribute('data-email') || 'peter124574@gmail.com';
        if (e.metaKey || e.ctrlKey) {
          window.location.href = `mailto:${email}`;
          return;
        }
        const label = btn.querySelector('.copy-email-label');
        const isRail = btn.classList.contains('rail-action-link');
        const d = I18N[currentLang];

        const showCopied = () => {
          btn.classList.add('is-copied');
          if (label) label.textContent = isRail ? d.copiedShort : d.copiedText;
          if (sr) sr.textContent = `Copied ${email} to clipboard`;
          clearTimeout(timer);
          timer = window.setTimeout(() => {
            btn.classList.remove('is-copied');
            if (label) label.textContent = isRail ? I18N[currentLang].copyEmailShort : I18N[currentLang].emailLabel;
          }, 2200);
        };

        if (navigator.clipboard && navigator.clipboard.writeText) {
          navigator.clipboard.writeText(email).then(showCopied).catch(() => {
            window.location.href = `mailto:${email}`;
          });
        } else {
          window.location.href = `mailto:${email}`;
        }
      });
    });
  }

  function initTaipeiClock() {
    const el = document.getElementById('taipei-clock');
    if (!el) return;
    function tick() {
      try {
        const str = new Intl.DateTimeFormat('en-GB', {
          timeZone: 'Asia/Taipei',
          hour: '2-digit',
          minute: '2-digit',
          hour12: false
        }).format(new Date());
        el.textContent = `${str} UTC+8`;
      } catch (_) {
        el.textContent = 'UTC+8';
      }
    }
    tick();
    window.setInterval(tick, 30000);
  }

  function initPaperGrain() {
    const el = document.getElementById('paper-grain');
    if (!el) return;
    const tile = document.createElement('canvas');
    tile.width = 128;
    tile.height = 128;
    const g = tile.getContext('2d');
    if (!g) return;

    function build(isDark) {
      g.clearRect(0, 0, 128, 128);
      let a = isDark ? 88421 : 31415;
      const rand = () => {
        a |= 0;
        a = (a + 0x6d2b79f5) | 0;
        let t = Math.imul(a ^ (a >>> 15), 1 | a);
        t = (t + Math.imul(t ^ (t >>> 7), 61 | t)) ^ t;
        return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
      };
      for (let i = 0; i < 420; i++) {
        const x = rand() * 128;
        const y = rand() * 128;
        g.fillStyle = isDark
          ? `rgba(220, 234, 248, ${0.012 + rand() * 0.022})`
          : `rgba(52, 42, 30, ${0.015 + rand() * 0.026})`;
        g.fillRect(x, y, 1, 1);
      }
      for (let i = 0; i < 40; i++) {
        const x = rand() * 128;
        const y = rand() * 128;
        g.strokeStyle = isDark
          ? `rgba(210, 228, 244, ${0.012 + rand() * 0.015})`
          : `rgba(68, 56, 42, ${0.014 + rand() * 0.018})`;
        g.lineWidth = 0.6;
        g.beginPath();
        g.moveTo(x, y);
        g.lineTo(x + 12 + rand() * 24, y + (rand() - 0.5) * 1.2);
        g.stroke();
      }
      el.style.backgroundImage = `url(${tile.toDataURL('image/png')})`;
    }

    build(currentTheme === 'dark');
    themeListeners.push((theme) => build(theme === 'dark'));
  }

  function initScrollChrome() {
    const header = document.getElementById('site-header');
    const heroName = document.getElementById('hero-name');
    const tideFill = document.getElementById('tide-fill');
    const mobileBar = document.getElementById('mobile-tide-bar');
    const railActions = document.getElementById('rail-actions');
    const contours = document.getElementById('depth-contours');
    const heroStage = document.getElementById('hero-stage');

    const navLinks = Array.from(document.querySelectorAll('.nav-links a[href^="#"], .rail-link[data-target]'));
    const sectionIds = ['projects', 'experience', 'research'];
    const sections = sectionIds.map((id) => document.getElementById(id)).filter(Boolean);

    let ticking = false;

    function update() {
      ticking = false;
      const sy = window.scrollY || 0;
      const docH = Math.max(1, document.documentElement.scrollHeight - window.innerHeight);
      const progress = Math.max(0, Math.min(1, sy / docH));

      if (header) {
        header.classList.toggle('is-scrolled', sy > 36);
        const passedHero = heroName
          ? heroName.getBoundingClientRect().bottom <= (header.offsetHeight || 56) + 4
          : sy > 140;
        header.classList.toggle('has-passed-hero', passedHero);
      }
      if (tideFill) tideFill.style.transform = `scaleY(${Math.max(0.12, progress).toFixed(4)})`;
      if (mobileBar) mobileBar.style.transform = `scaleX(${progress.toFixed(4)})`;
      if (railActions && heroStage) {
        const showRail = sy > heroStage.offsetHeight * 0.52;
        railActions.classList.toggle('is-visible', showRail);
        railActions.setAttribute('aria-hidden', String(!showRail));
      }
      if (contours && !reducedMotion) {
        contours.style.transform = `translate3d(0, ${(-sy * 0.06).toFixed(1)}px, 0)`;
      }

      // Active section detection (viewport-relative, immune to positioned ancestors)
      let activeId = sectionIds[0];
      const probeY = window.innerHeight * 0.34;
      for (let i = 0; i < sections.length; i++) {
        if (sections[i].getBoundingClientRect().top <= probeY) activeId = sections[i].id;
      }
      navLinks.forEach((a) => {
        const tgt = a.getAttribute('data-target') || (a.getAttribute('href') || '').slice(1);
        a.classList.toggle('is-active', tgt === activeId);
      });
    }

    window.addEventListener('scroll', () => {
      if (!ticking) {
        ticking = true;
        requestAnimationFrame(update);
      }
    }, { passive: true });

    window.addEventListener('resize', () => requestAnimationFrame(update), { passive: true });
    update();
  }

  function fetchLiveStars() {
    const starEls = document.querySelectorAll('.star-count[data-repo]');
    if (!starEls.length) return;
    fetch('https://api.github.com/users/peteryuX/repos?per_page=50')
      .then((res) => (res.ok ? res.json() : null))
      .then((repos) => {
        if (!Array.isArray(repos)) return;
        const map = {};
        repos.forEach((r) => {
          if (r && r.name && typeof r.stargazers_count === 'number') {
            map[r.name.toLowerCase()] = r.stargazers_count;
          }
        });
        starEls.forEach((el) => {
          const key = (el.getAttribute('data-repo') || '').toLowerCase();
          if (typeof map[key] === 'number' && map[key] > 0) {
            el.textContent = '★ ' + map[key];
          }
        });
      })
      .catch(() => {});
  }

  /* ========================================================================
     SHARED PRINTMAKING GEOMETRY UTILITIES
     ======================================================================== */
  function lerp(a, b, t) {
    return a + (b - a) * t;
  }

  function mixRGB(c0, c1, t, alpha) {
    const r = Math.round(lerp(c0[0], c1[0], t));
    const g = Math.round(lerp(c0[1], c1[1], t));
    const b = Math.round(lerp(c0[2], c1[2], t));
    return alpha === undefined ? `rgb(${r},${g},${b})` : `rgba(${r},${g},${b},${alpha})`;
  }

  function sampleSmoothCurve(anchors, sp) {
    const out = [];
    for (let i = 0; i < anchors.length - 1; i++) {
      const p0 = anchors[Math.max(0, i - 1)];
      const p1 = anchors[i];
      const p2 = anchors[i + 1];
      const p3 = anchors[Math.min(anchors.length - 1, i + 2)];
      for (let s = 0; s < sp; s++) {
        const u = s / sp;
        const u2 = u * u;
        const u3 = u2 * u;
        out.push([
          0.5 * ((2 * p1[0]) + (-p0[0] + p2[0]) * u + (2 * p0[0] - 5 * p1[0] + 4 * p2[0] - p3[0]) * u2 + (-p0[0] + 3 * p1[0] - 3 * p2[0] + p3[0]) * u3),
          0.5 * ((2 * p1[1]) + (-p0[1] + p2[1]) * u + (2 * p0[1] - 5 * p1[1] + 4 * p2[1] - p3[1]) * u2 + (-p0[1] + 3 * p1[1] - 3 * p2[1] + p3[1]) * u3)
        ]);
      }
    }
    out.push(anchors[anchors.length - 1]);
    return out;
  }

  /* ========================================================================
     1. FULL-BLEED TAIWAN EAST COAST PRINT HORIZON (Authentic Pigment Depth)
        Hiroshi Yoshida Morning Prussian-Indigo ↔ Kawase Hasui Kuroshio Night
        6-Plane 3D Depth Parallax · Tactile Silk-Water Ripples · Seamless Paper
     ======================================================================== */
  function initHeroCoastScene() {
    const stage = document.getElementById('hero-stage');
    const canvas = document.getElementById('coast-canvas');
    if (!stage || !canvas) return;
    const ctx = canvas.getContext('2d', { alpha: false });
    if (!ctx) return;

    let W = 0;
    let H = 0;
    let dpr = 1;
    let isVisible = true;
    let pageVisible = !document.hidden;
    let rafId = null;

    let themeVal = currentTheme === 'dark' ? 1 : 0;
    let themeFrom = themeVal;
    let themeTarget = themeVal;
    let themeStartMs = 0;

    const pointer = { tx: 0, ty: 0, x: 0, y: 0, lastX: 0, lastT: 0 };
    const ripples = [];

    // Rich Authentic Mineral Woodblock Pigment Palette (Zero washed-out gray fog!)
    const PAL = {
      skyTop:    [[226, 232, 231], [9, 14, 22]],
      skyMid:    [[239, 236, 227], [13, 21, 32]],
      skyWarm:   [[240, 232, 216], [19, 32, 48]],
      paper:     [[244, 241, 234], [11, 16, 23]],
      cliffFar:  [[104, 134, 148], [22, 38, 55]],
      cliffMid:  [[64, 98, 118],   [28, 48, 69]],
      cliffDark: [[40, 68, 88],    [15, 29, 44]],
      island:    [[58, 94, 115],   [27, 48, 70]],
      rimLight:  [[224, 228, 224], [164, 204, 230]],
      foam:      [[248, 246, 239], [186, 218, 238]],
      keyInk:    [[15, 40, 60],    [7, 15, 25]],
      wavesTop: [
        [[134, 169, 185], [22, 42, 62]],
        [[84, 128, 152],  [18, 36, 55]],
        [[48, 93, 120],   [14, 30, 47]],
        [[26, 65, 92],    [10, 23, 38]]
      ],
      wavesBot: [
        [[106, 146, 166], [17, 34, 51]],
        [[62, 106, 132],  [14, 29, 45]],
        [[34, 76, 104],   [11, 24, 38]],
        [[18, 48, 72],    [8, 17, 29]]
      ],
      contour: [
        [[214, 230, 236], [116, 158, 188]],
        [[188, 214, 226], [104, 146, 178]],
        [[164, 198, 214], [92, 134, 168]],
        [[140, 178, 200], [82, 124, 158]]
      ]
    };

    // Sculpted Qingshui Cliffs (far left coastal drop into the Pacific)
    const QINGSHUI_FAR = sampleSmoothCurve([
      [-0.03, 0.72], [0.04, 0.66], [0.10, 0.69], [0.16, 0.64],
      [0.23, 0.70], [0.29, 0.75], [0.36, 0.81]
    ], 7);

    const QINGSHUI_NEAR = sampleSmoothCurve([
      [-0.03, 0.75], [0.03, 0.70], [0.08, 0.73], [0.13, 0.71],
      [0.19, 0.76], [0.25, 0.81]
    ], 7);

    // Authentic Guishan Island (龜山島) volcanic silhouette on the right Pacific horizon
    const GUISHAN = sampleSmoothCurve([
      [0.735, 0.806], [0.752, 0.798], [0.766, 0.779], [0.781, 0.754],
      [0.795, 0.738], [0.808, 0.745], [0.822, 0.768], [0.834, 0.778],
      [0.845, 0.772], [0.856, 0.759], [0.866, 0.769], [0.875, 0.790], [0.881, 0.806]
    ], 6);

    // 5 Depth-Calibrated Ocean Swells — Layer 4 IS the seamless paper boundary!
    const LAYERS = [
      { bottomOff: 158, amp: 5.5,  freq: 0.0052, speed: 0.20, phase: 0.5, steep: 0.28, parallax: 0.36, scrollK: 0.08, foam: 0.0,  lines: 1 },
      { bottomOff: 126, amp: 8.4,  freq: 0.0044, speed: 0.27, phase: 2.2, steep: 0.36, parallax: 0.52, scrollK: 0.14, foam: 0.35, lines: 2 },
      { bottomOff: 92,  amp: 12.2, freq: 0.0038, speed: 0.34, phase: 4.4, steep: 0.44, parallax: 0.70, scrollK: 0.21, foam: 0.75, lines: 2 },
      { bottomOff: 52,  amp: 15.6, freq: 0.0032, speed: 0.42, phase: 1.5, steep: 0.48, parallax: 0.88, scrollK: 0.29, foam: 0.95, lines: 3 },
      { bottomOff: 14,  amp: 11.5, freq: 0.0028, speed: 0.48, phase: 3.9, steep: 0.40, parallax: 1.00, scrollK: 0.36, isPaper: true, lines: 0 }
    ];

    function waveY(layer, x, t, pxShift, li, scale, scrollY) {
      const xS = x + pxShift;
      const p1 = xS * layer.freq - t * layer.speed + layer.phase;
      const p2 = xS * layer.freq * 1.71 + t * layer.speed * 0.58 + layer.phase * 1.3;
      const p3 = xS * layer.freq * 2.81 - t * layer.speed * 1.18 + layer.phase * 0.7;

      const asym = Math.sin(p1) - layer.steep * Math.sin(2 * p1 + 0.34) * 0.44 + 0.15 * Math.cos(p1 - 0.28);
      let dy = (asym * 0.68 + Math.sin(p2) * 0.22 + Math.sin(p3) * 0.10) * layer.amp * scale;

      for (let i = 0; i < ripples.length; i++) {
        const rp = ripples[i];
        const age = t - rp.t0;
        if (age < 0 || age > 3.6) continue;
        const depthDiff = Math.abs(li - rp.layer);
        const dist = Math.abs(x - rp.x);
        const radius = age * 125;
        const env = Math.exp(-Math.pow((dist - radius) / 64, 2)) * Math.exp(-age * 0.95) * Math.exp(-depthDiff * depthDiff * 0.45);
        dy -= Math.cos((dist - radius) * 0.064) * env * rp.strength;
      }

      // Depth-compressed scroll parallax (near waves lift slightly faster than distant swells)
      const scrollShift = Math.min(34, scrollY * layer.scrollK * 0.14);
      return H - layer.bottomOff * scale - scrollShift + dy;
    }

    function resize() {
      const rect = stage.getBoundingClientRect();
      W = Math.max(1, Math.round(rect.width));
      H = Math.max(1, Math.round(rect.height));
      dpr = Math.min(window.devicePixelRatio || 1, 2);
      canvas.width = Math.round(W * dpr);
      canvas.height = Math.round(H * dpr);
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    }

    function drawCoastRidge(pts, yBase, heightScale, px, tv, colPair, alpha, rimAlpha, shadeSlice) {
      const mapped = pts.map(([u, v]) => [u * W + px, yBase - (0.81 - v) * heightScale]);
      const minY = mapped.reduce((m, p) => Math.min(m, p[1]), yBase);

      const grad = ctx.createLinearGradient(0, minY, 0, yBase + 6);
      grad.addColorStop(0, mixRGB(colPair[0], colPair[1], tv, alpha.toFixed(3)));
      grad.addColorStop(0.76, mixRGB(colPair[0], colPair[1], tv, (alpha * 0.62).toFixed(3)));
      grad.addColorStop(1, mixRGB(PAL.skyWarm[0], PAL.skyWarm[1], tv, 0));

      ctx.beginPath();
      ctx.moveTo(mapped[0][0], yBase + 12);
      for (let i = 0; i < mapped.length; i++) ctx.lineTo(mapped[i][0], mapped[i][1]);
      ctx.lineTo(mapped[mapped.length - 1][0], yBase + 12);
      ctx.closePath();
      ctx.fillStyle = grad;
      ctx.fill();

      // Woodblock chiaroscuro shaded cliff facet (sunlit vs shaded rock plane)
      if (shadeSlice && mapped.length > shadeSlice[1]) {
        ctx.save();
        ctx.clip();
        const s0 = mapped[shadeSlice[0]];
        const s1 = mapped[shadeSlice[1]];
        const sg = ctx.createLinearGradient(0, s0[1], 0, yBase + 4);
        sg.addColorStop(0, mixRGB(PAL.cliffDark[0], PAL.cliffDark[1], tv, (alpha * 0.55).toFixed(3)));
        sg.addColorStop(1, mixRGB(PAL.cliffDark[0], PAL.cliffDark[1], tv, 0));
        ctx.beginPath();
        ctx.moveTo(s0[0], s0[1]);
        for (let i = shadeSlice[0] + 1; i <= shadeSlice[1]; i++) ctx.lineTo(mapped[i][0], mapped[i][1]);
        ctx.lineTo(s1[0] - 18, yBase + 8);
        ctx.lineTo(s0[0] - 8, yBase + 8);
        ctx.closePath();
        ctx.fillStyle = sg;
        ctx.fill();
        ctx.restore();
      }

      if (rimAlpha > 0) {
        ctx.beginPath();
        for (let i = 0; i < mapped.length; i++) {
          if (i === 0) ctx.moveTo(mapped[i][0], mapped[i][1]);
          else ctx.lineTo(mapped[i][0], mapped[i][1]);
        }
        ctx.strokeStyle = mixRGB(PAL.rimLight[0], PAL.rimLight[1], tv, rimAlpha.toFixed(3));
        ctx.lineWidth = 0.85;
        ctx.stroke();
      }
    }

    const heroHooks = { beforeRender: null, afterSky: null, afterCoast: null, afterWaveLayer: null, afterScene: null };
    let simTime = 0;
    let lastFrameMs = 0;
    let stageRect = null;
    let cachedSky = null;
    let cachedSkyKey = '';

    // Reusable typed buffers for wave sampling (zero per-frame array GC churn)
    let ptsCap = 256;
    let ptsX = new Float32Array(ptsCap);
    let ptsY = new Float32Array(ptsCap);

    function refreshStageRect() {
      stageRect = stage.getBoundingClientRect();
      return stageRect;
    }

    function render(nowMs) {
      const dt = lastFrameMs ? Math.min(0.033, Math.max(0, (nowMs - lastFrameMs) * 0.001)) : 0.016;
      lastFrameMs = nowMs;
      if (!reducedMotion) simTime += dt;
      const t = simTime;

      if (themeStartMs > 0) {
        const p = Math.min(1, (nowMs - themeStartMs) / THEME_FADE_MS);
        themeVal = themeFrom + (themeTarget - themeFrom) * easeCss(p);
        if (p >= 1) {
          themeVal = themeTarget;
          themeStartMs = 0;
        }
      } else {
        themeVal = themeTarget;
      }

      pointer.x += (pointer.tx - pointer.x) * 0.055;
      pointer.y += (pointer.ty - pointer.y) * 0.055;

      for (let i = ripples.length - 1; i >= 0; i--) {
        if (t - ripples[i].t0 > 3.6) ripples.splice(i, 1);
      }

      const tv = themeVal;
      const scrollY = window.scrollY || 0;
      const scale = W < 640 ? 0.68 : 1.0;
      const glowX = W * 0.80 + pointer.x * 5;
      const horizonY = H - 154 * scale - Math.min(10, scrollY * 0.03);
      const ridgeH = W < 640 ? 220 : 390;

      const frameInfo = { t, dt, tv, W, H, scale, scrollY, horizonY, ridgeH, glowX, px: pointer.x, py: pointer.y, isVisible };
      if (heroHooks.beforeRender) heroHooks.beforeRender(frameInfo);

      // 1. Atmospheric Coastal Sky (cached gradient rebuilt only when W/H/tv changes)
      const skyKey = `${W}|${H}|${Math.round(tv * 255)}`;
      if (skyKey !== cachedSkyKey) {
        cachedSkyKey = skyKey;
        const sky = ctx.createLinearGradient(0, 0, 0, H);
        sky.addColorStop(0.0, mixRGB(PAL.paper[0], PAL.paper[1], tv));
        sky.addColorStop(0.03, mixRGB(PAL.paper[0], PAL.paper[1], tv));
        sky.addColorStop(0.12, mixRGB(PAL.skyTop[0], PAL.skyTop[1], tv));
        sky.addColorStop(0.52, mixRGB(PAL.skyMid[0], PAL.skyMid[1], tv));
        sky.addColorStop(0.75, mixRGB(PAL.skyWarm[0], PAL.skyWarm[1], tv));
        sky.addColorStop(1.0, mixRGB(PAL.paper[0], PAL.paper[1], tv));
        cachedSky = sky;
      }
      ctx.fillStyle = cachedSky;
      ctx.fillRect(0, 0, W, H);

      // Subtle horizon glow centered softly behind Guishan Island
      const glowR = Math.min(W * 0.42, 420);
      const hGlow = ctx.createRadialGradient(glowX, horizonY - 22, 8, glowX, horizonY - 22, glowR);
      if (tv < 0.5) {
        const dv = 1 - tv * 2;
        hGlow.addColorStop(0.0, `rgba(248, 236, 210, ${(0.52 * dv).toFixed(3)})`);
        hGlow.addColorStop(0.45, `rgba(236, 218, 186, ${(0.18 * dv).toFixed(3)})`);
        hGlow.addColorStop(1.0, 'rgba(236, 218, 186, 0)');
      } else {
        const nv = (tv - 0.5) * 2;
        hGlow.addColorStop(0.0, `rgba(148, 192, 224, ${(0.20 * nv).toFixed(3)})`);
        hGlow.addColorStop(0.45, `rgba(74, 118, 152, ${(0.08 * nv).toFixed(3)})`);
        hGlow.addColorStop(1.0, 'rgba(74, 118, 152, 0)');
      }
      ctx.fillStyle = hGlow;
      ctx.fillRect(0, 0, W, H);

      if (heroHooks.afterSky) heroHooks.afterSky(ctx, frameInfo);

      // 2. Sculpted Taiwan East Coast Landforms
      drawCoastRidge(QINGSHUI_FAR, horizonY, ridgeH, pointer.x * 5, tv, PAL.cliffFar, lerp(0.32, 0.52, tv), 0, null);
      drawCoastRidge(QINGSHUI_NEAR, horizonY + 3, ridgeH * 0.86, pointer.x * 9.5, tv, PAL.cliffMid, lerp(0.56, 0.72, tv), lerp(0.28, 0.30, tv), [8, 22]);
      drawCoastRidge(GUISHAN, horizonY + 3, ridgeH * 0.96, pointer.x * 7.2, tv, PAL.island, lerp(0.62, 0.76, tv), lerp(0.36, 0.42, tv), [10, 26]);

      // Subtle atmospheric sea-mist veil hugging the coastline base
      const mist = ctx.createLinearGradient(0, horizonY - 24, 0, horizonY + 14);
      mist.addColorStop(0, mixRGB(PAL.skyWarm[0], PAL.skyWarm[1], tv, 0));
      mist.addColorStop(0.55, mixRGB(PAL.skyWarm[0], PAL.skyWarm[1], tv, lerp(0.58, 0.24, tv)));
      mist.addColorStop(1, mixRGB(PAL.skyWarm[0], PAL.skyWarm[1], tv, 0));
      ctx.fillStyle = mist;
      ctx.fillRect(0, horizonY - 24, W, 38);

      if (heroHooks.afterCoast) heroHooks.afterCoast(ctx, frameInfo);

      // 3. Five Depth-Layered Prussian-Indigo / Kuroshio Pacific Swells (Layer 4 = Seamless Page Paper)
      const step = Math.max(4, Math.round(W / 195));
      const needed = Math.ceil((W + step * 2) / step) + 2;
      if (needed > ptsCap) {
        ptsCap = needed + 32;
        ptsX = new Float32Array(ptsCap);
        ptsY = new Float32Array(ptsCap);
      }

      for (let li = 0; li < LAYERS.length; li++) {
        const layer = LAYERS[li];
        const pxShift = pointer.x * 28 * layer.parallax;
        let ptsLen = 0;
        for (let x = -step; x <= W + step; x += step) {
          ptsX[ptsLen] = x;
          ptsY[ptsLen] = waveY(layer, x, t, pxShift, li, scale, scrollY);
          ptsLen += 1;
        }

        const baseY = H - layer.bottomOff * scale - Math.min(34, scrollY * layer.scrollK * 0.14);

        ctx.beginPath();
        ctx.moveTo(ptsX[0], H + 6);
        for (let i = 0; i < ptsLen; i++) ctx.lineTo(ptsX[i], ptsY[i]);
        ctx.lineTo(ptsX[ptsLen - 1], H + 6);
        ctx.closePath();

        if (layer.isPaper) {
          ctx.fillStyle = mixRGB(PAL.paper[0], PAL.paper[1], tv);
          ctx.fill();
        } else {
          const wg = ctx.createLinearGradient(0, baseY - layer.amp * scale * 1.2, 0, Math.min(H, baseY + 120 * scale));
          wg.addColorStop(0, mixRGB(PAL.wavesTop[li][0], PAL.wavesTop[li][1], tv));
          wg.addColorStop(1, mixRGB(PAL.wavesBot[li][0], PAL.wavesBot[li][1], tv));
          ctx.fillStyle = wg;
          ctx.fill();
        }

        // Hokusai internal carved flow striations
        for (let k = 1; k <= layer.lines; k++) {
          const offset = k * (5.2 + li * 1.55) * scale;
          const ia = (0.28 - k * 0.06) * lerp(1.0, 0.78, tv);
          ctx.beginPath();
          for (let i = 0; i < ptsLen; i++) {
            const x = ptsX[i];
            const lift = Math.max(0, (baseY - ptsY[i]) / Math.max(1, layer.amp * scale));
            const y = ptsY[i] + offset * (0.84 + lift * 0.34) + Math.sin(x * 0.011 + li * 1.8 + k - t * 0.24) * 1.1;
            if (i === 0) ctx.moveTo(x, y);
            else ctx.lineTo(x, y);
          }
          ctx.strokeStyle = mixRGB(PAL.contour[li][0], PAL.contour[li][1], tv, Math.max(0.05, ia).toFixed(3));
          ctx.lineWidth = li >= 3 ? 0.85 : 0.68;
          ctx.stroke();
        }

        // Carved tapered woodblock foam crest ribbons
        if (!layer.isPaper && layer.foam > 0) {
          const thr = baseY - layer.amp * scale * 0.26;
          let rs = -1;
          for (let i = 0; i <= ptsLen; i++) {
            const act = i < ptsLen && ptsY[i] < thr;
            if (act && rs === -1) rs = i;
            else if (!act && rs !== -1) {
              const re = i - 1;
              const rl = re - rs + 1;
              if (rl >= 4) {
                ctx.beginPath();
                ctx.moveTo(ptsX[rs], ptsY[rs]);
                for (let j = rs + 1; j <= re; j++) ctx.lineTo(ptsX[j], ptsY[j] - 0.3);
                for (let j = re; j >= rs; j--) {
                  const frac = (j - rs) / Math.max(1, rl - 1);
                  const taper = Math.pow(Math.max(0, Math.sin(frac * Math.PI)), 0.74);
                  const depth = Math.min(1, (thr - ptsY[j]) / Math.max(1, layer.amp * scale * 0.72));
                  const xv = ptsX[j];
                  const organic = 0.85 + 0.09 * Math.sin(xv * 0.042 + li * 2) + 0.06 * Math.sin(xv * 0.095 - t * 0.35);
                  ctx.lineTo(xv, ptsY[j] + (1.3 + depth * (2.2 + li * 0.55)) * layer.foam * taper * organic);
                }
                ctx.closePath();
                ctx.fillStyle = mixRGB(PAL.foam[0], PAL.foam[1], tv, (0.76 * layer.foam * lerp(1.0, 0.56, tv)).toFixed(3));
                ctx.fill();
              }
              rs = -1;
            }
          }
        }

        // Subtle horizon shimmer reflection (batched into 2 opacity buckets to cut stroke calls by 10x)
        if (!layer.isPaper) {
          const bw = W * lerp(0.11, 0.16, tv) * (0.65 + li * 0.16);
          const gs = lerp(0.16, 0.42, tv) * (1.0 - li * 0.12);
          ctx.lineWidth = 0.75 + li * 0.16;
          for (let bucket = 0; bucket < 2; bucket++) {
            let any = false;
            ctx.beginPath();
            for (let i = 1; i < ptsLen - 1; i += 2) {
              const x = ptsX[i];
              const dx = Math.abs(x - glowX);
              if (dx > bw) continue;
              const rad = Math.exp(-Math.pow(dx / (bw * 0.46), 2));
              const sh = 0.5 + 0.5 * Math.sin(x * 0.12 + t * (1.5 + li * 0.3) + li * 2.1);
              const a = rad * sh * gs;
              if (a < 0.03) continue;
              const isBright = a >= gs * 0.48;
              if ((bucket === 1) !== isBright) continue;
              const len = 4 + rad * (10 + li * 2);
              const y = ptsY[i] + 2.8 + li;
              ctx.moveTo(x - len * 0.5, y);
              ctx.lineTo(x + len * 0.5, y);
              any = true;
            }
            if (any) {
              const ba = bucket === 1 ? gs * 0.72 : gs * 0.32;
              ctx.strokeStyle = mixRGB([250, 244, 228], [198, 224, 244], tv, ba.toFixed(3));
              ctx.stroke();
            }
          }
        }

        // Woodblock key-block ridge hairline
        ctx.beginPath();
        for (let i = 0; i < ptsLen; i++) {
          if (i === 0) ctx.moveTo(ptsX[i], ptsY[i]);
          else ctx.lineTo(ptsX[i], ptsY[i]);
        }
        ctx.strokeStyle = layer.isPaper
          ? mixRGB([22, 54, 78], [142, 184, 214], tv, lerp(0.32, 0.34, tv).toFixed(3))
          : mixRGB(PAL.keyInk[0], PAL.keyInk[1], tv, lerp(0.28 + li * 0.06, 0.52, tv).toFixed(3));
        ctx.lineWidth = layer.isPaper ? 1.05 : (0.7 + li * 0.12);
        ctx.stroke();

        if (heroHooks.afterWaveLayer) heroHooks.afterWaveLayer(ctx, li, ptsX, ptsY, ptsLen, baseY, frameInfo);
      }

      if (heroHooks.afterScene) heroHooks.afterScene(ctx, frameInfo);

      if (!reducedMotion && isVisible && pageVisible) {
        rafId = requestAnimationFrame(render);
      } else {
        rafId = null;
        lastFrameMs = 0;
      }
    }

    function ensureRunning() {
      if (reducedMotion) {
        themeVal = themeTarget;
        render(performance.now());
        return;
      }
      if (isVisible && pageVisible && rafId === null) {
        lastFrameMs = 0;
        rafId = requestAnimationFrame(render);
      }
    }

    themeListeners.push((theme, animate) => {
      themeTarget = theme === 'dark' ? 1 : 0;
      cachedSkyKey = '';
      if (animate && !reducedMotion) {
        themeFrom = themeVal;
        themeStartMs = performance.now();
        ensureRunning();
      } else {
        themeVal = themeTarget;
        themeFrom = themeTarget;
        themeStartMs = 0;
        render(performance.now());
        if (!reducedMotion) ensureRunning();
      }
    });

    stage.addEventListener('pointerenter', refreshStageRect, { passive: true });

    stage.addEventListener('pointermove', (e) => {
      const rect = stageRect || refreshStageRect();
      const rx = (e.clientX - rect.left) / Math.max(1, rect.width);
      const ry = (e.clientY - rect.top) / Math.max(1, rect.height);
      pointer.tx = (rx - 0.5) * 2;
      pointer.ty = (ry - 0.5) * 2;

      if (!reducedMotion && ry > 0.52 && simTime - pointer.lastT > 0.14 && Math.abs(e.clientX - pointer.lastX) > 12) {
        pointer.lastT = simTime;
        pointer.lastX = e.clientX;
        const estLayer = Math.max(0, Math.min(4, Math.round(((ry - 0.56) / 0.44) * 4)));
        if (ripples.length > 8) ripples.shift();
        ripples.push({ x: rx * W, t0: simTime, layer: estLayer, strength: 4.5 });
      }
    });

    stage.addEventListener('pointerdown', (e) => {
      if (reducedMotion) return;
      if (e.pointerType === 'mouse' && e.button !== 0) return;
      if (e.target && e.target.closest && e.target.closest('a, button')) return;
      const rect = refreshStageRect();
      const rx = (e.clientX - rect.left) / Math.max(1, rect.width);
      const ry = (e.clientY - rect.top) / Math.max(1, rect.height);
      if (ry < 0.45) return;
      const estLayer = Math.max(0, Math.min(4, Math.round(((Math.max(0.56, ry) - 0.56) / 0.44) * 4)));
      if (ripples.length > 10) ripples.shift();
      ripples.push({ x: rx * W, t0: simTime, layer: estLayer, strength: 8.0 });
    });

    stage.addEventListener('pointerleave', () => {
      pointer.tx = 0;
      pointer.ty = 0;
    });

    document.addEventListener('visibilitychange', () => {
      pageVisible = !document.hidden;
      if (pageVisible) ensureRunning();
      else if (rafId !== null) {
        cancelAnimationFrame(rafId);
        rafId = null;
        lastFrameMs = 0;
      }
    });

    if ('IntersectionObserver' in window) {
      const io = new IntersectionObserver((entries) => {
        isVisible = entries[0].isIntersecting;
        if (isVisible) ensureRunning();
        else if (rafId !== null) {
          cancelAnimationFrame(rafId);
          rafId = null;
          lastFrameMs = 0;
        }
      }, { threshold: 0.01 });
      io.observe(stage);
    }

    window.addEventListener('scroll', () => { stageRect = null; }, { passive: true });
    window.addEventListener('resize', () => {
      stageRect = null;
      cachedSkyKey = '';
      resize();
      if (isVisible && reducedMotion) render(performance.now());
    }, { passive: true });

    resize();
    ensureRunning();

    window.__COAST_BRIDGE__ = window.__COAST_BRIDGE__ || {};
    window.__COAST_BRIDGE__.hero = {
      stage,
      LAYERS,
      QINGSHUI_NEAR,
      GUISHAN,
      hooks: heroHooks,
      getNow: () => simTime,
      getRect: () => stageRect || refreshStageRect(),
      getState: () => {
        const scrollY = window.scrollY || 0;
        const scale = W < 640 ? 0.68 : 1.0;
        return {
          W, H, scale, scrollY, tv: themeVal,
          px: pointer.x, py: pointer.y,
          horizonY: H - 154 * scale - Math.min(10, scrollY * 0.03),
          ridgeH: W < 640 ? 220 : 390,
          isVisible
        };
      },
      sampleWaveY: (li, x, t) => {
        const layer = LAYERS[Math.max(0, Math.min(LAYERS.length - 1, li))];
        const scale = W < 640 ? 0.68 : 1.0;
        const scrollY = window.scrollY || 0;
        const pxShift = pointer.x * 28 * layer.parallax;
        return waveY(layer, x, t, pxShift, li, scale, scrollY);
      },
      sampleWaveSlope: (li, x, t) => {
        const layer = LAYERS[Math.max(0, Math.min(LAYERS.length - 1, li))];
        const scale = W < 640 ? 0.68 : 1.0;
        const scrollY = window.scrollY || 0;
        const pxShift = pointer.x * 28 * layer.parallax;
        return (waveY(layer, x + 4, t, pxShift, li, scale, scrollY) - waveY(layer, x - 4, t, pxShift, li, scale, scrollY)) / 8;
      },
      addRipple: (x, li, strength) => {
        if (ripples.length > 12) ripples.shift();
        ripples.push({ x, t0: simTime, layer: li, strength: strength || 7.5 });
      },
      ensureRunning
    };
  }

  /* ========================================================================
     2. FULL-PIGMENT RETURNING TIDE AT PAGE FOOTER (Interactive Closing Swell)
     ======================================================================== */
  function initFooterTide() {
    const canvas = document.getElementById('footer-tide');
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let W = 0;
    let H = 0;
    let dpr = 1;
    let isVisible = false;
    let rafId = null;
    let themeVal = currentTheme === 'dark' ? 1 : 0;
    let themeFrom = themeVal;
    let themeTarget = themeVal;
    let themeStartMs = 0;
    let px = 0;
    let pxTarget = 0;
    let simTime = 0;
    let lastFrameMs = 0;
    let footerRect = null;
    const footerHooks = { afterWaveLayer: null };

    const WAVES = [
      { y: 0.30, amp: 5.5, freq: 0.0040, speed: 0.22, phase: 0.7, top: [[124, 160, 178], [21, 41, 61]], bot: [[92, 134, 156], [16, 33, 50]], line: 0.24 },
      { y: 0.54, amp: 7.0, freq: 0.0033, speed: 0.29, phase: 2.8, top: [[56, 102, 128],  [15, 31, 48]], bot: [[36, 78, 104],  [11, 24, 38]], line: 0.32 },
      { y: 0.78, amp: 6.5, freq: 0.0028, speed: 0.36, phase: 4.9, top: [[24, 60, 86],    [10, 22, 36]], bot: [[15, 42, 64],   [7, 15, 25]],  line: 0.36 }
    ];

    let fCap = 200;
    let fPtsX = new Float32Array(fCap);
    let fPtsY = new Float32Array(fCap);

    function refreshFooterRect() {
      footerRect = canvas.getBoundingClientRect();
      return footerRect;
    }

    function sampleFooterWaveY(i, x, t) {
      const l = WAVES[i];
      const p = (x + px * (12 + i * 8)) * l.freq - t * l.speed + l.phase;
      const dy = (Math.sin(p) - 0.36 * Math.sin(2 * p + 0.3) * 0.38) * l.amp;
      return H * l.y + dy;
    }

    function resize() {
      const r = refreshFooterRect();
      W = Math.max(1, Math.round(r.width));
      H = Math.max(1, Math.round(r.height));
      dpr = Math.min(window.devicePixelRatio || 1, 2);
      canvas.width = Math.round(W * dpr);
      canvas.height = Math.round(H * dpr);
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    }

    function render(nowMs) {
      const dt = lastFrameMs ? Math.min(0.04, Math.max(0, (nowMs - lastFrameMs) * 0.001)) : 0.016;
      lastFrameMs = nowMs;
      if (!reducedMotion) simTime += dt;
      const t = simTime;

      if (themeStartMs > 0) {
        const p = Math.min(1, (nowMs - themeStartMs) / THEME_FADE_MS);
        themeVal = themeFrom + (themeTarget - themeFrom) * easeCss(p);
        if (p >= 1) {
          themeVal = themeTarget;
          themeStartMs = 0;
        }
      } else {
        themeVal = themeTarget;
      }
      px += (pxTarget - px) * 0.06;

      ctx.clearRect(0, 0, W, H);
      const step = Math.max(5, Math.round(W / 160));
      const needed = Math.ceil((W + step * 2) / step) + 2;
      if (needed > fCap) {
        fCap = needed + 32;
        fPtsX = new Float32Array(fCap);
        fPtsY = new Float32Array(fCap);
      }

      for (let i = 0; i < WAVES.length; i++) {
        const l = WAVES[i];
        let n = 0;
        for (let x = -step; x <= W + step; x += step) {
          fPtsX[n] = x;
          fPtsY[n] = sampleFooterWaveY(i, x, t);
          n += 1;
        }
        const g = ctx.createLinearGradient(0, H * l.y - l.amp, 0, H);
        g.addColorStop(0, mixRGB(l.top[0], l.top[1], themeVal));
        g.addColorStop(1, mixRGB(l.bot[0], l.bot[1], themeVal));

        ctx.beginPath();
        ctx.moveTo(fPtsX[0], H + 2);
        for (let j = 0; j < n; j++) ctx.lineTo(fPtsX[j], fPtsY[j]);
        ctx.lineTo(fPtsX[n - 1], H + 2);
        ctx.closePath();
        ctx.fillStyle = g;
        ctx.fill();

        ctx.beginPath();
        for (let j = 0; j < n; j++) {
          if (j === 0) ctx.moveTo(fPtsX[j], fPtsY[j]);
          else ctx.lineTo(fPtsX[j], fPtsY[j]);
        }
        ctx.strokeStyle = mixRGB([16, 42, 62], [156, 198, 226], themeVal, l.line);
        ctx.lineWidth = 0.85;
        ctx.stroke();

        if (footerHooks.afterWaveLayer) {
          footerHooks.afterWaveLayer(ctx, i, { t, dt, tv: themeVal, W, H, px });
        }
      }

      if (!reducedMotion && isVisible && !document.hidden) {
        rafId = requestAnimationFrame(render);
      } else {
        rafId = null;
        lastFrameMs = 0;
      }
    }

    function ensureRunning() {
      if (reducedMotion) {
        themeVal = themeTarget;
        render(performance.now());
        return;
      }
      if (isVisible && !document.hidden && rafId === null) {
        lastFrameMs = 0;
        rafId = requestAnimationFrame(render);
      }
    }

    canvas.addEventListener('pointerenter', refreshFooterRect, { passive: true });
    canvas.addEventListener('pointermove', (e) => {
      const r = footerRect || refreshFooterRect();
      pxTarget = ((e.clientX - r.left) / Math.max(1, r.width) - 0.5) * 2;
    });
    canvas.addEventListener('pointerleave', () => { pxTarget = 0; });

    document.addEventListener('visibilitychange', () => {
      if (!document.hidden && isVisible) ensureRunning();
      else if (rafId !== null) {
        cancelAnimationFrame(rafId);
        rafId = null;
        lastFrameMs = 0;
      }
    });

    themeListeners.push((theme, animate) => {
      themeTarget = theme === 'dark' ? 1 : 0;
      if (animate && !reducedMotion && isVisible) {
        themeFrom = themeVal;
        themeStartMs = performance.now();
        ensureRunning();
      } else {
        themeVal = themeTarget;
        themeFrom = themeTarget;
        themeStartMs = 0;
        render(performance.now());
        if (!reducedMotion && isVisible) ensureRunning();
      }
    });

    if ('IntersectionObserver' in window) {
      const io = new IntersectionObserver((entries) => {
        isVisible = entries[0].isIntersecting;
        if (isVisible) ensureRunning();
        else if (rafId !== null) {
          cancelAnimationFrame(rafId);
          rafId = null;
          lastFrameMs = 0;
        }
      }, { threshold: 0.01 });
      io.observe(canvas);
    } else {
      isVisible = true;
      ensureRunning();
    }

    window.addEventListener('scroll', () => { footerRect = null; }, { passive: true });
    window.addEventListener('resize', () => {
      footerRect = null;
      resize();
      if (isVisible) render(performance.now());
    }, { passive: true });

    resize();
    render(performance.now());

    window.__COAST_BRIDGE__ = window.__COAST_BRIDGE__ || {};
    window.__COAST_BRIDGE__.footer = {
      canvas,
      hooks: footerHooks,
      getNow: () => simTime,
      getRect: () => footerRect || refreshFooterRect(),
      sampleWaveY: sampleFooterWaveY,
      sampleWaveSlope: (i, x, t) => (sampleFooterWaveY(i, x + 5, t) - sampleFooterWaveY(i, x - 5, t)) / 10,
      ensureRunning
    };
  }

  function init() {
    setThemeDOM(currentTheme);
    applyLang(detectInitialLang(), false);

    const btnEn = document.getElementById('btn-lang-en');
    const btnZh = document.getElementById('btn-lang-zh');
    const btnTheme = document.getElementById('btn-theme');

    if (btnEn) btnEn.addEventListener('click', () => applyLang('en', true));
    if (btnZh) btnZh.addEventListener('click', () => applyLang('zh', true));
    if (btnTheme) btnTheme.addEventListener('click', () => toggleTheme(btnTheme));

    initCopyEmail();
    initTaipeiClock();
    initPaperGrain();
    initScrollChrome();
    initHeroCoastScene();
    initFooterTide();
    fetchLiveStars();

    window.__COAST_BRIDGE__ = window.__COAST_BRIDGE__ || {};
    window.__COAST_BRIDGE__.core = {
      getLang: () => currentLang,
      getTheme: () => currentTheme,
      reducedMotion,
      lerp,
      mixRGB
    };
    window.dispatchEvent(new CustomEvent('coast:ready'));

    window.addEventListener('resize', updateLangIndicator, { passive: true });
    if (document.fonts && document.fonts.ready) {
      document.fonts.ready.then(updateLangIndicator);
    }
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }
})();
