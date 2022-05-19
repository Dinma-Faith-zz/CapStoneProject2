import { involvmentAPI, modal } from './variables.js';

const commentsArray = [0, 1, 2, 3, 4, 5];

const getComments = async (i) => {
  const response = await fetch(
    `${involvmentAPI}/apps/wC4fHH83VpkiJclfAEX8/comments?item_id=${+commentsArray[i]}`,
  );
  const data = await response.json();
  const arr = Array.from(data);

  const commentContainer = document.createElement('div');
  commentContainer.innerHTML = arr
    .map(
      (comment) => `
    <p class="popup-comment"><span>${comment.creation_date}    </span><span>${comment.username}:  </span><span>${comment.comment}</span></p>
    `,
    )
    .join('');
  modal.appendChild(commentContainer);
};

export default getComments;
