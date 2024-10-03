function addTask() {
    const taskInput = document.getElementById("taskInput");
    const taskText = taskInput.value;

    if (taskText === "") return;

    const tasksContainer = document.getElementById("tasks");
    tasksContainer.innerHTML += `
      <div class="task">
        <span>${taskText}</span>
        <div class="task-buttons">
          <button class="complete-btn" onclick="completeTask(this)">✔</button>
          <button class="delete-btn" onclick="deleteTask(this)">🗑</button>
        </div>
      </div>
    `;

    taskInput.value = ""; 
}

function completeTask(button) {
    const task = button.parentElement.previousElementSibling;
    task.style.textDecoration = task.style.textDecoration === "line-through" ? "none" : "line-through";
}

function deleteTask(button) {
    const taskDiv = button.parentElement.parentElement;
    taskDiv.remove();
}
