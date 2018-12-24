import { combineReducers } from 'redux'
import todos_reducer from './todos_reducer'
import todos_filter from './todos_filter'

const rootReducer = combineReducers({
    todos: todos_reducer, // 键名就是该 reducer 对应管理的 state
    filter: todos_filter
})

export default rootReducer