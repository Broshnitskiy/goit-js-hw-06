function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const inputRef = document.querySelector("input");
const buttonCreateRef = document.querySelector("[data-create]");
const buttonDestroyRef = document.querySelector("[data-destroy]");
const boxesRef = document.querySelector("#boxes");

function createBoxes(amount) {
  let boxSize = 30;
  for (let i = 1; i <= amount; i += 1) {
    
    const markup = `<div style="width: ${boxSize}px; height: ${boxSize}px; background-color:${getRandomHexColor()};"></div>`
    boxesRef.insertAdjacentHTML("beforeend", markup);
    boxSize += 10;
  }
};

function destroyBoxes() {
  boxesRef.innerHTML = '';
};

buttonCreateRef.addEventListener("click", () => {
  createBoxes(inputRef.value);
});


buttonDestroyRef.addEventListener("click", () => {
  destroyBoxes();
  inputRef.value = "";
});




