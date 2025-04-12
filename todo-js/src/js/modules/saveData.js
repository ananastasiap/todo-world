import { getDomElements } from "./domUtils";

export const saveData = function (listOfTasksContainer) {
  const todoContainer = getDomElements(null, listOfTasksContainer);
  if (!todoContainer) return;

  const { listContainer } = todoContainer;

  if (!listContainer) {
    console.error("listContainer not found!");
    return;
  }

  localStorage.setItem("data", listContainer.innerHTML);
};
