// Mobile Navigation Toggle
const mobileToggle = document.getElementById('mobileToggle');
const navLinks = document.getElementById('navLinks');
const navLinksItems = document.querySelectorAll('.nav-link');

mobileToggle.addEventListener('click', () => {
    navLinks.classList.toggle('active');
    mobileToggle.classList.toggle('active');
});

// Close mobile menu when clicking a link
navLinksItems.forEach(link => {
    link.addEventListener('click', () => {
        navLinks.classList.remove('active');
        mobileToggle.classList.remove('active');
    });
});

// Navbar Scroll Effect
const navbar = document.querySelector('.navbar');
window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }
});

// Active Link Highlighting on Scroll
const sections = document.querySelectorAll('section');
let isScrolling = false;

window.addEventListener('scroll', () => {
    if (!isScrolling) {
        window.requestAnimationFrame(() => {
            let current = '';
            sections.forEach(section => {
                const sectionTop = section.offsetTop;
                if (window.scrollY >= (sectionTop - 150)) {
                    current = section.getAttribute('id');
                }
            });

            navLinksItems.forEach(link => {
                link.classList.remove('active');
                if (link.getAttribute('href').includes(current)) {
                    link.classList.add('active');
                }
            });
            isScrolling = false;
        });
        isScrolling = true;
    }
});


// Scroll Animations (Intersection Observer)
const observerOptions = {
    threshold: 0.2,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');

            // Animate progress bars if they exist in this card
            const progressBar = entry.target.querySelector('.progress-bar');
            if (progressBar) {
                const width = progressBar.getAttribute('data-width');
                progressBar.style.width = width;
            }

            observer.unobserve(entry.target);
        }
    });
}, observerOptions);

document.querySelectorAll('.scroll-animate').forEach(el => {
    observer.observe(el);
});

// Contact Form Handling (Simulation)
const contactForm = document.getElementById('contactForm');
const formResult = document.getElementById('formResult');

contactForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const btn = contactForm.querySelector('button');
    const originalText = btn.innerHTML;

    btn.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Sending...';
    btn.disabled = true;

    setTimeout(() => {
        btn.innerHTML = '<i class="fas fa-check"></i> Sent!';
        btn.style.backgroundColor = 'var(--primary)';
        btn.style.color = 'var(--bg-body)';

        formResult.innerHTML = '<span class="text-primary font-code">Message sent successfully!</span>';
        contactForm.reset();

        setTimeout(() => {
            btn.innerHTML = originalText;
            btn.disabled = false;
            btn.style.backgroundColor = '';
            btn.style.color = '';
            formResult.innerHTML = '';
        }, 3000);
    }, 1500);
});

// Particle Background Animation
// Features:
// - Auto-adapts to system dark/light mode
// - Mouse interaction & repulsion
// - Particle linking with distance-based opacity
// - Shooting stars
// - Smooth glow effects
const canvas = document.getElementById("particleBg");
const ctx = canvas.getContext("2d");

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

// Dynamic Theme Engine
let theme = window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light";

const themeColors = {
    dark: {
        particle: "rgba(200,200,255,",
        line: "rgba(150,150,255,"
    },
    light: {
        particle: "rgba(120,120,150,",
        line: "rgba(100,100,140,"
    }
};

// Auto-detect theme change LIVE
window.matchMedia("(prefers-color-scheme: dark)").addEventListener("change", e => {
    theme = e.matches ? "dark" : "light";
});

let particles = [];
const count = 90;
const mouse = { x: null, y: null, radius: 130 };

// Track mouse
window.addEventListener("mousemove", (e) => {
    mouse.x = e.clientX;
    mouse.y = e.clientY;
});

// Reset mouse when out
window.addEventListener("mouseout", () => {
    mouse.x = null;
    mouse.y = null;
});

// Shooting stars
const shootingStars = [];

class ShootingStar {
    constructor() {
        this.x = Math.random() * canvas.width;
        this.y = -20;
        this.length = Math.random() * 80 + 50;
        this.speed = Math.random() * 4 + 4;
        this.opacity = 1;
    }

