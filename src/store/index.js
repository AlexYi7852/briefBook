
import mySaga from './sagas'
import reducer from './reducer'
import createSageMiddleware from 'redux-saga'
import { createStore, applyMiddleware, compose } from 'redux'

const sagaMiddleware = createSageMiddleware()

const composeEnhancers = 
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ ?
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({}) : compose;

const enhancer = composeEnhancers(applyMiddleware(sagaMiddleware))

const store = createStore(reducer,enhancer)

export default store;

// 执行saga文件
sagaMiddleware.run(mySaga)