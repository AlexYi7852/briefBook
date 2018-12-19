import axios from 'axios';
import store from './store';
import ToDoListUI from './ToDoListUI';
import React, { Component } from 'react';
import { 
    initListAction,
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
    }

    handleInputChange = (e) => {
        const action = getInputChangeAction(e.target.value)
        store.dispatch(action)
    }

    componentDidMount () {
        axios.get('/api/ToDoList')
            .then(res => {
                let action = initListAction(res.data)
                store.dispatch(action)
            }).catch(err => {
                console.log(err)
            })
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