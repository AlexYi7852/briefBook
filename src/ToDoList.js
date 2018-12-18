import React, { Component, Fragment } from 'react';
import { Button, InputItem } from 'antd-mobile'
import ToDoItem from './ToDoItem'
class ToDoList extends Component {
  // 会在组件创建的时候调用，但它不是react独有的
  constructor(props) {
    super(props)
    // 当组件的state和props发生变化,render函数就好重新执行
    this.state = {
      list: [],
      inputValue: ''
    }
    console.log('constructor>>>>>>>>')
  }

  // 在组件即将挂载到页面的时候自动执行
  componentWillMount () {
    console.log('componentWillMount')
  }

  // 在组件挂载到页面的时候自动执行
  componentDidMount () {
    console.log('componentDidMount')
  }

  // 组件被更新之前自动执行
  // 中译：组件是否需要更新，
  // 返回是一个Boolean值，默认返回true
  // 返回false的时候，后面的函数都不执行
  shouldComponentUpdate () {
    console.log('shouldComponentUpdate>>>>>>>')
    return true
  }

  // 组件更新之前的时候自动执行
  componentWillUpdate () {
    console.log('componentWillUpdate')
  }

  // 组件更新之后自动执行
  componentDidUpdate () {
    console.log('compoentDidUpdate')
  }

  render() {
    console.log('parent render>>>>>>>>>')
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
