import { menu } from "../menu.js";
import { navbar, todoList } from "../script.js";
import { displayTodos } from "./displayTodos.js";

export const displayHeader = () => {
  const logo = document.createElement("h2");
  logo.innerText = "My Todo";

  const navUl = document.createElement("ul");
  navUl.classList.add("nav");

  // // nav.id="nav"
  //  //nav.setAttribute("class", "nav")

  navbar.appendChild(logo);
  navbar.appendChild(navUl);

  menu.forEach((value) => {
    const navigator = document.createElement("li");
    navigator.innerText = value.name;

    if(value.name === "Home"){
      navigator.classList.add("active")
    }

    navigator.addEventListener("click", (e) => {
      e.preventDefault();
      removeAndAddActiveStyle(e.target);

      if (value.name === "Home") {
        displayTodos(todoList);
      } else if (value.name === "Completed") {
        const completeTodoArr = todoList.filter((item) => item.isCompleted);

        displayTodos(completeTodoArr);
      } else if (value.name === "Incomplete") {
        const inCompleteTodoArr = todoList.filter((item) => !item.isCompleted);

        displayTodos(inCompleteTodoArr);
      } else if (value.name === "Favorite") {
        const favoriteTodoArr = todoList.filter((item) => item.isFavorite);

        displayTodos(favoriteTodoArr);
      }
    });

    navUl.appendChild(navigator);
  });
};

function removeAndAddActiveStyle(element) {
  const headerList = document.querySelectorAll(".nav > li");
  Array.from(headerList).forEach(item => {
    item.classList.remove("active")
  })

  element.classList.add("active")
}
