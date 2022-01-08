const menuToggle = document.querySelector('menu-toggle');
const sideBar = document.querySelector('.sidebar');
const sideBarLink = document.querySelectorAll('.sidebar__link');
const content = document.querySelector('.content');

const toggleShow = () => sideBar.classList.toggle('show');
const removeShow = () => sideBar.classList.remove('show');

menuToggle.addEventListener('click', toggleShow);
sideBarLink.forEach((item) => item.addEventListener('click', removeShow));
content.addEventListener('click', removeShow);
window.addEventListener('resize', removeShow);
