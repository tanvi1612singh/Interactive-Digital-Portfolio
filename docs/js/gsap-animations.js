// GSAP Animations for Interactive Portfolio
document.addEventListener('DOMContentLoaded', function() {
    // Register GSAP plugins
    gsap.registerPlugin(ScrollTrigger);
    
    // Initialize all animations
    initHeroAnimations();
    initPageAnimations();
    initTimelineAnimations();
    initSkillsAnimations();
    initProjectAnimations();
    initDashboardAnimations();
    initScrollAnimations();
    initHoverEffects();
    
    console.log('GSAP animations initialized');
});

// Hero section animations
function initHeroAnimations() {
    const heroTitle = document.querySelector('.hero-title');
    const heroSubtitle = document.querySelector('.hero-subtitle');
    const heroDescription = document.querySelector('.hero-description');
    const heroButtons = document.querySelector('.hero-buttons');
    const floatingElements = document.querySelectorAll('.floating-element');
    const scrollIndicator = document.querySelector('.scroll-indicator');
    
    // Create timeline for hero animations
    const tl = gsap.timeline({ delay: 0.3 });
    
    if (heroTitle) {
        // Animate title lines
        const titleLines = heroTitle.querySelectorAll('.title-line');
        tl.fromTo(titleLines, 
            { 
                opacity: 0, 
                y: 100,
                rotationX: -90
            },
            { 
                opacity: 1, 
                y: 0,
                rotationX: 0,
                duration: 1,
                stagger: 0.2,
                ease: 'back.out(1.7)'
            }
        );
    }
    
    if (heroSubtitle) {
        tl.fromTo(heroSubtitle,
            { opacity: 0, y: 30 },
            { opacity: 1, y: 0, duration: 0.8, ease: 'power2.out' },
            '-=0.5'
        );
    }
    
    if (heroDescription) {
        tl.fromTo(heroDescription,
            { opacity: 0, y: 30 },
            { opacity: 1, y: 0, duration: 0.8, ease: 'power2.out' },
            '-=0.3'
        );
    }
    
    if (heroButtons) {
        const buttons = heroButtons.querySelectorAll('.btn');
        tl.fromTo(buttons,
            { opacity: 0, y: 30, scale: 0.8 },
            { opacity: 1, y: 0, scale: 1, duration: 0.6, stagger: 0.1, ease: 'back.out(1.7)' },
            '-=0.3'
        );
    }
    
    // Animate floating elements
    if (floatingElements.length > 0) {
        tl.fromTo(floatingElements,
            { opacity: 0, scale: 0, rotation: -180 },
            { opacity: 1, scale: 1, rotation: 0, duration: 1, stagger: 0.2, ease: 'elastic.out(1, 0.5)' },
            '-=0.8'
        );
        
        // Continuous floating animation
        floatingElements.forEach((element, index) => {
            gsap.to(element, {
                y: -20,
                duration: 2 + index * 0.5,
                repeat: -1,
                yoyo: true,
                ease: 'sine.inOut',
                delay: index * 0.2
            });
            
            gsap.to(element, {
                rotation: 360,
                duration: 10 + index * 2,
                repeat: -1,
                ease: 'none'
            });
        });
    }
    
    if (scrollIndicator) {
        tl.fromTo(scrollIndicator,
            { opacity: 0, y: 20 },
            { opacity: 1, y: 0, duration: 0.8, ease: 'power2.out' },
            '-=0.5'
        );
    }
}

// Page entrance animations
function initPageAnimations() {
    const pageTitle = document.querySelector('.page-title');
    const pageSubtitle = document.querySelector('.page-subtitle');
    const navCards = document.querySelectorAll('.nav-card');
    
    if (pageTitle) {
        gsap.fromTo(pageTitle,
            { opacity: 0, y: 50, scale: 0.8 },
            { opacity: 1, y: 0, scale: 1, duration: 1, ease: 'back.out(1.7)', delay: 0.2 }
        );
    }
    
    if (pageSubtitle) {
        gsap.fromTo(pageSubtitle,
            { opacity: 0, y: 30 },
            { opacity: 1, y: 0, duration: 0.8, ease: 'power2.out', delay: 0.4 }
        );
    }
    
    if (navCards.length > 0) {
        gsap.fromTo(navCards,
            { opacity: 0, y: 50, rotationY: -15 },
            { opacity: 1, y: 0, rotationY: 0, duration: 0.8, stagger: 0.1, ease: 'back.out(1.7)', delay: 0.6 }
        );
    }
}

