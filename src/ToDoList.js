import React, { Component, Fragment } from 'react'
import { Input, Button, List } from 'antd'
import store from './store'
import 'antd/dist/antd.css'
import { CHANGE_INPUT_VALUE, ADD_TODO_ITEM, DEL_TODO_ITEM } from './store/actionTypes'

class ToDoList extends Component {
    constructor (props) {
        super(props)
        this.state = store.getState()
        store.subscribe(this.handleStoreChange)
    }

    render () {
        return (
            <Fragment>
                <Input 
                    value={ this.state.inputValue }
                    style={{ width: 300, margin: 10 }}
                    placeholder='todo info'
                    onChange={ this.handleInputChange }
                />
                <Button type='primary' onClick={ this.handleAddItem }>提交</Button>
                <List
                    bordered
                    dataSource={ this.state.list }
                    style={{ width: 300, margin: 10 }}
                    renderItem={ (item, index) => {
                        return (
                            <List.Item onClick={ this.handleItemDelete.bind(this, index) }>{ item }</List.Item>
                        )
                    }}
                >
                </List>
            </Fragment>
        )
    }

    handleInputChange = (e) => {
        let action = {
            type: CHANGE_INPUT_VALUE,
            inputValue: e.target.value
        }
        store.dispatch(action)
    }

    handleAddItem = () => {
        let action = {
            type: ADD_TODO_ITEM,
            inputValue: this.state.inputValue
        }
        store.dispatch(action)
    }

    handleItemDelete (index) {
        let action = {
            index,
            type: DEL_TODO_ITEM
        }
        store.dispatch(action)
    }

    handleStoreChange = () => {
        this.setState(store.getState())
    }
}

export default ToDoList