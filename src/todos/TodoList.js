import React,{Component} from 'react'
import TransitionGroup from 'react-addons-css-transition-group';
import TodoItem from './TodoItem'
import {connect} from 'react-redux';
import './todoItem.css';
class TodoList extends Component{

    render(){
        console.log(this.props)
        return (

            <ul>
                <TransitionGroup transitionName="fade" transitionEnterTimeout={500} transitionLeaveTimeout={200} transitionAppear={true} transitionAppearTimeout={500}>
                    {
                        this.props.todos.map((item) => (
                            <TodoItem
                                id={item.id}
                                key={item.id}
                                text={item.text}
                                completed={item.completed}
                            />
                        ))
                    }
                </TransitionGroup>
            </ul>
        )
    }
}
const mapStateToProps = (state) => {
    return {
        todos: state.todos.copyTodos
    };

}
TodoList = connect(mapStateToProps)(TodoList);
export default TodoList