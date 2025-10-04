// Theme Management
class ThemeManager {
    constructor() {
        this.currentTheme = localStorage.getItem('theme') || 'light';
        this.themeToggle = document.getElementById('themeToggle');
        this.themeDropdown = document.getElementById('themeDropdown');
        this.themeIcon = document.getElementById('themeIcon');
        this.themeName = document.getElementById('themeName');
        
        this.init();
    }
    
    init() {
        // Apply saved theme
        this.applyTheme(this.currentTheme);
        
        // Theme toggle click handler
        if (this.themeToggle) {
            this.themeToggle.addEventListener('click', (e) => {
                e.stopPropagation();
                this.toggleDropdown();
            });
        }
        
        // Theme option click handlers
        if (this.themeDropdown) {
            const themeOptions = this.themeDropdown.querySelectorAll('.theme-option');
            themeOptions.forEach(option => {
                option.addEventListener('click', (e) => {
                    e.stopPropagation();
                    const theme = option.getAttribute('data-theme');
                    this.setTheme(theme);
                    this.closeDropdown();
                });
            });
        }
        
        // Close dropdown when clicking outside
        document.addEventListener('click', () => {
            this.closeDropdown();
        });
        
        // Update active theme option
        this.updateActiveOption();
    }
    
    toggleDropdown() {
        if (this.themeDropdown) {
            this.themeDropdown.classList.toggle('active');
        }
    }
    
    closeDropdown() {
        if (this.themeDropdown) {
            this.themeDropdown.classList.remove('active');
        }
    }
    
    setTheme(theme) {
        this.currentTheme = theme;
        this.applyTheme(theme);
        localStorage.setItem('theme', theme);
        this.updateThemeButton();
        this.updateActiveOption();
        
        // Trigger theme change event
        window.dispatchEvent(new CustomEvent('themeChanged', { detail: { theme } }));
    }
    
    applyTheme(theme) {
        document.documentElement.setAttribute('data-theme', theme);
    }
    
    updateThemeButton() {
        if (!this.themeIcon || !this.themeName) return;
        
        const themeConfig = {
            light: { icon: '☀️', name: 'Light' },
            dark: { icon: '🌙', name: 'Dark' },
            neon: { icon: '⚡', name: 'Neon' }
        };
        
        const config = themeConfig[this.currentTheme];
        if (config) {
            this.themeIcon.textContent = config.icon;
            this.themeName.textContent = config.name;
        }
    }
    
    updateActiveOption() {
        if (!this.themeDropdown) return;
        
        const options = this.themeDropdown.querySelectorAll('.theme-option');
        options.forEach(option => {
            option.classList.remove('active');
            if (option.getAttribute('data-theme') === this.currentTheme) {
                option.classList.add('active');
            }
        });
    }
}

// Skills Galaxy Manager
class SkillsGalaxy {
    constructor() {
        this.galaxy = document.querySelector('.skills-galaxy');
        this.planets = document.querySelectorAll('.skill-planet');
        this.skillDetails = document.querySelector('.skill-details');
        this.currentSkill = null;
        
        this.skillsData = {
            'JavaScript': {
                description: 'Modern JavaScript ES6+, async/await, DOM manipulation, and advanced concepts. Building interactive web applications with clean, efficient code.',
                level: 90,
                experience: '5+ years'
            },
            'React': {
                description: 'Component-based development, hooks, state management, and modern React patterns. Creating scalable and maintainable user interfaces.',
                level: 85,
                experience: '4+ years'
            },
            'Node.js': {
                description: 'Server-side JavaScript, RESTful APIs, Express.js, and backend development. Building robust and scalable server applications.',
                level: 80,
                experience: '3+ years'
            },
            'MongoDB': {
                description: 'NoSQL database design, aggregation pipelines, and data modeling. Efficient data storage and retrieval for modern applications.',
                level: 75,
                experience: '3+ years'
            },
            'Python': {
                description: 'Data analysis, automation, web scraping, and backend development. Versatile programming for various applications and use cases.',
                level: 70,
                experience: '2+ years'
            },
            'CSS': {
                description: 'Advanced CSS3, animations, responsive design, and modern layout techniques. Creating beautiful and interactive user interfaces.',
                level: 95,
                experience: '6+ years'
            },
            'HTML': {
                description: 'Semantic HTML5, accessibility, SEO optimization, and modern web standards. Building solid foundations for web applications.',
                level: 95,
                experience: '6+ years'
            },
            'Git': {
                description: 'Version control, branching strategies, collaboration workflows, and project management. Essential tool for modern development.',
                level: 85,
                experience: '4+ years'
            }
        };
        
        this.init();
    }
    
