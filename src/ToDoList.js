
import store from './store'
import ToDoListUI from './ToDoListUI'
import React, { Component } from 'react'
import { getInputChangeAction, getAddItemAction, getDelItemAction } from './store/actionCreators'


class ToDoList extends Component {
    constructor (props) {
        super(props)
        this.state = store.getState()
        store.subscribe(this.handleStoreChange)
    }

    render () {
        return <ToDoListUI
                    list={ this.state.list }
                    inputValue={ this.state.inputValue }
                    handleAddItem={ this.handleAddItem }
                    handleItemDelete={ this.handleItemDelete }
                    handleInputChange={ this.handleInputChange }
               />
    }

    handleInputChange = (e) => {
        const action = getInputChangeAction(e.target.value)
        store.dispatch(action)
    }

    handleAddItem = () => {
        const action = getAddItemAction()
        store.dispatch(action)
    }

    handleItemDelete = (index) => {
        console.log(index, 'index')
        const action = getDelItemAction(index)
        store.dispatch(action)
    }

    handleStoreChange = () => {
        this.setState(store.getState())
    }
}

export default ToDoList