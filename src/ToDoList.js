import React, { Component, Fragment } from 'react'
import { Input, Button, List } from 'antd'
import 'antd/dist/antd.css'

class ToDoList extends Component {
    constructor (props) {
        super(props)
        this.state = {
            list: [],
            inputValue: '',
            data: [
                'hello world',
                'hello yiye',
                'hello xingzi',
                'hello ziqing'
            ]
        }
    }

    

    render () {
        return (
            <Fragment>
                <Input 
                    style={{width: 300, margin: 10}}
                    placeholder='todo info'
                />
                <Button type='primary'>提交</Button>
                <List
                    bordered
                    dataSource={this.state.data}
                    style={{width: 300, margin: 10}}
                    renderItem={item => (<List.Item>{item}</List.Item>)}
                >

                </List>
            </Fragment>
        )
    }
}

export default ToDoList