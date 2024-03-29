// const ingredients = ['Potatoes', 'Mushrooms', 'Garlic', 'Tomatos', 'Herbs', 'Condiments'];

// const listLitEl = document.querySelector('#ingredients');

// const el = ingredients.map(ingredient => {
//   const liEl = document.createElement('li');
//   liEl.classList.add('item');
//   liEl.textContent = ingredient;

//   return liEl;
// });

// console.log(el);
// listLitEl.append(...el);

// HTML містить порожній список ul#ingredients.

// <ul id="ingredients"></ul>

// JavaScript містить масив рядків.

const ingredients = ['Potatoes', 'Mushrooms', 'Garlic', 'Tomatos', 'Herbs', 'Condiments'];

// Напиши скрипт, який для кожного елемента масиву ingredients:

// Створить окремий елемент <li>. Обов'язково використовуй метод document.createElement().
// Додасть назву інгредієнта як його текстовий вміст.
// Додасть елементу клас item.
// Після чого, вставить усі <li> за одну операцію у список ul#ingredients.
const ingredientsEl = document.querySelector(`#ingredients`);

const ingredientEl = ingredients.map(ingredient => {
  const liEl = document.createElement('li');
  liEl.classList.add('item');
  liEl.textContent = ingredient;
  return liEl;
});
ingredientsEl.append(...ingredientEl);
