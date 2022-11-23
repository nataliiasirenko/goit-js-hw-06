// Лічильник складається зі спану і кнопок,
// які по кліку повинні збільшувати і зменшувати
//  його значення на одиницю.

// <div id="counter">
//   <button type="button" data-action="decrement">-1</button>
//   <span id="value">0</span>
//   <button type="button" data-action="increment">+1</button>
// </div>

//     Створи змінну counterValue, в якій буде зберігатися
// поточне значення лічильника та ініціалізуй її значенням 0.
// Додай слухачів кліків до кнопок, всередині яких збільшуй
// або зменшуй значення лічильника.
// Оновлюй інтерфейс новим значенням змінної counterValue.

const counter = {
  value: 0,
  increment() {
    console.log(this);
    this.value += 1;
  },
  decrement() {
    console.log(this);
    this.value -= 1;
  },
};

const decrementBtn = document.querySelector('button[data-action="decrement"]');
const incrementBtn = document.querySelector('button[data-action="increment"]');
const valueEL = document.querySelector('#value');

decrementBtn.addEventListener(`click`, function () {
  counter.decrement();
  console.log(counter);
  valueEL.textContent = counter.value;
});

incrementBtn.addEventListener(`click`, function () {
  counter.increment();
  console.log(counter);
  valueEL.textContent = counter.value;
});
