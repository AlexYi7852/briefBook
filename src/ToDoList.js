
import store from './store'
import { connect } from 'react-redux'
import { getInitAction, getChangeInputAction, getAddToDoItemAction, getDelToDoItemAction } from './store/actionCreators'
import React, { Component, Fragment } from 'react';

class ToDoList extends Component {
    constructor (props) {
        super(props)
    }

    componentDidMount () {
        const action = getInitAction()
        store.dispatch(action)
    }

    render () {
        return (
            <Fragment>
                <div>
                    <input
                        value={ this.props.inputValue }
                        onChange={ this.props.handleInputChange }
                    />
                    <button onClick={ this.props.handleButtonClick }>提交</button>
                </div>
                <ul>
                    {
                        this.props.list.map((item, index) => {
                            return <li onClick={ () => this.props.handleDeleteItem(index) } key={index}>{ item }</li>
                        })
                    }
                </ul>
            </Fragment>
        )
    }
}

// store里面的数据映射给组件
const mapStateToProps = ({list, inputValue}) => ({list,inputValue})
// 把store.dispatch 挂载到props上
const mapDispatchToProps = (dispatch) => ({
    handleInputChange (e) {
        const action = getChangeInputAction(e.target.value)
        dispatch(action)
    },
    handleButtonClick () {
        const action = getAddToDoItemAction()
        dispatch(action)
    },
    handleDeleteItem (index) {
        const action = getDelToDoItemAction(index)
        dispatch(action)
    }
})

// 通过 connect 链接组件
export default connect(mapStateToProps, mapDispatchToProps)(ToDoList)