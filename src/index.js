import './style.css';
import display from './module/home.js';
import displayPopup from './module/popup.js';
import { createLike, getLikes } from './module/likes.js';

display();

window.addEventListener('click', (e) => {
  if (!e.target.matches('.popup-btn')) return;
  if (e.target.parentElement.id === e.target.id) {
    const i = e.target.id;
    displayPopup(i);
  }
});

window.addEventListener('click', (e) => {
  if (!e.target.matches('.fa-thumbs-up')) return;
  const i = e.target.parentElement.id
  const like = {
    "item_id": `${i}`
}
  createLike(i, like);
  getLikes();
  console.log(like);
})
