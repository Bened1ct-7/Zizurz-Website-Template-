const menuBar = document.querySelector('#header .menu i');
const navBar = document.querySelector('#header nav');

menuBar.addEventListener('click', () => {
  navBar.classList.toggle('active');
  if (navBar.className) {
    menuBar.classList.replace('fa-bars', 'fa-x');
  } else {
    menuBar.classList.replace('fa-x', 'fa-bars');
  }
})

document.addEventListener('click', e => {
  if (e.target !== navBar && navBar.className && e.target !== menuBar) {
    navBar.className = '';
    menuBar.classList.replace('fa-x', 'fa-bars');
  }
}) 

window.addEventListener('load', () => {
  document.querySelector('.preloader').classList.add('inactive');
})