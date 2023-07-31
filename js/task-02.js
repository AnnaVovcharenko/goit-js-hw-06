const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

const ulIngredients = document.querySelector('#ingredients');

const liIngredients = ingredients.map((option)=>{
const LiElements = document.createElement('li');
LiElements.classList.add('item');
LiElements.textContent = option;
return LiElements;
});

ulIngredients.append(...liIngredients)

