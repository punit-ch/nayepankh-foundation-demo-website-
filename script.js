// Wait for DOM to load
document.addEventListener('DOMContentLoaded', () => {
    
    // --- 1. Loader ---
    const loader = document.getElementById('loader');
    window.addEventListener('load', () => {
        loader.style.opacity = '0';
        setTimeout(() => {
            loader.style.display = 'none';
        }, 500);
    });

    // --- 2. Mobile Menu Toggle ---
    const hamburger = document.querySelector('.hamburger');
    const navLinks = document.querySelector('.nav-links');
    const links = document.querySelectorAll('.nav-links li a');

    hamburger.addEventListener('click', () => {
        navLinks.classList.toggle('active');
        hamburger.innerHTML = navLinks.classList.contains('active') 
            ? '<i class="fas fa-times"></i>' 
            : '<i class="fas fa-bars"></i>';
    });

    links.forEach(link => {
        link.addEventListener('click', () => {
            navLinks.classList.remove('active');
            hamburger.innerHTML = '<i class="fas fa-bars"></i>';
        });
    });

    // --- 3. Dark Mode Toggle ---
    const themeToggle = document.getElementById('theme-toggle');
    const htmlElement = document.documentElement;
    const icon = themeToggle.querySelector('i');

    // Check for saved theme
    const savedTheme = localStorage.getItem('theme') || 'light';
    htmlElement.setAttribute('data-theme', savedTheme);
    updateThemeIcon(savedTheme);

    themeToggle.addEventListener('click', () => {
        const currentTheme = htmlElement.getAttribute('data-theme');
        const newTheme = currentTheme === 'light' ? 'dark' : 'light';
        
        htmlElement.setAttribute('data-theme', newTheme);
        localStorage.setItem('theme', newTheme);
        updateThemeIcon(newTheme);
    });

    function updateThemeIcon(theme) {
        if (theme === 'dark') {
            icon.classList.remove('fa-moon');
            icon.classList.add('fa-sun');
        } else {
            icon.classList.remove('fa-sun');
            icon.classList.add('fa-moon');
        }
    }

    // --- 4. Sticky Navbar Styling ---
    const navbar = document.querySelector('.navbar');
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            navbar.style.boxShadow = '0 4px 6px -1px rgba(0, 0, 0, 0.1)';
        } else {
            navbar.style.boxShadow = 'none';
        }
    });

    // --- 5. Scroll Animations (Intersection Observer) ---
    const hiddenElements = document.querySelectorAll('.hidden');
    const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                entry.target.classList.add('show-anim');
            }
        });
    }, { threshold: 0.1 });

    hiddenElements.forEach((el) => observer.observe(el));

    // --- 6. Animated Counters ---
    const counters = document.querySelectorAll('.counter');
    let hasCounted = false;

    const counterObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting && !hasCounted) {
                counters.forEach(counter => {
                    const updateCount = () => {
                        const target = +counter.getAttribute('data-target');
                        const count = +counter.innerText;
                        const inc = target / 100;

                        if (count < target) {
                            counter.innerText = Math.ceil(count + inc);
                            setTimeout(updateCount, 20);
                        } else {
                            counter.innerText = target;
                        }
                    };
                    updateCount();
                });
                hasCounted = true;
            }
        });
    }, { threshold: 0.5 });

    const impactSection = document.getElementById('impact');
    if (impactSection) {
        counterObserver.observe(impactSection);
    }

    // --- 7. Volunteer Form Validation & LocalStorage ---
    const volunteerForm = document.getElementById('volunteerForm');
    const successMsg = document.getElementById('formSuccess');

    if (volunteerForm) {
        volunteerForm.addEventListener('submit', (e) => {
            e.preventDefault();

            // Get form values
            const formData = {
                id: Date.now(),
                name: document.getElementById('vName').value,
                email: document.getElementById('vEmail').value,
                phone: document.getElementById('vPhone').value,
                city: document.getElementById('vCity').value,
                skills: document.getElementById('vSkills').value,
                reason: document.getElementById('vReason').value,
                date: new Date().toLocaleString()
            };

            // Basic validation for phone number length
            if (formData.phone.length !== 10) {
                alert("Please enter a valid 10-digit phone number.");
                return;
            }

            // Save to localStorage
            let volunteers = JSON.parse(localStorage.getItem('volunteerRegistrations')) || [];
            volunteers.push(formData);
            localStorage.setItem('volunteerRegistrations', JSON.stringify(volunteers));

            // Show success message
            successMsg.textContent = `Thank you, ${formData.name}! Your volunteer application has been submitted successfully.`;
            successMsg.classList.add('show');

            // Reset form
            volunteerForm.reset();

            // Hide message after 5 seconds
            setTimeout(() => {
                successMsg.classList.remove('show');
            }, 5000);
        });
    }

    // --- 8. Contact Form Prevention ---
    const contactForm = document.getElementById('contactForm');
    if (contactForm) {
        contactForm.addEventListener('submit', (e) => {
            e.preventDefault();
            alert("Thank you for reaching out! We will get back to you soon.");
            contactForm.reset();
        });
    }

    // --- 9. Scroll to Top Button ---
    const scrollTopBtn = document.getElementById('scrollToTop');
    
    window.addEventListener('scroll', () => {
        if (window.pageYOffset > 300) {
            scrollTopBtn.classList.add('show');
        } else {
            scrollTopBtn.classList.remove('show');
        }
    });

    scrollTopBtn.addEventListener('click', () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });

    // --- 10. Update Copyright Year ---
    document.getElementById('year').textContent = new Date().getFullYear();
});