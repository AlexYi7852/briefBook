import { 
    ADD_TODO_ITEM,
    DEL_TODO_ITEM,
    GET_INIT_LIST,
    INIT_LIST_ACTION,
    CHANGE_INPUT_VALUE
} from './actionTypes'
import axios from 'axios'

export const getInputChangeAction = (value) => ({
    value,
    type: CHANGE_INPUT_VALUE
})

export const getAddItemAction = () => ({
    type: ADD_TODO_ITEM
})

export const getDelItemAction = (index) => ({
    index,
    type: DEL_TODO_ITEM
})

export const initListAction = (list) => ({
    list,
    type: INIT_LIST_ACTION
})

export const getToDoList = () => {
    // 当你调用 getToDoList method生成一个函数的时候，
    // 这个函数能够接受到 sotre 的 dispatch方法
    return (dispatch) => {
        axios.get('/api/ToDoList')
            .then(res => {
                const action = initListAction(res.data)
                dispatch(action)
            })
    }
}

export const getInitList = () => ({
    type: GET_INIT_LIST
})