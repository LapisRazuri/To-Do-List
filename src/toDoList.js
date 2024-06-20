//function that creates todoList
function Task(title, description, dueDate, priority) {
    this.title = title;
    this.description = description;
    this.dueDate = dueDate;
    this.priority = priority;
}


export function createTask () {
    let title = prompt("What is the name of your to do list?");
    let description = prompt("Write the description of your to do List");
    let dueDate = prompt("What is the due date?");
    let priority = prompt("What is the priority?");

    const task = new Task( title, description, dueDate, priority );
    return task;
}


///////////////////////////////////////////////////////////
