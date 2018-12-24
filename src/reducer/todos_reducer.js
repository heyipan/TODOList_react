export default function (state,action) {
    /*初始化 state*/

    if (!state) {
        return {
            todos: [{
                id: 0,
                text: 'First',
                completed: true
            }, {
                id: 1,
                text: 'Second',
                completed: false
            }, {
                id: 2,
                text: 'Third',
                completed: true
            }],
            copyTodos: [{
                id: 0,
                text: 'First',
                completed: true
            }, {
                id: 1,
                text: 'Second',
                completed: false
            }, {
                id: 2,
                text: 'Third',
                completed: true
            }],
        }
    }
    switch(action.type){
        case 'add': {
            const text = {
                id:+new Date(),
                text:action.text,
                completed:false
            }
            const data = [text,...state.todos];
            return {
                ...state,
                todos:data,
                copyTodos:data
            }
        }
        case 'toggle':{
            const newArry = state.todos.map((todoItem) => {
                if (todoItem.id === action.id) {
                    return {
                        ...todoItem,
                        completed: !todoItem.completed
                    }
                } else {
                    return todoItem;
                }
            })
            return {
                ...state,
                 todos:newArry,
                copyTodos:newArry
            }
        }
        case 'remove':{
            const data = state.todos.filter(function (item) {
                return item.id != action.id
            })
            return {
                ...state,
                todos:data,
                copyTodos:data
            }
        }
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