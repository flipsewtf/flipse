//nav.js

const toggle = document.getElementById('nav-toggle');
const sidebar = document.getElementById('mobile-sidebar');

function setOpen(open) {
    document.body.dataset.navOpen = String(open);
    toggle?.setAttribute('aria-expanded', String(open));

    if (open) {
        sidebar?.querySelector('a')?.focus();
    } else {
        toggle?.focus();
    }
}

toggle?.addEventListener('click', () => {
    const isOpen = document.body.dataset.navOpen === 'true';
    setOpen(!isOpen);
});

document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && document.body.dataset.navOpen === 'true') {
        setOpen(false);
    }
});
