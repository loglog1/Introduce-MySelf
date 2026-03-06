document.addEventListener('DOMContentLoaded', () => {
    // Mobile menu toggle logic
    const mobileMenuBtn = document.getElementById('mobile-menu-btn');
    const mobileMenu = document.getElementById('mobile-menu');
    const mobileLinks = document.querySelectorAll('.mobile-link');

    // Function to toggle menu visibility
    const toggleMenu = () => {
        const isHidden = mobileMenu.classList.contains('hidden');
        if (isHidden) {
            mobileMenu.classList.remove('hidden');
            mobileMenu.classList.add('flex');
        } else {
            mobileMenu.classList.add('hidden');
            mobileMenu.classList.remove('flex');
        }
    };

    // Toggle menu when clicking the hamburger button
    if (mobileMenuBtn && mobileMenu) {
        mobileMenuBtn.addEventListener('click', toggleMenu);
    }

    // Close menu when a link inside it is clicked
    mobileLinks.forEach(link => {
        link.addEventListener('click', () => {
            if (!mobileMenu.classList.contains('hidden')) {
                toggleMenu();
            }
        });
    });

    // Intersection Observer for scroll animations (fade-in)
    const fadeElements = document.querySelectorAll('.fade-in');

    // Only proceed if elements exist
    if (fadeElements.length > 0) {
        const observerOptions = {
            root: null,
            rootMargin: '0px',
            threshold: 0.15 // Triggers when 15% of the element is visible
        };

        const observer = new IntersectionObserver((entries, observer) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('appear');
                    // Unobserve to trigger the animation only once
                    observer.unobserve(entry.target);
                }
            });
        }, observerOptions);

        fadeElements.forEach(el => observer.observe(el));

        // Ensure the hero section appears immediately on load without waiting for scroll
        setTimeout(() => {
            const hero = document.getElementById('hero');
            if (hero) hero.classList.add('appear');
        }, 100);
    }
});
