"use strict";
exports.__esModule = true;
var axios_1 = require("axios");
var url = 'https://jsonplaceholder.typicode.com/todos/1';
axios_1["default"].get(url).then(function (response) {
    var todo = response.data;
    var ID = todo.id;
    var title = todo.title;
    var finished = todo.completed;
    logTodo(ID, title, finished);
});
function logTodo(ID, title, finished) {
    console.log("The Todo with ID: " + ID + " Has a title of : " + title + " Is it finished " + finished);
}
