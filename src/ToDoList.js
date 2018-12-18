import React, { Component, Fragment } from 'react';
import { Button, InputItem } from 'antd-mobile'
import ToDoItem from './ToDoItem'
import axios from 'axios'
class ToDoList extends Component {
  // 会在组件创建的时候调用，但它不是react独有的
  constructor(props) {
    super(props)
    
    this.state = {
      list: [],
      inputValue: ''
    }
  }

  componentDidMount () {
    // 通过charles mock数据
    axios.get('/api/ToDoList')
      .then(res => {
        this.setState(() => ({
          list: [ ...res.data ]
        }))
      }).catch(err => {
        console.log(err, 'request fail')
      })
  }

  // 当组件的state和props发生变化,render函数就好重新执行
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
    this.setState(() => ({ inputValue: e }))
  }

  handleButtonClick = () => {
    // this.setState接受一个参数prevState(修改数据之前的state)
    this.setState((prevState) => {
      console.log(`prevState is ${ JSON.stringify(prevState)}`)
      return {
        inputValue: '',
        list: [...prevState.list, prevState.inputValue]
      }
    }, () => {
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
