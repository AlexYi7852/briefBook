import React, { Component, Fragment } from 'react';
import { Button, InputItem } from 'antd-mobile'

class ToDoList extends Component {
  constructor(props) {
    super(props)
    this.state = {
      list: [],
      inputValue: '请输入'
    }
  }

  render() {
    return (
      <Fragment>
        <h1>hello yiye</h1>
        <InputItem
          placeholder={ this.state.inputValue }
          onChange={ this.handlerInputChange }
        >
          添加
        </InputItem>
        <Button>提交</Button>
        <ul>
          <li>学习英语</li>
          <li>learning React</li>
        </ul>
      </Fragment>
    );
  }

  handlerInputChange = e => {
    console.log(e, 'handlerInputChange')
    this.setState({
      inputValue: e
    })
  }
}

export default ToDoList;
