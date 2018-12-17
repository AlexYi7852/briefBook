import React, { Component, Fragment } from 'react'

class ToDoItem extends Component {
    render () {
        const { content } = this.props
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

export default ToDoItem;