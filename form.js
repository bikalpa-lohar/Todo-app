import { inputDate, obj, textInput, todoList } from "./script.js";
import { displayTodos, itemToUpdate } from "./utils/displayTodos.js";

export function handlesubmit(e) {
  e.preventDefault();

  if (!obj?.name || !obj?.dueDate) {
    return;
  }
  if (itemToUpdate.length) {
    itemToUpdate[0].name = obj.name;
    itemToUpdate[0].dueDate = obj.dueDate;

    textInput.value = "";
    obj.name = undefined;

    inputDate.value = "";
    obj.dueDate = undefined;
    displayTodos(todoList)
    return
  }
  const todoFile = {
    id: todoList.length + 1,
    isCompleted: false,
    isFavorite: false,
    createAt: new Date().toISOString(),
    name: obj.name,
    dueDate: obj.dueDate,
  };
  todoList.push(todoFile);

  textInput.value = "";
  obj.name = undefined;

  inputDate.value = "";
  obj.dueDate = undefined;

  displayTodos(todoList);
}
