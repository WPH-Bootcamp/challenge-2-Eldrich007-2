'use strict';

const toggle = document.querySelector('.navbar_toggle');
const menu = document.querySelector('.navbar_menu');
const links = document.querySelectorAll('.navbar_link');
const close = document.querySelector('.navbar_close');
const mobileCta = document.querySelector('.navbar_mobile-cta');
const desktopCTA = document.querySelector('.navbar_cta');

function openMenu() {
  toggle.classList.add('active');
  menu.classList.add('active');
  toggle.setAttribute('aria-expanded', true);
}

function closeMenu() {
  toggle.classList.remove('active');
  menu.classList.remove('active');
  toggle.setAttribute('aria-expanded', false);
}

function toggleMenu() {
  const isOpen = menu.classList.contains('active');
  isOpen ? closeMenu() : openMenu();
}

// Hamburger
toggle.addEventListener('click', toggleMenu);

close.addEventListener('click', closeMenu);

links.forEach((link) => {
  link.addEventListener('click', closeMenu);
});

// Klik di luar navbar
document.addEventListener('click', (e) => {
  const isClickInside = e.target.closest('.navbar');
  if (!isClickInside) closeMenu();
});

function goToContact() {
  document.querySelector('#contact')?.scrollIntoView({
    behavior: 'smooth',
  });
}

// Mobile
mobileCta?.addEventListener('click', goToContact);

// Desktop
desktopCTA?.addEventListener('click', goToContact);
