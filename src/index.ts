// console.clear();
// console.log("Sandeep's Todo List")

import { TodoCollection } from "./todoCollection.js";
import { TodoItem } from "./todoItem.js";
import inquirer from 'inquirer';

let todos: TodoItem[] = [
    new TodoItem(1, 'Buy groceries'),
    new TodoItem(2, 'Collect Tickets'),
    new TodoItem(3, 'Get Shoes'),
    new TodoItem(4, 'Call Raymond', true),
]

let collection: TodoCollection = new TodoCollection('Sandeep', todos);
let showCompleted = true;

console.clear();
// console.log(`${collection.userName}'s Todo List`);
function displayTodoList(): void {
    console.log(`${collection.userName}'s Todo List `
        + `(${collection.getItemCounts().incomplete} items to do)`);
    //collection.removeComplete();
    //collection.getTodoItems(true).forEach(item => item.printDetails());
    collection.getTodoItems(showCompleted)
        .forEach((item) => item.printDetails());
}

enum Commands {
    Add = "Add New Task",
    Toggle = "Show/Hide Completed",
    Quit = "Quit"
}

function promptAdd(): void {
    console.clear();
    inquirer.prompt({
        type: "input",
        name: "add",
        message: "Enter Task:"
    })
        .then(answer => {
            if (answer["add"] != "") {
                collection.addTodo(answer["add"]);
            }
            promptUser();
        })
};

function promptUser(): void {
    console.clear();
    displayTodoList();
    inquirer.prompt({
        type: "list",
        name: "command",
        message: "Choose option",
        choices: Object.values(Commands)
    }).then(answers => {
        switch (answers.command) {
            case Commands.Toggle:
                showCompleted = !showCompleted;
                promptUser();
                break;
            case  Commands.Add:
                promptAdd();
                break;

        }
    })
}

promptUser();
