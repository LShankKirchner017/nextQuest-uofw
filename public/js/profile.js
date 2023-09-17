const form =document.querySelector("form")
const userNameInput = document.getElementById("userName")
const locationInput = document.getElementById("location")
const aboutMeInput = document.getElementById("aboutMe")



function handleSubmit(e) {
  e.preventDefault();
  const profileData = {
   name: userNameInput.value,
   location: locationInput.value,
   aboutMe: aboutMeInput.value,
  };
console.log(profileData)
  fetch("/api/users", {
    method: "post",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(profileData),
  })
  .then((response) => {
      if (response.status === 200) {
          window.location.assign("/");
        }
    })
    .catch((err) => console.log(err));
}
form.addEventListener("submit", handleSubmit);