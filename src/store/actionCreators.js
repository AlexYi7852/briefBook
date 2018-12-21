
import axios from 'axios'
import { GET_INIT_LIST, CHANGE_INPUT_VALUE, ADD_TODO_ITEM, DEL_TODO_ITEM } from './actionTypes'

export const getChangeInputAction = (value) => ({
    value,
    type: CHANGE_INPUT_VALUE
})

export const getAddToDoItemAction = () => ({
    type: ADD_TODO_ITEM
})

export const InitListAction = (list) => ({
    list,
    type: GET_INIT_LIST
})

export const getDelToDoItemAction = (index) => ({
    index,
    type: DEL_TODO_ITEM
})

export const getInitAction = () => {
    return (dispatch) => {
        axios.get('/api/ToDoList')
            .then(res => {
                console.log(res.data)
                let action = InitListAction(res.data)
                dispatch(action)
            }).catch(e => {
                console.log(e)
            })
    }
}