
const defaultState = {
    list: [],
    inputValue: ''
}

// reducer 可以接收state， 但是绝对不能修改state
export default (state = defaultState, action) => {
    const newState = JSON.parse(JSON.stringify(state))
    if (action.type === 'input_change') {
        newState.inputValue = action.inputValue
        return newState
    } else if (action.type === 'add_todo_item') {
        newState.inputValue = ''
        newState.list.push(action.inputValue)
        return newState
    } else if (action.type === 'delete_todo_item') {
        newState.list.splice(action.index, 1)
        return newState
    }
    return state
}