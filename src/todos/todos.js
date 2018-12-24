import React,{Component} from 'react'
import AddTodo from "./addTodo";
import TodoList from "./TodoList";
import './style.css'


class Todos extends Component{

    render(){
        return (
           <div>
               <AddTodo/>
               <TodoList/>
           </div>


        )
    }
}

export default Todos