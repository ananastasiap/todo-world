export const getDomElements = (
  inputBoxContainer,
  listOfTasksContainer,
  addTaskBtnContainer
) => {
  const inputBox = document.getElementById(inputBoxContainer);
  const listContainer = document.getElementById(listOfTasksContainer);
  const addTaskButton = document.getElementById(addTaskBtnContainer);

  if (!inputBox || !listContainer || !addTaskButton) {
    throw new Error("One or more elements not found in the DOM.");
  }
  return {
    inputBox,
    listContainer,
    addTaskButton,
  };
};
