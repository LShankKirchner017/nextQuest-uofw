const form = document.querySelector("form")
const nameInput = document.getElementById("name-signup")
const emailInput = document.getElementById("email-signup")
const passwordInput = document.getElementById("password-signup")
const twitchInput = document.getElementById("twitch-signup")
const locationInput = document.getElementById("location-signup")
const bioInput = document.getElementById("bio-signup")


async function handleSubmit(e){
    e.preventDefault()
    const userData = {
        name: nameInput.value, 
        email: emailInput.value,
        password: passwordInput.value,
        twitch: twitchInput.value,
        location: locationInput.value,
        bio: bioInput.value,
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