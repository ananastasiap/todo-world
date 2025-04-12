import "../scss/style.scss";

import { addTask } from "./modules/addTask";

window.addEventListener("DOMContentLoaded", () => {
  addTask("inputBox", "listContainer", "addTaskButton");
  deleteTask("inputBox", "listContainer", "addTaskButton");
});