    update() {
        this.x += this.speed;
        this.y += this.speed * 0.5;
        this.opacity -= 0.01;
    }

    draw() {
        ctx.strokeStyle = `rgba(255,255,255,${this.opacity})`;
        ctx.lineWidth = 2;
        ctx.beginPath();
        ctx.moveTo(this.x, this.y);
        ctx.lineTo(this.x - this.length, this.y - this.length * 0.5);
        ctx.stroke();
    }
}

// Particle class
class Particle {
    constructor() {
        this.x = Math.random() * canvas.width;
        this.y = Math.random() * canvas.height;
        this.size = Math.random() * 2 + 0.7;
        this.baseX = this.x;
        this.baseY = this.y;
        this.speedX = (Math.random() - 0.5) * 0.4;
        this.speedY = (Math.random() - 0.5) * 0.4;
        this.glowPulse = Math.random();
    }

    update() {
        this.x += this.speedX;
        this.y += this.speedY;

        // wrap edges
        if (this.x < 0) this.x = canvas.width;
        if (this.x > canvas.width) this.x = 0;
        if (this.y < 0) this.y = canvas.height;
        if (this.y > canvas.height) this.y = 0;

        // Mouse repulsion
        if (mouse.x !== null) {
            let dx = this.x - mouse.x;
            let dy = this.y - mouse.y;
            let dist = Math.sqrt(dx * dx + dy * dy);

            if (dist < mouse.radius) {
                this.x += dx / dist * 3;
                this.y += dy / dist * 3;
            }
        }

        // Random glow pulse
        this.glowPulse += 0.02;
    }

    draw() {
        let glow = (Math.sin(this.glowPulse) + 1) * 0.5;
        ctx.fillStyle = `${themeColors[theme].particle}${0.6 + glow * 0.4})`;
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.size + glow * 1.2, 0, Math.PI * 2);
        ctx.fill();
    }
}

// Init
function initParticles() {
    for (let i = 0; i < count; i++) {
        particles.push(new Particle());
    }
}

// Parallax movement
window.addEventListener("mousemove", (e) => {
    const dx = (e.clientX - canvas.width / 2) * 0.0008;
    const dy = (e.clientY - canvas.height / 2) * 0.0008;

    particles.forEach((p) => {
        p.x += dx;
        p.y += dy;
    });
});

// Animate
function animate() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    // Draw & update particles
    particles.forEach((p) => {
        p.update();
        p.draw();
    });

    // Linking lines
    connectParticles();

    // Shooting stars (random)
    if (Math.random() < 0.01) {
        shootingStars.push(new ShootingStar());
    }

    shootingStars.forEach((s, i) => {
        s.update();
        s.draw();
        if (s.opacity <= 0) shootingStars.splice(i, 1);
    });

    requestAnimationFrame(animate);
}

// Draw linking lines
function connectParticles() {
    let opacity;

    for (let i = 0; i < particles.length; i++) {
        for (let j = i + 1; j < particles.length; j++) {
            let dx = particles[i].x - particles[j].x;
            let dy = particles[i].y - particles[j].y;
            let dist = Math.sqrt(dx * dx + dy * dy);

            if (dist < 120) {
                opacity = 1 - dist / 120;
                ctx.strokeStyle = `${themeColors[theme].line}${opacity})`;
                ctx.lineWidth = 1;
                ctx.beginPath();
                ctx.moveTo(particles[i].x, particles[i].y);
                ctx.lineTo(particles[j].x, particles[j].y);
                ctx.stroke();
            }
        }
    }
}

initParticles();
animate();

// Resize handling
window.addEventListener("resize", () => {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
});

// Console Greeting
console.log(`
%c
╔════════════════════════════════════════╗
║           Welcome Developer!           ║
║                                        ║
║     Portfolio by Muhammed Adnan K      ║
║     Built with clean HTML/CSS/JS       ║
║                                        ║
╚════════════════════════════════════════╝
`, 'color: #3B82F6; font-family: monospace; font-size: 12px; font-weight: bold;');