    init() {
        if (!this.galaxy || this.planets.length === 0) return;
        
        // Add click handlers to all planets
        this.planets.forEach((planet, index) => {
           
            planet.style.cursor = 'pointer';
            planet.style.userSelect = 'none';
            
            // Remove any existing event listeners
            planet.removeEventListener('click', this.handlePlanetClick);
            planet.removeEventListener('mouseenter', this.handlePlanetHover);
            planet.removeEventListener('mouseleave', this.handlePlanetLeave);
            
            // Add new event listeners
            planet.addEventListener('click', (e) => this.handlePlanetClick(e, planet));
            planet.addEventListener('mouseenter', (e) => this.handlePlanetHover(e, planet));
            planet.addEventListener('mouseleave', (e) => this.handlePlanetLeave(e, planet));
            
            // Add touch support for mobile
            planet.addEventListener('touchstart', (e) => {
                e.preventDefault();
                this.handlePlanetClick(e, planet);
            });
        });
        
        // Set default skill (JavaScript)
        if (this.planets.length > 0) {
            setTimeout(() => {
                this.selectSkill(this.planets[0]);
            }, 500);
        }
        
        console.log('Skills Galaxy initialized with', this.planets.length, 'planets');
    }
    
    handlePlanetClick(e, planet) {
        e.preventDefault();
        e.stopPropagation();
        
        console.log('Planet clicked:', planet.textContent);
        this.selectSkill(planet);
        
        // Add click animation
        gsap.to(planet, {
            scale: 1.4,
            duration: 0.1,
            yoyo: true,
            repeat: 1,
            ease: 'power2.out'
        });
    }
    
    handlePlanetHover(e, planet) {
        if (!planet.classList.contains('active')) {
            gsap.to(planet, {
                scale: 1.2,
                duration: 0.3,
                ease: 'power2.out'
            });
        }
    }
    
    handlePlanetLeave(e, planet) {
        if (!planet.classList.contains('active')) {
            gsap.to(planet, {
                scale: 1,
                duration: 0.3,
                ease: 'power2.out'
            });
        }
    }
    
    selectSkill(planet) {
        // Remove active class from all planets
        this.planets.forEach(p => {
            p.classList.remove('active');
            if (p !== planet) {
                gsap.to(p, { scale: 1, duration: 0.3 });
            }
        });
        
        // Add active class to selected planet
        planet.classList.add('active');
        gsap.to(planet, { scale: 1.3, duration: 0.3 });
        
        // Update skill details
        const skillName = planet.textContent.trim();
        this.updateSkillDetails(skillName);
        this.currentSkill = skillName;
        
        console.log('Selected skill:', skillName);
    }
    
    updateSkillDetails(skillName) {
        if (!this.skillDetails) return;
        
        const skillData = this.skillsData[skillName];
        if (!skillData) {
            console.warn('No data found for skill:', skillName);
            return;
        }
        
        // Animate out current content
        gsap.to(this.skillDetails, {
            opacity: 0,
            y: 20,
            duration: 0.2,
            onComplete: () => {
                // Update content
                this.skillDetails.innerHTML = `
                    <h3>${skillName}</h3>
                    <div class="skill-level">
                        <div class="skill-level-bar">
                            <div class="skill-level-fill" style="width: ${skillData.level}%"></div>
                        </div>
                        <span class="skill-percentage">${skillData.level}%</span>
                    </div>
                    <p class="skill-experience">Experience: ${skillData.experience}</p>
                    <p>${skillData.description}</p>
                `;
                
                // Animate in new content
                gsap.to(this.skillDetails, {
                    opacity: 1,
                    y: 0,
                    duration: 0.3
                });
            }
        });
    }
}

// Value Cards Animation Manager
class ValueCardsAnimator {
    constructor() {
        this.valueCards = document.querySelectorAll('.value-card');
        this.init();
    }
    
