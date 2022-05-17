import { url, displayHome } from './variables.js';

const display = async () => {
  const fetchData = await fetch(`${url}`);
  const data = await fetchData.json();
  displayHome.innerHTML = data.meals
    .slice(0, 6)
    .map(
      (meal) => `<div>
  <img src="${meal.strMealThumb}">
  <p class="meals">${meal.strMeal}</p>
  <i class="fa fa-thumbs-up"></i>
  <button>Comments</button>
  </div>`,
    );
};

window.addEventListener('load', display);

export default display;
