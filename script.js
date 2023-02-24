window.onload = () => {
    let input = document.getElementById("taskInput");
    input.value = "";
    input.focus();
}

function createTask(taskContent) {
    let task = document.createElement("li")
    let tasks = document.getElementsByTagName("li");
    let id = tasks.length + 1;
    task.setAttribute("id", String(id));

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
    deleteButton.addEventListener ("click", () => {
        task.remove();
        n = 1;
        let tasks = document.getElementsByTagName("li");
        for (let i = 0; i < tasks.length;++i) {
            tasks[i].setAttribute("id", String(n++));
        }
    });
    task.appendChild(deleteButton);
    
    task.addEventListener("click", () => {
        if (checkbox.checked) {
            text.setAttribute("class", "task-content item-done");
        }
        else {
            text.setAttribute("class", "task-content");
        }
    });
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