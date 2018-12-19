import { 
    ADD_TODO_ITEM,
    DEL_TODO_ITEM,
    INIT_LIST_ACTION,
    CHANGE_INPUT_VALUE
} from './actionTypes'

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