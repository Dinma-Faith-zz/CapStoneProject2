import { url, modal, overlay } from './variables.js';

const popupArray = [52802, 52815, 52835, 52896, 52903, 52906];

const displayPopup = async (i) => {
  const fetchData = await fetch(`${url}/lookup.php?i=${popupArray[i]}`);
  const data = await fetchData.json();
  modal.classList.add('open');
  overlay.classList.add('open');

  modal.innerHTML = data.meals
    .map(
      (meal) => `<div class="popup-container">
      <i class="fas fa-times-circle icon"></i>
    <img class="popup-img" src="${meal.strMealThumb}">
  <h3 class="popup-meal">${meal.strMeal}</h3>
  <div class="popup-grid">
    <p class="popup-meal-details">Dish Category: "${meal.strCategory}"</P>
    <p class="popup-meal-details">Country: "${meal.strArea}"</P>
    <p class="popup-meal-details">Video Link: <a href="${meal.strYoutube}">Watch here</a></P>
</div>
  </div>`
    )
    .join('');
};

function closeModal() {
  modal.classList.remove('open');
  overlay.classList.remove('open');
}

overlay.addEventListener('click', closeModal);
modal.addEventListener('click', (e) => {
  if (!e.target.matches('.icon')) return;
  console.log(e.target);
  closeModal();
});

export default displayPopup;
