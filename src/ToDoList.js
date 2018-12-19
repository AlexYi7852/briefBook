import React, { Component, Fragment } from 'react'
import { Input, Button, List } from 'antd'
import store from './store'
import 'antd/dist/antd.css'

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
            type: 'input_change',
            inputValue: e.target.value
        }
        store.dispatch(action)
    }

    handleAddItem = () => {
        let action = {
            type: 'add_todo_item',
            inputValue: this.state.inputValue
        }
        store.dispatch(action)
    }

    handleItemDelete (index) {
        let action = {
            index,
            type: 'delete_todo_item'
        }
        store.dispatch(action)
    }

    handleStoreChange = () => {
        this.setState(store.getState())
    }
}

export default ToDoList