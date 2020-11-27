import React, { Component } from 'react'
export default class AddList extends Component {
    constructor(props) {
        super(props)
        this.state = {
            title: '',
            id: ''
        }
    }
    handleSubmit = (e) => {
        e.preventDefault();
        console.log('i am in submit')
        let newobj = this.state
        console.log(this.state)
        this.props.addtodos(newobj)
    }
    handleChange = (e) => {
        console.log(e.target.value)
        this.setState({
            title: e.target.value,
            id: Math.round(Math.random() * 100 + .2)
        })
    }
    render() {
        return (
            <div>
                <form onSubmit={this.handleSubmit}>
                    <input type='text' id='title' onChange={this.handleChange}></input>
                    <button type='submit'>Add to do</button>
                </form>
            </div>
        )
    }
}