    init() {
        if (this.valueCards.length === 0) return;
        
        //Intersection observer for scroll animations
        const observer = new IntersectionObserver((entries) => {
            entries.forEach((entry, index) => {
                if (entry.isIntersecting) {
                    
                    setTimeout(() => {
                        gsap.to(entry.target, {
                            opacity: 1,
                            y: 0,
                            duration: 0.8,
                            ease: 'back.out(1.7)',
                            onComplete: () => {
                                entry.target.classList.add('animate-in');
                            }
                        });
                    }, index * 150);
                    
                    observer.unobserve(entry.target);
                }
            });
        }, {
            threshold: 0.1,
            rootMargin: '0px 0px -50px 0px'
        });
        
        
        this.valueCards.forEach(card => {
            observer.observe(card);
        });
        
        console.log('Value Cards Animator initialized with', this.valueCards.length, 'cards');
    }
}

// Counter Animation
class CounterAnimation {
    constructor() {
        this.counters = document.querySelectorAll('.counter');
        this.init();
    }
    
    init() {
        this.counters.forEach(counter => {
            const target = parseInt(counter.getAttribute('data-target'));
            const duration = 2000;
            const increment = target / (duration / 16);
            let current = 0;
            
            const updateCounter = () => {
                if (current < target) {
                    current += increment;
                    counter.textContent = Math.ceil(current);
                    requestAnimationFrame(updateCounter);
                } else {
                    counter.textContent = target;
                }
            };
            
            // Start animation when element is visible
            const observer = new IntersectionObserver((entries) => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        updateCounter();
                        observer.unobserve(entry.target);
                    }
                });
            });
            
            observer.observe(counter);
        });
    }
}

// Live Clock
class LiveClock {
    constructor() {
        this.clockElement = document.getElementById('liveClock');
        this.dateElement = document.getElementById('liveDate');
        this.init();
    }
    
    init() {
        if (this.clockElement || this.dateElement) {
            this.updateTime();
            setInterval(() => this.updateTime(), 1000);
        }
    }
    
    updateTime() {
        const now = new Date();
        
        if (this.clockElement) {
            const timeString = now.toLocaleTimeString('en-US', {
                hour12: false,
                hour: '2-digit',
                minute: '2-digit',
                second: '2-digit'
            });
            this.clockElement.textContent = timeString;
        }
        
        if (this.dateElement) {
            const dateString = now.toLocaleDateString('en-US', {
                weekday: 'long',
                year: 'numeric',
                month: 'long',
                day: 'numeric'
            });
            this.dateElement.textContent = dateString;
        }
    }
}

// Form Validation
class FormValidator {
    constructor() {
        this.form = document.getElementById('contactForm');
        this.init();
    }
    
    init() {
        if (!this.form) return;
        
        this.form.addEventListener('submit', (e) => {
            e.preventDefault();
            this.validateForm();
        });
        
        // Real-time validation
        const inputs = this.form.querySelectorAll('input, textarea');
        inputs.forEach(input => {
            input.addEventListener('blur', () => this.validateField(input));
            input.addEventListener('input', () => this.clearErrors(input));
        });
    }
    
    validateForm() {
        const name = this.form.querySelector('#name');
        const email = this.form.querySelector('#email');
        const message = this.form.querySelector('#message');
        
        let isValid = true;
        
        if (!this.validateField(name)) isValid = false;
        if (!this.validateField(email)) isValid = false;
        if (!this.validateField(message)) isValid = false;
        
        if (isValid) {
            this.submitForm();
        }
    }
    
    validateField(field) {
        const value = field.value.trim();
        const fieldName = field.getAttribute('name');
        
        // Clear previous errors
        this.clearErrors(field);
        
        if (!value) {
            this.showError(field, `${fieldName.charAt(0).toUpperCase() + fieldName.slice(1)} is required`);
            return false;
        }
        
        if (fieldName === 'email') {
            const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            if (!emailRegex.test(value)) {
                this.showError(field, 'Please enter a valid email address');
                return false;
            }
        }
        
        if (fieldName === 'message' && value.length < 10) {
            this.showError(field, 'Message must be at least 10 characters long');
            return false;
        }
        
        return true;
    }
    
