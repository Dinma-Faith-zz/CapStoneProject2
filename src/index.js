import './style.css';
import display from './module/home.js';
import displayPopup from './module/popup.js';
import getComments from './module/comments.js';

display();

window.addEventListener('click', (e) => {
  if (!e.target.matches('.popup-btn')) return;
  if (e.target.parentElement.id === e.target.id) {
    const i = e.target.id;
    displayPopup(i);
    getComments(i);
    console.log(e.target.id);
  }
});
