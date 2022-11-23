// Напиши скрипт, який під час втрати фокусу на
// інпуті(подія blur), перевіряє його вміст щодо
// правильної кількості введених символів.

// <input
//   type="text"
//   id="validation-input"
//   data-length="6"
//   placeholder="Please enter 6 symbols"
// />

// Яка кількість символів повинна бути в інпуті,
// зазначається в його атрибуті data - length.
// Якщо введена правильна кількість символів, то
// border інпуту стає зеленим, якщо неправильна
// кількість - червоним.
// Для додавання стилів використовуй CSS - класи valid
// і invalid, які ми вже додали у вихідні файли завдання.

// #validation-input {
//   border: 3px solid #bdbdbd;
// }

// #validation-input.valid {
//   border-color: #4caf50;
// }

// #validation-input.invalid {
//   border-color: #f44336;
// }

const inputEl = document.querySelector(`#validation-input`);
const correctLengthEl = Number(inputEl.dataset.length);

inputEl.addEventListener(`blur`, onLostFocus);

function onLostFocus(event) {
  inputEl.classList.remove('invalid');
  if (event.currentTarget.value.length === correctLengthEl) {
    inputEl.classList.add('valid');
  } else {
    inputEl.classList.add('invalid');
  }
}
