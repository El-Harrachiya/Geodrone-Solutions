// Existing mobile menu code (unchanged)
const menuOpenButton = document.querySelector("#menu-open-button");
const menuCloseButton = document.querySelector("#menu-close-button");

menuOpenButton.addEventListener("click", () => {
  // Toggle mobile menu visibility
  document.body.classList.toggle("show-mobile-menu");
});

const swiper = new Swiper('.slider-wrapper', {
    // Optional parameters
    loop: true,
    grabCursor: true,

    // Desktop Default (3 slides)
    slidesPerView: 3,
    slidesPerGroup: 1,
    spaceBetween: 30,

    // If we need pagination
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
        dynamicBullets: true
    },

    // Navigation arrows
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },

    // --- CRITICAL FIX: Disable Swiper for Mobile and Enable for Desktop ---
    breakpoints: {
        // Mobile/Tablet (0px up to 1023px): DISABLE SLIDER
        // The CSS Grid rules now control the display, and Swiper's JS is off.
        0: {
            enabled: false, 
            slidesPerView: 'auto', 
            spaceBetween: 0,
        },
        
        // Desktop (1024px and up): ENABLE SLIDER
        1024: {
            enabled: true, // Re-enables Swiper for desktop sliding
            slidesPerView: 3,
            spaceBetween: 30,
            centeredSlides: false,
        }
    }
});




const heroSwiper = new Swiper('.hero-image-slider', {
  // Optional parameters
  direction: 'horizontal', // 'horizontal' is default, can be omitted
  loop: true, // Seamless scrolling

  // If you want autoplay (optional)
  autoplay: {
    delay: 4000, // 4 seconds
    disableOnInteraction: false,
  },

  // If you need pagination (dots)
  pagination: {
    el: '.hero-image-pagination',
    clickable: true,
  },
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
});




// Close menu when the close button is clicked
menuCloseButton.addEventListener("click", () => menuOpenButton.click());

// ---------- Translation / Localization logic ----------

