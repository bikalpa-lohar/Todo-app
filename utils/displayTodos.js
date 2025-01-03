import { actionBtnList } from "../menu.js";
import { inputDate, obj, textInput, todoList } from "../script.js";

export const displayTodos = (todos) => {
  const todosList = document.getElementById("todosList");
  todosList.innerHTML = "";
  // converting array of object into html
  const modifiedTodos = todos.map(createTodo);
  //   appending each item of modifiedTodos into todosList
  modifiedTodos.forEach((value) => {
    todosList.appendChild(value);
  });
};

function createTodo(todo, idx, todos) {
  const li = document.createElement("li");
  li.setAttribute("class", "todo-item");
  //   li.innerHTML= value.name

  const h3 = document.createElement("h3");
  h3.className = "todo-name";
  h3.innerText = todo.name;
  // append h3 into li
  li.appendChild(h3);

  const actionBtnDiv = document.createElement("div");
  actionBtnDiv.className = "action-btn";
  li.appendChild(actionBtnDiv);

  const modifiedActionBtnList = actionBtnList.map((btn) => {
    const actionBtn = document.createElement("button");
    actionBtn.addEventListener("click", (e) => {
      handleActionBtn(btn, todo, idx, todos);
    });

    const actionImg = document.createElement("img");
    actionImg.src = btn.img;
    actionImg.setAttribute("alt", btn.alternateText);
    actionImg.width = 32;
    actionImg.height = 32;

    switch (btn.type) {
      case "complete":
        actionImg.src = todo.isCompleted
          ? "../images/complete.svg"
          : "../images/incomplete.svg";
        break;

      case "favorite":
        actionImg.src = todo.isFavorite
          ? "../images/favorite.svg"
          : "../images/not-favorite.svg";
        break;
    }

    actionBtn.appendChild(actionImg);

    return actionBtn;
  });

  modifiedActionBtnList.forEach((htmlBtn) => {
    actionBtnDiv.appendChild(htmlBtn);
  });

  return li;
}

export const itemToUpdate = [];

function handleActionBtn(btnObj, todoObj, todoIdx, todos) {
  switch (btnObj.type) {
    case "complete":
      todoObj.isCompleted = !todoObj.isCompleted;

      break;
    case "update":
      itemToUpdate.length = 0;
      itemToUpdate.push(todoObj);
      obj.name = itemToUpdate[0].name;
      obj.dueDate = itemToUpdate[0].dueDate;
      textInput.value = itemToUpdate[0].name;
      inputDate.value = itemToUpdate[0].dueDate;

      break;
    case "favorite":
      todoObj.isFavorite = !todoObj.isFavorite;

      break;
    case "delete":
      todoList.splice(todoIdx, 1);
      break;
  }
  localStorage.setItem("todos", JSON.stringify(todoList));

  displayTodos(todos);
}
