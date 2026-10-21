/* ==========================================================================
   Kerolos Ashraf Portfolio - Interactive JavaScript Engine
   Features:
   - Dynamic Bilingual Switcher (Arabic RTL <-> English LTR)
   - Independent WhatsApp & Email Channels
   - Copy to Clipboard with Visual Feedback
   - Dark / Light Theme Toggle with LocalStorage Memory
   - Seamless Image Fallback (Shows elegant tech avatar if profile.jpg is absent)
   - Smooth Scroll & Active Nav Highlights
   ========================================================================== */

let currentLang = localStorage.getItem('site_lang') || 'ar';
let currentTheme = localStorage.getItem('site_theme') || 'dark';

document.addEventListener('DOMContentLoaded', () => {
    // DOM Elements
    const htmlTag = document.documentElement;
    const bodyTag = document.body;
    const langToggleBtn = document.getElementById('langToggle');
    const langText = document.getElementById('langText');
    const themeToggleBtn = document.getElementById('themeToggle');
    const themeIcon = document.getElementById('themeIcon');
    const mobileMenuBtn = document.getElementById('mobileMenuBtn');
    const navLinks = document.getElementById('navLinks');
    const currentYearEl = document.getElementById('currentYear');

    // 1. Set Current Year
    if (currentYearEl) {
        currentYearEl.textContent = new Date().getFullYear();
    }

    // 2. Initialize Theme
    function applyTheme(theme) {
        if (theme === 'light') {
            bodyTag.classList.remove('dark-theme');
            bodyTag.classList.add('light-theme');
            themeIcon.className = 'fa-solid fa-sun';
            themeToggleBtn.setAttribute('title', currentLang === 'ar' ? 'التحويل للوضع الليلي' : 'Switch to Dark Mode');
        } else {
            bodyTag.classList.remove('light-theme');
            bodyTag.classList.add('dark-theme');
            themeIcon.className = 'fa-solid fa-moon';
            themeToggleBtn.setAttribute('title', currentLang === 'ar' ? 'التحويل للوضع النهاري' : 'Switch to Light Mode');
        }
        localStorage.setItem('site_theme', theme);
        currentTheme = theme;
    }

    applyTheme(currentTheme);

    themeToggleBtn.addEventListener('click', () => {
        applyTheme(currentTheme === 'dark' ? 'light' : 'dark');
    });

    // 3. Initialize Language & Translations
    function applyLanguage(lang) {
        currentLang = lang;
        localStorage.setItem('site_lang', lang);

        if (lang === 'en') {
            htmlTag.setAttribute('lang', 'en');
            htmlTag.setAttribute('dir', 'ltr');
            langText.textContent = 'AR';
            langToggleBtn.setAttribute('title', 'التحويل إلى العربية');
            document.title = 'Kerolos Ashraf | Full-Stack Web Engineer';
        } else {
            htmlTag.setAttribute('lang', 'ar');
            htmlTag.setAttribute('dir', 'rtl');
            langText.textContent = 'EN';
            langToggleBtn.setAttribute('title', 'Switch to English');
            document.title = 'كيرلس أشرف | مهندس تطوير ويب متكامل (Full-Stack)';
        }

        // Translate all data-ar and data-en elements
        const translatableElements = document.querySelectorAll('[data-ar][data-en]');
        translatableElements.forEach(el => {
            const targetText = lang === 'en' ? el.getAttribute('data-en') : el.getAttribute('data-ar');
            
            // Check if element contains icon child
            const icon = el.querySelector('i');
            const span = el.querySelector('span');

            if (icon && span) {
                span.textContent = targetText;
            } else if (!icon) {
                if (el.tagName === 'INPUT' || el.tagName === 'TEXTAREA') {
                    el.setAttribute('placeholder', targetText);
                } else {
                    el.textContent = targetText;
                }
            }
        });

        // Translate Select Options
        const selectOptions = document.querySelectorAll('#emailSubject option');
        selectOptions.forEach(opt => {
            const optText = lang === 'en' ? opt.getAttribute('data-en') : opt.getAttribute('data-ar');
            if (optText) opt.textContent = optText;
        });

        // Form Placeholders Translation
        const waName = document.getElementById('waName');
        const waMessage = document.getElementById('waMessage');
        const emailName = document.getElementById('emailName');
        const emailSender = document.getElementById('emailSender');
        const emailMessage = document.getElementById('emailMessage');

        if (waName) waName.placeholder = lang === 'en' ? 'e.g. John Doe' : 'مثال: م. أحمد';
        if (waMessage) waMessage.placeholder = lang === 'en' ? 'Briefly describe your project or question...' : 'اشرح فكرة مشروعك باختصار...';
        if (emailName) emailName.placeholder = lang === 'en' ? 'Enter your full name' : 'أدخل اسمك الكريم';
        if (emailSender) emailSender.placeholder = lang === 'en' ? 'name@domain.com' : 'name@domain.com';
        if (emailMessage) emailMessage.placeholder = lang === 'en' ? 'Describe your project requirements, goals & scope...' : 'اشرح تفاصيل المشروع والمتطلبات المطلوبة...';
    }

    applyLanguage(currentLang);

    langToggleBtn.addEventListener('click', () => {
        applyLanguage(currentLang === 'ar' ? 'en' : 'ar');
    });

    // 4. Mobile Menu Toggle
    if (mobileMenuBtn && navLinks) {
        mobileMenuBtn.addEventListener('click', () => {
            navLinks.classList.toggle('show');
            const icon = mobileMenuBtn.querySelector('i');
            if (navLinks.classList.contains('show')) {
                icon.className = 'fa-solid fa-xmark';
            } else {
                icon.className = 'fa-solid fa-bars';
            }
        });

        // Close mobile menu on clicking a link
        navLinks.querySelectorAll('a').forEach(link => {
            link.addEventListener('click', () => {
                navLinks.classList.remove('show');
                const icon = mobileMenuBtn.querySelector('i');
                if (icon) icon.className = 'fa-solid fa-bars';
            });
        });
    }

    // 5. Active Navbar Link Highlight on Scroll
    const sections = document.querySelectorAll('section[id]');
    const navItems = document.querySelectorAll('.nav-link');

    window.addEventListener('scroll', () => {
        const scrollY = window.pageYOffset;

        sections.forEach(current => {
            const sectionHeight = current.offsetHeight;
            const sectionTop = current.offsetTop - 120;
            const sectionId = current.getAttribute('id');

            if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
                navItems.forEach(item => {
                    item.classList.remove('active');
                    if (item.getAttribute('href') === `#${sectionId}`) {
                        item.classList.add('active');
                    }
                });
            }
        });
    });
});

