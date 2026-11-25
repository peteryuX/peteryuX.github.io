/* ==========================================================================
   Peter (Kuan-Yu) Huang — Production Interactive Controller & Ukiyo-e Canvas
   ========================================================================== */

(function () {
  'use strict';

  const I18N = {
    en: {
      htmlLang: 'en',
      pageTitle: 'Peter (Kuan-Yu) Huang — Tech Lead Manager, Google Android XR',
      brandName: 'Peter Huang',
      navWork: 'Work',
      navExp: 'Experience',
      navResearch: 'Research',
      navCreds: 'Credentials',
      modeDay: 'Day',
      modeNight: 'Night',
      heroRole: 'Google · Tech Lead Manager · Android XR',
      heroLoc: 'Taipei · 25.03°N',
      heroName: 'Peter <span class="hero-name-sub">· Kuan-Yu Huang</span>',
      heroTagline: 'Perception &amp; spatial computing for <em>Android XR</em> — from on-device 3D scene understanding to production ML.',
      heroIntro: 'I\'m Peter, an Engineering Manager &amp; Tech Lead (TLM) in Taipei working on <strong>Perception for Android XR (World Sensing)</strong> at <strong>Google</strong>. Over 8+ years across <strong>Google</strong>, <strong>HTC VIVE</strong>, <strong>Dcard</strong>, and <strong>Garena</strong>, I\'ve led teams and shipped end-to-end ML systems — spanning 3D scene understanding, hand/pose tracking, 3D data pipelines, and large-scale recommendation.',
      ctaCv: 'Resume / CV ↗',
      scrollCue: 'Scroll ↓',
      heroMetrics: [
        ['Google Android XR', 'Tech Lead Manager'],
        ['8+ Years', 'XR Perception & ML'],
        ['750+ ★', 'Open-Source CV'],
        ['IEEE SAM 2020', 'NTHU M.S. EE']
      ],
      sec1Kicker: '01 · Selected Work',
      sec1Title: 'Featured Project & Open Source',
      sec1Sub: 'Side projects & TensorFlow 2 vision repos',
      auroraBadge: 'Featured',
      auroraSub: 'Aurora & Clear-Sky Forecast · PWA',
      liveApp: 'Live App ↗',
      validation: 'Validation',
      auroraDesc: 'A zero-dependency global aurora and 360° clear-sky forecasting PWA built on space-weather physics — combining 14 live NOAA SWPC feeds, MET Norway 2.5km layered clouds, airport METAR, JPL astronomy, and multi-year public-archive validation.',
      mFeeds: 'NOAA Live Feeds',
      mClouds: 'Layered Clouds',
      mRadar: 'Polar Sky Radar',
      mPwa: 'Pure Static PWA',
      repoRetina: 'Single-stage dense face localization (ResNet50 & MobileNetV2) in TensorFlow 2, supporting single-GPU training with Colab.',
      repoArc: 'Clean TensorFlow 2 implementation of CVPR 2019 ArcFace (Additive Angular Margin Loss) with ResNet50 and MobileNetV2 backbones.',
      repoEsrgan: 'ECCV 2018 Enhanced Super-Resolution GAN (ESRGAN) in TensorFlow 2 with perceptual adversarial training and Colab demo.',
      repoGhm: 'TensorFlow implementation of AAAI 2019 (Oral) Gradient Harmonized Single-stage Detector loss for hard-example balancing.',
      repoPcdarts: 'Memory-efficient Differentiable Architecture Search (ICLR 2020 PC-DARTS) implemented in TensorFlow 2.',
      allReposTitle: 'All Repositories ↗',
      allReposDesc: 'Qualcomm SNPE edge inference notes, headless GPU fan tools, and other ML experiments.',
      sec2Kicker: '02 · Experience',
      sec2Title: 'About & Experience',
      sec2Sub: '2011 — Present · Taipei & Hsinchu',
      bioLabel: 'About',
      focusLabel: 'Technical Focus',
      focusChips: ['Android XR / World Sensing', '3D Scene Understanding', 'Depth & Segmentation', 'On-Device CV & Quantization', '3D Data & Labeling Systems', 'Recommender Systems'],
      bioHtml: `
        <p>I'm an Engineering Manager &amp; Tech Lead focused on spatial perception and machine learning — taking computer vision models from data systems and prototypes into reliable, real-time on-device products.</p>
        <p>Currently at <a href="https://arvr.google.com/" target="_blank" rel="noopener noreferrer" class="ed-link"><strong>Google</strong></a>, I serve as a TLM on <strong>Perception for Android XR (World Sensing)</strong>. Earlier across two stints at <a href="https://www.vive.com/us/" target="_blank" rel="noopener noreferrer" class="ed-link"><strong>HTC VIVE</strong></a>, I led ML scene understanding, 3D room capture, tracking algorithms, and 3D data/labeling infrastructure across VIVE Focus Vision, XR Elite, Focus 3, and Cosmos.</p>
        <p>Outside XR, I built large-scale recommendation systems as a Senior Data Scientist at Garena (<a href="https://booyah.live/" target="_blank" rel="noopener noreferrer" class="ed-link"><strong>BOOYAH! Live</strong></a>, lifting clip view duration by 10%) and Senior ML Engineer at <a href="https://www.dcard.tw/" target="_blank" rel="noopener noreferrer" class="ed-link"><strong>Dcard</strong></a>. I hold an M.S. in Electrical Engineering from NTHU (advised by Prof. <a href="https://scholar.google.com.tw/citations?user=fXN3dl0AAAAJ&hl=zh-TW" target="_blank" rel="noopener noreferrer" class="ed-link">Chia-Wen Lin</a>) and a B.S. in EE from CCU.</p>
      `,
      timeline: [
        {
          org: 'Google',
          badge: 'Current',
          role: 'Tech Lead Manager (TLM) · Perception for Android XR (World Sensing)',
          detail: 'Engineering Manager & Tech Lead working on World Sensing perception for Android XR.',
          period: 'Feb 2025 — Present · Taipei'
        },
        {
          org: 'HTC VIVE',
          role: 'Senior Assistant Manager & Tech Lead · XR Scene Understanding',
          detail: 'Led real-time depth estimation, semantic segmentation, and 3D room capture for VIVE Focus Vision & XR Elite; built a portable 3D indoor capture kit and multi-user 3D labeling platform.',
          period: 'Nov 2022 — Feb 2025 · Taipei'
        },
        {
          org: 'Dcard',
          role: 'Senior Machine Learning Engineer · Post Recommendation',
          detail: 'Optimized social feed recommendation using NLP sentiment analysis and special-event alert detection.',
          period: 'Aug 2022 — Nov 2022 · Taipei'
        },
        {
          org: 'Garena | SEA (BOOYAH! Live)',
          role: 'Senior Data Scientist · Video Recommendation',
          detail: 'Shipped a neural video recommender with TPE & SG teams (+10% clip view duration vs. legacy rules), spanning Hadoop/Spark/GCP pipelines, A/B testing, and anti-bot detection.',
          period: 'Feb 2021 — Mar 2022 · Taipei'
        },
        {
          org: 'HTC VIVE',
          role: 'Engineer → Senior → Principal Engineer · VR/AR Computer Vision',
          detail: 'Developed DNN hand, facial, body, and 6-DoF controller pose tracking for VIVE Focus 3 & Cosmos; built mobile quantization, Blender/Unity synthetic data, and a multi-camera mocap rig.',
          period: 'Dec 2017 — Feb 2021 · Taipei'
        },
        {
          org: 'National Tsing Hua University',
          role: 'M.S. in Electrical Engineering · Computer Vision & Image Processing',
          detail: 'Thesis on Deep Siamese IQA (Prof. Chia-Wen Lin); Teaching Assistant for Data Structures (Dept. of Quantitative Finance).',
          period: '2015 — 2017 · Hsinchu'
        },
        {
          org: 'National Chung Cheng University',
          role: 'B.S. in Electrical Engineering · Communications & Networking',
          period: '2011 — 2015 · Chiayi'
        }
      ],
      sec3Kicker: '03 · Research',
      sec3Title: 'Publications & Academic Projects',
      sec3Sub: 'Click any item to view abstract',
      pubBadge: 'IEEE SAM 2020 · Publication',
      pubDesc: 'Proposes a Coupled Adversarial Net (CAN) built on a Siamese structure, combining adversarial loss and semantic feature distances to improve single-image super-resolution while lowering training complexity.',
      pubPaper: 'IEEE Xplore ↗',
      pubSlides: 'Slides ↗',
      archive: [
        {
          meta: "2017 · Master's Thesis · NTHU",
          title: 'Pairwise Learning on Image Quality Assessment using Deep Siamese Neural Network',
          desc: 'A Siamese pairwise training approach on paired-comparison data for subjective image quality and retargeting assessment, lowering labeling cost while outperforming prior baselines even with limited annotations.',
          credit: 'Advisor: <a href="https://scholar.google.com.tw/citations?user=fXN3dl0AAAAJ&hl=zh-TW" target="_blank" rel="noopener noreferrer" class="ed-link">Prof. Chia-Wen Lin</a>',
          linkLabel: 'Thesis PDF ↗',
          url: 'https://drive.google.com/file/d/1zC_vFjnTs9s74RT2SB_xEcDwKQv6sKQ_/view?usp=sharing'
        },
        {
          meta: '2017 · Side Project',
          title: 'Open View: Single Image Retargeting by GAN-based Boundary Inpainting',
          desc: 'Combines image retargeting and GAN boundary inpainting (adversarial, perceptual, and texture losses) to adapt 4:3 media to 16:9 displays without stretching distortion.',
          credit: 'Kuan-Yu Huang',
          linkLabel: 'Slides ↗',
          url: 'https://drive.google.com/file/d/1NLrT50UaFifBsIi-Yc9W2Gy-PUMuDxg9/view?usp=sharing'
        },
        {
          meta: '2016 · Industry-Academy Co-op (NOVATEK)',
          title: 'A Resource-Constrained Scheme of Image Super-Resolution',
          desc: 'A lightweight CNN super-resolution design for embedded digital TV chips, pairing shallow FSRCNN with ESPCN sub-pixel upsampling, divisive normalization, and total variation loss.',
          credit: 'Kuan-Yu Huang & Xian-Xin Lu · Advisor: Prof. Chia-Wen Lin',
          linkLabel: 'PDF ↗',
          url: 'https://drive.google.com/file/d/1yb6bVlw7jj-KvpVjZ3M0Fg_qAB2a69m2/view?usp=sharing'
        },
        {
          meta: '2015 · Computer Vision Project',
          title: 'Real-time Computing Mathematical Expressions Recognized from Images',
          desc: 'Detects equations from images using feature-point extraction, segments individual characters, and classifies digits and operators for real-time evaluation.',
          credit: 'Kuan-Yu Huang & Yi-Mu Lo · Instructor: <a href="https://scholar.google.com.tw/citations?hl=zh-TW&user=1Rf6sGcAAAAJ" target="_blank" rel="noopener noreferrer" class="ed-link">Prof. Min Sun</a>',
          linkLabel: 'PDF ↗',
          url: 'https://drive.google.com/file/d/1hzM7n5ViOtLgSOEAzUTEE08Ddksfh81R/view?usp=sharing'
        },
        {
          meta: '2014 · Independent Study · CCU',
          title: '5G Communication — LTE TM6 & 3D Beamforming Visualization',
          desc: 'A Java 3D visualization tool modeling three base stations under LTE Release 9 TM6 beamforming to observe signal intensity variations across different codebooks.',
          credit: 'Kuan-Yu Huang & Heng-Zhe Zhang · Advisor: <a href="https://scholar.google.com.tw/citations?hl=zh-TW&user=a-m1LgkAAAAJ" target="_blank" rel="noopener noreferrer" class="ed-link">Prof. Jen-Yi Pan</a>',
          linkLabel: 'PDF ↗',
          url: 'https://drive.google.com/open?id=1UNHMmHzNqt6kpYvMrC4SrTKM2OBBdpv5'
        }
      ],
      sec4Kicker: '04 · Credentials',
      sec4Title: 'Certifications',
      certs: [
        { title: 'TensorFlow Developer Certificate', sub: 'TensorFlow · ID 28493329 · 2021', act: 'Verify ↗', url: 'https://www.credential.net/6a216cc0-2820-4325-82d5-634dca3c6791' },
        { title: 'Advanced ML with TensorFlow on GCP', sub: 'Coursera + Google Cloud · P3FEDSP296K4 · 2019', act: 'Verify ↗', url: 'https://www.coursera.org/account/accomplishments/specialization/P3FEDSP296K4' },
        { title: 'ML with TensorFlow on GCP Specialization', sub: 'Coursera + Google Cloud · 9VP8REDMAR3X · 2019', act: 'Verify ↗', url: 'https://www.coursera.org/account/accomplishments/specialization/9VP8REDMAR3X' },
        { title: '100Days Machine Learning Marathon', sub: 'CUPOY · Kaggle · 2019010026 · 2019', act: 'Detail ↗', url: 'https://github.com/peteryuX/100Day-ML-Marathon' }
      ],
      footerSign: 'Peter (Kuan-Yu) Huang · 25.03°N 121.56°E · [D] Theme [L] Lang',
      backTop: 'Top ↑'
    },

    zh: {
      htmlLang: 'zh-Hant',
      pageTitle: '黃冠諭 (Peter) — Google Android XR Tech Lead Manager',
      brandName: '黃冠諭 · Peter',
      navWork: '作品',
      navExp: '經歷',
      navResearch: '研究',
      navCreds: '認證',
      modeDay: '晝',
      modeNight: '夜',
      heroRole: 'Google · Tech Lead Manager · Android XR',
      heroLoc: '台北 · 25.03°N',
      heroName: '黃冠諭 <span class="hero-name-sub">Peter · Kuan-Yu Huang</span>',
      heroTagline: '專注於<span class="em-zh">空間感知（World Sensing）與裝置端電腦視覺</span>——從 3D 場景理解到大規模 ML 系統落地。',
      heroIntro: '我是 Peter，現居台北，目前在 <strong>Google</strong> 擔任 <strong>Android XR Perception（World Sensing）</strong>的 Engineering Manager &amp; Tech Lead（TLM）。過去八年多歷經 <strong>Google</strong>、<strong>HTC VIVE</strong>、<strong>Dcard</strong> 與 <strong>Garena</strong>，從演算法研發一路做到技術團隊帶領與系統落地，涵蓋 3D 場景理解、手部與姿態追蹤、3D 資料標註系統，以及高流量推薦系統。',
      ctaCv: '履歷 CV ↗',
      scrollCue: '往下看 ↓',
      heroMetrics: [
        ['Google Android XR', 'Tech Lead Manager'],
        ['8+ 年經驗', '空間感知與 ML 落地'],
        ['750+ ★', '開源視覺專案'],
        ['IEEE SAM 2020', '清大電機碩士']
      ],
      sec1Kicker: '01 · 作品與開源',
      sec1Title: '代表專案與開源實作',
      sec1Sub: '個人專案與 TensorFlow 2 電腦視覺實作',
      auroraBadge: '代表專案',
      auroraSub: '極光與晴空預報 · PWA',
      liveApp: '開啟應用 ↗',
      validation: '回測驗證',
      auroraDesc: '以零前端框架依賴的純靜態架構實作，結合太空天氣物理模型打造的全球極光與 360° 晴空預報雷達。即時串接 14 組 NOAA 太陽風與地磁訊號、挪威氣象局 2.5 公里分層雲圖、機場 METAR 實報與 JPL 天文曆算，並拿多年公開觀測紀錄回測校準。',
      mFeeds: 'NOAA 即時訊號',
      mClouds: '分層雲圖解析',
      mRadar: '極區 360° 晴空',
      mPwa: '零依賴純靜態',
      repoRetina: '以 TensorFlow 2 實作單階段高密度人臉定位（支援 ResNet50 與 MobileNetV2），單張 GPU 即可訓練，附 Colab 範例。',
      repoArc: 'CVPR 2019 人臉辨識論文 ArcFace（角度邊際損失）的 TensorFlow 2 實作，提供 ResNet50 與 MobileNetV2 骨幹。',
      repoEsrgan: 'ECCV 2018 超解析度生成對抗網路（ESRGAN）的 TensorFlow 2 實作，結合感知與對抗損失訓練，附 Colab 範例。',
      repoGhm: 'AAAI 2019 (Oral) 梯度協調損失（GHM Loss）的 TensorFlow 實作，用來平衡單階段偵測中的難易樣本權重。',
      repoPcdarts: 'ICLR 2020 輕量可微神經架構搜尋（PC-DARTS）的 TensorFlow 2 實作，有效降低搜尋階段的記憶體用量。',
      allReposTitle: '看全部開源專案 ↗',
      allReposDesc: '包含 Qualcomm SNPE 邊緣推論筆記、無頭 Linux 顯卡風扇控制與其他 ML 實驗工具。',
      sec2Kicker: '02 · 經歷',
      sec2Title: '關於我與學經歷',
      sec2Sub: '2011 — 至今 · 台北與新竹',
      bioLabel: '簡介',
      focusLabel: '技術領域',
      focusChips: ['Android XR / World Sensing', '3D 場景理解與深度估計', '裝置端推論與模型量化', '3D 資料採集與標註系統', '推薦系統 RecSys', 'TensorFlow / SNPE'],
      bioHtml: `
        <p>我是專注於空間感知與機器學習的工程經理與技術負責人（TLM），重視從資料系統、演算法研發到裝置端即時推論的完整產品落地。</p>
        <p>目前在 <a href="https://arvr.google.com/" target="_blank" rel="noopener noreferrer" class="ed-link"><strong>Google</strong></a> 負責 <strong>Android XR Perception（World Sensing）</strong>。先前兩度任職於 <a href="https://www.vive.com/us/" target="_blank" rel="noopener noreferrer" class="ed-link"><strong>HTC VIVE</strong></a>，帶領 XR 場景理解、3D 空間建圖、手部／姿態追蹤演算法，以及 3D 資料採集與多人標註平台開發（產品涵蓋 VIVE Focus Vision、XR Elite、Focus 3 與 Cosmos）。</p>
        <p>此外也曾投入大規模消費級推薦系統：在 Garena 擔任資深資料科學家負責 <a href="https://booyah.live/" target="_blank" rel="noopener noreferrer" class="ed-link"><strong>BOOYAH! Live</strong></a> 神經網路影音推薦（提升 10% 短片觀看時長），以及在 <a href="https://www.dcard.tw/" target="_blank" rel="noopener noreferrer" class="ed-link"><strong>Dcard</strong></a> 擔任資深 ML 工程師優化貼文推薦。學歷為國立清華大學電機碩士（指導教授：<a href="https://scholar.google.com.tw/citations?user=fXN3dl0AAAAJ&hl=zh-TW" target="_blank" rel="noopener noreferrer" class="ed-link">林嘉文教授</a>）與國立中正大學電機學士。</p>
      `,
      timeline: [
        {
          org: 'Google',
          badge: '現職',
          role: 'Tech Lead Manager (TLM) · Perception for Android XR (World Sensing)',
          detail: '擔任 Engineering Manager & Tech Lead，負責 Android XR 空間感知（World Sensing）技術研發與團隊帶領。',
          period: '2025.02 — 至今 · 台北'
        },
        {
          org: 'HTC VIVE',
          role: '資深副理 & Tech Lead · XR 場景理解與空間運算',
          detail: '帶領 VIVE Focus Vision／XR Elite 的即時深度估計、語意分割與 3D 房間建圖研發，並打造可攜式室內 3D 採集套件與多人 3D 標註平台。',
          period: '2022.11 — 2025.02 · 台北'
        },
        {
          org: 'Dcard',
          role: 'Senior Machine Learning Engineer · 貼文推薦系統',
          detail: '結合 NLP 情緒分析與突發事件偵測，優化社群平台貼文推薦排序與互動體驗。',
          period: '2022.08 — 2022.11 · 台北'
        },
        {
          org: 'Garena | SEA（BOOYAH! Live）',
          role: 'Senior Data Scientist · 影音推薦系統',
          detail: '與台北、新加坡跨國團隊打造神經網路影音推薦系統（短片觀看時長較舊規則提升 10%），涵蓋 Hadoop／Spark／GCP 訓練管線、A/B 測試與反機器人偵測。',
          period: '2021.02 — 2022.03 · 台北'
        },
        {
          org: 'HTC VIVE',
          role: 'Engineer → Senior → Principal Engineer · VR/AR 電腦視覺',
          detail: '開發 VIVE Focus 3／Cosmos 的手部、臉部、肢體與 6-DoF 控制器追蹤演算法，並推動行動端神經網路量化、Blender／Unity 合成資料與多鏡頭動捕採集系統。',
          period: '2017.12 — 2021.02 · 台北'
        },
        {
          org: '國立清華大學',
          role: '電機工程研究所 碩士 · 電腦視覺與影像處理',
          detail: '碩士論文研究深度孿生網路影像畫質評估（林嘉文教授指導）；曾任計量財務金融學系資料結構助教。',
          period: '2015 — 2017 · 新竹'
        },
        {
          org: '國立中正大學',
          role: '電機工程學系 學士 · 通訊與網路',
          period: '2011 — 2015 · 嘉義'
        }
      ],
      sec3Kicker: '03 · 研究與專案',
      sec3Title: '論文與早期研究',
      sec3Sub: '點擊任一列可展開摘要與連結',
      pubBadge: 'IEEE SAM 2020 · 會議論文',
      pubDesc: '提出以孿生網路（Siamese Network）為骨幹的耦合對抗網路（CAN），同時結合生成對抗損失與語意特徵距離；在降低訓練複雜度的同時，提升單張影像超解析度的特徵擷取與畫質表現。',
      pubPaper: 'IEEE Xplore 論文 ↗',
      pubSlides: '簡報 Slides ↗',
      archive: [
        {
          meta: '2017 · 碩士論文 · 國立清華大學',
          title: '基於深度孿生網路的成對學習影像畫質評估（Siamese IQA）',
          desc: '以成對比較（Pairwise）訓練深度孿生網路來預測主觀畫質，大幅降低蒐集大量主觀評分資料的門檻；在影像重定標（Retargeting）評測上優於既有方法，在有限標註下也能維持穩定表現。',
          credit: '指導教授：<a href="https://scholar.google.com.tw/citations?user=fXN3dl0AAAAJ&hl=zh-TW" target="_blank" rel="noopener noreferrer" class="ed-link">林嘉文教授</a>',
          linkLabel: '碩士論文 PDF ↗',
          url: 'https://drive.google.com/file/d/1zC_vFjnTs9s74RT2SB_xEcDwKQv6sKQ_/view?usp=sharing'
        },
        {
          meta: '2017 · 個人專案',
          title: 'Open View：以 GAN 邊界補全延展影像比例',
          desc: '結合影像重定標與 GAN 邊界補全（對抗、感知與紋理損失）往兩側補齊畫面，讓舊式 4:3 影像在 16:9 寬螢幕上完整顯示，減少拉伸變形。',
          credit: '黃冠諭（Kuan-Yu Huang）',
          linkLabel: '簡報 Slides ↗',
          url: 'https://drive.google.com/file/d/1NLrT50UaFifBsIi-Yc9W2Gy-PUMuDxg9/view?usp=sharing'
        },
        {
          meta: '2016 · 產學合作（聯詠科技 NOVATEK）',
          title: '適用於嵌入式電視晶片的輕量影像超解析度架構',
          desc: '針對高畫質數位電視晶片的資源限制，以淺層 FSRCNN 搭配 ESPCN 次像素上採樣，加上除法正規化與全變分損失壓制低容量網路常見的雜訊偽影，以較少參數達到相近畫質。',
          credit: '黃冠諭、呂咸欣 · 指導教授：林嘉文教授',
          linkLabel: '專題報告 PDF ↗',
          url: 'https://drive.google.com/file/d/1yb6bVlw7jj-KvpVjZ3M0Fg_qAB2a69m2/view?usp=sharing'
        },
        {
          meta: '2015 · 電腦視覺課程專題',
          title: '即時影像數學算式辨識與運算',
          desc: '直接從影像擷取特徵點定位數學算式、切出單一字元並辨識數字與運算符號，省去手動輸入計算機的步驟並即時算出結果。',
          credit: '黃冠諭、羅一木 · 授課教師：<a href="https://scholar.google.com.tw/citations?hl=zh-TW&user=1Rf6sGcAAAAJ" target="_blank" rel="noopener noreferrer" class="ed-link">孫民教授</a>',
          linkLabel: '專題報告 PDF ↗',
          url: 'https://drive.google.com/file/d/1hzM7n5ViOtLgSOEAzUTEE08Ddksfh81R/view?usp=sharing'
        },
        {
          meta: '2014 · 獨立研究 · 國立中正大學',
          title: '5G 通訊：LTE TM6 與波束成形（Beamforming）3D 視覺化',
          desc: '以 Java 實作三基地台 3D 訊號視覺化平台，呈現 LTE Release 9 TM6 傳輸模式搭配不同碼本（Codebook）時，波束成形對空間訊號強度的即時變化。',
          credit: '黃冠諭、張恆哲 · 指導教授：<a href="https://scholar.google.com.tw/citations?hl=zh-TW&user=a-m1LgkAAAAJ" target="_blank" rel="noopener noreferrer" class="ed-link">潘仁義教授</a>',
          linkLabel: '專題報告 PDF ↗',
          url: 'https://drive.google.com/open?id=1UNHMmHzNqt6kpYvMrC4SrTKM2OBBdpv5'
        }
      ],
      sec4Kicker: '04 · 認證',
      sec4Title: '專業認證',
      certs: [
        { title: 'TensorFlow Developer Certificate', sub: 'TensorFlow 官方認證 · #28493329 · 2021', act: '驗證 ↗', url: 'https://www.credential.net/6a216cc0-2820-4325-82d5-634dca3c6791' },
        { title: 'Advanced ML with TensorFlow on GCP', sub: 'Coursera + Google Cloud 進階專項 · P3FEDSP296K4 · 2019', act: '驗證 ↗', url: 'https://www.coursera.org/account/accomplishments/specialization/P3FEDSP296K4' },
        { title: 'ML with TensorFlow on GCP Specialization', sub: 'Coursera + Google Cloud 專項認證 · 9VP8REDMAR3X · 2019', act: '驗證 ↗', url: 'https://www.coursera.org/account/accomplishments/specialization/9VP8REDMAR3X' },
        { title: '100Days Machine Learning Marathon', sub: 'CUPOY · Kaggle 百日機器學習馬拉松 · 2019', act: '紀錄 ↗', url: 'https://github.com/peteryuX/100Day-ML-Marathon' }
      ],
      footerSign: '黃冠諭 Peter · 25.03°N 121.56°E · [D] 晝夜 [L] 語系',
      backTop: '回到頂部 ↑'
    }
  };

  const CANVAS_THEMES = {
    day: {
      id: 'day',
      colophon: '富嶽晝・台北',
      themeColor: '#f7f4ec',
      paper: '#f7f4ec',
      skyTop: '#eaf0f2',
      grainDark: 'rgba(22, 46, 70, 0.020)',
      grainLight: 'rgba(255, 255, 255, 0.055)',
      orb: '#c24032',
      orbAlpha: 0.78,
      orbCut: 'rgba(247, 244, 236, 0.28)',
      orbHalo: 'rgba(194, 64, 50, 0.10)',
      mtnFill: 'rgba(54, 92, 118, 0.10)',
      mtnSnow: 'rgba(255, 254, 250, 0.55)',
      waves: [
        { col: '#74a0b8', a: 0.14, crest: 'rgba(255, 254, 250, 0.80)' },
        { col: '#407896', a: 0.19, crest: 'rgba(186, 140, 56, 0.52)' },
        { col: '#225678', a: 0.24, crest: 'rgba(255, 254, 250, 0.70)' },
        { col: '#183f5e', a: 0.30, crest: 'rgba(255, 254, 250, 0.54)' },
        { col: '#102b45', a: 0.36, crest: 'rgba(186, 140, 56, 0.44)' }
      ]
    },
    night: {
      id: 'night',
      colophon: '松煙墨夜・台北',
      themeColor: '#161513',
      paper: '#161513',
      skyTop: '#0f0e0d',
      grainDark: 'rgba(0, 0, 0, 0.14)',
      grainLight: 'rgba(236, 228, 214, 0.032)',
      orb: '#e8dfd0',
      orbAlpha: 0.84,
      orbCut: 'rgba(22, 21, 19, 0.22)',
      orbHalo: 'rgba(232, 223, 208, 0.10)',
      mtnFill: 'rgba(68, 62, 54, 0.26)',
      mtnSnow: 'rgba(232, 223, 208, 0.16)',
      waves: [
        { col: '#4a443c', a: 0.22, crest: 'rgba(232, 223, 208, 0.36)' },
        { col: '#3a352f', a: 0.28, crest: 'rgba(196, 156, 102, 0.38)' },
        { col: '#2e2a25', a: 0.36, crest: 'rgba(232, 223, 208, 0.28)' },
        { col: '#23201c', a: 0.44, crest: 'rgba(232, 223, 208, 0.20)' },
        { col: '#1a1815', a: 0.54, crest: 'rgba(209, 87, 68, 0.34)' }
      ]
    }
  };

  let currentLang = 'en';
  let currentMode = 'day';

  function safeStorageGet(key) {
    try { return window.localStorage.getItem(key); } catch (_) { return null; }
  }
  function safeStorageSet(key, val) {
    try { window.localStorage.setItem(key, val); } catch (_) { /* noop */ }
  }

  function setLang(lang, persist) {
    currentLang = lang === 'zh' ? 'zh' : 'en';
    if (persist) safeStorageSet('peteryux_lang', currentLang);
    const d = I18N[currentLang];

    document.documentElement.lang = d.htmlLang;
    document.title = d.pageTitle;

    const btnEn = document.getElementById('btn-lang-en');
    const btnZh = document.getElementById('btn-lang-zh');
    btnEn.className = 'ctrl-opt' + (currentLang === 'en' ? ' ctrl-opt-active' : '');
    btnZh.className = 'ctrl-opt' + (currentLang === 'zh' ? ' ctrl-opt-active' : '');
    btnEn.setAttribute('aria-pressed', String(currentLang === 'en'));
    btnZh.setAttribute('aria-pressed', String(currentLang === 'zh'));

    document.getElementById('brand-name').textContent = d.brandName;
    document.querySelectorAll('[data-i18n]').forEach(function (el) {
      const key = el.getAttribute('data-i18n');
      if (d[key] !== undefined) el.textContent = d[key];
    });

    document.getElementById('hero-name').innerHTML = d.heroName;
    document.getElementById('hero-tagline').innerHTML = d.heroTagline;
    document.getElementById('hero-intro').innerHTML = d.heroIntro;
    document.getElementById('bio-paragraphs').innerHTML = d.bioHtml;
    document.getElementById('focus-chips').innerHTML = d.focusChips.map(function (ch) {
      return '<span class="focus-chip">' + ch + '</span>';
    }).join('');

    document.getElementById('hero-metrics').innerHTML = d.heroMetrics.map(function (pair) {
      return '<span><strong>' + pair[0] + '</strong> · ' + pair[1] + '</span>';
    }).join('');

    document.getElementById('timeline-list').innerHTML = d.timeline.map(function (item) {
      const badge = item.badge ? '<span class="badge-accent font-draft">' + item.badge + '</span>' : '';
      const detail = item.detail ? '<p class="timeline-detail">' + item.detail + '</p>' : '';
      return (
        '<div class="timeline-row">' +
          '<div>' +
            '<div class="timeline-org"><span class="timeline-org-name font-editorial">' + item.org + '</span>' + badge + '</div>' +
            '<div class="timeline-role">' + item.role + '</div>' +
            detail +
          '</div>' +
          '<div class="timeline-period font-draft">' + item.period + '</div>' +
        '</div>'
      );
    }).join('');

    document.getElementById('archive-list').innerHTML = d.archive.map(function (a) {
      return (
        '<details class="archive-item">' +
          '<summary>' +
            '<div>' +
              '<div class="archive-meta font-draft">' + a.meta + '</div>' +
              '<div class="archive-title font-editorial">' + a.title + '</div>' +
            '</div>' +
            '<span class="acc-icon font-draft" aria-hidden="true">+</span>' +
          '</summary>' +
          '<div class="archive-body">' +
            '<p>' + a.desc + '</p>' +
            '<div class="archive-credit font-draft">' +
              '<span>' + a.credit + '</span>' +
              '<span>·</span>' +
              '<a href="' + a.url + '" target="_blank" rel="noopener noreferrer" class="accent-link">' + a.linkLabel + '</a>' +
            '</div>' +
          '</div>' +
        '</details>'
      );
    }).join('');

    document.getElementById('certs-grid').innerHTML = d.certs.map(function (c) {
      return (
        '<a href="' + c.url + '" target="_blank" rel="noopener noreferrer" class="folio folio-hover cert-card">' +
          '<div>' +
            '<div class="cert-title font-editorial">' + c.title + '</div>' +
            '<div class="cert-sub font-draft">' + c.sub + '</div>' +
          '</div>' +
          '<span class="cert-act font-draft">' + c.act + '</span>' +
        '</a>'
      );
    }).join('');
  }

  function setMode(mode, persist) {
    currentMode = mode === 'night' ? 'night' : 'day';
    if (persist) safeStorageSet('peteryux_theme', currentMode);
    document.documentElement.setAttribute('data-theme', currentMode);

    const t = CANVAS_THEMES[currentMode];
    const metaTheme = document.querySelector('meta[name="theme-color"]');
    if (metaTheme) metaTheme.setAttribute('content', t.themeColor);
    const colText = document.getElementById('colophon-text');
    if (colText) colText.textContent = t.colophon;

    const btnDay = document.getElementById('btn-day');
    const btnNight = document.getElementById('btn-night');
    btnDay.className = 'ctrl-opt' + (currentMode === 'day' ? ' ctrl-opt-active' : '');
    btnNight.className = 'ctrl-opt' + (currentMode === 'night' ? ' ctrl-opt-active' : '');
    btnDay.setAttribute('aria-pressed', String(currentMode === 'day'));
    btnNight.setAttribute('aria-pressed', String(currentMode === 'night'));

    if (reducedMotion) drawBackdrop(0);
  }

  /* Quietly refresh live GitHub star counts with instant static fallback */
  function refreshGitHubStars() {
    const cacheKey = 'peteryux_stars_v1';
    function applyStars(map) {
      document.querySelectorAll('[data-repo-stars]').forEach(function (el) {
        const repo = el.getAttribute('data-repo-stars');
        if (map[repo] !== undefined) el.textContent = '★ ' + map[repo];
      });
    }
    try {
      const cached = window.sessionStorage.getItem(cacheKey);
      if (cached) { applyStars(JSON.parse(cached)); return; }
    } catch (_) { /* ignore */ }

    if (typeof window.fetch !== 'function') return;
    fetch('https://api.github.com/users/peteryuX/repos?per_page=50')
      .then(function (r) { return r.ok ? r.json() : null; })
      .then(function (repos) {
        if (!Array.isArray(repos)) return;
        const map = {};
        repos.forEach(function (repo) {
          if (repo && repo.name && typeof repo.stargazers_count === 'number') {
            map[repo.name] = repo.stargazers_count;
          }
        });
        applyStars(map);
        try { window.sessionStorage.setItem(cacheKey, JSON.stringify(map)); } catch (_) { /* ignore */ }
      })
      .catch(function () { /* keep accurate static fallback */ });
  }

  /* =========================================================================
     60FPS LIVING UKIYO-E CANVAS (Misty Peak + Carved Sun/Moon + 5 Waves)
     ========================================================================= */
  const canvas = document.getElementById('ukiyo-canvas');
  const ctx = canvas.getContext('2d', { alpha: false });
  const reducedMotion = window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  let W = window.innerWidth;
  let H = window.innerHeight;
  let DPR = Math.min(window.devicePixelRatio || 1, 2);
  let time = 0;
  let smoothScroll = window.scrollY || 0;
  const pointer = { x: W * 0.72, y: H * 0.55, tx: W * 0.72, ty: H * 0.55 };

  const patternCache = {};
  function getPaperPattern(t) {
    if (patternCache[t.id]) return patternCache[t.id];
    const tile = document.createElement('canvas');
    tile.width = 240;
    tile.height = 240;
    const g = tile.getContext('2d');
    g.fillStyle = t.paper;
    g.fillRect(0, 0, 240, 240);
    for (let i = 0; i < 1400; i++) {
      g.fillStyle = (i % 2 === 0) ? t.grainDark : t.grainLight;
      g.fillRect(Math.random() * 240, Math.random() * 240, 1.2, 1.2);
    }
    g.lineWidth = 0.5;
    for (let i = 0; i < 45; i++) {
      const x = Math.random() * 240;
      const y = Math.random() * 240;
      const len = 10 + Math.random() * 22;
      g.strokeStyle = t.grainDark;
      g.beginPath();
      g.moveTo(x, y);
      g.quadraticCurveTo(x + len * 0.5, y + (Math.random() - 0.5) * 2, x + len, y);
      g.stroke();
    }
    const pat = ctx.createPattern(tile, 'repeat');
    patternCache[t.id] = pat;
    return pat;
  }

  function resize() {
    W = window.innerWidth;
    H = window.innerHeight;
    DPR = Math.min(window.devicePixelRatio || 1, 2);
    canvas.width = Math.floor(W * DPR);
    canvas.height = Math.floor(H * DPR);
    ctx.setTransform(DPR, 0, 0, DPR, 0, 0);
    if (reducedMotion) drawBackdrop(0);
  }

  function drawBackdrop(dt) {
    const t = CANVAS_THEMES[currentMode];
    const maxScroll = Math.max(1, document.documentElement.scrollHeight - H);
    const scrollPct = Math.min(1, Math.max(0, smoothScroll / maxScroll));

    const bar = document.getElementById('progress-bar');
    if (bar) bar.style.width = (scrollPct * 100).toFixed(1) + '%';

    const heroFade = Math.max(0, 1 - smoothScroll / (H * 0.58));
    const colEl = document.getElementById('hero-colophon');
    if (colEl) colEl.style.opacity = (heroFade * 0.65).toFixed(2);

    // 1. Washi Paper + Sky Bokashi
    ctx.fillStyle = getPaperPattern(t);
    ctx.fillRect(0, 0, W, H);

    const sky = ctx.createLinearGradient(0, 0, 0, H * 0.62);
    sky.addColorStop(0, t.skyTop);
    sky.addColorStop(1, 'rgba(0,0,0,0)');
    ctx.globalAlpha = 0.65;
    ctx.fillStyle = sky;
    ctx.fillRect(0, 0, W, H * 0.62);
    ctx.globalAlpha = 1;

    // 2. Hero Celestial Orb + Misty Peak Silhouette (clears mobile navbar & tablet headline, fades past Hero)
    if (heroFade > 0.01) {
      const isNarrow = W < 768;
      const isTablet = W >= 768 && W < 1024;
      const orbR = Math.min(W, H) * (isNarrow ? 0.062 : (isTablet ? 0.095 : 0.112));
      const orbX = W * (isNarrow ? 0.87 : (isTablet ? 0.82 : 0.74));
      const orbY = (isNarrow ? Math.max(66 + orbR, H * 0.13) : (isTablet ? H * 0.22 : H * 0.28)) - smoothScroll * 0.16;

      const halo = ctx.createRadialGradient(orbX, orbY, orbR * 0.4, orbX, orbY, orbR * 2.5);
      halo.addColorStop(0, t.orbHalo);
      halo.addColorStop(1, 'rgba(0,0,0,0)');
      ctx.globalAlpha = heroFade;
      ctx.fillStyle = halo;
      ctx.beginPath();
      ctx.arc(orbX, orbY, orbR * 2.5, 0, Math.PI * 2);
      ctx.fill();

      ctx.save();
      ctx.beginPath();
      ctx.arc(orbX, orbY, orbR, 0, Math.PI * 2);
      ctx.fillStyle = t.orb;
      ctx.globalAlpha = t.orbAlpha * heroFade * (isNarrow ? 0.72 : 1);
      ctx.fill();
      ctx.clip();
      ctx.strokeStyle = t.orbCut;
      ctx.lineWidth = 0.85;
      for (let y = orbY - orbR; y < orbY + orbR; y += 6) {
        ctx.beginPath();
        ctx.moveTo(orbX - orbR, y);
        ctx.lineTo(orbX + orbR, y + Math.sin(y * 0.14 + time * 0.15) * 1.1);
        ctx.stroke();
      }
      ctx.restore();

      if (!isNarrow) {
        const peakX = W * (isTablet ? 0.84 : 0.78);
        const peakY = H * (isTablet ? 0.34 : 0.39) - smoothScroll * 0.08;
        const baseY = H * 0.65;
        ctx.save();
        ctx.globalAlpha = heroFade;
        ctx.beginPath();
        ctx.moveTo(peakX - W * 0.32, baseY);
        ctx.quadraticCurveTo(peakX - W * 0.10, baseY - 22, peakX - 18, peakY);
        ctx.lineTo(peakX + 18, peakY);
        ctx.quadraticCurveTo(peakX + W * 0.10, baseY - 22, peakX + W * 0.30, baseY);
        ctx.closePath();
        const mGrad = ctx.createLinearGradient(0, peakY, 0, baseY);
        mGrad.addColorStop(0, t.mtnFill);
        mGrad.addColorStop(1, 'rgba(0,0,0,0)');
        ctx.fillStyle = mGrad;
        ctx.fill();

        ctx.beginPath();
        ctx.moveTo(peakX - 42, peakY + 34);
        ctx.quadraticCurveTo(peakX - 24, peakY + 14, peakX - 18, peakY);
        ctx.lineTo(peakX + 18, peakY);
        ctx.quadraticCurveTo(peakX + 24, peakY + 14, peakX + 42, peakY + 34);
        ctx.quadraticCurveTo(peakX + 16, peakY + 22, peakX, peakY + 32);
        ctx.quadraticCurveTo(peakX - 16, peakY + 22, peakX - 42, peakY + 34);
        ctx.closePath();
        ctx.fillStyle = t.mtnSnow;
        ctx.fill();
        ctx.restore();
      }
      ctx.globalAlpha = 1;
    }

    // 3. 5 Translucent Watercolor-Bokashi Waves
    const layers = t.waves.length;
    const cols = W < 600 ? 56 : 108;
    const px = pointer.x;
    const py = pointer.y;

    for (let l = 0; l < layers; l++) {
      const ln = l / (layers - 1);
      const wConf = t.waves[l];
      const baseY = H * (0.58 + ln * 0.30) - scrollPct * (28 + ln * 52);

      ctx.beginPath();
      const ridge = [];
      for (let c = 0; c <= cols; c++) {
        const cn = c / cols;
        const x = cn * (W + 40) - 20;
        const w1 = Math.sin(cn * 3.5 + time * (0.44 + ln * 0.16) + l * 1.5 + scrollPct * 1.3) * (17 + ln * 9);
        const w2 = Math.cos(cn * 6.6 - time * 0.34 - l * 1.8) * 6.5;
        const dx = x - px;
        const dy = baseY - py;
        const lift = -Math.exp(-(dx * dx + dy * dy) / (W < 600 ? 22000 : 48000)) * 32;
        const y = baseY + w1 + w2 + lift;
        ridge.push([x, y]);
        if (c === 0) ctx.moveTo(x, y); else ctx.lineTo(x, y);
      }

      ctx.lineTo(W + 20, H + 40);
      ctx.lineTo(-20, H + 40);
      ctx.closePath();

      const grad = ctx.createLinearGradient(0, baseY - 25, 0, baseY + H * 0.36);
      grad.addColorStop(0, wConf.col);
      grad.addColorStop(1, 'rgba(0,0,0,0)');
      const readCalm = 1 - scrollPct * 0.24;
      ctx.globalAlpha = wConf.a * readCalm;
      ctx.fillStyle = grad;
      ctx.fill();

      ctx.beginPath();
      for (let i = 0; i < ridge.length; i++) {
        if (i === 0) ctx.moveTo(ridge[i][0], ridge[i][1]);
        else ctx.lineTo(ridge[i][0], ridge[i][1]);
      }
      ctx.globalAlpha = 0.76 * readCalm;
      ctx.strokeStyle = wConf.crest;
      ctx.lineWidth = (l === 1 || l === 4) ? 1.2 : 1.45;
      ctx.stroke();
    }
    ctx.globalAlpha = 1;
  }

  /* Bind controls */
  document.getElementById('btn-lang-en').addEventListener('click', function () { setLang('en', true); });
  document.getElementById('btn-lang-zh').addEventListener('click', function () { setLang('zh', true); });
  document.getElementById('btn-day').addEventListener('click', function () { setMode('day', true); });
  document.getElementById('btn-night').addEventListener('click', function () { setMode('night', true); });

  window.addEventListener('pointermove', function (e) {
    pointer.tx = e.clientX;
    pointer.ty = e.clientY;
  }, { passive: true });

  window.addEventListener('resize', resize);

  window.addEventListener('keydown', function (e) {
    if (e.metaKey || e.ctrlKey || e.altKey) return;
    const tag = (e.target && e.target.tagName) ? e.target.tagName.toLowerCase() : '';
    if (tag === 'input' || tag === 'textarea' || tag === 'select') return;
    const k = e.key.toLowerCase();
    if (k === 'd') setMode(currentMode === 'day' ? 'night' : 'day', true);
    if (k === 'l') setLang(currentLang === 'en' ? 'zh' : 'en', true);
  });

  if (reducedMotion) {
    window.addEventListener('scroll', function () {
      smoothScroll = window.scrollY || 0;
      drawBackdrop(0);
    }, { passive: true });
  }

  /* Scroll Reveal Observer */
  if ('IntersectionObserver' in window && !reducedMotion) {
    const revealObs = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
          revealObs.unobserve(entry.target);
        }
      });
    }, { threshold: 0.08 });
    document.querySelectorAll('.reveal').forEach(function (el) { revealObs.observe(el); });
  } else {
    document.querySelectorAll('.reveal').forEach(function (el) { el.classList.add('visible'); });
  }

  /* Boot: URL param ?lang= -> saved localStorage -> default EN & Day (or system dark if unset) */
  const params = new URLSearchParams(window.location.search);
  const urlLang = params.get('lang');
  const savedLang = safeStorageGet('peteryux_lang');
  const initLang = (urlLang === 'zh' || urlLang === 'en') ? urlLang : (savedLang === 'zh' ? 'zh' : 'en');

  const savedTheme = safeStorageGet('peteryux_theme');
  const prefersDark = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;
  const initTheme = (savedTheme === 'day' || savedTheme === 'night') ? savedTheme : (prefersDark ? 'night' : 'day');

  resize();
  setMode(initTheme, false);
  setLang(initLang, false);
  refreshGitHubStars();

  if (reducedMotion) {
    drawBackdrop(0);
  } else {
    let lastTs = null;
    function tick(now) {
      if (!document.hidden) {
        if (lastTs === null) lastTs = now;
        const dt = Math.max(0, Math.min(0.05, (now - lastTs) / 1000));
        lastTs = now;
        time += dt;
        smoothScroll += ((window.scrollY || 0) - smoothScroll) * 0.10;
        pointer.x += (pointer.tx - pointer.x) * 0.10;
        pointer.y += (pointer.ty - pointer.y) * 0.10;
        drawBackdrop(dt);
      } else {
        lastTs = null;
      }
      requestAnimationFrame(tick);
    }
    requestAnimationFrame(tick);
  }
})();
