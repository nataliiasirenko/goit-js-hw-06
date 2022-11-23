function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const btnChangeColor = document.querySelector(`.change-color`);
const spanColorEl = document.querySelector(`.color`);
const body = document.body;

btnChangeColor.addEventListener('click', () => {
  body.style.backgroundColor = getRandomHexColor();
  spanColorEl.textContent = body.style.backgroundColor;
});
