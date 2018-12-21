
import reducer from './reducer'
import thunk from 'redux-thunk'
import { createLogger } from 'redux-logger'
import { createStore, applyMiddleware, compose } from 'redux'

// logger 打印信息
const logger = createLogger()
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({}) : compose

const enhancer = composeEnhancers(applyMiddleware(thunk, logger))

const store = createStore(
    reducer,
    enhancer
)

 export default store;