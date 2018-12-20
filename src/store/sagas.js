
import axios from 'axios'
import { GET_INIT_LIST } from './actionTypes'
import { takeEvery, put } from 'redux-saga/effects'
import { initListAction } from './actionCreators'

function* getInitList () {
    try {
        // yield 会在请求完成之后拿到数据，然后把数据保存到res里边
        const res = yield axios.get('/api/ToDoList')
        const action = initListAction(res.data)
        // yield等待action执行完成之后才执行这段代码
        yield put(action)
    } catch (e) {
        console.log('网络请求失败', e)
    }
    // generator 函数尽量别用promise写法
    // axios.get('/api/ToDoList')
    //     .then(res => {
    //         const action = initListAction(res.data)
    //         store.dispatch(action)
    //     })
}

// generator 函数
function* mySaga () {
    // takeEvery 捕捉到 GET_INIT_LIST就执行后面到函数
    yield takeEvery(GET_INIT_LIST, getInitList)
}

export default mySaga;