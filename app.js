    // Responsive nav toggle
    const navToggle = document.getElementById('navToggle');
    const navLinks = document.getElementById('navLinks');

    navToggle.addEventListener('click', () => {
      navLinks.classList.toggle('open');
    });

    // Show toggle on small screens
    window.addEventListener('resize', () => {
      if (window.innerWidth < 768) {
        navToggle.style.display = 'block';
      } else {
        navToggle.style.display = 'none';
        navLinks.classList.remove('open');
      }
    });
    window.dispatchEvent(new Event('resize'));

    // Form submission simulation
    const form = document.getElementById('contactForm');
    const responseText = document.getElementById('formResponse');

    form.addEventListener('submit', function (e) {
      e.preventDefault();
      responseText.textContent = 'Thank you for contacting Nyumbani Africa Safari! We will get back to you soon.';
      form.reset();
    });
