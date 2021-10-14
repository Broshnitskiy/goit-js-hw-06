function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const bodyRef = document.querySelector("body");
const colorRef = document.querySelector(".color");
const buttonRef = document.querySelector(".change-color");

buttonRef.addEventListener("click", () => {
  const randomColor = getRandomHexColor();
  bodyRef.style.backgroundColor = `${randomColor}`;
  colorRef.textContent = `${randomColor}`;
})
