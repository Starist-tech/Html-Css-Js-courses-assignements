let form = document.querySelector(".form"); // Select the form element
let enter = document.querySelector("input.input"); // Select the input field for entering tasks
let show = document.querySelector(".tasks"); // Select the container for displaying tasks
let i = 0;// Initialize a counter for task classes

function makeTask(task) {
    let div = document.createElement("div"); // Create a new div element for the task
    div.innerHTML = task; // Set the content of the task div to the entered value
    div.classList.add("show", `task-${i++}`); // Add classes to the task div for styling and identification
    show.append(div); // Append the task div to the tasks container

    let del = document.createElement("div"); // Create a "Delete" button for the task
    div.append(del);
    del.innerHTML = "Delete";
    del.className = "delete";
    localStorage.setItem(div.classList[1],div.innerHTML);

    enter.value = '';  // Clear the input field after task creation
    // Attach an event listener to the "Delete" button for task removal
    del.addEventListener("click", () => {
      div.remove(); // Remove the task div from the DOM when the "Delete" button is clicked
      localStorage.removeItem(div.classList[1]);
    });
}


window.onload = () => {
  // Retrieve tasks from localStorage on page load
  const storedTasks = Object.values(localStorage);
  for (const task of storedTasks) {
    makeTask(task);
  }
};

form.addEventListener('click', function(e) { // Attach an event listener to the form for handling submissions
  if (enter.value.trim() !== "") { // Check if the input field has a value
    makeTask(enter.value.trim());
  }
});





