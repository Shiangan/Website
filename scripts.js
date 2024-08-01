document.addEventListener('DOMContentLoaded', function() {
    // Example: Fade-in effect for sections
    const sections = document.querySelectorAll('.section');
    sections.forEach(section => {
        section.style.opacity = 0;
        section.style.transition = 'opacity 1s ease-in-out';
    });

    // Scroll event to trigger fade-in effect
    window.addEventListener('scroll', () => {
        const scrollPosition = window.scrollY + window.innerHeight;
        sections.forEach(section => {
            if (scrollPosition > section.offsetTop) {
                section.style.opacity = 1;
            }
        });
    });

    // Smooth scroll for navbar links
    const navbarLinks = document.querySelectorAll('.navbar a');
    navbarLinks.forEach(link => {
        link.addEventListener('click', (event) => {
            event.preventDefault();
            const targetId = event.currentTarget.getAttribute('href').substring(1);
            const targetElement = document.getElementById(targetId);
            window.scrollTo({
                top: targetElement.offsetTop - 60, // Adjust for fixed header height
                behavior: 'smooth'
            });
        });
    });
});
