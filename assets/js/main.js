// ============================================================
// KECAMATAN KARANG TENGAH — MAIN JS
// ============================================================

document.addEventListener('DOMContentLoaded', function () {

    // ---- Sticky Header Shadow ----
    const header = document.getElementById('site-header');
    if (header) {
        window.addEventListener('scroll', () => {
            header.classList.toggle('scrolled', window.scrollY > 20);
        });
    }

    // ---- Mobile Nav Toggle ----
    const navToggle = document.getElementById('nav-toggle');
    const mainNav = document.getElementById('main-nav');
    if (navToggle && mainNav) {
        navToggle.addEventListener('click', () => {
            mainNav.classList.toggle('open');
            const spans = navToggle.querySelectorAll('span');
            if (mainNav.classList.contains('open')) {
                spans[0].style.transform = 'translateY(7px) rotate(45deg)';
                spans[1].style.opacity = '0';
                spans[2].style.transform = 'translateY(-7px) rotate(-45deg)';
            } else {
                spans.forEach(s => { s.style.transform = ''; s.style.opacity = ''; });
            }
        });
        // Close on nav link click (mobile)
        mainNav.querySelectorAll('a').forEach(link => {
            link.addEventListener('click', () => {
                mainNav.classList.remove('open');
                navToggle.querySelectorAll('span').forEach(s => { s.style.transform = ''; s.style.opacity = ''; });
            });
        });
    }

    // ---- FAQ Accordion ----
    document.querySelectorAll('.faq-question').forEach(btn => {
        btn.addEventListener('click', function () {
            const answer = this.nextElementSibling;
            const isOpen = this.classList.contains('active');

            // Close all
            document.querySelectorAll('.faq-question').forEach(q => {
                q.classList.remove('active');
                q.nextElementSibling.classList.remove('open');
            });

            // Open clicked if it was closed
            if (!isOpen) {
                this.classList.add('active');
                answer.classList.add('open');
            }
        });
    });

    // ---- SKM Form Submit ----
    const skmForm = document.getElementById('skm-form');
    const successBanner = document.getElementById('skm-success');
    if (skmForm) {
        skmForm.addEventListener('submit', function (e) {
            e.preventDefault();
            // Simulasi submit (bisa diubah ke AJAX ke backend)
            skmForm.style.display = 'none';
            if (successBanner) {
                successBanner.style.display = 'flex';
                successBanner.scrollIntoView({ behavior: 'smooth', block: 'center' });
            }
        });
    }

    // ---- Scroll Reveal ----
    if ('IntersectionObserver' in window) {
        const cards = document.querySelectorAll('.service-card, .syarat-card, .info-card, .struktur-card, .stat-item');
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.style.opacity = '1';
                    entry.target.style.transform = 'translateY(0)';
                    observer.unobserve(entry.target);
                }
            });
        }, { threshold: 0.1 });

        cards.forEach(card => {
            card.style.opacity = '0';
            card.style.transform = 'translateY(20px)';
            card.style.transition = 'opacity .4s ease, transform .4s ease';
            observer.observe(card);
        });
    }

    // ---- Counter Animation (stat numbers) ----
    const counters = document.querySelectorAll('[data-count]');
    if (counters.length) {
        const countObserver = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    const el = entry.target;
                    const target = parseInt(el.dataset.count, 10);
                    let current = 0;
                    const step = Math.ceil(target / 40);
                    const interval = setInterval(() => {
                        current = Math.min(current + step, target);
                        el.textContent = current.toLocaleString('id-ID');
                        if (current >= target) clearInterval(interval);
                    }, 30);
                    countObserver.unobserve(el);
                }
            });
        }, { threshold: 0.5 });
        counters.forEach(c => countObserver.observe(c));
    }

});
