document.addEventListener("DOMContentLoaded", () => {
    // Select DOM elements
    const addButton = document.getElementById("add-task-btn");
    const taskInput = document.getElementById("task-input");
    const taskList = document.getElementById("task-list");

    // Function to add a new task
    function addTask() {
        const taskText = taskInput.value.trim(); // Trim whitespace

        if (taskText === "") {
            alert("Please enter a task.");
            return;
        }

        // Create new list item (li)
        const listItem = document.createElement("li");
        listItem.textContent = taskText;

        // Create Remove button
        const removeButton = document.createElement("button");
        removeButton.textContent = "Remove";
        removeButton.classList.add("remove-btn"); // Add class for styling

        // Add event listener to remove task when button is clicked
        removeButton.addEventListener("click", () => {
            taskList.removeChild(listItem);
        });

        // Append button to list item, then add list item to the task list
        listItem.appendChild(removeButton);
        taskList.appendChild(listItem);

        // Clear input field after adding task
        taskInput.value = "";
    }

    // Event listener for Add Task button
    addButton.addEventListener("click", addTask);

    // Event listener for Enter key press inside the input field
    taskInput.addEventListener("keypress", (event) => {
        if (event.key === "Enter") {
            addTask();
        }
    });
});
