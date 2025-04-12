import { getDomElements } from "./domUtils";
import { saveData } from "./saveData";

export const addTask = function (
  inputBoxContainer,
  listOfTasksContainer,
  addTaskBtnContainer
) {
  // Get DOM elements using the utility function
  const elements = getDomElements(
    inputBoxContainer,
    listOfTasksContainer,
    addTaskBtnContainer
  );
  if (!elements) return;

  // Destructure the elements for easier access
  const { inputBox, listContainer, addTaskButton } = elements;

  addTaskButton.addEventListener("click", function () {
    if (inputBox.value === "") {
      alert("You must write something!");
    } else {
      // Create a new list item and append it to the list container
      let li = document.createElement("li");
      li.innerHTML = inputBox.value;
      listContainer.appendChild(li);
      // Create a new span element for the delete button
      let span = document.createElement("span");
      span.innerHTML = "\u00d7";
      li.appendChild(span);
    }
    // Clear the input box after adding the task
    inputBox.value = "";
    saveData(listOfTasksContainer);
  });
};
