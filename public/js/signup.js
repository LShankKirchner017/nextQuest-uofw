const form = document.querySelector("form")
const nameInput = document.getElementById("name-signup")
const emailInput = document.getElementById("email-signup")
const passwordInput = document.getElementById("password-signup")


async function handleSubmit(e){
    e.preventDefault()
    const userData = {
        name: nameInput.value, 
        email: emailInput.value,
        password: passwordInput.value,
    }

    await fetch("/api/users", {
        method: "post",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(userData)
    })
    .then((response) => {
            window.location.assign('/')
        
    })
    .catch((err) => console.log(err))
}

form.addEventListener
("submit", handleSubmit)