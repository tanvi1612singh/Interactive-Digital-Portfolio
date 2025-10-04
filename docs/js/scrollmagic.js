// Scroll effects using GSAP  
document.addEventListener('DOMContentLoaded', function() {
   
    initScrollEffects();
    initParallaxEffects();
    initRevealEffects();
    
    console.log('Scroll effects initialized with GSAP');
    
    function initScrollEffects() {
        // Hero scroll indicator fade out
        const scrollIndicator = document.querySelector('.scroll-indicator');
        if (scrollIndicator) {
            gsap.to(scrollIndicator, {
                opacity: 0,
                duration: 1,
                scrollTrigger: {
                    trigger: '.hero',
                    start: 'top 20%',
                    end: 'bottom 20%',
                    scrub: true
                }
            });
        }
        
        // Navigation background change
        const navbar = document.querySelector('.navbar');
        if (navbar) {
            ScrollTrigger.create({
                start: 'top -80',
                end: 99999,
                toggleClass: {className: 'scrolled', targets: navbar}
            });
        }
    }
    
    function initParallaxEffects() {
        // Floating elements parallax
        const floatingElements = document.querySelectorAll('.floating-element');
        floatingElements.forEach((element, index) => {
            const speed = element.getAttribute('data-speed') || 0.5;
            
            gsap.to(element, {
                y: -100 * speed,
                ease: 'none',
                scrollTrigger: {
                    trigger: element.parentElement,
                    start: 'top bottom',
                    end: 'bottom top',
                    scrub: true
                }
            });
        });
        
        // Section backgrounds parallax
        const sections = document.querySelectorAll('.page-header, .hero');
        sections.forEach(section => {
            gsap.fromTo(section, {
                backgroundPosition: '50% 0%'
            }, {
                backgroundPosition: '50% 100%',
                ease: 'none',
                scrollTrigger: {
                    trigger: section,
                    start: 'top bottom',
                    end: 'bottom top',
                    scrub: true
                }
            });
        });
    }
    
    function initRevealEffects() {
        // Timeline items reveal
        const timelineItems = document.querySelectorAll('.timeline-item');
        timelineItems.forEach((item, index) => {
            gsap.fromTo(item, {
                opacity: 0,
                y: 50,
                x: index % 2 === 0 ? -50 : 50,
                rotationY: index % 2 === 0 ? -15 : 15
            }, {
                opacity: 1,
                y: 0,
                x: 0,
                rotationY: 0,
                duration: 1,
                ease: 'back.out(1.7)',
                scrollTrigger: {
                    trigger: item,
                    start: 'top 80%',
                    toggleActions: 'play none none reverse'
                }
            });
        });
        
        // Project cards stagger reveal
        const projectCards = document.querySelectorAll('.project-card');
        if (projectCards.length > 0) {
            gsap.fromTo(projectCards, {
                opacity: 0,
                y: 60,
                scale: 0.8,
                rotationX: -15
            }, {
                opacity: 1,
                y: 0,
                scale: 1,
                rotationX: 0,
                duration: 0.8,
                stagger: 0.2,
                ease: 'back.out(1.7)',
                scrollTrigger: {
                    trigger: '.projects-grid',
                    start: 'top 80%',
                    toggleActions: 'play none none reverse'
                }
            });
        }
        
        // Skills progress bars
        const skillBars = document.querySelectorAll('.skill-progress');
        skillBars.forEach(bar => {
            const level = bar.getAttribute('data-level');
            
            gsap.fromTo(bar, {
                width: '0%'
            }, {
                width: level + '%',
                duration: 1.5,
                ease: 'power2.out',
                scrollTrigger: {
                    trigger: bar,
                    start: 'top 80%',
                    toggleActions: 'play none none reverse'
                }
            });
        });
        
        // Dashboard widgets cascade
        const dashboardWidgets = document.querySelectorAll('.dashboard-widget');
        if (dashboardWidgets.length > 0) {
            gsap.fromTo(dashboardWidgets, {
                opacity: 0,
                y: 40,
                scale: 0.9,
                rotationY: -10
            }, {
                opacity: 1,
                y: 0,
                scale: 1,
                rotationY: 0,
                duration: 0.6,
                stagger: 0.1,
                ease: 'back.out(1.7)',
                scrollTrigger: {
                    trigger: '.dashboard-grid',
                    start: 'top 80%',
                    toggleActions: 'play none none reverse'
                }
            });
        }
        
        // Skills galaxy planets orbit reveal
        const skillPlanets = document.querySelectorAll('.skill-planet');
        skillPlanets.forEach((planet, index) => {
            gsap.fromTo(planet, {
                scale: 0,
                opacity: 0,
                rotation: -180
            }, {
                scale: 1,
                opacity: 1,
                rotation: 0,
                duration: 1,
                delay: index * 0.1,
                ease: 'elastic.out(1, 0.5)',
                scrollTrigger: {
                    trigger: '.skills-galaxy',
                    start: 'top 70%',
                    toggleActions: 'play none none reverse'
                }
            });
        });
        
        // Feature cards grid reveal
        const featureCards = document.querySelectorAll('.feature-card');
        if (featureCards.length > 0) {
            gsap.fromTo(featureCards, {
                opacity: 0,
                y: 30,
                scale: 0.8
            }, {
                opacity: 1,
                y: 0,
                scale: 1,
                duration: 0.6,
                stagger: 0.1,
                ease: 'back.out(1.7)',
                scrollTrigger: {
                    trigger: '.features-grid',
                    start: 'top 80%',
                    toggleActions: 'play none none reverse'
                }
            });
        }
        
        // Contact form reveal
        const contactForm = document.querySelector('.contact-form');
        if (contactForm) {
            const formElements = contactForm.querySelectorAll('.form-group, .btn');
            
            gsap.fromTo(formElements, {
                opacity: 0,
                x: -30,
                rotationY: -10
            }, {
                opacity: 1,
                x: 0,
                rotationY: 0,
                duration: 0.6,
                stagger: 0.1,
                ease: 'back.out(1.7)',
                scrollTrigger: {
                    trigger: contactForm,
                    start: 'top 80%',
                    toggleActions: 'play none none reverse'
                }
            });
        }
        
        // Resume sections reveal
        const resumeSections = document.querySelectorAll('.resume-section-block');
        resumeSections.forEach((section, index) => {
            gsap.fromTo(section, {
                opacity: 0,
                y: 40,
                x: index % 2 === 0 ? -20 : 20
            }, {
                opacity: 1,
                y: 0,
                x: 0,
                duration: 0.8,
                ease: 'power2.out',
                scrollTrigger: {
                    trigger: section,
                    start: 'top 80%',
                    toggleActions: 'play none none reverse'
                }
            });
        });
    }
    
    // Scroll progress indicator
    function initScrollProgress() {
        const progressBar = document.createElement('div');
        progressBar.style.cssText = `
            position: fixed;
            top: 0;
            left: 0;
            width: 0%;
            height: 3px;
            background: linear-gradient(90deg, #6366f1, #8b5cf6);
            z-index: 9999;
            transition: width 0.1s ease;
        `;
        document.body.appendChild(progressBar);
        
        ScrollTrigger.create({
            trigger: document.body,
            start: 'top top',
            end: 'bottom bottom',
            onUpdate: self => {
                progressBar.style.width = (self.progress * 100) + '%';
            }
        });
    }
    
    // Initialize scroll progress
    initScrollProgress();
    
    // Refresh ScrollTrigger on window resize
    window.addEventListener('resize', function() {
        ScrollTrigger.refresh();
    });
    
    console.log('GSAP scroll effects loaded');
});

// Utility functions for GSAP
function createRevealScene(element, options = {}) {
    const defaults = {
        triggerHook: 0.8,
        duration: 0.8,
        y: 50,
        opacity: 0
    };
    
    const config = { ...defaults, ...options };
    
    return gsap.fromTo(element, {
        opacity: config.opacity,
        y: config.y
    }, {
        opacity: 1,
        y: 0,
        duration: config.duration,
        ease: 'back.out(1.7)',
        scrollTrigger: {
            trigger: element,
            start: 'top 80%',
            toggleActions: 'play none none reverse'
        }
    });
}

function createParallaxScene(element, speed = 0.5) {
    return gsap.to(element, {
        y: -100 * speed,
        ease: 'none',
        scrollTrigger: {
            trigger: element,
            start: 'top bottom',
            end: 'bottom top',
            scrub: true
        }
    });
}

// Export for use in other files
window.ScrollMagicUtils = {
    createRevealScene,
    createParallaxScene
};