// Auto update footer year
const year = new Date().getFullYear();
document.getElementById("footerCopyright").innerHTML =
    `© ${year} Salah Uddin Kader. All rights reserved.`;

    // Mobile Menu Toggle
const mobileMenuBtn = document.getElementById("mobileMenuBtn");
const mobileMenu = document.getElementById("mobileMenu");

mobileMenuBtn.addEventListener("click", () => {
    mobileMenu.classList.toggle("hidden");

    // icon toggle
    const icon = mobileMenuBtn.querySelector("i");
    if (mobileMenu.classList.contains("hidden")) {
        icon.classList.remove("fa-times");
        icon.classList.add("fa-bars");
    } else {
        icon.classList.remove("fa-bars");
        icon.classList.add("fa-times");
    }
});

// Auto close menu when clicking a link
document.querySelectorAll(".mobile-link").forEach(link => {
    link.addEventListener("click", () => {
        mobileMenu.classList.add("hidden");
        mobileMenuBtn.querySelector("i").classList.add("fa-bars");
        mobileMenuBtn.querySelector("i").classList.remove("fa-times");
    });
});

        // Custom Cursor
        const cursor = document.getElementById('cursor');
        const cursorFollower = document.getElementById('cursorFollower');
        
        let mouseX = 0, mouseY = 0;
        let cursorX = 0, cursorY = 0;
        let followerX = 0, followerY = 0;
        
        document.addEventListener('mousemove', (e) => {
            mouseX = e.clientX;
            mouseY = e.clientY;
        });
        
        function animateCursor() {
            cursorX += (mouseX - cursorX) * 0.2;
            cursorY += (mouseY - cursorY) * 0.2;
            followerX += (mouseX - followerX) * 0.1;
            followerY += (mouseY - followerY) * 0.1;
            
            cursor.style.left = cursorX + 'px';
            cursor.style.top = cursorY + 'px';
            cursorFollower.style.left = followerX + 'px';
            cursorFollower.style.top = followerY + 'px';
            
            requestAnimationFrame(animateCursor);
        }
        animateCursor();
        
        // Cursor hover effects
        const hoverElements = document.querySelectorAll('a, button, .portfolio-item, .service-card, .skill-category');
        hoverElements.forEach(el => {
            el.addEventListener('mouseenter', () => cursor.classList.add('cursor-hover'));
            el.addEventListener('mouseleave', () => cursor.classList.remove('cursor-hover'));
        });
        
        // Theme Toggle
        const themeToggle = document.getElementById('themeToggle');
        const themeIcon = themeToggle.querySelector('i');
        
        themeToggle.addEventListener('click', () => {
            document.body.classList.toggle('light-theme');
            if (document.body.classList.contains('light-theme')) {
                themeIcon.classList.remove('fa-moon');
                themeIcon.classList.add('fa-sun');
            } else {
                themeIcon.classList.remove('fa-sun');
                themeIcon.classList.add('fa-moon');
            }
        });
        
        // Business Card Flip
        const businessCard = document.getElementById('businessCard');
        businessCard.addEventListener('click', () => {
            businessCard.classList.toggle('flipped');
        });
        
        // Skill Tabs
        const skillTabs = document.querySelectorAll('.skill-tab');
        const skillCategories = document.querySelectorAll('.skill-category');
        
        skillTabs.forEach(tab => {
            tab.addEventListener('click', () => {
                skillTabs.forEach(t => t.classList.remove('active'));
                tab.classList.add('active');
                
                const category = tab.dataset.skill;
                skillCategories.forEach(cat => {
                    if (cat.dataset.category === category) {
                        cat.classList.add('active');
                    } else {
                        cat.classList.remove('active');
                    }
                });
            });
        });
        
        // Portfolio Filter
        const filterBtns = document.querySelectorAll('.filter-btn');
        const portfolioItems = document.querySelectorAll('.portfolio-item');
        
        filterBtns.forEach(btn => {
            btn.addEventListener('click', () => {
                filterBtns.forEach(b => b.classList.remove('active'));
                btn.classList.add('active');
                
                const filter = btn.dataset.filter;
                portfolioItems.forEach(item => {
                    if (filter === 'all' || item.dataset.category === filter) {
                        item.classList.remove('hidden');
                    } else {
                        item.classList.add('hidden');
                    }
                });
            });
        });
        
        // Intro Loader
        let progress = 0;
        const loaderInterval = setInterval(() => {
            progress += Math.random() * 30;
            if (progress >= 100) {
                progress = 100;
                clearInterval(loaderInterval);
                setTimeout(() => {
                    document.getElementById('introLoader').style.opacity = '0';
                    setTimeout(() => {
                        document.getElementById('introLoader').style.display = 'none';
                    }, 800);
                }, 500);
            }
            document.getElementById('loaderProgress').style.width = progress + '%';
        }, 200);
        
        // Particles.js Configuration
        particlesJS('particles-js', {
            particles: {
                number: { value: 80, density: { enable: true, value_area: 800 } },
                color: { value: '#6366f1' },
                shape: { type: 'circle' },
                opacity: { value: 0.5, random: false },
                size: { value: 3, random: true },
                line_linked: {
                    enable: true,
                    distance: 150,
                    color: '#6366f1',
                    opacity: 0.4,
                    width: 1
                },
                move: {
                    enable: true,
                    speed: 2,
                    direction: 'none',
                    random: false,
                    straight: false,
                    out_mode: 'out',
                    bounce: false
                }
            },
            interactivity: {
                detect_on: 'canvas',
                events: {
                    onhover: { enable: true, mode: 'repulse' },
                    onclick: { enable: true, mode: 'push' },
                    resize: true
                }
            },
            retina_detect: true
        });
        
        const defaultConfig = {
            full_name: "Salah Uddin Kader",
            tagline: "Creative Designer & Developer | Transforming Ideas into Digital Masterpieces",
            about_text: "I'm Salah Uddin Kader, a creative professional specializing in digital design and development. With a keen eye for detail and a passion for innovation, I transform ideas into stunning digital experiences that captivate and engage audiences.",
            email_address: "salauddinkaderappy@gmail.com",
            whatsapp_number: "",
            social_username: "salahuddingfx",
            hire_button_text: "Hire Me",
            footer_text: "Salah Uddin Kader. All rights reserved.",
            primary_color: "#6366f1",
            accent_color: "#ec4899",
            text_color: "#f8fafc",
            background_color: "#0f172a",
            font_family: "Inter",
            font_size: 16
        };
        
        async function onConfigChange(config) {
            const name = config.full_name || defaultConfig.full_name;
            const tagline = config.tagline || defaultConfig.tagline;
            const aboutText = config.about_text || defaultConfig.about_text;
            const email = config.email_address || defaultConfig.email_address;
            const social = config.social_username || defaultConfig.social_username;
            const hireText = config.hire_button_text || defaultConfig.hire_button_text;
            const footerText = config.footer_text || defaultConfig.footer_text;
            const primaryColor = config.primary_color || defaultConfig.primary_color;
            const accentColor = config.accent_color || defaultConfig.accent_color;
            const textColor = config.text_color || defaultConfig.text_color;
            const bgColor = config.background_color || defaultConfig.background_color;
            const fontFamily = config.font_family || defaultConfig.font_family;
            const fontSize = config.font_size || defaultConfig.font_size;
            
            document.getElementById('heroName').textContent = name;
            document.getElementById('heroTagline').textContent = tagline;
            document.getElementById('aboutText').textContent = aboutText;
            document.getElementById('contactEmail').textContent = email;
            document.getElementById('contactSocial').textContent = '@' + social;
            document.getElementById('footerName').textContent = name;
            const year = new Date().getFullYear();
            document.getElementById('footerCopyright').textContent = `© ${year} ${footerText}`;
            
            document.getElementById('cardName').textContent = name;
            document.getElementById('cardEmail').textContent = email;
            document.getElementById('cardSocial').textContent = '@' + social;
            
            document.querySelectorAll('.hire-btn').forEach(btn => {
                btn.textContent = hireText;
            });
            
            document.documentElement.style.setProperty('--primary', primaryColor);
            document.documentElement.style.setProperty('--accent', accentColor);
            document.documentElement.style.setProperty('--text', textColor);
            document.documentElement.style.setProperty('--bg', bgColor);
            
            const fontStack = `${fontFamily}, -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif`;
            document.body.style.fontFamily = fontStack;
            document.body.style.fontSize = `${fontSize}px`;
            
            const h1 = document.querySelector('.hero h1');
            if (h1) h1.style.fontSize = `${fontSize * 4}px`;
            
            const sectionTitles = document.querySelectorAll('.section-title');
            sectionTitles.forEach(el => el.style.fontSize = `${fontSize * 3}px`);
        }
        
        if (window.elementSdk) {
            window.elementSdk.init({
                defaultConfig: defaultConfig,
                onConfigChange: onConfigChange,
                mapToCapabilities: (config) => ({
                    recolorables: [
                        {
                            get: () => config.background_color || defaultConfig.background_color,
                            set: (value) => {
                                config.background_color = value;
                                window.elementSdk.setConfig({ background_color: value });
                            }
                        },
                        {
                            get: () => config.primary_color || defaultConfig.primary_color,
                            set: (value) => {
                                config.primary_color = value;
                                window.elementSdk.setConfig({ primary_color: value });
                            }
                        },
                        {
                            get: () => config.accent_color || defaultConfig.accent_color,
                            set: (value) => {
                                config.accent_color = value;
                                window.elementSdk.setConfig({ accent_color: value });
                            }
                        },
                        {
                            get: () => config.text_color || defaultConfig.text_color,
                            set: (value) => {
                                config.text_color = value;
                                window.elementSdk.setConfig({ text_color: value });
                            }
                        }
                    ],
                    borderables: [],
                    fontEditable: {
                        get: () => config.font_family || defaultConfig.font_family,
                        set: (value) => {
                            config.font_family = value;
                            window.elementSdk.setConfig({ font_family: value });
                        }
                    },
                    fontSizeable: {
                        get: () => config.font_size || defaultConfig.font_size,
                        set: (value) => {
                            config.font_size = value;
                            window.elementSdk.setConfig({ font_size: value });
                        }
                    }
                }),
                mapToEditPanelValues: (config) => new Map([
                    ["full_name", config.full_name || defaultConfig.full_name],
                    ["tagline", config.tagline || defaultConfig.tagline],
                    ["about_text", config.about_text || defaultConfig.about_text],
                    ["email_address", config.email_address || defaultConfig.email_address],
                    ["whatsapp_number", config.whatsapp_number || defaultConfig.whatsapp_number],
                    ["social_username", config.social_username || defaultConfig.social_username],
                    ["hire_button_text", config.hire_button_text || defaultConfig.hire_button_text],
                    ["footer_text", config.footer_text || defaultConfig.footer_text]
                ])
            });
        }
        
        // Typing Animation
        const skills = [
            'Web Developer 💻',
            'UI/UX Designer 🎨',
            'Digital Marketer 📱',
            'Full Stack Developer 🚀',
            'Graphic Designer 🖌️',
            'SEO Specialist 🔍',
            'Problem Solver 🧩'
        ];
        let skillIndex = 0;
        let charIndex = 0;
        let isDeleting = false;
        
        function type() {
            const current = skills[skillIndex];
            const typingEl = document.getElementById('typing');
            
            if (isDeleting) {
                typingEl.textContent = current.substring(0, charIndex - 1);
                charIndex--;
            } else {
                typingEl.textContent = current.substring(0, charIndex + 1);
                charIndex++;
            }
            
            if (!isDeleting && charIndex === current.length) {
                isDeleting = true;
                setTimeout(type, 2000);
            } else if (isDeleting && charIndex === 0) {
                isDeleting = false;
                skillIndex = (skillIndex + 1) % skills.length;
                setTimeout(type, 500);
            } else {
                setTimeout(type, isDeleting ? 50 : 100);
            }
        }
        
        setTimeout(type, 1500);
        
        // Hire Popup Toggle
        document.querySelectorAll('.hire-btn').forEach(btn => {
            btn.addEventListener('click', (e) => {
                e.preventDefault();
                document.getElementById('hirePopup').classList.add('active');
                document.body.style.overflow = 'hidden';
            });
        });
        
        document.getElementById('closeHirePopup').addEventListener('click', () => {
            document.getElementById('hirePopup').classList.remove('active');
            document.body.style.overflow = 'auto';
        });
        
        document.getElementById('hirePopup').addEventListener('click', (e) => {
            if (e.target.id === 'hirePopup') {
                document.getElementById('hirePopup').classList.remove('active');
                document.body.style.overflow = 'auto';
            }
        });
        
        // Hire Form Submission
        document.getElementById('hireForm').addEventListener('submit', async (e) => {
            e.preventDefault();
            const btn = e.target.querySelector('.submit-btn');
            const originalText = btn.textContent;
            btn.textContent = 'Sending Proposal...';
            btn.disabled = true;
            
            const formData = new FormData(e.target);
            
            try {
                const response = await fetch('https://formspree.io/f/mqardzbe', {
                    method: 'POST',
                    body: formData,
                    headers: {
                        'Accept': 'application/json'
                    }
                });
                
                if (response.ok) {
                    btn.textContent = '✓ Proposal Sent Successfully!';
                    setTimeout(() => {
                        btn.textContent = originalText;
                        btn.disabled = false;
                        e.target.reset();
                        document.getElementById('hirePopup').classList.remove('active');
                        document.body.style.overflow = 'auto';
                    }, 2000);
                } else {
                    btn.textContent = 'Error! Try Again';
                    setTimeout(() => {
                        btn.textContent = originalText;
                        btn.disabled = false;
                    }, 2000);
                }
            } catch (error) {
                btn.textContent = 'Error! Try Again';
                setTimeout(() => {
                    btn.textContent = originalText;
                    btn.disabled = false;
                }, 2000);
            }
        });
        
        // Download CV
        document.getElementById('downloadCV').addEventListener('click', (e) => {
            e.preventDefault();
            const toast = document.createElement('div');
            toast.style.cssText = `
                position: fixed;
                bottom: 30px;
                right: 30px;
                background: linear-gradient(135deg, #10b981, #059669);
                color: white;
                padding: 15px 25px;
                border-radius: 10px;
                z-index: 10000;
                box-shadow: 0 5px 20px rgba(0,0,0,0.3);
                font-weight: 600;
            `;
            toast.innerHTML = '<i class="fas fa-info-circle"></i> Please add your CV URL in the edit panel';
            document.body.appendChild(toast);
            
            setTimeout(() => {
                toast.style.opacity = '0';
                toast.style.transition = 'opacity 0.4s';
                setTimeout(() => toast.remove(), 400);
            }, 4000);
        });
        
        // Scroll to Top Button
        const scrollBtn = document.getElementById('scrollTop');
        
        window.addEventListener('scroll', () => {
            if (window.pageYOffset > 300) {
                scrollBtn.classList.add('show');
            } else {
                scrollBtn.classList.remove('show');
            }
        });
        
        scrollBtn.addEventListener('click', () => {
            window.scrollTo({ top: 0, behavior: 'smooth' });
        });
        
        // Contact Form
        document.getElementById('contactForm').addEventListener('submit', async (e) => {
            e.preventDefault();
            const btn = e.target.querySelector('.submit-btn');
            const originalText = btn.textContent;
            btn.textContent = 'Sending...';
            btn.disabled = true;
            
            const formData = new FormData(e.target);
            
            try {
                const response = await fetch('https://formspree.io/f/mqardzbe', {
                    method: 'POST',
                    body: formData,
                    headers: {
                        'Accept': 'application/json'
                    }
                });
                
                if (response.ok) {
                    btn.textContent = 'Message Sent Successfully!';
                    setTimeout(() => {
                        btn.textContent = originalText;
                        btn.disabled = false;
                        e.target.reset();
                    }, 2000);
                } else {
                    btn.textContent = 'Error! Try Again';
                    setTimeout(() => {
                        btn.textContent = originalText;
                        btn.disabled = false;
                    }, 2000);
                }
            } catch (error) {
                btn.textContent = 'Error! Try Again';
                setTimeout(() => {
                    btn.textContent = originalText;
                    btn.disabled = false;
                }, 2000);
            }
        });
        
        // Smooth Scroll
        document.querySelectorAll('a[href^="#"]').forEach(anchor => {
            anchor.addEventListener('click', function (e) {
                e.preventDefault();
                const target = document.querySelector(this.getAttribute('href'));
                if (target) {
                    target.scrollIntoView({ behavior: 'smooth', block: 'start' });
                }
            });
        });
        
        // Save Contact VCard
        document.getElementById('saveContact').addEventListener('click', (e) => {
            e.preventDefault();
            
            const config = window.elementSdk ? window.elementSdk.config : defaultConfig;
            const name = config.full_name || defaultConfig.full_name;
            const email = config.email_address || defaultConfig.email_address;
            const phone = "+8801851075537";
            
            const vcard = `BEGIN:VCARD
VERSION:3.0
FN:${name}
TEL;TYPE=CELL:${phone}
EMAIL:${email}
URL:https://wa.me/8801851075537
END:VCARD`;
            
            const blob = new Blob([vcard], { type: 'text/vcard' });
            const url = window.URL.createObjectURL(blob);
            const link = document.createElement('a');
            link.href = url;
            link.download = `${name.replace(/\s+/g, '_')}_Contact.vcf`;
            document.body.appendChild(link);
            link.click();
            document.body.removeChild(link);
            window.URL.revokeObjectURL(url);
            
            const toast = document.createElement('div');
            toast.style.cssText = `
                position: fixed;
                bottom: 30px;
                right: 30px;
                background: linear-gradient(135deg, #10b981, #059669);
                color: white;
                padding: 15px 25px;
                border-radius: 10px;
                z-index: 10000;
                box-shadow: 0 5px 20px rgba(0,0,0,0.3);
                font-weight: 600;
            `;
            toast.innerHTML = '<i class="fas fa-check-circle"></i> Contact saved successfully!';
            document.body.appendChild(toast);
            
            setTimeout(() => {
                toast.style.opacity = '0';
                toast.style.transition = 'opacity 0.4s';
                setTimeout(() => toast.remove(), 400);
            }, 3000);
        });
        
        // Real-time Date and Time
        function updateDateTime() {
            const now = new Date();
            
            const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
            const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
            
            const dayName = days[now.getDay()];
            const day = now.getDate();
            const month = months[now.getMonth()];
            const year = now.getFullYear();
            
            let hours = now.getHours();
            const minutes = now.getMinutes().toString().padStart(2, '0');
            const seconds = now.getSeconds().toString().padStart(2, '0');
            const ampm = hours >= 12 ? 'PM' : 'AM';
            
            hours = hours % 12;
            hours = hours ? hours : 12;
            hours = hours.toString().padStart(2, '0');
            
            const dateTimeString = `${dayName}, ${month} ${day}, ${year} | ${hours}:${minutes}:${seconds} ${ampm}`;
            
            const dateTimeElement = document.getElementById('currentDateTime');
            if (dateTimeElement) {
                dateTimeElement.textContent = dateTimeString;
            }
        }
        
        updateDateTime();
        setInterval(updateDateTime, 1000);


        (function(){function c(){var b=a.contentDocument||a.contentWindow.document;if(b){var d=b.createElement('script');d.innerHTML="window.__CF$cv$params={r:'9aacc67be7ba4ea6',t:'MTc2NTIwMjI4My4wMDAwMDA='};var a=document.createElement('script');a.nonce='';a.src='/cdn-cgi/challenge-platform/scripts/jsd/main.js';document.getElementsByTagName('head')[0].appendChild(a);";b.getElementsByTagName('head')[0].appendChild(d)}}if(document.body){var a=document.createElement('iframe');a.height=1;a.width=1;a.style.position='absolute';a.style.top=0;a.style.left=0;a.style.border='none';a.style.visibility='hidden';document.body.appendChild(a);if('loading'!==document.readyState)c();else if(window.addEventListener)document.addEventListener('DOMContentLoaded',c);else{var e=document.onreadystatechange||function(){};document.onreadystatechange=function(b){e(b);'loading'!==document.readyState&&(document.onreadystatechange=e,c())}}}})();