// Translation dictionary (English preserved exactly as in your HTML, French and Arabic provided)
const translations = {
  en: {
    siteName: "Geodrone Solutions",
    siteNameFooter: "GeoDrone Solution",
    home: "Home",
    about: "About",
    services: "Services",
    team: "Team",
    contact: "Contact",
    heroTitle: "Geodrone Solutions",
    heroSubtitle: "Save time and reduce costs with us",
    heroDescription: "Geodrone Solutions is an innovative startup specializing in the collection and analysis of geospatial data using drones.\n            We provide fast, accurate, and cost-effective solutions for topographic surveys, 3D modeling, and construction site monitoring.",
    contactUs: "Contact Us",
    aboutTitle: "About Us",
    aboutIntro: "Geodrone Solutions is a startup specialized in collecting and processing geospatial data using drone technology. We provide fast, accurate, and safe solutions for topographic surveys, 3D modeling, orthophotos, volume calculations, and geospatial mapping. Our mission is to make field data collection faster, more affordable, and safer than traditional surveying methods — while maintaining the highest levels of accuracy and quality. Through advanced photogrammetry and aerial mapping, Geodrone Solutions delivers ready-to-use digital products that support decision-making in construction, urban planning, agriculture, and environmental management.",
    aboutSpeed: "<b>Speed:</b> Rapid topographic surveys and mapping in record time.",
    aboutCost: "<b>Cost Efficiency:</b> Lower labor and equipment costs through automation.",
    aboutPrecision: "<b>Precision:</b> High-resolution imaging for accurate geospatial data.",
    aboutAccess: "<b>Accessibility:</b> Safe access to difficult or dangerous terrain.",
    aboutSafety: "<b>Safety:</b> Reduced human risk during data collection.",
    servicesTitle: "Our Services",
    s1Title: "Cadastral Mapping",
    s1Desc: "This service allows accurate identification and delineation of property boundaries, parcels, and land features. The generated orthophotos and 2D maps are georeferenced and ready for integration into GIS or cadastral databases.",
    s2Title: "2D & 3D Mapping",
    s2Desc: "Creation of 2D orthophotos and 3D digital surface models (DSM/DTM) for visualization, planning, and analysis.",
    s3Title: "3D Modeling",
    s3Desc: "Realistic and accurate 3D models of buildings, infrastructures, and landscapes for urban planning, architecture, and visualization.",
    s4Title: "Volume & Stockpile Measurement",
    s4Desc: "Precise volume calculations for quarries, construction sites, and landfills — saving time and improving accuracy over traditional methods.",
    s5Title: "Land and Construction Monitoring",
    s5Desc: "Periodic drone inspections to monitor project progress, detect deviations, and ensure quality control on construction sites.",
    s6Title: "Infrastructure Inspection",
    s6Desc: "Aerial inspection of roads, bridges, towers, and pipelines to detect damages or anomalies safely and efficiently.",
    s7Title: "Agricultural Mapping",
    s7Desc: "Multispectral and RGB drone surveys to analyze crop health, irrigation efficiency, and land management.",
    s8Title: "Audiovisual & Media Production",
    s8Desc: "High-quality aerial photography and video services for events, promotional, real estate, and documentary purposes.",
    teamTitle: "Our Team",
    managerName: "Belabbas Saifeddine",
    managerRole: "Manager",
    contactTitle: "Contact Us",
    pName: "Your name",
    pEmail: "Your email",
    pPhone: "Phone Number",
    pMessage: "Your message",
    submitButton: "Submit",
    footerBlurb: "Innovating geospatial data collection and analysis with drone technology.",
    footerContactTitle: "Contact Info",
    footerAddress: "Startup Building, USTHB, First Floor, Office No.14 Bab Ezzouar",
    footerEmail: "geodronesolution24@gmail.com",
    footerPhone: "0540118499",
    followUs: "Follow Us",
    copyright: "© 2025 GeoDrone Solution — All rights reserved."
  },

  fr: {
    siteName: "Geodrone Solutions",
    siteNameFooter: "GeoDrone Solutions",
    home: "Accueil",
    about: "À propos",
    services: "Services",
    team: "Notre équipe",
    contact: "Contact",
    heroTitle: "Geodrone Solutions",
    heroSubtitle: "Gagnez du temps et réduisez vos coûts avec nous",
    heroDescription: "Geodrone Solutions est une startup innovante spécialisée dans la collecte et l'analyse de données géospatiales à l'aide de drones.\n            Nous fournissons des solutions rapides, précises et économiques pour les levés topographiques, la modélisation 3D et le suivi des chantiers.",
    contactUs: "Contactez-nous",
    aboutTitle: "À propos de nous",
    aboutSpeed: "<b>Vitesse :</b> Levés topographiques et cartographie réalisés en un temps record.",
    aboutCost: "<b>Rentabilité :</b> Réduction des coûts de main-d’œuvre et d’équipement grâce à l’automatisation.",
    aboutPrecision: "<b>Précision :</b> Imagerie haute résolution pour des données géospatiales précises.",
    aboutAccess: "<b>Accessibilité :</b> Accès sécurisé aux zones difficiles ou dangereuses.",
    aboutSafety: "<b>Sécurité :</b> Réduction des risques humains lors de la collecte de données.",
    servicesTitle: "Nos Services",
    s1Title: "Cartographie Cadastrale",
    s1Desc: "Geodrone Solution provides high-precision cadastral mapping services using drone photogrammetry and GNSS technology. This service allows accurate identification and delineation of property boundaries, parcels, and land features. The generated orthophotos and 2D maps are georeferenced and ready for integration into GIS or cadastral databases.",
    s2Title: "Cartographie 2D et 3D",
    s2Desc: "Création d'orthophotos 2D et de modèles numériques de surface 3D (MNS/MNT) pour la visualisation, la planification et l'analyse.",
    s3Title: "Modélisation 3D",
    s3Desc: "Modèles 3D réalistes et précis de bâtiments, d'infrastructures et de paysages pour la planification urbaine, l'architecture et la visualisation.",
    s4Title: "Mesure de Volume et de Stocks",
    s4Desc: "Calculs précis de volumes pour les carrières, chantiers et décharges, permettant de gagner du temps et d'améliorer la précision.",
    s5Title: "Suivi des Chantiers et des Terrains",
    s5Desc: "Inspections périodiques par drone pour suivre l'avancement des projets, détecter les écarts et garantir le contrôle qualité sur les chantiers.",
    s6Title: "Inspection des Infrastructures",
    s6Desc: "Inspection aérienne des routes, ponts, tours et pipelines pour détecter les dommages ou anomalies en toute sécurité et efficacité.",
    s7Title: "Cartographie Agricole",
    s7Desc: "Relevés multispectraux et RGB par drone pour analyser la santé des cultures, l'efficacité de l'irrigation et la gestion des terres.",
    s8Title: "Production Audiovisuelle et Médiatique",
    s8Desc: "Services de photographie et de vidéo aérienne de haute qualité pour les événements, la promotion, l'immobilier et les documentaires.",
    teamTitle: "Notre équipe",
    managerName: "Belabbas Saifeddine",
    managerRole: "Responsable",
    contactTitle: "Contactez-nous",
    pName: "Votre nom",
    pEmail: "Votre e-mail",
    pPhone: "Numéro de téléphone",
    pMessage: "Votre message",
    submitButton: "Envoyer",
    footerBlurb: "Innover la collecte et l'analyse de données géospatiales avec la technologie des drones.",
    footerContactTitle: "Informations de contact",
    footerAddress: "Bâtiment Startup, USTHB, Premier étage, Bureau n°14 Bab Ezzouar",
    footerEmail: "geodronesolution24@gmail.com",
    footerPhone: "0540118499",
    followUs: "Suivez-nous",
    copyright: "© 2025 GeoDrone Solution — Tous droits réservés."
  },

  ar: {
    siteName: "GeoDrone Solutions",
    siteNameFooter: "GeoDrone Solutions",
    home: "الرئيسية",
    about: "حول",
    services: "الخدمات",
    team: "فريقنا",
    contact: "اتصل بنا",
    heroTitle: "GeoDrone Solutions",
    heroSubtitle: "وفّر الوقت وخفض التكاليف معنا",
    heroDescription: "GeoDrone Solutions هي شركة ناشئة مبتكرة متخصصة في جمع وتحليل البيانات الجيوفضائية باستخدام الطائرات بدون طيار.\n            نحن نقدم حلولًا سريعة ودقيقة وموفرة للتكاليف للمسوحات الطبوغرافية، والنمذجة ثلاثية الأبعاد، ومراقبة مواقع البناء.",
    contactUs: "تواصل معنا",
    aboutTitle: "من نحن",
    aboutIntro: "تعد Geodrone Solutions شركة ناشئة متخصصة في جمع ومعالجة البيانات الجيومكانية باستخدام تكنولوجيا الطائرات بدون طيار. تقدم حلولاً سريعة ودقيقة وآمنة لعمليات الرفع الطبوغرافي، والنمذجة ثلاثية الأبعاد، والخرائط المصورة، وحساب الأحجام، ورسم الخرائط الجيومكانية. تهدف الشركة إلى جعل جمع البيانات الميدانية أسرع وأكثر كفاءة وأمانًا مقارنة بالطرق التقليدية، مع ضمان أعلى مستويات الدقة والجودة. ومن خلال استخدام تقنيات التصوير الجوي والمسح الضوئي المتقدمة، تقدم Geodrone Solutions منتجات رقمية جاهزة للاستخدام تدعم اتخاذ القرار في مجالات البناء والتخطيط العمراني والزراعة وإدارة البيئة.",
    aboutSpeed: "<b>السرعة:</b> عمليات رفع طبوغرافي ورسم خرائط بسرعة قياسية.",
    aboutCost: "<b>الكفاءة من حيث التكلفة:</b> تقليل تكاليف العمالة والمعدات من خلال الأتمتة.",
    aboutPrecision: "<b>الدقة:</b> تصوير عالي الدقة للحصول على بيانات جيومكانية دقيقة.",
    aboutAccess: "<b>سهولة الوصول:</b> وصول آمن إلى المناطق الصعبة أو الخطرة.",
    aboutSafety: "<b>السلامة:</b> تقليل المخاطر البشرية أثناء جمع البيانات.",
    servicesTitle: "خدماتنا",
    s1Title: "المسح العقاري",
    s1Desc: "تقدم شركة GeoDrone Solution خدمات مسح عقاري عالية الدقة باستخدام تقنية التصوير الجوي بالدرون وتقنية GNSS. تتيح هذه الخدمة تحديد ورسم حدود الملكيات والقطع والعناصر الأرضية بدقة. يتم إنشاء صور جوية وخرائط ثنائية الأبعاد مُرجعة جغرافيًا وجاهزة للدمج في قواعد بيانات نظم المعلومات الجغرافية أو السجل العقاري.",
    s2Title: "الخرائط ثنائية وثلاثية الأبعاد",
    s2Desc: "إنشاء صور أرثوفوتوغرافية ثنائية الأبعاد ونماذج سطح رقمية ثلاثية الأبعاد (DSM/DTM) للتصور والتخطيط والتحليل.",
    s3Title: "النمذجة ثلاثية الأبعاد",
    s3Desc: "نماذج ثلاثية الأبعاد واقعية ودقيقة للمباني والبنى التحتية والمناظر الطبيعية لاستخدامها في التخطيط العمراني والهندسة المعمارية والعرض المرئي.",
    s4Title: "قياس الحجم والمخزون",
    s4Desc: "حسابات دقيقة للأحجام في المحاجر ومواقع البناء ومكبات النفايات — لتوفير الوقت وتحسين الدقة مقارنة بالطرق التقليدية.",
    s5Title: "مراقبة الأراضي والمشاريع الإنشائية",
    s5Desc: "عمليات تفتيش دورية باستخدام الدرون لمتابعة تقدم المشاريع، واكتشاف الانحرافات، وضمان مراقبة الجودة في مواقع البناء.",
    s6Title: "فحص البنية التحتية",
    s6Desc: "فحص جوي للطرق والجسور والأبراج وخطوط الأنابيب لاكتشاف الأضرار أو العيوب بطريقة آمنة وفعالة.",
    s7Title: "الخرائط الزراعية",
    s7Desc: "مسوحات متعددة الأطياف وبالألوان الحقيقية باستخدام الدرون لتحليل صحة المحاصيل وكفاءة الري وإدارة الأراضي.",
    s8Title: "الإنتاج السمعي البصري والإعلامي",
    s8Desc: "خدمات تصوير فوتوغرافي وفيديو جوي عالية الجودة للمناسبات والترويج والعقارات والأفلام الوثائقية.",

    managerName: "بلعباس سيف الدين",
    managerRole: "المدير",
    contactTitle: "اتصل بنا",
    pName: "اسمك",
    pEmail: "بريدك الإلكتروني",
    pPhone: "رقم الهاتف",
    pMessage: "رسالتك",
    submitButton: "إرسال",
    footerBlurb: "نبتكر في جمع وتحليل البيانات الجيوفضائية باستخدام تقنية الطائرات بدون طيار.",
    footerContactTitle: "معلومات الاتصال",
    footerAddress: "مبنى الشركات الناشئة، USTHB، الطابق الأول، مكتب رقم 14 باب الزوار",
    footerEmail: "geodronesolution24@gmail.com",
    footerPhone: "0540118499",
    followUs: "تابعنا",
    copyright: "© 2025 GeoDrone Solution — جميع الحقوق محفوظة."
  }
};

