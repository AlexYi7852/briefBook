
import reducer from './reducer'
import thunk from 'redux-thunk'
// import { createLogger } from 'redux-logger'
import { createStore, applyMiddleware, compose } from 'redux'
// import { composeWithDevTools } from 'redux-devtools-extension'

const store = createStore(
    reducer,
    compose(applyMiddleware(thunk), window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())
    
)

export default store;