    showError(field, message) {
        field.classList.add('error');
        
        let errorElement = field.parentNode.querySelector('.error-message');
        if (!errorElement) {
            errorElement = document.createElement('div');
            errorElement.className = 'error-message';
            errorElement.style.color = 'var(--primary-color)';
            errorElement.style.fontSize = '0.8rem';
            errorElement.style.marginTop = '0.5rem';
            field.parentNode.appendChild(errorElement);
        }
        
        errorElement.textContent = message;
    }
    
    clearErrors(field) {
        field.classList.remove('error');
        const errorElement = field.parentNode.querySelector('.error-message');
        if (errorElement) {
            errorElement.remove();
        }
    }
    
    submitForm() {
        const submitBtn = this.form.querySelector('button[type="submit"]');
        const originalText = submitBtn.textContent;
        
        submitBtn.textContent = 'Sending...';
        submitBtn.disabled = true;
        
        // Simulate form submission
        setTimeout(() => {
            this.showSuccessMessage();
            this.form.reset();
            submitBtn.textContent = originalText;
            submitBtn.disabled = false;
        }, 2000);
    }
    
    showSuccessMessage() {
        const successDiv = document.createElement('div');
        successDiv.className = 'success-message';
        successDiv.style.cssText = `
            background: var(--gradient-primary);
            color: white;
            padding: 1rem;
            border-radius: 10px;
            margin-top: 1rem;
            text-align: center;
            animation: slideIn 0.3s ease;
        `;
        successDiv.textContent = 'Thank you! Your message has been sent successfully.';
        
        this.form.appendChild(successDiv);
        
        setTimeout(() => {
            successDiv.remove();
        }, 5000);
    }
}

// Chatbot
class Chatbot {
    constructor() {
        this.toggle = document.getElementById('chatbotToggle');
        this.window = document.getElementById('chatbotWindow');
        this.messages = document.getElementById('chatbotMessages');
        this.input = document.getElementById('chatbotInput');
        this.sendBtn = document.getElementById('chatbotSend');
        this.isOpen = false;
        
        this.responses = {
            'hello': 'Hi there! I\'m Tanvi\'s virtual assistant. How can I help you today?',
            'hi': 'Hello! I\'m here to help you learn more about Tanvi Singh. What would you like to know?',
            'skills': 'Tanvi specializes in JavaScript, React, Node.js, MongoDB, Python, and modern web development technologies.',
            'projects': 'You can view Tanvi\'s projects in the Projects section. She has worked on various web applications and innovative solutions.',
            'contact': 'You can reach Tanvi through the contact form or connect on social media platforms.',
            'experience': 'Tanvi has several years of experience in full-stack development and has worked on numerous projects.',
            'default': 'That\'s an interesting question! You can find more information in the relevant sections of the portfolio, or feel free to contact Tanvi directly.'
        };
        
        this.init();
    }
    
    init() {
        if (!this.toggle) return;
        
        this.toggle.addEventListener('click', () => this.toggleChat());
        
        if (this.sendBtn) {
            this.sendBtn.addEventListener('click', () => this.sendMessage());
        }
        
        if (this.input) {
            this.input.addEventListener('keypress', (e) => {
                if (e.key === 'Enter') {
                    this.sendMessage();
                }
            });
        }
        
        // Initial greeting
        setTimeout(() => {
            this.addMessage('bot', 'Hi! I\'m Tanvi\'s virtual assistant. Feel free to ask me anything about her skills, projects, or experience!');
        }, 1000);
    }
    
    toggleChat() {
        this.isOpen = !this.isOpen;
        
        if (this.window) {
            this.window.style.display = this.isOpen ? 'flex' : 'none';
        }
        
        if (this.toggle) {
            this.toggle.textContent = this.isOpen ? '✕' : '💬';
        }
    }
    
    sendMessage() {
        if (!this.input || !this.input.value.trim()) return;
        
        const message = this.input.value.trim();
        this.addMessage('user', message);
        this.input.value = '';
        
        // Simulate typing delay
        setTimeout(() => {
            const response = this.generateResponse(message);
            this.addMessage('bot', response);
        }, 1000);
    }
    
