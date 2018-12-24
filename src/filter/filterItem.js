import React ,{Component} from 'react'
import {connect} from 'react-redux'

class FilterItem extends Component{

    Filter = (e) => {
        e.preventDefault();
        this.props.changeFilter(this.props.itemFilter);

    }

    render(){
        let  html;
        console.log(this.props)
        if (this.props.filter == this.props.itemFilter) {
            html = (<b className="filter selected">{this.props.children}</b>) ;
        } else {
            html = (
                <a href="#" className="filter not-selected" onClick={this.Filter}>{this.props.children}</a>
            );
        }
        return (
            <div>
                {html}
            </div>
        )
    }
}
const mapStateToProps = (state) => {
    return {
        filter: state.filter
    }
};

const mapDispatchToProps = (dispatch) => ({
    changeFilter: (filter) => {
        dispatch({type:filter});
    }
});

export default connect(mapStateToProps, mapDispatchToProps)(FilterItem);