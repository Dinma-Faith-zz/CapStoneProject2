import { url, displayHome } from './variables.js';

const display = async () => {
  let id = 0;
  const fetchData = await fetch(`${url}/search.php?f=f`);
  const data = await fetchData.json();
  displayHome.innerHTML = data.meals
    .slice(0, 6)
    .map(
      (meal, id) =>
        `<div id="${id}" class="meals-div">
  <img src="${meal.strMealThumb}">
  <span class="meals">${meal.strMeal}</span>
  <i class="fa fa-thumbs-up"></i>
  <br>
  <button id="${id}" class="popup-btn">Comments</button>
  </div>`,
      id++
    )
    .join('');
};

window.addEventListener('load', display);

export default display;
