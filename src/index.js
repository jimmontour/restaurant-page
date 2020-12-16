import loadPage from './loadPage';
import loadHome from './home';
import loadMenu from './menu';
import loadContact from './contact';

function init() {
  loadPage();
  loadHome();
}

function handleNav() {
  const homeLink = document.querySelector('.home');
  const menuLink = document.querySelector('.menu');
  const contactLink = document.querySelector('.contact');

  homeLink.addEventListener('click', (e) => loadHome());
  menuLink.addEventListener('click', (e) => loadMenu());
  contactLink.addEventListener('click', (e) => loadContact());
}

init();
handleNav();
