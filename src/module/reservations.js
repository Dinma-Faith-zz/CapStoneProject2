import { resModal, url } from "./variables"
import displayPopup from "./popup"
import { reserveMeal } from "./postReservation";
const popupArray = [52802, 52815, 52835, 52896, 52903, 52906];
const remove =(container)=>{
  const divContainer=document.querySelector('.modal-container')
  divContainer.remove()
  resModal.classList.remove('show')
}
export const reservPop=async(e)=>{
    const id=e.target.id
    const fetchData = await fetch(`${url}/lookup.php?i=${popupArray[id]}`);
    const data = await fetchData.json()
    const meal=data.meals
    const container=document.createElement('div')  
    container.classList.add('modal-container') 
    container.innerHTML=`
    <div class="image-div">
      <img src="${meal[0].strMealThumb}" alt="meal-img" class="pop" />
      <i class="fa-solid fa-xmark"></i>
    </div>
    <h1 class="pop-header">${meal[0].strMeal}</h1>
    <div class="description">
      <div class="desc1">
        <p>Dish category : ${meal[0].strCategory}</p>
        <p>Country : ${meal[0].strArea}</p>
      </div>
      <div class="desc2">
        <p>Video Link : <a href="${meal[0].strYoutube}" class='video-link'>Watch here</a></p>
      </div>
    </div>
    <h2 class="comments">Reservations(2)</h2>
    <p class="comment">3/11/2022 Greg Looks delicius</p>
    <p class="comment">5/12/2020 Powson I love it!</p>
    <div class="add-comment">
      <h2 class="add-header">Add a Reservation</h2>
      <div class="form">
        <input type="text" class="name" placeholder="Your name"/>
        <input type="text" class="name" placeholder="Start date"/>
        <input type="text" class="name" placeholder="End date"/>
        <button class="addReserve-btn">Reserve</button>
      </div>
    </div>`
  resModal.appendChild(container)
  resModal.classList.add('show')
  const removeBtn=document.querySelector('.fa-xmark')
  const reserve=document.querySelector('.addReserve-btn')
  removeBtn.addEventListener('click',remove)
  reserve.addEventListener('click',reserveMeal)
}