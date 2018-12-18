
const defaultState = {
    list: [
        'hello world',
        'hello yiye',
        'hello xingzi',
        'hello ziqing'
    ],
    inputValue: ''
}
    
export default (state = defaultState, action) => {
    const newState = state
    console.log(newState, 'newState')
    if (action.type === 'input_change') {
        newState.inputValue = action.inputValue
        return newState
    }
    return state
}