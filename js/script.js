document.querySelector('.menu-toggle').addEventListener('click', function() {
    document.querySelector('.main-nav').classList.toggle('active');
});
document.querySelectorAll('.main-nav a').forEach(link => {
    link.addEventListener('click', () => {
        document.querySelector('.main-nav').classList.remove('active');
    });
});
