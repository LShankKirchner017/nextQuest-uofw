const form = document.querySelector("form")
const nameInput = document.getElementById("name-signup")
const emailInput = document.getElementById("email-signup")
const passwordInput = document.getElementById("password-signup")


function handleSubmit(e){
    e.preventDefault()
    const userData = {
        name: nameInput.value, 
        email: emailInput.value,
        password: passwordInput.value,
    }

    fetch("/api/signup", {
        method: "post",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(userData)
    })
    .then((response) => {
        if (response.status === 200) {
            location.assign('/')
        }
    })
    .catch((err) => console.log(err))
}

form.addEventListener
("submit", handleSubmit)