import React, { Component } from 'react'
import './TodoApp.css'

export class TodoApp extends Component {
    state={
        input:"",
        items:[]
    }

    handleChange = (event) => {
        this.setState({
            input: event.target.value
        })
    }


    storeItems = (event) => {
        event.preventDefault()
            const { input } = this.state
            this.setState({
                items:[...this.state.items,input],
                input:""
            })
    }

    deleteItem = (index) => {
        const allItems = this.state.items;

        allItems.splice(index,1)

        this.setState({
            items: allItems
        })
    }

    render() {
        const {input , items} = this.state
        console.log(items);
        return (
            <div className="todo-container"> 
               
                <form className="input-section" onSubmit={this.storeItems} >
                <h1>Todo App</h1>
                    <input type="text" value={input} placeholder="Enter Items..." onChange={this.handleChange} />
                </form>

                <ul>
                    { items.map((value,index)=>(
                        <li key={index} >{value}<i className="fa fa-trash" aria-hidden="true" onClick={()=> this.deleteItem(index)} ></i></li>
                    ))}
                </ul>
            </div>
        )
    }
}


export default TodoApp;