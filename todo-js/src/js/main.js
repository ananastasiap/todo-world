import "../scss/style.scss";

import { addTask } from "./modules/addTask";
import { handleTask } from "./modules/handleTask";
import { showTask } from "./modules/showTask";

window.addEventListener("DOMContentLoaded", () => {
  addTask("inputBox", "listContainer", "addTaskButton");
  handleTask("listContainer");
  showTask("listContainer");
});
