"use strict";
// console.clear();
// console.log("Sandeep's Todo List")
Object.defineProperty(exports, "__esModule", { value: true });
const todoCollection_1 = require("./todoCollection");
const todoItem_1 = require("./todoItem");
let todos = [
    new todoItem_1.TodoItem(1, 'Buy groceries'),
    new todoItem_1.TodoItem(2, 'Collect Tickets'),
    new todoItem_1.TodoItem(3, 'Get Shoes'),
    new todoItem_1.TodoItem(4, 'Call Raymond', true),
];
let collection = new todoCollection_1.TodoCollection('Sandeep', todos);
console.clear();
console.log(`${collection.userName}'s Todo List`);
//let newId:number = collection.addTodo('Clean the house');
//let todoItem: TodoItem = collection.getTodoById(newId);
//todoItem.printDetails();
//collection.addTodo(todoItem);
collection.removeComplete();
collection.getTodoItems(true).forEach(item => item.printDetails());
