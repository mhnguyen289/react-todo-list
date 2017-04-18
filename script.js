import React from 'react';
import ReactDOM from 'react-dom';
import {Todo} from './components/main';



var tasksList = ["task 1", "task2", "task3"];

var tasks = localStorage.getItem('storedTasks');
if(tasks) {
    tasksList = JSON.parse(tasks) 
    //can only store  a string value 
}

ReactDOM.render(
    <Todo tasks = {tasksList} />,
    document.getElementById('todo')
);


