import { getDomElements } from "./domUtils";

export const showTask = function (listOfTasksContainer) {
  const todoContainer = getDomElements(null, listOfTasksContainer);
  if (!todoContainer) return;

  const { listContainer } = todoContainer;

  listContainer.innerHTML = localStorage.getItem("data");
};
