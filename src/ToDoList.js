import React, { Component, Fragment } from 'react';
import { Button, InputItem } from 'antd-mobile'

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
        <h1>Learning React</h1>
        <InputItem
          value={ this.state.inputValue }
          onChange={ v => this.handlerInputChange(v) }
        />
        <Button onClick={ this.handleButtonClick }>提交</Button>
        <ul>
          {
            this.state.list.map((item, index) => {
              return <li 
                      key={ index }
                      onClick={ () => this.handleItemDelete(index) }
                    >
                      { item }
                    </li>
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

  handleItemDelete (index) {
    console.log('del>>>>')
    const list = [...this.state.list]
    list.splice(index, 1)
    this.setState({
      list: list
    })
  }
}

export default ToDoList;
