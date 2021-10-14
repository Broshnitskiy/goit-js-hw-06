const inputRef = document.querySelector("#font-size-control");
const textRef = document.querySelector("#text")

const handleInput = event => {
    
    let currentValue = event.currentTarget.value;
    textRef.style.fontSize = `${currentValue}px`;
}

inputRef.addEventListener("input", handleInput);