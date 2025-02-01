document.addEventListener("DOMContentLoaded", function () {
    // Select DOM elements
    const addButton = document.getElementById("add-task-btn");
    const taskInput = document.getElementById("task-input");
    const taskList = document.getElementById("task-list");

    // Function to add a task
    function addTask() {
        const taskText = taskInput.value.trim(); // Trim whitespace

        if (taskText === "") {
            alert("Please enter a task.");
            return;
        }

        // Create the list item (li) element
        const li = document.createElement("li");
        li.textContent = taskText;

        // Create the remove button
        const removeButton = document.createElement("button");
        removeButton.textContent = "Remove";
        removeButton.className = "remove-btn"; // Assign class name (without classList.add)

        // Remove task when button is clicked
        removeButton.onclick = function () {
            taskList.removeChild(li);
        };

        // Append remove button to li
        li.appendChild(removeButton);

        // Append li to the task list
        taskList.appendChild(li);

        // Clear the input field
        taskInput.value = "";
    }

    // Attach event listener for Add Task button
    addButton.addEventListener("click", addTask);

    // Allow adding tasks with the Enter key
    taskInput.addEventListener("keypress", function (event) {
        if (event.key === "Enter") {
            addTask();
        }
    });
});

