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

// ─── CONTACTS PAGE FORM ───
function handleContactPageSend() {
  const name = document.getElementById('cp-name')?.value.trim();
  const email = document.getElementById('cp-email')?.value.trim();
  const message = document.getElementById('cp-message')?.value.trim();

  if (!name || !email || !message) {
    alert('Please fill in all required fields.');
    return;
  }

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(email)) {
    alert('Please enter a valid email address.');
    return;
  }

  alert('Thank you, ' + name + '! We\'ll get back to you within 24 hours.');
  document.getElementById('cp-name').value = '';
  document.getElementById('cp-email').value = '';
  document.getElementById('cp-message').value = '';
  const company = document.getElementById('cp-company');
  const phone = document.getElementById('cp-phone');
  const subject = document.getElementById('cp-subject');
  if (company) company.value = '';
  if (phone) phone.value = '';
  if (subject) subject.value = '';
}

// ─── SERVICES PAGE TABS ───
(function () {
  const tabs = document.querySelectorAll('.service-tab');
  if (!tabs.length) return;

  function activateTab(target) {
    tabs.forEach(t => t.classList.toggle('active', t.dataset.target === target));
    document.querySelectorAll('.service-panel').forEach(p => {
      p.classList.toggle('active', p.id === target);
    });
  }

  tabs.forEach(tab => tab.addEventListener('click', () => activateTab(tab.dataset.target)));

  const hashMap = {
    'guest-access':    'panel-guest',
    'service-requests':'panel-requests',
    'barrier-parking': 'panel-barrier',
    'communication':   'panel-communication',
    'voting':          'panel-voting',
    'analytics':       'panel-analytics',
  };
  const hash = window.location.hash.replace('#', '');
  if (hash && hashMap[hash]) activateTab(hashMap[hash]);
})();

// ─── FAQ ACCORDION ───
document.querySelectorAll('.faq-question').forEach(function(btn) {
  btn.addEventListener('click', function() {
    const item = btn.closest('.faq-item');
    const isOpen = item.classList.contains('active');
    document.querySelectorAll('.faq-item.active').forEach(function(el) {
      el.classList.remove('active');
    });
    if (!isOpen) item.classList.add('active');
  });
});

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
