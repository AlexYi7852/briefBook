import React, { Component, Fragment } from 'react';
import { Button, InputItem } from 'antd-mobile'
import ToDoItem from './ToDoItem'
class ToDoList extends Component {
  constructor(props) {
    super(props)
    // 当组件的state和props发生变化,render函数就好重新执行
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
          onChange={ this.handlerInputChange }
          ref={(input) => { this.input = input }}
        >
          输入内容
        </InputItem>
        <Button onClick={ this.handleButtonClick }>提交</Button>
        <ul ref={ (ul) => { this.ul = ul }}>
          { this.getToDoItem() }
        </ul>
      </Fragment>
    );
  }

  getToDoItem () {
    return this.state.list.map((item, index) => {
      return <ToDoItem 
              key={index}
              index={index}
              content={item}
              delItem={this.handleItemDelete}
            />
    })
  }

  handlerInputChange = (e) => {
    // input标签可以通过ref来获取dom
    // console.log(this.input.value)
    // 数据驱动尽量不要使用ref操作DOM
    this.setState(() => ({ inputValue: e }))
  }

  handleButtonClick = () => {
    // 新版 es6 写法 return 简写
    // this.setState接受一个参数prevState(修改数据之前的state)
    this.setState((prevState) => ({
      inputValue: '',
      list: [...prevState.list, prevState.inputValue]
    }), () => {
      console.log(this.ul.querySelectorAll('div').length)
    })
  }

  handleItemDelete = (index) => {
    this.setState((prevState) => {
      const list = [...prevState.list]
      list.splice(index, 1)
      // key和value一样的话，后面的value可以省略
      return { list }
    })
  }
}

export default ToDoList;
