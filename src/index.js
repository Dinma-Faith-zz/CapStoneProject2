import './style.css';
// import displayPopup from './module/popup.js';
// import { createLike, getLikes } from './module/likes.js';
import displayPopup, { getComments, postComments } from './module/popup.js';
import display from './module/home.js';
// import { itemCounter } from './module/ItemsCounter';
// import getComments, { postComments } from './module/comments.js'

display();

window.addEventListener('click', (e) => {
  if (!e.target.matches('.popup-btn')) return;
  if (e.target.parentElement.id === e.target.id) {
    const i = e.target.id;
    displayPopup(i);
    getComments(i);
  }
});

window.addEventListener('submit', (e) => {
  e.preventDefault();
  if (!e.target.matches('.comments-form')) return;
  if (e.target.matches('.comments-form')) {
    const nameInput = e.target.querySelector('#name').value;
    const textareaInput = e.target.querySelector('#textarea').value;
    const i = e.target.previousElementSibling.previousElementSibling.previousElementSibling.id;

    const comment = {
      item_id: `${i}`,
      username: `${nameInput}`,
      comment: `${textareaInput}`,
    };
    e.target.reset();
    postComments(i, comment);
    displayPopup(i);
    // commentsCounter(i);
  }
});

// window.addEventListener('click', (e) => {//
//   if (!e.target.matches('.fa-thumbs-up')) return;
//   const i = e.target.parentElement.id;
//   const like = {
//     'item_id': `${i}`,
//   };
//   createLike(i, like);
//   getLikes();
//   console.log(getLikes);
// });