// 6. Handle Image Fallback
function handleImageFallback(imgElement) {
    imgElement.style.display = 'none';
    const fallback = document.getElementById('avatarFallback');
    if (fallback) {
        fallback.style.display = 'flex';
    }
}

// 7. Copy to Clipboard with Visual Feedback
function copyContactText(text, btnElement) {
    navigator.clipboard.writeText(text).then(() => {
        const originalHtml = btnElement.innerHTML;
        const isEnglish = currentLang === 'en';
        btnElement.innerHTML = `<i class="fa-solid fa-check"></i> <span class="copy-label">${isEnglish ? 'Copied!' : 'تم النسخ!'}</span>`;
        btnElement.style.backgroundColor = '#10b981';
        btnElement.style.color = '#ffffff';

        setTimeout(() => {
            btnElement.innerHTML = originalHtml;
            btnElement.style.backgroundColor = '';
            btnElement.style.color = '';
        }, 2000);
    }).catch(err => {
        console.error('Copy failed: ', err);
    });
}

// 8. Dedicated WhatsApp Form Handler
function handleWhatsAppSubmit(event) {
    event.preventDefault();

    const name = document.getElementById('waName').value.trim();
    const message = document.getElementById('waMessage').value.trim();

    if (!name || !message) {
        alert(currentLang === 'en' ? 'Please fill in all fields.' : 'يرجى كتابة الاسم والرسالة.');
        return;
    }

    const whatsappNumber = '201271893625';
    const isEn = currentLang === 'en';

    const formattedText = isEn
        ? `*New Project Inquiry via Portfolio*\n\n` +
          `👤 *Client Name:* ${name}\n` +
          `📝 *Message / Brief:* ${message}`
        : `*طلب مشروع جديد من البورتفوليو*\n\n` +
          `👤 *الاسم:* ${name}\n` +
          `📝 *الرسالة / فكرة المشروع:* ${message}`;

    const encodedText = encodeURIComponent(formattedText);
    const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodedText}`;

    window.open(whatsappUrl, '_blank');
}

// 9. Dedicated Email Form Handler
function handleEmailSubmit(event) {
    event.preventDefault();

    const name = document.getElementById('emailName').value.trim();
    const senderEmail = document.getElementById('emailSender').value.trim();
    const subjectSelect = document.getElementById('emailSubject');
    const projectType = subjectSelect.options[subjectSelect.selectedIndex].text;
    const message = document.getElementById('emailMessage').value.trim();

    if (!name || !senderEmail || !message) {
        alert(currentLang === 'en' ? 'Please fill in all fields.' : 'يرجى كتابة كافة البيانات المطلوبة.');
        return;
    }

    const targetEmail = 'kerolosashraf964@gmail.com';
    const isEn = currentLang === 'en';

    const emailSubject = isEn
        ? `Project Inquiry: ${projectType} from ${name}`
        : `طلب مشروع: ${projectType} - من: ${name}`;

    const emailBody = isEn
        ? `Hello Kerolos,\n\n` +
          `Name: ${name}\n` +
          `Email: ${senderEmail}\n` +
          `Project Type: ${projectType}\n\n` +
          `Project Details & Requirements:\n` +
          `${message}\n\n` +
          `Best regards,\n${name}`
        : `مرحباً كيرلس،\n\n` +
          `الاسم: ${name}\n` +
          `البريد الإلكتروني: ${senderEmail}\n` +
          `نوع المشروع: ${projectType}\n\n` +
          `تفاصيل ومتطلبات المشروع:\n` +
          `${message}\n\n` +
          `مع أطيب التحيات،\n${name}`;

    const mailtoUrl = `mailto:${targetEmail}?subject=${encodeURIComponent(emailSubject)}&body=${encodeURIComponent(emailBody)}`;

    window.location.href = mailtoUrl;
}


// ══════════════════════════════════════════════════════════════════
//  ChatControl Gallery — Tab Switcher & Screenshot Carousel
// ══════════════════════════════════════════════════════════════════

// ── Gallery Tab Switcher ──────────────────────────────────────────
function switchGalleryTab(btn) {
    const targetId = btn.getAttribute('data-target');

    // Deactivate all tabs in the same tab bar
    btn.closest('.gallery-tabs').querySelectorAll('.gallery-tab').forEach(t => {
        t.classList.remove('active');
    });
    btn.classList.add('active');

    // Hide all panels, show the target panel
    btn.closest('.chatcontrol-gallery').querySelectorAll('.gallery-panel').forEach(p => {
        p.classList.remove('active');
    });
    const target = document.getElementById(targetId);
    if (target) target.classList.add('active');
}

// ── Carousel Helpers ──────────────────────────────────────────────
function getCarouselState(carouselId) {
    const carousel = document.getElementById(carouselId);
    if (!carousel) return null;
    const slides = Array.from(carousel.querySelectorAll('.screenshot-slide'));
    let current = 0;
    slides.forEach((s, i) => { if (s.classList.contains('active')) current = i; });
    return { carousel, slides, current };
}

function updateDots(carouselId, index) {
    // Dots container id: replace "-carousel" with "-dots"
    const dotsId = carouselId.replace('-carousel', '-dots');
    const dotsEl = document.getElementById(dotsId);
    if (!dotsEl) return;
    dotsEl.querySelectorAll('.carousel-dot').forEach((d, i) => {
        d.classList.toggle('active', i === index);
    });
}

// ── Public API — called by inline onclick handlers in HTML ────────
function goToSlide(carouselId, index) {
    const state = getCarouselState(carouselId);
    if (!state) return;
    state.slides.forEach(s => s.classList.remove('active'));
    if (state.slides[index]) state.slides[index].classList.add('active');
    updateDots(carouselId, index);
}

function nextSlide(carouselId) {
    const state = getCarouselState(carouselId);
    if (!state) return;
    const next = (state.current + 1) % state.slides.length;
    goToSlide(carouselId, next);
}

function prevSlide(carouselId) {
    const state = getCarouselState(carouselId);
    if (!state) return;
    const prev = (state.current - 1 + state.slides.length) % state.slides.length;
    goToSlide(carouselId, prev);
}

// ── Auto-advance desktop carousel every 4 s ───────────────────────
document.addEventListener('DOMContentLoaded', () => {
    setInterval(() => {
        const desktopPanel = document.getElementById('tab-desktop');
        // Only auto-advance when the desktop tab is visible
        if (desktopPanel && desktopPanel.classList.contains('active')) {
            nextSlide('desktop-carousel');
        }
    }, 4000);
});
