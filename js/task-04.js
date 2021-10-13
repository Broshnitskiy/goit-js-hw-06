let counterValue = 0

const valueRef = document.querySelector("#value");
const buttonDecrementRef = document.querySelector('[data-action="decrement"]');
const buttonIncrementRef = document.querySelector('[data-action="increment"]');


buttonIncrementRef.addEventListener("click", () => {
    counterValue += 1;
    valueRef.textContent = counterValue;
})

buttonDecrementRef.addEventListener("click", () => {
    counterValue -= 1;
    valueRef.textContent = counterValue;
})
 
