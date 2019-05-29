import { createStore } from 'redux'

const initState = {
  count: 0
}

const reducer = (state = initState, action) => {
  switch(action.type) {
    case 'INCREMENT':
      return {
        count: state.count + 1
      }
    default:
      return state
  }
}

const store = createStore(reducer)

export default store
