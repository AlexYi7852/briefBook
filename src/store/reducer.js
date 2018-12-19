import { CHANGE_INPUT_VALUE, ADD_TODO_ITEM, DEL_TODO_ITEM } from './actionTypes'

const defaultState = {
    list: [],
    inputValue: ''
}

// reducer 可以接收state， 但是绝对不能修改state
export default (state = defaultState, action) => {
    const newState = JSON.parse(JSON.stringify(state))
    if (action.type === CHANGE_INPUT_VALUE) {
        newState.inputValue = action.inputValue
        return newState
    } else if (action.type === ADD_TODO_ITEM) {
        newState.inputValue = ''
        newState.list.push(action.inputValue)
        return newState
    } else if (action.type === DEL_TODO_ITEM) {
        newState.list.splice(action.index, 1)
        return newState
    }
    return state
}