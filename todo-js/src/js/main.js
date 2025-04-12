import "../scss/style.scss";

import { addTask } from "./modules/addTask";
import { handleTask } from "./modules/handleTask";

window.addEventListener("DOMContentLoaded", () => {
  addTask("inputBox", "listContainer", "addTaskButton");
  handleTask("listContainer");
});
