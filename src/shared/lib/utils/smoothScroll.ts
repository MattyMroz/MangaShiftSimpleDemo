export const smoothScrollTo = (targetId: string, offset: number = 100) => {
    const id = targetId.startsWith('/') ? targetId.slice(1) : targetId;

    if (id === 'home' || id === '') {
        window.scrollTo({ top: 0, behavior: 'smooth' });
        return;
    }

    const targetElement = document.getElementById(id);

    if (targetElement) {
        const elementPosition = targetElement.getBoundingClientRect().top;
        const offsetPosition = elementPosition + window.scrollY - offset;

        window.scrollTo({
            top: Math.max(0, offsetPosition),
            behavior: 'smooth'
        });
    }
};
