// Fonction pour animer les éléments au défilement
document.addEventListener('DOMContentLoaded', function () {
    const elements = document.querySelectorAll('.animate-on-scroll');

    function animateOnScroll() {
        const windowHeight = window.innerHeight;

        elements.forEach(element => {
            const position = element.getBoundingClientRect().top;

            if (position < windowHeight - 100) {
                element.classList.add('animate');
            }
        });
    }

    window.addEventListener('scroll', animateOnScroll);
    animateOnScroll(); // Initial call to animate elements on load
});
