document.addEventListener("DOMContentLoaded", function () {
    // Select required DOM elements
    const addButton = document.getElementById("add-task-btn");
    const taskInput = document.getElementById("task-input");
    const taskList = document.getElementById("task-list");

    // Define the addTask function
    function addTask() {
        // Retrieve and trim input value
        const taskText = taskInput.value.trim();

        // Validate input (ensure it's not empty)
        if (taskText === "") {
            alert("Please enter a task.");
            return;
        }

        // Create a new <li> element for the task
        const li = document.createElement("li");
        li.textContent = taskText;

        // Create a "Remove" button
        const removeBtn = document.createElement("button");
        removeBtn.textContent = "Remove";
        removeBtn.className = "remove-btn";

        // Add event listener to remove the task when button is clicked
        removeBtn.addEventListener("click", function () {
            taskList.removeChild(li);
        });

        // Append the remove button to the task <li>
        li.appendChild(removeBtn);

        // Append the task <li> to the task list
        taskList.appendChild(li);

        // Clear input field after adding the task
        taskInput.value = "";
    }

    // Attach event listener to the "Add Task" button
    addButton.addEventListener("click", addTask);

    // Allow adding task by pressing "Enter" key
    taskInput.addEventListener("keypress", function (event) {
        if (event.key === "Enter") {
            addTask();
        }
    });
});

