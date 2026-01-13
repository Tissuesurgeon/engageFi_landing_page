// Smooth scroll for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// CTA buttons functionality
document.querySelectorAll('.cta-btn, .btn-primary').forEach(btn => {
    if (!btn.closest('.email-form')) {
        btn.addEventListener('click', () => {
            document.querySelector('.final-cta').scrollIntoView({
                behavior: 'smooth'
            });
        });
    }
});

// Email form submission
const emailForm = document.querySelector('.email-form');
if (emailForm) {
    emailForm.addEventListener('submit', (e) => {
        e.preventDefault();
        const email = emailForm.querySelector('.email-input').value;
        if (email) {
            alert('Thank you for joining! We\'ll be in touch soon.');
            emailForm.querySelector('.email-input').value = '';
        }
    });
}

// Scroll animations
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -100px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, observerOptions);

// Observe cards and sections
document.querySelectorAll('.feature-card, .testimonial-card, .nft-card, .dapps-card').forEach(el => {
    el.style.opacity = '0';
    el.style.transform = 'translateY(30px)';
    el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
    observer.observe(el);
});
