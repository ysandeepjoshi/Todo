// console.clear();
// console.log("Sandeep's Todo List")

import { TodoCollection } from "./todoCollection";
import { TodoItem } from "./todoItem";

let todos : TodoItem[]= [
    new  TodoItem(1, 'Buy groceries'),
    new  TodoItem(2, 'Collect Tickets'),    
    new  TodoItem(3, 'Get Shoes'),
    new  TodoItem(4, 'Call Raymond',true),
]

let collection: TodoCollection = new  TodoCollection('Sandeep',todos);
console.clear();
// console.log(`${collection.userName}'s Todo List`);

console.log(`${collection.userName}'s Todo List `
    + `(${collection.getItemCounts().incomplete} items to do)`)
//let newId:number = collection.addTodo('Clean the house');
//let todoItem: TodoItem = collection.getTodoById(newId);
//todoItem.printDetails();
//collection.addTodo(todoItem);
collection.removeComplete();
collection.getTodoItems(true).forEach(item => item.printDetails());