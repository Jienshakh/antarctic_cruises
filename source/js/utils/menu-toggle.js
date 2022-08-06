const pageBody = document.querySelector('.page__body')
const navMain = document.querySelector('.main-nav');
const navToggle = document.querySelector('.main-nav__toggle');
const headerLogo = document.querySelector('.page-header__logo');
const headerTitle = document.querySelector('.page-header h2');
const headerTagline = document.querySelector('.page-header p');

navMain.classList.remove('main-nav--nojs');

navToggle.addEventListener('click', function () {
  if (navMain.classList.contains('main-nav--closed')) {
    navMain.classList.remove('main-nav--closed');
    navMain.classList.add('main-nav--opened');
    headerLogo.style.display = 'none';
    headerTitle.style.display = 'none';
    headerTagline.style.display = 'none';
    pageBody.style.overflow = 'hidden';
    pageBody.style.backgroundColor = 'rgba(0, 43, 102, 0.5)';
  } else {
    navMain.classList.add('main-nav--closed');
    navMain.classList.remove('main-nav--opened');
    headerLogo.style.display = 'block';
    headerTitle.style.display = 'block';
    headerTagline.style.display = 'block';
    pageBody.style.overflow = 'auto';
    pageBody.style.backgroundColor = '#f9fbfd';
  }
});
