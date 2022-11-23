// // Напиши скрипт, який:

// // Порахує і виведе в консоль кількість категорій в ul#categories, тобто
// елементів li.item.
// // Для кожного элемента li.item у списку ul#categories, знайде і
// виведе в консоль текст заголовку елемента(тегу < h2 >) і кількість елементів в
// категорії(усіх < li >, вкладених в нього).
// // В результаті, в консолі будуть виведені наступні повідомлення.

// // Number of categories: 3

// // Category: Animals
// // Elements: 4

// // Category: Products
// // Elements: 3

// // Category: Technologies
// // Elements: 5

const categoiriesEl = document.querySelector('#categories');
const numbercategoriesEl = categoiriesEl.children.length;
console.log('Number of categoiries:', numbercategoriesEl);

const titleEl = document.querySelectorAll('.item h2');
const itemEl = document.querySelectorAll(`.item ul`);

titleEl.forEach(element => {
  console.log('Category :', element.textContent);
});

itemEl.forEach(element => {
  console.log('Elements: ', element.childElementCount);
});

//

// спробуйте без змінних - відразу кверіселектор олл.форіч і далі
// ж треба сума, тобто треба пушити в пустий масив довжину масиву
// айтемів

// через forEach прогнать можно: textContent и
// nextElementSibling.childElementCount;

// // спробуй викликати forEach один раз в масиву
// батьківських елементів, для яких ці ul
// // і h2 є дочірніми.І вже в кожній ітерації
//  шукати в конкретного елементу ці дочірні і виводити їх дані
