// theme-toggle.js
// @ts-nocheck
(() => {
    const buttons = document.querySelectorAll('.theme-toggle');
    if (!buttons.length) return;

    const root = document.documentElement;
    const storageKey = 'theme-mode';

    const getStoredTheme = () => localStorage.getItem(storageKey);
    const getSystemTheme = () =>
        window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';

    const setTheme = (theme) => {
        root.setAttribute('data-theme', theme);

        buttons.forEach((btn) => {
            btn.ariaPressed = String(theme === 'dark');
        });
    };

    const switchTheme = (theme) => {
        root.classList.add('no-transition');
        setTheme(theme);

        setTimeout(() => {
            root.classList.remove('no-transition');
        }, 50);
    };

    const setUserTheme = (theme) => localStorage.setItem(storageKey, theme);

    setTheme(getStoredTheme() || getSystemTheme());

    buttons.forEach((btn) => {
        btn.addEventListener('click', () => {
            const current = root.getAttribute('data-theme') === 'dark' ? 'dark' : 'light';
            const next = current === 'dark' ? 'light' : 'dark';
            switchTheme(next);
            setUserTheme(next);
        });
    });

    const mql = window.matchMedia('(prefers-color-scheme: dark)');
    mql.addEventListener('change', (e) => {
        const systemTheme = e.matches ? 'dark' : 'light';
        switchTheme(systemTheme);
        localStorage.setItem(storageKey, systemTheme);
    });
})();
