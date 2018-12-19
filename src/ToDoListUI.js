import 'antd/dist/antd.css'
import { Input, Button, List } from 'antd'
import React, { Component, Fragment } from 'react'

class ToDoListUI extends Component {
    render () {
        console.log('ToDoListUI render')
        return (
            <Fragment>
                <Input 
                    value={ this.props.inputValue }
                    style={{ width: 300, margin: 10 }}
                    placeholder='todo info'
                    onChange={ this.props.handleInputChange }
                />
                <Button type='primary' onClick={ this.props.handleAddItem }>提交</Button>
                <List
                    bordered
                    dataSource={ this.props.list }
                    style={{ width: 300, margin: 10 }}
                    renderItem={ (item, index) => {
                        return (
                            <List.Item 
                                onClick={ index => this.props.handleItemDelete(index) }
                            >
                                { item }
                            </List.Item>
                        )
                    }}
                >
                </List>
            </Fragment>
        )
    }
}

export default ToDoListUI;