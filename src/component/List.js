import React, { Component } from 'react';
import AddList from './AddList';
export default class List extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            todos: [
                { title: 'breakfast', id: 1 },
                { title: 'prepare', id: 2 },
                { title: 'take a rid', id: 3 },
            ]
        }

    }
    addtodos = (todo) => {
        console.log('add new to do in state')
        console.log(todo);
        let newobj2 = [...this.state.todos]
        newobj2.push(todo)
        this.setState({
            todos: newobj2
        })
    }
    deletetodo = (id) => {
        console.log(id)
        let newobj = [...this.state.todos]
        let newTodos = newobj.filter(item => item.id != id)
    }

    render() {

        return (
            <>
                <AddList addtodos={this.addtodos} />
                <ul>
                    {this.state.todos.map(
                        item => (
                            <li key={item.id}>{item.title}
                                <button key={item.id} onClick={() => this.deletetodo(item.id)}>X</button>
                            </li>
                        ))}
                </ul>
            </>
        )
    }
}