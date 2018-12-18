import React, { Component, Fragment } from 'react'
import './style.css'
class App extends Component {
    constructor (props) {
        super(props)
        this.state = {
            show: true
        }
    }

    render () {
        return (
            <Fragment>
                <h1 className={this.state.show ? 'show' : 'hide'}>hello</h1>
                <button onClick={ this.handleToggle }>toggle</button>
            </Fragment>
        )
    }

    handleToggle = () => {
        this.setState(() => ({
            show: !this.state.show
        }))
    }
}

export default App