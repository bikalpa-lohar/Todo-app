export const displayTodos = (todos) => {
  const todosList = document.getElementById("todosList");
  todosList.innerHTML= "";

  // converting array of object into html
  const modifiedTodos = todos.map(createTodo);
console.log(modifiedTodos, "TODO")
  //   appending each item of modifiedTodos into todosList
  modifiedTodos.forEach((value) => {
    todosList.appendChild(value);
  });
};

function createTodo(value) {
  const li= document.createElement("li");
  li.setAttribute("class", "todo-item");
  li.innerHTML= value.name

//  const h3 = document.creat

  return li
}
