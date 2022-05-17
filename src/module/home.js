import { url, displayHome } from './variables.js';

const display = async () => {
  const fetchData = await fetch(`${url}`);
  const data = await fetchData.json();
  displayHome.innerHTML = data.meals
    .slice(0, 6)
    .map(
      (meal) => `<div>
  <img src="${meal.strMealThumb}">
  <span class="meals">${meal.strMeal}</span>
  <i class="fa fa-thumbs-up"></i>
  <br>
  <button>Comments</button>
  </div>`,
    );
};

window.addEventListener('load', display);

export default display;