// Timeline animations with ScrollTrigger
function initTimelineAnimations() {
    const timelineItems = document.querySelectorAll('.timeline-item');
    
    timelineItems.forEach((item, index) => {
        gsap.fromTo(item,
            { 
                opacity: 0, 
                y: 50,
                x: index % 2 === 0 ? -50 : 50
            },
            {
                opacity: 1,
                y: 0,
                x: 0,
                duration: 0.8,
                ease: 'back.out(1.7)',
                scrollTrigger: {
                    trigger: item,
                    start: 'top 80%',
                    end: 'bottom 20%',
                    toggleActions: 'play none none reverse'
                }
            }
        );
        
        // Animate timeline marker
        const marker = item.querySelector('.timeline-marker');
        if (marker) {
            gsap.fromTo(marker,
                { scale: 0, rotation: -180 },
                {
                    scale: 1,
                    rotation: 0,
                    duration: 0.6,
                    ease: 'back.out(2)',
                    scrollTrigger: {
                        trigger: item,
                        start: 'top 80%',
                        toggleActions: 'play none none reverse'
                    }
                }
            );
        }
        
        // Animate tags
        const tags = item.querySelectorAll('.tag');
        if (tags.length > 0) {
            gsap.fromTo(tags,
                { opacity: 0, scale: 0 },
                {
                    opacity: 1,
                    scale: 1,
                    duration: 0.4,
                    stagger: 0.1,
                    ease: 'back.out(1.7)',
                    delay: 0.3,
                    scrollTrigger: {
                        trigger: item,
                        start: 'top 70%',
                        toggleActions: 'play none none reverse'
                    }
                }
            );
        }
    });
}

// Skills galaxy and grid animations
function initSkillsAnimations() {
    // Galaxy animations
    const skillPlanets = document.querySelectorAll('.skill-planet');
    const centralSun = document.querySelector('.central-sun');
    
    if (centralSun) {
        gsap.fromTo(centralSun,
            { scale: 0, rotation: -180, opacity: 0 },
            {
                scale: 1,
                rotation: 0,
                opacity: 1,
                duration: 1.5,
                ease: 'elastic.out(1, 0.5)',
                scrollTrigger: {
                    trigger: '.skills-galaxy',
                    start: 'top 60%',
                    toggleActions: 'play none none reverse'
                }
            }
        );
    }
    
    skillPlanets.forEach((planet, index) => {
        gsap.fromTo(planet,
            { scale: 0, opacity: 0 },
            {
                scale: 1,
                opacity: 1,
                duration: 0.8,
                delay: index * 0.1,
                ease: 'back.out(1.7)',
                scrollTrigger: {
                    trigger: '.skills-galaxy',
                    start: 'top 60%',
                    toggleActions: 'play none none reverse'
                }
            }
        );
    });
    
    // Skills grid animations
    const skillBars = document.querySelectorAll('.skill-progress');
    
    skillBars.forEach(bar => {
        const level = bar.getAttribute('data-level');
        
        gsap.fromTo(bar,
            { width: '0%' },
            {
                width: level + '%',
                duration: 1.5,
                ease: 'power2.out',
                scrollTrigger: {
                    trigger: bar,
                    start: 'top 80%',
                    toggleActions: 'play none none reverse'
                }
            }
        );
    });
    
    // Skill categories
    const skillCategories = document.querySelectorAll('.skill-category');
    
    skillCategories.forEach((category, index) => {
        gsap.fromTo(category,
            { opacity: 0, y: 50, rotationX: -15 },
            {
                opacity: 1,
                y: 0,
                rotationX: 0,
                duration: 0.8,
                delay: index * 0.2,
                ease: 'back.out(1.7)',
                scrollTrigger: {
                    trigger: category,
                    start: 'top 80%',
                    toggleActions: 'play none none reverse'
                }
            }
        );
    });
}

