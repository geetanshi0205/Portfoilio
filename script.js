// Toggle mobile menu
const menuIcon = document.querySelector('#menu-icon');
const navbar = document.querySelector('nav');

// Add event listener for menu icon if it exists
if (menuIcon) {
    menuIcon.addEventListener('click', () => {
        menuIcon.classList.toggle('bx-x');
        navbar.classList.toggle('active');
    });
}

// Smooth scrolling for navigation links
document.querySelectorAll('nav a').forEach(link => {
    link.addEventListener('click', function(e) {
        e.preventDefault();
        
        // Remove active class from all links
        document.querySelectorAll('nav a').forEach(navLink => {
            navLink.classList.remove('active');
        });
        
        // Add active class to clicked link
        this.classList.add('active');
        
        // Close mobile menu if open
        if (navbar.classList.contains('active') && menuIcon) {
            menuIcon.classList.remove('bx-x');
            navbar.classList.remove('active');
        }
        
        // Smooth scroll to section
        const targetId = this.getAttribute('href');
        const targetSection = document.querySelector(targetId);
        
        if (targetSection) {
            window.scrollTo({
                top: targetSection.offsetTop - 70,
                behavior: 'smooth'
            });
        }
    });
});

// Scroll event to highlight active section in navigation
window.addEventListener('scroll', () => {
    const sections = document.querySelectorAll('section');
    const navLinks = document.querySelectorAll('nav a');
    
    let current = '';
    
    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;
        
        if (window.scrollY >= (sectionTop - 100)) {
            current = section.getAttribute('id');
        }
    });
    
    navLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href') === `#${current}`) {
            link.classList.add('active');
        }
    });
});

// Dynamic typing animation
const roles = [ 
    "AI Engineer", 
    "Agent Developer", 
    "Content Writer", 
    "Creative Coder" 
]; 

let roleIndex = 0; 
let charIndex = 0; 
const typingSpeed = 100; // milliseconds per character 
const erasingSpeed = 60; 
const delayBetweenRoles = 1500; // pause before erasing 

function type() { 
    const typingText = document.querySelector(".typing-text");
    if (!typingText) return;
    
    if (charIndex < roles[roleIndex].length) { 
        typingText.textContent = roles[roleIndex].substring(0, charIndex + 1);
        charIndex++; 
        setTimeout(type, typingSpeed); 
    } else { 
        setTimeout(erase, delayBetweenRoles); 
    } 
} 

function erase() { 
    const typingText = document.querySelector(".typing-text");
    if (!typingText) return;
    
    if (charIndex > 0) { 
        typingText.textContent = roles[roleIndex].substring(0, charIndex - 1); 
        charIndex--; 
        setTimeout(erase, erasingSpeed); 
    } else { 
        roleIndex = (roleIndex + 1) % roles.length; 
        setTimeout(type, typingSpeed); 
    } 
} 

document.addEventListener("DOMContentLoaded", function () { 
    if (roles.length) setTimeout(type, typingSpeed); 
});

// No form submission handling needed as we've simplified the contact section