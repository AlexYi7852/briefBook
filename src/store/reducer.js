import { 
    ADD_TODO_ITEM,
    DEL_TODO_ITEM,
    INIT_LIST_ACTION,
    CHANGE_INPUT_VALUE
} from './actionTypes'

const defaultState = {
    list: [],
    inputValue: ''
}

// reducer 可以接收state， 但是绝对不能修改state
// reducer 必须是纯函数：给定固定的输入，
// 就一定会有固定的输出，而且不会有任何副作用
export default (state = defaultState, action) => {
    const newState = JSON.parse(JSON.stringify(state))
    if (action.type === CHANGE_INPUT_VALUE) {
        newState.inputValue = action.value
        return newState
    } else if (action.type === ADD_TODO_ITEM) {
        newState.list.push(newState.inputValue)
        newState.inputValue = ''
        return newState
    } else if (action.type === DEL_TODO_ITEM) {
        newState.list.splice(action.index, 1)
        return newState
    } else if (action.type === INIT_LIST_ACTION) {
        newState.list = action.list
        return newState
    }
    return state
}