// Project animations
function initProjectAnimations() {
    const projectCards = document.querySelectorAll('.project-card');
    
    projectCards.forEach((card, index) => {
        gsap.fromTo(card,
            { opacity: 0, y: 50, rotationY: -10 },
            {
                opacity: 1,
                y: 0,
                rotationY: 0,
                duration: 0.8,
                delay: index * 0.1,
                ease: 'back.out(1.7)',
                scrollTrigger: {
                    trigger: card,
                    start: 'top 80%',
                    toggleActions: 'play none none reverse'
                }
            }
        );
    });
    
    // Feature cards
    const featureCards = document.querySelectorAll('.feature-card');
    
    featureCards.forEach((card, index) => {
        gsap.fromTo(card,
            { opacity: 0, scale: 0.8, y: 30 },
            {
                opacity: 1,
                scale: 1,
                y: 0,
                duration: 0.6,
                delay: index * 0.1,
                ease: 'back.out(1.7)',
                scrollTrigger: {
                    trigger: card,
                    start: 'top 80%',
                    toggleActions: 'play none none reverse'
                }
            }
        );
    });
    
    // Tech stack items
    const techItems = document.querySelectorAll('.tech-item');
    
    techItems.forEach((item, index) => {
        gsap.fromTo(item,
            { opacity: 0, x: -30 },
            {
                opacity: 1,
                x: 0,
                duration: 0.5,
                delay: index * 0.05,
                ease: 'power2.out',
                scrollTrigger: {
                    trigger: item,
                    start: 'top 85%',
                    toggleActions: 'play none none reverse'
                }
            }
        );
    });
}

// Dashboard widget animations
function initDashboardAnimations() {
    const widgets = document.querySelectorAll('.dashboard-widget');
    
    widgets.forEach((widget, index) => {
        gsap.fromTo(widget,
            { opacity: 0, y: 30, scale: 0.9 },
            {
                opacity: 1,
                y: 0,
                scale: 1,
                duration: 0.6,
                delay: index * 0.1,
                ease: 'back.out(1.7)',
                scrollTrigger: {
                    trigger: widget,
                    start: 'top 80%',
                    toggleActions: 'play none none reverse'
                }
            }
        );
        
        // Animate widget content
        const statNumber = widget.querySelector('.stat-number, .current-time');
        if (statNumber) {
            gsap.fromTo(statNumber,
                { scale: 0 },
                {
                    scale: 1,
                    duration: 0.8,
                    delay: 0.3,
                    ease: 'elastic.out(1, 0.5)',
                    scrollTrigger: {
                        trigger: widget,
                        start: 'top 80%',
                        toggleActions: 'play none none reverse'
                    }
                }
            );
        }
    });
    
    // Progress bars in dashboard
    const progressBars = document.querySelectorAll('.progress-fill');
    
    progressBars.forEach(bar => {
        const width = bar.style.width;
        
        gsap.fromTo(bar,
            { width: '0%' },
            {
                width: width,
                duration: 1,
                ease: 'power2.out',
                scrollTrigger: {
                    trigger: bar,
                    start: 'top 80%',
                    toggleActions: 'play none none reverse'
                }
            }
        );
    });
}

// Scroll-based animations
function initScrollAnimations() {
    // Parallax effect for hero background
    gsap.to('.hero', {
        backgroundPosition: '50% 100%',
        ease: 'none',
        scrollTrigger: {
            trigger: '.hero',
            start: 'top top',
            end: 'bottom top',
            scrub: true
        }
    });
    
    // Navbar background on scroll
    ScrollTrigger.create({
        start: 'top -80',
        end: 99999,
        toggleClass: {className: 'scrolled', targets: '.navbar'}
    });
    
    // Section reveals
    const sections = document.querySelectorAll('section:not(.hero)');
    
    sections.forEach(section => {
        gsap.fromTo(section,
            { opacity: 0.8 },
            {
                opacity: 1,
                scrollTrigger: {
                    trigger: section,
                    start: 'top 80%',
                    end: 'bottom 20%',
                    toggleActions: 'play none none reverse'
                }
            }
        );
    });
}

