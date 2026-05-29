const yearElement = document.getElementById('year');
yearElement.textContent = new Date().getFullYear();

document.addEventListener('DOMContentLoaded', () => {
    const hamburgerBtn = document.querySelector('button[aria-label="Menu"]');
    const closeMenuBtn = document.getElementById('close-menu-btn');
    const mobileMenu = document.getElementById('mobile-menu');
    const backdrop = document.getElementById('mobile-menu-backdrop');
    const mobileLinks = document.querySelectorAll('.mobile-nav-link');

    if (hamburgerBtn && mobileMenu && backdrop) {
        const openMenu = () => {
            backdrop.classList.remove('opacity-0', 'pointer-events-none');
            backdrop.classList.add('opacity-100', 'pointer-events-auto');

            mobileMenu.classList.remove('-translate-y-full', 'opacity-0', 'invisible');
            mobileMenu.classList.add('translate-y-0', 'opacity-100', 'visible');

            document.body.style.overflow = 'hidden';

            mobileLinks.forEach((link, index) => {
                setTimeout(
                    () => {
                        link.classList.remove('translate-y-4', 'opacity-0');
                        link.classList.add('translate-y-0', 'opacity-100');
                    },
                    100 + index * 60
                );
            });
        };

        const closeMenu = () => {
            mobileLinks.forEach(link => {
                link.classList.remove('translate-y-0', 'opacity-100');
                link.classList.add('translate-y-4', 'opacity-0');
            });

            mobileMenu.classList.remove('translate-y-0', 'opacity-100', 'visible');
            mobileMenu.classList.add('-translate-y-full', 'opacity-0', 'invisible');

            backdrop.classList.remove('opacity-100', 'pointer-events-auto');
            backdrop.classList.add('opacity-0', 'pointer-events-none');

            document.body.style.overflow = '';
        };

        hamburgerBtn.addEventListener('click', openMenu);
        closeMenuBtn.addEventListener('click', closeMenu);
        backdrop.addEventListener('click', closeMenu);

        mobileLinks.forEach(link => {
            link.addEventListener('click', closeMenu);
        });
    }
});
