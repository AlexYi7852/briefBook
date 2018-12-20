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
    switch (action.type) {
        case CHANGE_INPUT_VALUE:
            newState.inputValue = action.value;
            return newState;
        case ADD_TODO_ITEM:
            newState.list.push(newState.inputValue);
            newState.inputValue = '';
            return newState;
        case DEL_TODO_ITEM:
            newState.list.splice(action.index, 1);
            return newState;
        case INIT_LIST_ACTION:
            newState.list = action.list;
            return newState;
        default:
            return state;
    }
}