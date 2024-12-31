import { handlesubmit } from "./form.js";
import { displayHeader } from "./utils/displayHeader.js";
import { displayTodos } from "./utils/displayTodos.js";

export const todoList = [
  {
    id: 1,
    name: "Anything ...",
    isCompleted: false,
    isFavorite: false,
    createAt: "2021-06-15",
    dueDate: "2021-06-20",
  },
  {
    id: 2,
    name: "something ...",
    isCompleted: false,
    isFavorite: true,
    createAt: "2021-06-15",
    dueDate: "2021-06-20",
  },
  {
    id: 3,
    name: "let do ...",
    isCompleted: true,
    isFavorite: false,
    createAt: "2021-06-15",
    dueDate: "2021-06-20",
  },
  {
    id: 4,
    name: "work ...",
    isCompleted: false,
    isFavorite: false,
    createAt: "2021-06-15",
    dueDate: "2021-06-20",
  },
];

export const navbar = document.getElementById("navbar");

export const obj = {};

export const textInput = document.getElementById("todo");
textInput.addEventListener("input", function (e) {
  obj.name = e.target.value;
});

export const inputDate = document.getElementById("date");
inputDate.addEventListener("input", function (e) {
  obj.dueDate = e.target.value;
});
export const submitBtn = document.getElementById("submitBtn");
submitBtn.addEventListener("click", handlesubmit);
getTodos()

displayTodos(todoList);

displayHeader();

export function getTodos(){
 const todos= localStorage.getItem("todos");
 const parsedTodos= JSON.parse(todos);
 todoList.length=0;
 parsedTodos?.forEach(item => todoList.push(item));
//  optional chaining
}
// {
//     id: 1,
//     name: "Anything ...",
//     isCompleted: false,
//      isFavorite: false,
//     createAt: "2021-06-15",
//     dueDate: "2021-06-20",
// }
