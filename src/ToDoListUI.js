import 'antd/dist/antd.css'
import { Input, Button, List } from 'antd'
import React, { Fragment } from 'react'

const ToDoListUI = (props) => {
    return (
        <Fragment>
            <Input 
                value={ props.inputValue }
                style={{ width: 300, margin: 10 }}
                placeholder='todo info'
                onChange={ props.handleInputChange }
            />
            <Button type='primary' onClick={ props.handleAddItem }>提交</Button>
            <List
                bordered
                dataSource={ props.list }
                style={{ width: 300, margin: 10 }}
                renderItem={ (item, index) => {
                    return (
                        <List.Item 
                            onClick={ () => props.handleItemDelete(index) }
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

export default ToDoListUI;