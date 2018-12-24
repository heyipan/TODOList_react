import React,{Component} from 'react'
import FilterItem from "./filterItem";
import './style.css'

class Filter extends Component{

    render(){
        return (
            <div className="filters">

                <FilterItem itemFilter="all" >全部</FilterItem>
                <FilterItem itemFilter="completed">已完成</FilterItem>
                <FilterItem itemFilter="completing">未完成</FilterItem>

            </div>
        )
    }
}

export default Filter