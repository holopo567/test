// Intersection Observer for scroll animations
const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
        }
    });
}, {
    threshold: 0.1
});

// Observe all elements with slide-up class
document.addEventListener('DOMContentLoaded', () => {
    const elements = document.querySelectorAll('.slide-up');
    elements.forEach(element => observer.observe(element));
});