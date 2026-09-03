/**
 * Kerolos Ashraf Saad - Portfolio Application Logic
 * Pure Vanilla JavaScript: Theme Management, Bilingual (AR/EN) Engine, Responsive UI
 */

(function () {
  'use strict';

  // --------------------------------------------------------------------------
  // Bilingual Dictionary (English & Arabic)
  // --------------------------------------------------------------------------
  const translations = {
    en: {
      // Document metadata
      pageTitle: "Kerolos Ashraf Saad | Aspiring Full-Stack .NET Developer",
      
      // Navigation
      navHome: "Home",
      navAbout: "About",
      navSkills: "Skills",
      navProjects: "Projects",
      navCertifications: "Certifications",
      navContact: "Contact",
      navHireMe: "Hire Me",

      // Hero Section
      heroStatus: "Available for Opportunities",
      heroGreeting: "Hello, I'm",
      heroName: "Kerolos Ashraf Saad",
      heroTitle: "Aspiring Full-Stack .NET Developer",
      heroBio: "Fourth-year Information Technology student at the Egyptian German College, Assiut International Technological University. Passionate about building robust, scalable web applications with .NET backend architecture and modern, intuitive front-end interfaces.",
      heroCtaHire: "Hire Me",
      heroCtaCv: "Download CV",
      statEducation: "Assiut Int. Tech Univ",
      statEduLabel: "4th Year IT Student",
      statDepi: "DEPI Round 5",
      statDepiLabel: "Full-Stack .NET Scholar",
      statSkills: "12+ Technologies",
      statSkillsLabel: "Core Competencies",
      termHeader: "developer_profile.cs",
      termStatus: "Ready to contribute to impactful software engineering teams.",

      // About Section
      aboutTag: "About Me",
      aboutTitle: "Turning Ideas into High-Performance Solutions",
      aboutSubtitle: "Dedicated to continuous learning, clean architecture, and modern full-stack development.",
      aboutP1: "I am a dedicated 4th-year Information Technology student specializing in modern web application engineering. My journey centers around bridging sleek user experiences with resilient, enterprise-grade back-end services powered by Microsoft .NET technologies.",
      aboutP2: "Through rigorous academic projects, deep hands-on practice, and intensive specialized training such as the Digital Egypt Pioneers Initiative (DEPI), I have developed a strong foundation in Object-Oriented Programming (OOP), database design, RESTful APIs, and problem-solving.",
      eduCardTitle: "Education & Degree",
      eduDegree: "Bachelor's Degree in Information Technology",
      eduFaculty: "Egyptian German Faculty, Assiut International Technological University",
      eduGrad: "4th Year — Expected Graduation: 2027",
      langCardTitle: "Languages",
      langAr: "Arabic",
      langArLevel: "Native Proficiency",
      langEn: "English",
      langEnLevel: "A2 (Elementary / Professional Working Prep)",
      focusCardTitle: "Core Focus",
      focusDetail: "Backend API Engineering, Enterprise Architecture, Database Design & Front-End Integration.",

      // Skills Section
      skillsTag: "Technical Stack",
      skillsTitle: "Skills & Technologies",
      skillsSubtitle: "A comprehensive toolkit developed through specialized coursework, real projects, and industry training.",
      catBackend: "Backend & .NET Ecosystem",
      catFrontend: "Frontend Development",
      catDatabase: "Database & Storage",
      catTools: "Tools, Methodologies & AI",

      // Projects Section
      projectsTag: "Portfolio Showcase",
      projectsTitle: "Featured Projects",
      projectsSubtitle: "Real-world applications showcasing architectural design, real-time networking, and full-stack integration.",
      project1Type: "Real-Time Networking",
      project1Title: "ChatControl — Local Network Communication System",
      project1Desc: "A high-performance local network communication system built with Node.js featuring real-time peer-to-peer audio and video calls, instant encrypted text messaging, and multi-client file transfer without relying on external cloud infrastructure.",
      project1Feat1: "Real-time Peer-to-Peer Voice & Video Calls (WebRTC)",
      project1Feat2: "Instant bidirectional text messaging via WebSockets",
      project1Feat3: "Direct local network file sharing with zero cloud latency",
      btnRequestAccess: "Request Project Access via Email",
      btnLiveDemo: "Contact for Demo",
      btnSourceCode: "Source Code",

      // Certifications Section
      certTag: "Credentials & Training",
      certTitle: "Certifications & Specialized Programs",
      certSubtitle: "Official certifications validating technical expertise in networking, systems, and enterprise software.",
      cert1Issuer: "Cisco Networking Academy / ITI",
      cert1Title: "CCNA: Introduction to Networks",
      cert1Desc: "Covers network architectures, IP addressing schemes (IPv4/IPv6), subnetting calculations, Ethernet switching, router configuration, and foundational enterprise network security.",
      btnViewCert: "View Certificate",
      cert2Issuer: "MCIT — Digital Egypt Pioneers Initiative",
      cert2Title: "DEPI Round 5: Full-Stack .NET Track",
      cert2Desc: "Intensive training initiative by the Egyptian Ministry of Communications and Information Technology focused on modern C#, ASP.NET Core, Database Management, and professional software market readiness.",

      // Contact Section
      contactTag: "Get In Touch",
      contactTitle: "Let's Build Something Great Together",
      contactSubtitle: "Interested in hiring me or collaborating on an innovative project? Reach out anytime!",
      contactEmailLabel: "Email Address",
      contactPhoneLabel: "Phone / WhatsApp",
      contactLocationLabel: "Location",
      contactLocationVal: "Cairo, Egypt",
      contactLinkedinLabel: "LinkedIn Profile",
      contactGithubLabel: "GitHub Profile",
      formNameLabel: "Your Name",
      formNamePlaceholder: "e.g. John Doe",
      formEmailLabel: "Your Email",
      formEmailPlaceholder: "e.g. john@example.com",
      formSubjectLabel: "Subject",
      formSubjectPlaceholder: "e.g. Project Collaboration / Job Opportunity",
      formMessageLabel: "Message",
      formMessagePlaceholder: "Write your message here...",
      formBtnSubmit: "Send Message",
      formSuccessMsg: "Thank you! Your message has been sent successfully. I will get back to you soon.",
      formErrorMsg: "Please fill in all required fields properly.",

      // Footer
      footerCopy: "© 2026 Kerolos Ashraf Saad. All rights reserved.",
      footerBuiltWith: "Built with pure HTML5, CSS3, & Vanilla JavaScript."
    },

    ar: {
      // Document metadata
      pageTitle: "كيرلس أشرف سعد | مطور دوت نت متكامل واعد",

      // Navigation
      navHome: "الرئيسية",
      navAbout: "عني",
      navSkills: "المهارات",
      navProjects: "المشاريع",
      navCertifications: "الشهادات",
      navContact: "تواصل معي",
      navHireMe: "وظفني",

      // Hero Section
      heroStatus: "متاح لفرص العمل والتدريب",
      heroGreeting: "مرحباً، أنا",
      heroName: "كيرلس أشرف سعد",
      heroTitle: "مطور دوت نت متكامل واعد (Full-Stack .NET)",
      heroBio: "طالب بالسنة الرابعة في تكنولوجيا المعلومات بالكلية المصرية الألمانية بجامعة أسيوط التكنولوجية الدولية. شغوف بتطوير تطبيقات الويب القوية وقابلة للتوسع بالاعتماد على بيئة دوت نت في الأنظمة الخلفية، وتصميم واجهات مستخدم عصرية وسريعة الاستجابة.",
      heroCtaHire: "وظفني الآن",
      heroCtaCv: "تحميل السيرة الذاتية",
      statEducation: "جامعة أسيوط التكنولوجية",
      statEduLabel: "طالب بالفرقة الرابعة IT",
      statDepi: "رواد مصر الرقمية DEPI",
      statDepiLabel: "منحة Full-Stack .NET",
      statSkills: "+12 تقنية حديثة",
      statSkillsLabel: "مهارات برمجية أساسية",
      termHeader: "developer_profile.cs",
      termStatus: "جاهز للمساهمة في بناء برمجيات مبتكرة مع فرق التطوير التقنية.",

      // About Section
      aboutTag: "نبذة عني",
      aboutTitle: "تحويل الأفكار إلى حلول برمجية عالية الكفاءة",
      aboutSubtitle: "ملتزم بالتعلم المستمر، وهندسة البرمجيات النظيفة، وبناء حلول الويب المتكاملة.",
      aboutP1: "أنا طالب في السنة الرابعة متخصص في تكنولوجيا المعلومات، أركز شغفي على هندسة وتطوير تطبيقات الويب الحديثة. أهدف إلى الجمع بين تجربة المستخدم السلسة والأنظمة الخلفية القوية والموثوقة بالاعتماد على تقنيات مايكروسوفت .NET.",
      aboutP2: "من خلال المشاريع الأكاديمية والممارسة العملية والتدريب المكثف في مبادرة رواد مصر الرقمية (DEPI)، اكتسبت أساساً قوياً في البرمجة كائنية التوجه (OOP)، وتصميم قواعد البيانات، وبناء واجهات البرمجة RESTful Web APIs، وحل المشكلات البرمجية بكفاءة.",
      eduCardTitle: "المؤهل الدراسي والتعليم",
      eduDegree: "بكالوريوس تكنولوجيا المعلومات",
      eduFaculty: "الكلية المصرية الألمانية، جامعة أسيوط التكنولوجية الدولية",
      eduGrad: "الفرقة الرابعة — سنة التخرج المتوقعة: 2027",
      langCardTitle: "اللغات",
      langAr: "اللغة العربية",
      langArLevel: "اللغة الأم (طلاقة تامة)",
      langEn: "اللغة الإنجليزية",
      langEnLevel: "المستوى A2 (جيد للعمل ومستمر في التطوير)",
      focusCardTitle: "التركيز التقني",
      focusDetail: "هندسة واجهات البرمجة الخلفية، معمارية البرمجيات، تصميم قواعد البيانات، وربط واجهات الويب.",

      // Skills Section
      skillsTag: "الترسانة التقنية",
      skillsTitle: "المهارات والتقنيات البرمجية",
      skillsSubtitle: "مجموعة شاملة من التقنيات التي طورتها من خلال التدريب المكثف والمشاريع البرمجية التطبيقية.",
      catBackend: "الأنظمة الخلفية وبيئة .NET",
      catFrontend: "واجهات المستخدم (Frontend)",
      catDatabase: "قواعد البيانات والتخزين",
      catTools: "أدوات التطوير ومنهجيات الذكاء الاصطناعي",

      // Projects Section
      projectsTag: "معرض الأعمال",
      projectsTitle: "أبرز المشاريع والتطبيقات",
      projectsSubtitle: "مشاريع عملية تعكس مهارات التصميم المعماري، التواصل الشبكي في الوقت الفعلي، وتكامل النظم.",
      project1Type: "شبكات واتصالات فورية",
      project1Title: "ChatControl — نظام محادثات وتواصل عبر الشبكة المحلية",
      project1Desc: "نظام اتصالات عالي الكفاءة للشبكات المحلية مبني بواسطة Node.js، يوفر مكالمات صوت وفيديو فورية بين الأجهزة (WebRTC)، محادثات نصية مباشرة عبر WebSockets، ومشاركة ملفات آمنة دون الاعتماد على خوادم سحابية خارجية.",
      project1Feat1: "مكالمات صوتية ومرئية فورية (P2P WebRTC)",
      project1Feat2: "محادثات نصية فورية ثنائية الاتجاه عبر WebSockets",
      project1Feat3: "نقل ومشاركة الملفات مباشرة في الشبكة المحلية بسرعة فائقة",
      btnRequestAccess: "طلب الاطلاع على المشروع عبر البريد الإلكتروني",
      btnLiveDemo: "طلب تجربة المشروع",
      btnSourceCode: "الكود المصدري",

      // Certifications Section
      certTag: "الشهادات والبرامج التدريبية",
      certTitle: "الشهادات والتدريبات المتخصصة",
      certSubtitle: "شهادات رسمية تؤكد الكفاءة في الشبكات، النظم الأساسية، وتطوير برمجيات الشركات.",
      cert1Issuer: "أكاديمية سيسكو / معهد تكنولوجيا المعلومات ITI",
      cert1Title: "CCNA: Introduction to Networks",
      cert1Desc: "دراسة شاملة لهندسة الشبكات، وعناوين بروتوكول الإنترنت (IPv4/IPv6)، وحسابات الـ Subnetting، وتبديل شبكات الإيثرنت وتوجيه البيانات، ومبادئ أمان الشبكات المؤسسية.",
      btnViewCert: "عرض الشهادة الرسمية",
      cert2Issuer: "وزارة الاتصالات — مبادرة رواد مصر الرقمية",
      cert2Title: "مبادرة رواد مصر الرقمية (DEPI) — الدفعة 5: مسار .NET",
      cert2Desc: "منحة تدريبية مكثفة من وزارة الاتصالات وتكنولوجيا المعلومات المصرية تركز على تقنيات C# و ASP.NET Core الحديثة، وإدارة قواعد البيانات، والتأهيل الاحترافي لسوق العمل البرمجي.",

      // Contact Section
      contactTag: "تواصل معي",
      contactTitle: "لنصنع معاً حلولاً رقمية استثنائية",
      contactSubtitle: "مهتم بالتوظيف أو التعاون في مشاريع طموحة؟ يسعدني التواصل معك في أي وقت!",
      contactEmailLabel: "البريد الإلكتروني",
      contactPhoneLabel: "الهاتف / واتساب",
      contactLocationLabel: "الموقع الجغرافي",
      contactLocationVal: "القاهرة، مصر",
      contactLinkedinLabel: "حساب لينكد إن",
      contactGithubLabel: "حساب جيت هب",
      formNameLabel: "الاسم الكريم",
      formNamePlaceholder: "مثال: أحمد محمد",
      formEmailLabel: "البريد الإلكتروني",
      formEmailPlaceholder: "مثال: name@example.com",
      formSubjectLabel: "الموضوع",
      formSubjectPlaceholder: "مثال: فرصة عمل / استفسار عن مشروع",
      formMessageLabel: "نص الرسالة",
      formMessagePlaceholder: "اكتب رسالتك هنا بالتفصيل...",
      formBtnSubmit: "إرسال الرسالة",
      formSuccessMsg: "شكراً لتواصلك! تم إرسال رسالتك بنجاح وسأقوم بالرد عليك في أقرب وقت.",
      formErrorMsg: "يرجى تعبئة كافة الحقول المطلوبة بشكل صحيح.",

      // Footer
      footerCopy: "© 2026 كيرلس أشرف سعد. جميع الحقوق محفوظة.",
      footerBuiltWith: "تم التطوير باستخدام HTML5 نقي و CSS3 و Vanilla JavaScript."
    }
  };

  // --------------------------------------------------------------------------
  // State Variables
  // --------------------------------------------------------------------------
  let currentLang = localStorage.getItem('portfolio_lang') || 'en';
  let currentTheme = localStorage.getItem('portfolio_theme') || 'dark';

  // --------------------------------------------------------------------------
  // DOM Elements
  // --------------------------------------------------------------------------
  const htmlEl = document.documentElement;
  const langToggleBtn = document.getElementById('langToggle');
  const themeToggleBtn = document.getElementById('themeToggle');
  const mobileToggleBtn = document.getElementById('mobileToggle');
  const navLinksList = document.getElementById('navLinks');
  const contactForm = document.getElementById('contactForm');
  const formFeedback = document.getElementById('formFeedback');
  const scrollTopBtn = document.getElementById('scrollTopBtn');
  const currentYearSpan = document.getElementById('currentYear');

  // --------------------------------------------------------------------------
  // Language Translation Functionality
  // --------------------------------------------------------------------------
  function setLanguage(lang) {
    if (!translations[lang]) return;
    currentLang = lang;
    localStorage.setItem('portfolio_lang', lang);

    // Set document properties
    htmlEl.setAttribute('lang', lang);
    htmlEl.setAttribute('dir', lang === 'ar' ? 'rtl' : 'ltr');

    // Update button text
    if (langToggleBtn) {
      const textSpan = langToggleBtn.querySelector('.lang-label');
      if (textSpan) {
        textSpan.textContent = lang === 'ar' ? 'EN' : 'عربي';
      }
    }

    // Update document title
    document.title = translations[lang].pageTitle;

    // Update all text nodes with data-i18n
    const translatableElements = document.querySelectorAll('[data-i18n]');
    translatableElements.forEach(el => {
      const key = el.getAttribute('data-i18n');
      if (translations[lang][key]) {
        el.textContent = translations[lang][key];
      }
    });

    // Update placeholders
    const placeholderElements = document.querySelectorAll('[data-i18n-placeholder]');
    placeholderElements.forEach(el => {
      const key = el.getAttribute('data-i18n-placeholder');
      if (translations[lang][key]) {
        el.setAttribute('placeholder', translations[lang][key]);
      }
    });
  }

  // --------------------------------------------------------------------------
  // Theme Switching Functionality
  // --------------------------------------------------------------------------
  function setTheme(theme) {
    currentTheme = theme;
    localStorage.setItem('portfolio_theme', theme);
    htmlEl.setAttribute('data-theme', theme);

    if (themeToggleBtn) {
      themeToggleBtn.setAttribute('aria-label', theme === 'dark' ? 'Switch to light mode' : 'Switch to dark mode');
    }
  }

  // --------------------------------------------------------------------------
  // Mobile Navigation
  // --------------------------------------------------------------------------
  function toggleMobileMenu() {
    const isOpen = navLinksList.classList.toggle('open');
    mobileToggleBtn.classList.toggle('active', isOpen);
    mobileToggleBtn.setAttribute('aria-expanded', isOpen);
  }

  function closeMobileMenu() {
    if (navLinksList.classList.contains('open')) {
      navLinksList.classList.remove('open');
      mobileToggleBtn.classList.remove('active');
      mobileToggleBtn.setAttribute('aria-expanded', 'false');
    }
  }

  // --------------------------------------------------------------------------
  // Active Navigation Highlighting on Scroll
  // --------------------------------------------------------------------------
  const sections = document.querySelectorAll('section[id]');
  const navItems = document.querySelectorAll('.nav-link');

  function highlightNavigation() {
    const scrollY = window.pageYOffset;

    sections.forEach(current => {
      const sectionHeight = current.offsetHeight;
      const sectionTop = current.offsetTop - 120;
      const sectionId = current.getAttribute('id');

      if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
        navItems.forEach(link => {
          link.classList.remove('active');
          if (link.getAttribute('href') === `#${sectionId}`) {
            link.classList.add('active');
          }
        });
      }
    });
  }

  // --------------------------------------------------------------------------
  // Scroll to Top Button
  // --------------------------------------------------------------------------
  function handleScrollTopVisibility() {
    if (window.pageYOffset > 400) {
      scrollTopBtn.classList.add('visible');
    } else {
      scrollTopBtn.classList.remove('visible');
    }
  }

  // --------------------------------------------------------------------------
  // Contact Form Submission (Simulation & Validation)
  // --------------------------------------------------------------------------
  function handleFormSubmit(e) {
    e.preventDefault();

    const name = document.getElementById('nameInput').value.trim();
    const email = document.getElementById('emailInput').value.trim();
    const subject = document.getElementById('subjectInput').value.trim();
    const message = document.getElementById('messageInput').value.trim();

    if (!name || !email || !message) {
      showFeedback('error', translations[currentLang].formErrorMsg);
      return;
    }

    // Email pattern check
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      showFeedback('error', translations[currentLang].formErrorMsg);
      return;
    }

    // Submit animation simulation
    const submitBtn = contactForm.querySelector('button[type="submit"]');
    const originalText = submitBtn.innerHTML;
    submitBtn.disabled = true;
    submitBtn.innerHTML = currentLang === 'ar' ? 'جارٍ الإرسال...' : 'Sending...';

    setTimeout(() => {
      submitBtn.disabled = false;
      submitBtn.innerHTML = originalText;
      showFeedback('success', translations[currentLang].formSuccessMsg);
      contactForm.reset();

      // Clear success feedback after 6 seconds
      setTimeout(() => {
        formFeedback.className = 'form-feedback';
        formFeedback.textContent = '';
      }, 6000);
    }, 900);
  }

  function showFeedback(type, message) {
    formFeedback.className = `form-feedback ${type}`;
    formFeedback.textContent = message;
  }

  // --------------------------------------------------------------------------
  // Event Listeners Initialization
  // --------------------------------------------------------------------------
  function init() {
    // 1. Initialize Theme & Language
    setTheme(currentTheme);
    setLanguage(currentLang);

    // 2. Set dynamic current year in footer
    if (currentYearSpan) {
      currentYearSpan.textContent = new Date().getFullYear();
    }

    // 3. Language Toggle Click
    if (langToggleBtn) {
      langToggleBtn.addEventListener('click', () => {
        const nextLang = currentLang === 'en' ? 'ar' : 'en';
        setLanguage(nextLang);
      });
    }

    // 4. Theme Toggle Click
    if (themeToggleBtn) {
      themeToggleBtn.addEventListener('click', () => {
        const nextTheme = currentTheme === 'dark' ? 'light' : 'dark';
        setTheme(nextTheme);
      });
    }

    // 5. Mobile Menu Toggle Click
    if (mobileToggleBtn) {
      mobileToggleBtn.addEventListener('click', toggleMobileMenu);
    }

    // 6. Close mobile menu when clicking nav link
    navItems.forEach(item => {
      item.addEventListener('click', closeMobileMenu);
    });

    // 7. Scroll listeners
    window.addEventListener('scroll', () => {
      highlightNavigation();
      handleScrollTopVisibility();
    }, { passive: true });

    // 8. Scroll to top click
    if (scrollTopBtn) {
      scrollTopBtn.addEventListener('click', () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
      });
    }

    // 9. Contact form submit
    if (contactForm) {
      contactForm.addEventListener('submit', handleFormSubmit);
    }
  }

  // Run on DOM loaded
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }

})();
