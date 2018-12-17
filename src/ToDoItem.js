import React, { Component, Fragment } from 'react'

class ToDoItem extends Component {
    render () {
        return (
            <Fragment>
                <div onClick={ this.handleClick }>
                    { this.props.content }
                </div>
            </Fragment>
        )
    }

    handleClick = () => {
        this.props.delItem(this.props.index)
    }
}

export default ToDoItem;