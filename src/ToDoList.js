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
                    renderItem={ item => (<List.Item>{ item }</List.Item>)}
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
        this.setState((prevState) => ({
            inputValue: '',
            list: [ ...prevState.list, prevState.inputValue]
        }))
    }

    handleStoreChange = () => {
        this.setState(store.getState())
    }
}

export default ToDoList