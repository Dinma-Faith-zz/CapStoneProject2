import './style.css';
import display from './module/home.js';
import displayPopup from './module/popup';

display();

const popupBtn = document.querySelectorAll('.popup-btn');

window.addEventListener('click', (e) => {
  if (!e.target.matches('.popup-btn')) return;
  if (e.target.parentElement.id == e.target.id) {
    let i = e.target.id;
    displayPopup(i);
  }
});
