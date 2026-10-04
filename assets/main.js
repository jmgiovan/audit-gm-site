(function () {
  'use strict';

  var nav = document.getElementById('nav');
  var toggle = document.getElementById('nav-toggle');
  var links = document.getElementById('nav-links');

  // Ombre de la barre de navigation au défilement
  function onScroll() {
    nav.classList.toggle('is-scrolled', window.scrollY > 10);
  }
  window.addEventListener('scroll', onScroll, { passive: true });
  onScroll();

  // Menu mobile
  function setMenu(open) {
    links.classList.toggle('is-open', open);
    toggle.setAttribute('aria-expanded', String(open));
    toggle.setAttribute('aria-label', open ? 'Fermer le menu' : 'Ouvrir le menu');
  }
  toggle.addEventListener('click', function () {
    setMenu(toggle.getAttribute('aria-expanded') !== 'true');
  });
  links.addEventListener('click', function (e) {
    if (e.target.closest('a')) setMenu(false);
  });
  document.addEventListener('keydown', function (e) {
    if (e.key === 'Escape') setMenu(false);
  });

  // Apparition des sections au défilement
  var reveals = document.querySelectorAll('.reveal');
  if ('IntersectionObserver' in window) {
    var io = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible');
          io.unobserve(entry.target);
        }
      });
    }, { threshold: 0.12, rootMargin: '0px 0px -40px 0px' });
    reveals.forEach(function (el) { io.observe(el); });
  } else {
    reveals.forEach(function (el) { el.classList.add('is-visible'); });
  }

  // Année du copyright
  document.getElementById('year').textContent = new Date().getFullYear();

  // Formulaire de contact : ouvre la messagerie avec un e-mail pré-rempli
  var form = document.getElementById('contact-form');
  var note = document.getElementById('form-note');
  form.addEventListener('submit', function (e) {
    e.preventDefault();
    var invalid = Array.prototype.find.call(form.elements, function (el) {
      return el.willValidate && !el.checkValidity();
    });
    if (invalid) {
      note.textContent = 'Merci de compléter les champs obligatoires (*).';
      note.style.color = '#b42318';
      invalid.focus();
      return;
    }
    var d = new FormData(form);
    var subject = (d.get('need') || 'Demande') + ' — ' + d.get('name');
    var body = [
      'Nom : ' + d.get('name'),
      'Entreprise : ' + (d.get('company') || '-'),
      'E-mail : ' + d.get('email'),
      'Téléphone : ' + (d.get('phone') || '-'),
      'Besoin : ' + d.get('need'),
      '',
      d.get('message')
    ].join('\n');
    window.location.href = 'mailto:jm.giovanni@audit-gm.com'
      + '?subject=' + encodeURIComponent(subject)
      + '&body=' + encodeURIComponent(body);
    note.style.color = '';
    note.textContent = 'Votre messagerie va s’ouvrir : il ne reste plus qu’à envoyer le message.';
  });
})();
