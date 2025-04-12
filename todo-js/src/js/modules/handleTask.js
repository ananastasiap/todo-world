import { getDomElements } from "./domUtils";

export const handleTask = function (listOfTasksContainer) {
  // Get DOM elements using the utility function
  const todoContainer = getDomElements(null, listOfTasksContainer);
  if (!todoContainer) return;

  // Destructure the element to get dom elem not object
  const { listContainer } = todoContainer;

  listContainer.addEventListener("click", function (event) {
    // Check if the clicked element is a list item or a span (delete button)
    if (event.target.tagName === "LI") {
      // If it's a list item, toggle the "checked" class
      event.target.classList.toggle("checked");
    } else if (event.target.tagName === "SPAN") {
      // If it's a span, delete li element
      event.target.parentElement.remove();
    }
  });
};
