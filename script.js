// ─── CONTACT FORM ───
function handleSend() {
  const name = document.getElementById('contact-name').value.trim();
  const email = document.getElementById('contact-email').value.trim();
  const message = document.getElementById('contact-message').value.trim();

  if (!name || !email || !message) {
    alert('Please fill in all fields.');
    return;
  }

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(email)) {
    alert('Please enter a valid email address.');
    return;
  }

  alert('Thank you, ' + name + '! We\'ll get back to you soon.');
  document.getElementById('contact-name').value = '';
  document.getElementById('contact-email').value = '';
  document.getElementById('contact-message').value = '';
}

// ─── NEWSLETTER ───
function handleSubscribe() {
  const input = document.getElementById('newsletter-email');
  const email = input.value.trim();

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!email || !emailRegex.test(email)) {
    alert('Please enter a valid email address.');
    return;
  }

  alert('Thanks for subscribing!');
  input.value = '';
}

// ─── SMOOTH ACTIVE NAV HIGHLIGHT ───
const sections = document.querySelectorAll('section[id], div[id]');
const navLinks = document.querySelectorAll('nav ul a');

const observerOptions = {
  root: null,
  rootMargin: '0px',
  threshold: 0.3
};

const sectionObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      navLinks.forEach(link => {
        link.style.fontWeight = '400';
        if (link.getAttribute('href') === '#' + entry.target.id) {
          link.style.fontWeight = '700';
        }
      });
    }
  });
}, observerOptions);

sections.forEach(section => sectionObserver.observe(section));
