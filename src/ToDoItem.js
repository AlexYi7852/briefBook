import React, { Component, Fragment } from 'react'
import PropTypes from 'prop-types'

class ToDoItem extends Component {

    // 接收两个参数nextProps、nextState
    shouldComponentUpdate (nextProps, nextState) {
        console.log(`nextProps.content is ${nextProps.content}, this.props.content is ${this.props.content}`)
        if (nextProps.content === this.props.content) {
            return false
        }
    }

    render () {
        console.log('child render')
        const { content } = this.props
        // JSX => createElement => 虚拟DOM(JS对象) => 真实的DOM
        // 虚拟DOM本质上是通过 React.createElement 创建的一个JS对象
        return (
            <Fragment>
            <div onClick={ this.handleClick }>
                { content }
            </div>
        </Fragment>
        )
    }

    handleClick = () => {
        const { delItem, index } = this.props
        delItem(index)
    }

}

// isRequired 必须传递
ToDoItem.propTypes = {
    content: PropTypes.string,
    index: PropTypes.number,
    delItem: PropTypes.func,
}

// 给test添加默认值
ToDoItem.defaultProps = {
    content: 'hello world'
}

export default ToDoItem;