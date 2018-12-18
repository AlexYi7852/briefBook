import React, { Component, Fragment } from 'react'
import { Input, Button, List } from 'antd'
import store from './store'
import 'antd/dist/antd.css'

class ToDoList extends Component {
    constructor (props) {
        super(props)
        this.state = store.getState()
    }

    render () {
        return (
            <Fragment>
                <Input 
                    value={this.state.inputValue}
                    style={{width: 300, margin: 10}}
                    placeholder='todo info'
                    onChange={ this.handleInputChange }
                />
                <Button type='primary'>提交</Button>
                <List
                    bordered
                    dataSource={this.state.list}
                    style={{width: 300, margin: 10}}
                    renderItem={item => (<List.Item>{item}</List.Item>)}
                >

                </List>
            </Fragment>
        )
    }

    handleInputChange = () => {
        console.log('hello helo')
    }
}

export default ToDoList