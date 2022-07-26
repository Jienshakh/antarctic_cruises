const navMain = document.querySelector('.main-nav__site-menu');
const navToggle = document.querySelector('.main-nav__toggle');
const headerLogo = document.querySelector('.page-header__logo');
const headerTitle = document.querySelector('.page-header__title');
const headerTagline = document.querySelector('.page-header__tagline');

navMain.classList.remove('main-nav__site-menu--nojs');

navToggle.addEventListener('click', function () {
  if (navMain.classList.contains('main-nav__site-menu--closed')) {
    navMain.classList.remove('main-nav__site-menu--closed');
    navMain.classList.add('main-nav__site-menu--opened');
    headerLogo.style.display = 'none';
    headerTitle.style.display = 'none';
    headerTagline.style.display = 'none';
  } else {
    navMain.classList.add('main-nav__site-menu--closed');
    navMain.classList.remove('main-nav__site-menu--opened');
    headerLogo.style.display = 'block';
    headerTitle.style.display = 'block';
    headerTagline.style.display = 'block';
  }
});
