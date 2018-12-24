import React,{Component} from 'react'
import {connect} from 'react-redux'
class TodoItem extends Component{


    toggle = () => {
        console.log(this.props.id)
        this.props.onToggle(this.props.id)
    }
    delete = () => {
        console.log(this.props.id)

        this.props.onRemove(this.props.id)
    }
    render(){
        const {completed,text} = this.props;
        return (
            <li className="todo-item" style = {{textDecoration: completed ? 'line-through' : 'none'}}>
                <input type="checkbox" className="toggle" checked = {completed ? "checked" : ""}  onClick={this.toggle} readOnly />
                <label className="text">{text}</label>
                <button className="remove" onClick={this.delete} >×</button>
            </li>
        )
    }
}
const mapDispatchToProps = (dispatch) => {
    return{
        onToggle:(id) => {
            dispatch({type:"toggle",id:id});
        },
        onRemove:(id) => {
            dispatch({type: "remove",id:id});
        }

    }
}
TodoItem = connect(null,mapDispatchToProps)(TodoItem)
export default TodoItem