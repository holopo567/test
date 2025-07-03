// Navbar background color change on scroll
window.addEventListener('scroll', () => {
    const navbar = document.querySelector('.navbar');
    if (window.scrollY > 50) {
        navbar.style.backgroundColor = 'rgba(0, 0, 0, 0.9)';
    } else {
        navbar.style.backgroundColor = 'rgba(0, 0, 0, 0.8)';
    }
});


let t = document.querySelector("body > main > div.relative.z-50.flex.shrink-0.flex-col.justify-end > div > div.mt-0\\.5.mb-4.items-center.justify-center.gap-2.bg-white.text-xs.text-zinc-400.group-data-\\[theme\\=dark\\]\\:bg-black");
t.style.display = 'none';