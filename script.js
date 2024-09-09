console.log("JavaScript is working!");
// Select all sections
const sections = document.querySelectorAll('.section');

// Create a new Intersection Observer instance
const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        // When the section enters the viewport, add 'active' class
        if (entry.isIntersecting) {
            entry.target.classList.add('active');
        }
    });
});

// Observe each section
sections.forEach((section) => {
    observer.observe(section);
});
