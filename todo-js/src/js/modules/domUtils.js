export const getDomElements = (
  inputBoxContainer = null,
  listOfTasksContainer = null,
  addTaskBtnContainer = null
) => {
  const elements = {};

  if (inputBoxContainer) {
    elements.inputBox = document.getElementById(inputBoxContainer);
    if (!elements.inputBox) {
      console.warn(`Element with ID "${inputBoxContainer}" not found.`);
    }
  }

  if (listOfTasksContainer) {
    elements.listContainer = document.getElementById(listOfTasksContainer);
    if (!elements.listContainer) {
      console.warn(`Element with ID "${listOfTasksContainer}" not found.`);
    }
  }

  if (addTaskBtnContainer) {
    elements.addTaskButton = document.getElementById(addTaskBtnContainer);
    if (!elements.addTaskButton) {
      console.warn(`Element with ID "${addTaskBtnContainer}" not found.`);
    }
  }

  return elements;
};
