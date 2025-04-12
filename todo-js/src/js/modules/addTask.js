export const addTask = function (
  inputBoxContainer,
  listOfTasksContainer,
  taskBtnContainer
) {
  const inputBox = document.getElementById(inputBoxContainer);
  const listContainer = document.getElementById(listOfTasksContainer);
  const addTaskButton = document.getElementById(taskBtnContainer);

  addTaskButton.addEventListener("click", function () {
    if (inputBox.value === "") {
      alert("You must write something!");
    } else {
      let li = document.createElement("li");
      li.innerHTML = inputBox.value;
      listContainer.appendChild(li);
      let span = document.createElement("span");
      span.innerHTML = "\u00d7";
      li.appendChild(span);
    }
    inputBox.value = "";
  });
};
