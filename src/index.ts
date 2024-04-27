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

console.clear();
// console.log(`${collection.userName}'s Todo List`);
function displayTodoList(): void {
    console.log(`${collection.userName}'s Todo List `
        + `(${collection.getItemCounts().incomplete} items to do)`);
    collection.removeComplete();
    collection.getTodoItems(true).forEach(item => item.printDetails());
}

enum Commands {
    Quit = "Quit"
}
function promptUser(): void {
    console.clear();
    displayTodoList();
    inquirer.prompt({
        type: "list",
        name: "command",
        message:"Choose option",
        choices: Object.values(Commands) 
    }).then(answers=>{
        if(answers["command"] !== Commands.Quit){
            promptUser();
        }
    })
}

promptUser();