    generateResponse(message) {
        const lowerMessage = message.toLowerCase();
        
        for (const [key, response] of Object.entries(this.responses)) {
            if (lowerMessage.includes(key)) {
                return response;
            }
        }
        
        return this.responses.default;
    }
    
    addMessage(sender, text) {
        if (!this.messages) return;
        
        const messageDiv = document.createElement('div');
        messageDiv.className = `message ${sender}`;
        messageDiv.style.cssText = `
            margin-bottom: 1rem;
            padding: 0.5rem 1rem;
            border-radius: 15px;
            max-width: 80%;
            word-wrap: break-word;
            ${sender === 'user' ? 
                'background: var(--gradient-primary); color: white; margin-left: auto; text-align: right;' : 
                'background: var(--bg-tertiary); color: var(--text-primary);'
            }
        `;
        messageDiv.textContent = text;
        
        this.messages.appendChild(messageDiv);
        this.messages.scrollTop = this.messages.scrollHeight;
    }
}

// Resume Download Counter
class DownloadCounter {
    constructor() {
        this.downloadBtn = document.getElementById('downloadBtn');
        this.counter = this.getDownloadCount();
        this.init();
    }
    
    init() {
        if (!this.downloadBtn) return;
        
        this.downloadBtn.addEventListener('click', () => {
            this.incrementCounter();
        });
        
        this.updateCounterDisplay();
    }
    
    getDownloadCount() {
        return parseInt(localStorage.getItem('resumeDownloads') || '0');
    }
    
    incrementCounter() {
        this.counter++;
        localStorage.setItem('resumeDownloads', this.counter.toString());
        this.updateCounterDisplay();
    }
    
    updateCounterDisplay() {
        const counterElement = document.getElementById('downloadCounter');
        if (counterElement) {
            counterElement.textContent = this.counter;
        }
    }
}

// Random Quote Generator
class QuoteGenerator {
    constructor() {
        this.quoteElement = document.getElementById('randomQuote');
        this.quotes = [
            "Code is poetry written in logic.",
            "Innovation distinguishes between a leader and a follower.",
            "The best way to predict the future is to create it.",
            "Simplicity is the ultimate sophistication.",
            "First, solve the problem. Then, write the code.",
            "Experience is the name everyone gives to their mistakes.",
            "The only way to do great work is to love what you do.",
            "Stay hungry, stay foolish.",
            "Design is not just what it looks like – design is how it works.",
            "Code never lies, comments sometimes do."
        ];
        this.init();
    }
    
    init() {
        if (this.quoteElement) {
            this.updateQuote();
            setInterval(() => this.updateQuote(), 30000); // Change every 30 seconds
        }
    }
    
    updateQuote() {
        const randomQuote = this.quotes[Math.floor(Math.random() * this.quotes.length)];
        
        if (this.quoteElement) {
            gsap.to(this.quoteElement, {
                opacity: 0,
                duration: 0.3,
                onComplete: () => {
                    this.quoteElement.textContent = `"${randomQuote}"`;
                    gsap.to(this.quoteElement, {
                        opacity: 1,
                        duration: 0.3
                    });
                }
            });
        }
    }
}

// Initialize everything when DOM is loaded
document.addEventListener('DOMContentLoaded', function() {
    console.log('Initializing Interactive Portfolio...');
    
    // Initialize all components
    const themeManager = new ThemeManager();
    const skillsGalaxy = new SkillsGalaxy();
    const valueCardsAnimator = new ValueCardsAnimator();
    const counterAnimation = new CounterAnimation();
    const liveClock = new LiveClock();
    const formValidator = new FormValidator();
    const chatbot = new Chatbot();
    const downloadCounter = new DownloadCounter();
    const quoteGenerator = new QuoteGenerator();
    
    console.log('All components initialized successfully!');
    
    // Smooth scrolling for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });
    
    // Add loading animation
    const body = document.body;
    body.style.opacity = '0';
    
    gsap.to(body, {
        opacity: 1,
        duration: 1,
        ease: 'power2.out'
    });
    
    console.log('Portfolio loaded and ready!');
});

// Export for use in other files
window.PortfolioComponents = {
    ThemeManager,
    SkillsGalaxy,
    ValueCardsAnimator,
    CounterAnimation,
    LiveClock,
    FormValidator,
    Chatbot,
    DownloadCounter,
    QuoteGenerator
};