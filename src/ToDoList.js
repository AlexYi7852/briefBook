import React, { Component, Fragment } from 'react';
import { Button, InputItem } from 'antd-mobile'
import ToDoItem from './ToDoItem'
class ToDoList extends Component {
  constructor(props) {
    super(props)
    this.state = {
      list: [],
      inputValue: ''
    }
  }

  render() {
    return (
      <Fragment>
        {/* 点击label触发input聚焦事件 */}
        <label htmlFor="insertArea">Learning React</label>
        <InputItem
          id="insertArea"
          value={ this.state.inputValue }
          onChange={ v => this.handlerInputChange(v) }
        >
          输入内容
        </InputItem>
        <Button onClick={ this.handleButtonClick }>提交</Button>
        <ul>
          {
            this.state.list.map((item, index) => {
              return <ToDoItem 
                      index={index}
                      content={item}
                      delItem={this.handleItemDelete}
                    />
            })
          }
        </ul>
      </Fragment>
    );
  }

  handlerInputChange (e) {
    this.setState({
        inputValue: e
    })
  }

  handleButtonClick = () => {
    this.setState({
      inputValue: '',
      list: [...this.state.list, this.state.inputValue]
    })
  }

  handleItemDelete = (index) => {
    const list = [...this.state.list]
    list.splice(index, 1)
    this.setState({
      list: list
    })
  }
}

export default ToDoList;
