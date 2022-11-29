const users = []
const com1 = []
const com2 = []

const userform = document.querySelector("#userform")
const btn = document.querySelector("#btn")
const rend = document.querySelector("#rendom")
btn.addEventListener("click", (event)=>{
    const names = document.querySelector("#name")
    const num = document.querySelector("#number")
    const players = document.querySelector("#class")
    event.preventDefault();
    users.push(names.value);
    names.value = ""
    num.textContent=users.length,
    players.textContent=users
})
