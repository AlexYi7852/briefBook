

import { GET_INIT_LIST, CHANGE_INPUT_VALUE, ADD_TODO_ITEM, DEL_TODO_ITEM } from './actionTypes'

const defaultState = {
    list: [],
    inputValue: ''
}

export default (state = defaultState, action) => {
    const newState = JSON.parse(JSON.stringify(state))
    switch (action.type) {
        case GET_INIT_LIST:
            newState.list = action.list;
            return newState;
        case CHANGE_INPUT_VALUE:
            newState.inputValue = action.value;
            return newState;
        case ADD_TODO_ITEM:
            newState.list.push(state.inputValue)
            newState.inputValue = ''
            return newState;
        case DEL_TODO_ITEM:
            newState.list.splice(action.index, 1)
            return newState;
        default:
            return state;
    }
}

