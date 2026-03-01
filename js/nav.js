// Mobile nav toggle and scroll background

(function () {
  var nav = document.querySelector('.nav');
  var toggle = document.querySelector('.nav__toggle');
  var links = document.querySelector('.nav__links');

  // Mobile toggle
  if (toggle && links) {
    toggle.addEventListener('click', function () {
      toggle.classList.toggle('nav__toggle--open');
      links.classList.toggle('nav__links--open');
    });

    // Close menu when a link is clicked
    var navLinks = links.querySelectorAll('a');
    for (var i = 0; i < navLinks.length; i++) {
      navLinks[i].addEventListener('click', function () {
        toggle.classList.remove('nav__toggle--open');
        links.classList.remove('nav__links--open');
      });
    }
  }

  // Scroll background
  if (nav) {
    function onScroll() {
      if (window.scrollY > 20) {
        nav.classList.add('nav--scrolled');
      } else {
        nav.classList.remove('nav--scrolled');
      }
    }

    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll();
  }
})();
