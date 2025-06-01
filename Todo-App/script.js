
const todoList = document.getElementById("todo-list");
const inputbox = document.getElementById("todo-input");
const addButton = document.getElementById("add-button");

const addTodo = () => {

    const inputText = inputbox.value.trim();
    if (inputText === "") {
        alert("Please enter a todo item.");
        return;
    }

    
    const li = document.createElement("li");
    li.classList.add("task");
    const p = document.createElement("p");
    p.innerText = inputText;
    li.appendChild(p);
    todoList.appendChild(li);
    inputbox.value = ""; // Clear the input box after adding the todo


    const deleteButton = document.createElement("button");
    deleteButton.innerText = "Delete";
    deleteButton.classList.add("delete-btn");
    li.appendChild(deleteButton);
    deleteButton.addEventListener("click", () => {
        todoList.removeChild(li);
        savedData();
    });

    li.addEventListener("click", () => {
        li.classList.toggle("completed");
        savedData();

    });

    savedData();


}

addButton.addEventListener("click", addTodo);
const savedData = () => {
    localStorage.setItem("todoList", document.getElementById("todo-list").innerHTML);

}

const showdata = () => {
    todoList.innerHTML = localStorage.getItem("todoList") || "";

    const listItems = todoList.querySelectorAll("li");
    listItems.forEach(li => {
        const deleteButton = li.querySelector(".delete-btn");

        deleteButton.addEventListener("click", () => {
            todoList.removeChild(li);
            savedData();
        });

        li.addEventListener("click", () => {
            li.classList.toggle("completed");
            savedData();
        });
    });
};

console.log("todoList", todoList);
window.addEventListener("load", showdata);

inputbox.addEventListener("keypress", (event) => {
    if (event.key === "Enter") {
        addTodo();
    }
});

