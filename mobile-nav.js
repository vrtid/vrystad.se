document.addEventListener('DOMContentLoaded', function () {
    var button = document.getElementById('nav-toggle');
    var menu = document.getElementById('site-nav');

    if (!button || !menu) {
        return;
    }

    button.addEventListener('click', function () {
        var isOpen = menu.classList.toggle('is-open');
        button.setAttribute('aria-expanded', isOpen ? 'true' : 'false');
        button.textContent = isOpen ? '✕' : '☰';
    });
});