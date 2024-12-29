import { menu } from "./menu.js";



const todoList= [];


let completeTodoArr= [];
let inCompleteTodoArr= [];

let favoriteTodoArr= [];


const navbar= document.getElementById("navbar");

const logo= document.createElement("h2");
logo.innerText= "My Todo";
   
const navUl= document.createElement("ul");
navUl.classList.add("nav");

// // nav.id="nav"
//  //nav.setAttribute("class", "nav")

navbar.appendChild(logo);
navbar.appendChild(navUl);


menu.forEach((value) => {

    const navigator= document.createElement("li");
    navigator.innerText = value.name

    navigator.addEventListener('click', (e) => {
        e.preventDefault()

        
        if(value.name === "Home"){
            displayTodos()

        }else if(value.name === "Completed"){
            completeTodoArr= todoList.filter((item)=> item.isCompleted)

            displayTodos(completeTodoArr)

        }else if(value.name === "Incomplete"){
            inCompleteTodoArr= todoList.filter((item)=> !item.isCompleted)

            displayTodos(inCompleteTodoArr)

        }else if(value.name === "Favorite"){
            favoriteTodoArr= todoList.filter((item)=> item.isFavorite)

            displayTodos(favoriteTodoArr)
        }
        return
    })

    navUl.appendChild(navigator)
})








// {
//     id: 1,
//     name: "Anything ...",
//     isCompleted: false,
//      isFavorite: false,
//     createAt: "2021-06-15",
//     dueDate: "2021-06-20",
// }
