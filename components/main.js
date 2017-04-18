import React from 'react';
import {AddNewTask} from './addtask';
import {TodoAppList} from './applist';
import styled from 'styled-components'

const Outer = styled.div`
text-align: center;
`

const Body = styled.div`
  font: 14px 'Helvetica Neue', Helvetica, Arial, sans-serif;
	line-height: 1.4em;
	background: #f5f5f5;
	color: #4d4d4d;
	min-width: 230px;
	max-width: 550px;
	margin: 0 auto;
	-webkit-font-smoothing: antialiased;
	-moz-font-smoothing: antialiased;
	font-smoothing: antialiased;
	font-weight: 300;
    
`


export class Todo extends React.Component {
    constructor(props) {
        super();
        this.state = {tasks: props.tasks};
        this.updateList = this.updateList.bind(this);
        this.removeTask = this.removeTask.bind(this);
    }

    updateList(text) {
        var updatedTasks = this.state.tasks;
        updatedTasks.unshift(text);
        this.setState({tasks: updatedTasks});
        this.updateLocalStorage(updatedTasks);
    }

    removeTask(text){
        var updatedTasks = this.state.tasks;
        updatedTasks.splice(updatedTasks.indexOf(text), 1);
        this.setState({tasks: updatedTasks});
        this.updateLocalStorage(updatedTasks);
    }

    updateLocalStorage(updatedTasks) {
        console.log("tasks updated")
        localStorage.setItem('storedTasks', JSON.stringify(updatedTasks))
    }

    render() {
        return (
            <Outer>
                <Body>
                <h1>Todo App</h1>
                    <AddNewTask updateList={this.updateList} />
                    <TodoAppList tasks={this.state.tasks} remove={this.removeTask} />
                </Body>
            </Outer>
        );
    }
}
