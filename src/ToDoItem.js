import React, { Component, Fragment } from 'react'
import PropTypes from 'prop-types'

class ToDoItem extends Component {
    render () {
        const { content, test } = this.props
        return (
            <Fragment>
                <div onClick={ this.handleClick }>
                  { test } - { content }
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
    test: PropTypes.string.isRequired
}

// 给test添加默认值
ToDoItem.defaultProps = {
    test: 'hello world'
}

export default ToDoItem;