// helper to update placeholders
function setPlaceholders(lang) {
  document.querySelectorAll("[data-placeholder]").forEach(el => {
    const key = el.getAttribute("data-placeholder");
    if (translations[lang] && translations[lang][key]) {
      el.innerHTML = translations[lang][key];
    }

  });
}

// function to apply translations to all data-translate elements
function applyTranslations(lang) {
  document.querySelectorAll("[data-translate]").forEach(el => {
    const key = el.getAttribute("data-translate");
    if (!key) return;
    // if translation exists for the key, replace text
    if (key && translations[lang] && translations[lang][key])
      el.innerHTML = translations[lang][key];
  });

  // placeholders
  setPlaceholders(lang);

  // adjust direction for Arabic
  if (lang === "ar") {
    document.documentElement.setAttribute("dir", "rtl");
    document.body.style.textAlign = "right";
    // optional: add a class for any RTL-specific styling if needed
    document.body.classList.add("is-rtl");
  } else {
    document.documentElement.setAttribute("dir", "ltr");
    document.body.style.textAlign = "left";
    document.body.classList.remove("is-rtl");
  }
}

// initialize language switcher
const languageSelect = document.getElementById("languageSelect");

// restore saved language or default to English
const savedLang = localStorage.getItem("preferredLang") || "en";
languageSelect.value = savedLang;
applyTranslations(savedLang);

// when user changes language
languageSelect.addEventListener("change", (e) => {
  const lang = e.target.value;
  applyTranslations(lang);
  localStorage.setItem("preferredLang", lang);
});

window.addEventListener("DOMContentLoaded", () => {
  applyTranslations(savedLang);
});



