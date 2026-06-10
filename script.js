// Dynamic Year
document.getElementById('year').textContent = new Date().getFullYear();

// Contact Form Handler
function handleContact(e) {
  e.preventDefault();
  const form = e.currentTarget;
  const name = form.name.value.trim();
  const btn = form.querySelector('button');
  const originalText = btn.textContent;
  
  btn.textContent = 'Sending...';
  btn.style.opacity = '0.7';

  // Simulate network request
  setTimeout(() => {
    alert(`Thanks, ${name}! Your message has been sent successfully.`);
    form.reset();
    btn.textContent = originalText;
    btn.style.opacity = '1';
  }, 800);
}

// Scroll Reveal Animations using IntersectionObserver
document.addEventListener("DOMContentLoaded", () => {
  const observerOptions = {
    root: null,
    rootMargin: "0px",
    threshold: 0.15
  };

  const observer = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add("visible");
        observer.unobserve(entry.target);
      }
    });
  }, observerOptions);

  const revealElements = document.querySelectorAll(".scroll-reveal");
  revealElements.forEach(el => observer.observe(el));
});

// Mobile Sidebar (Hamburger Menu fallback for future expansion)
const hamburger = document.getElementById('hamburger');
if (hamburger) {
  hamburger.addEventListener('click', () => {
    alert('Mobile menu navigation to be implemented!');
  });
}
