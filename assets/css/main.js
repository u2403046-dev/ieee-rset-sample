// Initialize AOS Animations
AOS.init({
    duration: 800,
    once: true,
    easing: 'ease-in-out'
});

// 1. Navbar Scroll Logic
window.addEventListener('scroll', () => {
    const nav = document.getElementById('navbar');
    window.scrollY > 50 ? nav.classList.add('scrolled') : nav.classList.remove('scrolled');
});

// 2. Custom Tech Cursor Logic
const dot = document.querySelector('.cursor-dot');
const outline = document.querySelector('.cursor-outline');

if (dot && outline) {
    window.addEventListener('mousemove', (e) => {
        dot.style.left = outline.style.left = e.clientX + 'px';
        dot.style.top = outline.style.top = e.clientY + 'px';
    });

    // Cursor interaction for links
    document.querySelectorAll('a, button, .theme-switch').forEach(link => {
        link.addEventListener('mouseenter', () => outline.style.transform = 'translate(-50%, -50%) scale(1.5)');
        link.addEventListener('mouseleave', () => outline.style.transform = 'translate(-50%, -50%) scale(1)');
    });
}

// 3. Theme Toggle Logic
const themeBtn = document.getElementById('theme-toggle');
if (themeBtn) {
    themeBtn.addEventListener('click', () => {
        const isDark = document.body.getAttribute('data-theme') === 'dark';
        document.body.setAttribute('data-theme', isDark ? 'light' : 'dark');
        themeBtn.querySelector('i').classList.toggle('fa-sun');
        themeBtn.querySelector('i').classList.toggle('fa-moon');
    });
}

// 4. Logo Toggle (Mobile Nav Placeholder)
const navToggle = document.querySelector('.logo'); 
const navLinks = document.querySelector('.nav-links');
if (navToggle && navLinks) {
    navToggle.addEventListener('click', () => {
        // Only toggle active on mobile screens
        if(window.innerWidth < 768) {
            navLinks.classList.toggle('active');
        }
    });
}