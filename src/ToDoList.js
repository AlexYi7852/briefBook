import store from './store';
import ToDoListUI from './ToDoListUI';
import React, { Component } from 'react';
import { 
    getInitList,
    getAddItemAction,
    getDelItemAction,
    getInputChangeAction
} from './store/actionCreators'
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
        // return React.createElement('div', {}, 'hello world')
    }

    componentDidMount () {
        const action = getInitList()
        console.log(action)
        store.dispatch(action)
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
        const action = getDelItemAction(index)
        store.dispatch(action)
    }

    handleStoreChange = () => {
        this.setState(store.getState())
    }
}

export default ToDoList