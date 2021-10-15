const inputValidationRef = document.querySelector("#validation-input");

function handleInputBlur (event) {
 
    if(event.currentTarget.value.length === 6) {
        inputValidationRef.classList.add("valid")
        inputValidationRef.classList.remove("invalid")
    } else {
        inputValidationRef.classList.add("invalid")
        inputValidationRef.classList.remove("valid")
    }
}
 
inputValidationRef.addEventListener("blur", handleInputBlur)

 


 