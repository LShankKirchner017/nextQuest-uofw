const form = document.querySelector("form")
const gameInput = document.getElementById("game")
const genreInput = document.getElementById("genre");
const difficultySelect = document.getElementById("difficulty");
const lengthInput = document.getElementById("length");
const isImportantCheckbox = document.getElementById("is_priority");

function handleSubmit(e){
    e.preventDefault()
    const listData = {
        game: gameInput.value,
        genre: genreInput.value,
        difficulty: difficultySelect.value,
        length:lengthInput.value,
        is_priority: isImportantCheckbox.checked,

    }

    fetch("/api/gamelist", {
        method: "post",
        headers: { 
            "Content-Type": "application/json"
         },
        body: JSON.stringify(listData)
        
    })
    .then ((response)=> {
        if (response.status === 200){
            location.assign('/user-profile')
        }
    })
    .catch((err)=> console.log(err))
}
form.addEventListener("submit", handleSubmit)

