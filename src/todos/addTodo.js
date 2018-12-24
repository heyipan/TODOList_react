import React,{Component} from 'react'
import {connect} from 'react-redux';

class AddTodo extends Component{

    constructor(){
        super()
        this.state={
            value:''
        }
    }
    onInputChange = (e) => {
        this.setState({
            value:e.target.value
        })
    }
    onSubmit = () => {
        this.props.addTodo(this.state.value);
        this.setState({
            value:''
        })
    }
    render(){
        return (
            <div className="add-todo">
                <input className="new-todo" onChange = {this.onInputChange} value = {this.state.value}/>
                <button className="add-btn" type="button" onClick={this.onSubmit}>添加</button>
            </div>
        )
    }
}
const mapDispatchToProps = (dispatch) => {
    return {
        addTodo:(text) => {
            dispatch({type:'add',text:text})
        }
    }
}
export default connect(null,mapDispatchToProps)(AddTodo);