// Hover effects and micro-interactions
function initHoverEffects() {
    // Button hover effects
    const buttons = document.querySelectorAll('.btn');
    
    buttons.forEach(btn => {
        btn.addEventListener('mouseenter', () => {
            gsap.to(btn, {
                scale: 1.05,
                duration: 0.3,
                ease: 'back.out(1.7)'
            });
        });
        
        btn.addEventListener('mouseleave', () => {
            gsap.to(btn, {
                scale: 1,
                duration: 0.3,
                ease: 'back.out(1.7)'
            });
        });
        
        btn.addEventListener('mousedown', () => {
            gsap.to(btn, {
                scale: 0.95,
                duration: 0.1
            });
        });
        
        btn.addEventListener('mouseup', () => {
            gsap.to(btn, {
                scale: 1.05,
                duration: 0.1
            });
        });
    });
    
    // Card hover effects
    const cards = document.querySelectorAll('.nav-card, .project-card, .info-card, .dashboard-widget');
    
    cards.forEach(card => {
        card.addEventListener('mouseenter', () => {
            gsap.to(card, {
                y: -10,
                rotationY: 2,
                duration: 0.3,
                ease: 'power2.out'
            });
        });
        
        card.addEventListener('mouseleave', () => {
            gsap.to(card, {
                y: 0,
                rotationY: 0,
                duration: 0.3,
                ease: 'power2.out'
            });
        });
    });
    
    // Skill planet hover effects
    const skillPlanets = document.querySelectorAll('.skill-planet');
    
    skillPlanets.forEach(planet => {
        planet.addEventListener('mouseenter', () => {
            gsap.to(planet, {
                scale: 1.2,
                rotation: 360,
                duration: 0.5,
                ease: 'back.out(1.7)'
            });
        });
        
        planet.addEventListener('mouseleave', () => {
            gsap.to(planet, {
                scale: 1,
                duration: 0.3,
                ease: 'back.out(1.7)'
            });
        });
    });
    
    // Social icon hover effects
    const socialIcons = document.querySelectorAll('.social-icon');
    
    socialIcons.forEach(icon => {
        icon.addEventListener('mouseenter', () => {
            gsap.to(icon, {
                scale: 1.1,
                rotation: 15,
                duration: 0.3,
                ease: 'back.out(1.7)'
            });
        });
        
        icon.addEventListener('mouseleave', () => {
            gsap.to(icon, {
                scale: 1,
                rotation: 0,
                duration: 0.3,
                ease: 'back.out(1.7)'
            });
        });
    });
    
    // Form input focus effects
    const inputs = document.querySelectorAll('input, textarea');
    
    inputs.forEach(input => {
        input.addEventListener('focus', () => {
            gsap.to(input, {
                scale: 1.02,
                duration: 0.2,
                ease: 'power2.out'
            });
        });
        
        input.addEventListener('blur', () => {
            gsap.to(input, {
                scale: 1,
                duration: 0.2,
                ease: 'power2.out'
            });
        });
    });
}

// Page transition animations
function animatePageOut() {
    return gsap.to('main', {
        opacity: 0,
        y: -30,
        duration: 0.3,
        ease: 'power2.inOut'
    });
}

function animatePageIn() {
    return gsap.fromTo('main',
        { opacity: 0, y: 30 },
        { opacity: 1, y: 0, duration: 0.5, ease: 'power2.out' }
    );
}

// Utility functions for animations
function staggerReveal(elements, delay = 0.1) {
    gsap.fromTo(elements,
        { opacity: 0, y: 30 },
        {
            opacity: 1,
            y: 0,
            duration: 0.6,
            stagger: delay,
            ease: 'back.out(1.7)'
        }
    );
}

function morphButton(button, newText, newIcon) {
    const tl = gsap.timeline();
    
    tl.to(button, {
        scale: 0.9,
        duration: 0.2,
        ease: 'power2.inOut'
    })
    .call(() => {
        if (newText) button.querySelector('.btn-text').textContent = newText;
        if (newIcon) button.querySelector('.btn-icon').textContent = newIcon;
    })
    .to(button, {
        scale: 1,
        duration: 0.3,
        ease: 'back.out(1.7)'
    });
    
    return tl;
}

function pulseElement(element, intensity = 1.1) {
    gsap.to(element, {
        scale: intensity,
        duration: 0.3,
        yoyo: true,
        repeat: 1,
        ease: 'power2.inOut'
    });
}

// Loading animations
function showLoadingAnimation(element) {
    gsap.to(element, {
        rotation: 360,
        duration: 1,
        repeat: -1,
        ease: 'none'
    });
}

function hideLoadingAnimation(element) {
    gsap.killTweensOf(element);
    gsap.set(element, { rotation: 0 });
}

// Export functions for use in other files
window.gsapAnimations = {
    animatePageOut,
    animatePageIn,
    staggerReveal,
    morphButton,
    pulseElement,
    showLoadingAnimation,
    hideLoadingAnimation
};

// Refresh ScrollTrigger on window resize
window.addEventListener('resize', () => {
    ScrollTrigger.refresh();
});

console.log('GSAP animations module loaded');