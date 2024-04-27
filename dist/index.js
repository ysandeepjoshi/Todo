// console.clear();
// console.log("Sandeep's Todo List")
import { TodoCollection } from "./todoCollection.js";
import { TodoItem } from "./todoItem.js";
import inquirer from 'inquirer';
let todos = [
    new TodoItem(1, 'Buy groceries'),
    new TodoItem(2, 'Collect Tickets'),
    new TodoItem(3, 'Get Shoes'),
    new TodoItem(4, 'Call Raymond', true),
];
let collection = new TodoCollection('Sandeep', todos);
console.clear();
// console.log(`${collection.userName}'s Todo List`);
function displayTodoList() {
    console.log(`${collection.userName}'s Todo List `
        + `(${collection.getItemCounts().incomplete} items to do)`);
    collection.removeComplete();
    collection.getTodoItems(true).forEach(item => item.printDetails());
}
var Commands;
(function (Commands) {
    Commands["Quit"] = "Quit";
})(Commands || (Commands = {}));
function promptUser() {
    console.clear();
    displayTodoList();
    inquirer.prompt({
        type: "list",
        name: "command",
        message: "Choose option",
        choices: Object.values(Commands)
    }).then(answers => {
        if (answers["commands"] !== Commands.Quit) {
            promptUser();
        }
    });
}
promptUser();
