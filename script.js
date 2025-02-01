document.addEventListener("DOMContentLoaded", function () {
    // Select DOM elements
    const addButton = document.getElementById("add-task-btn");
    const taskInput = document.getElementById("task-input");
    const taskList = document.getElementById("task-list");

    // Load tasks from Local Storage when the page loads
    function loadTasks() {
        const storedTasks = JSON.parse(localStorage.getItem("tasks") || "[]");
        storedTasks.forEach(taskText => addTask(taskText, false)); // Load without re-saving
    }

    // Function to add a task
    function addTask(taskText, save = true) {
        taskText = taskText.trim();
        if (!taskText) {
            alert("Please enter a task.");
            return;
        }

        // Create the list item (li) element
        const li = document.createElement("li");
        li.textContent = taskText;

        // Create the remove button
        const removeButton = document.createElement("button");
        removeButton.textContent = "Remove";
        removeButton.className = "remove-btn";

        // Remove task when button is clicked
        removeButton.onclick = function () {
            taskList.removeChild(li);
            removeTaskFromStorage(taskText); // Remove from Local Storage
        };

        // Append remove button to li
        li.appendChild(removeButton);

        // Append li to the task list
        taskList.appendChild(li);

        // Save to Local Storage only if it's a new addition
        if (save) {
            saveTaskToStorage(taskText);
        }

        // Clear the input field
        taskInput.value = "";
    }

    // Save task to Local Storage
    function saveTaskToStorage(taskText) {
        const storedTasks = JSON.parse(localStorage.getItem("tasks") || "[]");
        storedTasks.push(taskText);
        localStorage.setItem("tasks", JSON.stringify(storedTasks));
    }

    // Remove task from Local Storage
    function removeTaskFromStorage(taskText) {
        let storedTasks = JSON.parse(localStorage.getItem("tasks") || "[]");
        storedTasks = storedTasks.filter(task => task !== taskText);
        localStorage.setItem("tasks", JSON.stringify(storedTasks));
    }

    // Attach event listener for Add Task button
    addButton.addEventListener("click", function () {
        addTask(taskInput.value);
    });

    // Allow adding tasks with the Enter key
    taskInput.addEventListener("keypress", function (event) {
        if (event.key === "Enter") {
            addTask(taskInput.value);
        }
    });

    // Load tasks when the page loads
    loadTasks();
});
