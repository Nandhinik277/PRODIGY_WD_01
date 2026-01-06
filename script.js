const navbar = document.getElementById('navbar');
const hamburgerBtn = document.getElementById('hamburger-btn');
const hamburgerIcon = hamburgerBtn.querySelector('.hamburger-icon');
const mobileMenu = document.getElementById('mobile-menu');
let isScrolled = false;

window.addEventListener('scroll', () => {
    if (window.scrollY > 50 && !isScrolled) {
        navbar.classList.add('scrolled-nav', 'backdrop-blur-md'); // Tailwind blur
        navbar.classList.remove('initial-nav');
        isScrolled = true;
    } else if (window.scrollY <= 50 && isScrolled) {
        navbar.classList.remove('scrolled-nav', 'backdrop-blur-md');
        navbar.classList.add('initial-nav');
        isScrolled = false;
    }
});

hamburgerBtn.addEventListener('click', () => {
    hamburgerIcon.classList.toggle('open');
    mobileMenu.classList.toggle('active');
});


// ----------------------
// Galaxy/particles background
// ----------------------
tsParticles.load("tsparticles", {
    fullScreen: { enable: true, zIndex: -1 },
    particles: {
        number: { value: 80 },
        color: { value: "#10b981" },
        shape: { type: "circle" },
        size: { value: { min: 1, max: 3 } },
        links: {
            enable: true,
            color: "#10b981",
            distance: 150,
            opacity: 0.3,
            width: 1
        },
        move: { enable: true, speed: 1, outModes: "bounce" }
    },
    interactivity: {
        events: {
            onHover: { enable: true, mode: "grab" },
            onClick: { enable: true, mode: "push" }
        },
        modes: { grab: { distance: 200, links: { opacity: 0.5 } }, push: { quantity: 4 } }
    },
    detectRetina: true
});
