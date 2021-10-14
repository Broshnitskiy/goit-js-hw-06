const loginFormRef = document.querySelector(".login-form");

const handlerLoginSubmit = event => {
    event.preventDefault();
    const {elements: { email, password }} = event.currentTarget;

    if (email.value === "" || password.value === "") {
    return alert("Уcі поля повинні бути заповнені!");
    }

    console.log({
        email: email.value,
        password: password.value
    });
    
    event.currentTarget.reset();
 }

loginFormRef.addEventListener("submit", handlerLoginSubmit);
