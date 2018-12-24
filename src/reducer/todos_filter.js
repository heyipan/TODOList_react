export default function (state,action) {
    /*初始化 state*/

    if (!state) {
        return {
            filter:'all'
        }
    }
    switch(action.type){
        case 'all':{
            return {
                ...state,
                copyTodos:[...state.todos],
                filter:action.type
            }
        }
        case 'completed':{

            return {
                ...state,
                copyTodos:state.todos.filter(function (item) {
                    return item.completed
                }),
                filter: action.type
            }
        }
        case 'completing':{

            return {
                ...state,
                copyTodos:state.todos.filter(function (item) {
                    return !item.completed
                }),
                filter: action.type
            }
        }
        default:
            return state;
    }
}