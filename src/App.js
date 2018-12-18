import React, { Component, Fragment } from 'react'
import { CSSTransition, TransitionGroup } from 'react-transition-group'
import './style.css'


class App extends Component {
    constructor (props) {
        super(props)
        this.state = {
            list: []
        }
    }

    render () {
        return (
            <Fragment>
                <TransitionGroup>
                    {
                        this.state.list.map((item, index) => {
                            return (
                                <CSSTransition
                                    in={true}
                                    timeout={300}
                                    classNames="fade"
                                    unmountOnExit
                                    key={index}
                                    appear={true}
                                    onEntered={(el) => {el.style.color = 'red'}}
                                    // onExited={() => {
                                    //     this.setState({
                                    //         showValidationButton: true,
                                    //     });
                                    // }}
                                >
                                    <div >{item}</div>
                                </CSSTransition>
                                
                            )
                        })
                    }
                </TransitionGroup>
                
                <button onClick={ this.handleToggle }>toggle</button>
            </Fragment>
        )
    }

    handleToggle = () => {
        this.setState((prevState) => {
            return {
                list: [...prevState.list, 'item']
            }
        })
    }
}

export default App