window.onload = () => {
    let input = document.getElementById("taskInput");
    input.value = "";
    input.focus();
}

function createTask(taskContent) {
    let task = document.createElement("li");
    
    let checkbox = document.createElement("input");
    checkbox.setAttribute("type", "checkbox");
    checkbox.setAttribute("class", "checkbox");
    task.appendChild(checkbox);

    let text = document.createElement("p");
    text.setAttribute("class", "task-content");
    text.setAttribute("contenteditable", "true");
    text.textContent = taskContent;
    task.appendChild(text);

    let deleteButton = document.createElement("button");
    deleteButton.textContent = "Supprimer";
    deleteButton.setAttribute("class", "delete-button");
    task.appendChild(deleteButton);
    
    return task;
}


function addTask() {
    let input = document.querySelector("input");
    if (input.value === "") {
        return;
    }

    let taskContent = input.value;
    input.value = "";

    let task = createTask(taskContent);
    
    document.querySelector("ul").appendChild(task);
}


let addBtn = document.querySelector(".add-button");

addBtn.addEventListener("click", addTask);

document.getElementById("taskInput").addEventListener("keydown", function (e) {
    if (e.code === "Enter") {
        addTask();
    }
});