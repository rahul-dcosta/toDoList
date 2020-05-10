import React from "react"
import ToDoItem from "./components/ToDoItem"
import todosData from "./todosData"
 
/*
import Header from "./components/Header"
import MainContent from "./components/MainContent"
import Footer from "./components/Footer"
*/
import './style.css'

class App extends React.Component() {
  constructor() {
    super()
    this.state = {
      todos: todosData
    }
  }
  
  render() {
    const todoItems = this.state.todos.map(item => <ToDoItem key = {item.id} item ={item} />)
    return (
      <div className="todo-list">
          {todoItems}
      </div>
    )
  }
}

export default App
