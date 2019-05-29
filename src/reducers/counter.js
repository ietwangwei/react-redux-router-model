import { handleActions } from 'redux-actions'

const initState = {
  count: 0
}

const reducer = handleActions({
  'INCREMENT': (state, action) => {
    return {
      count: state.count + 1
    }
  },
  'DECREMENT': (state, action) => {
    return {
      count: state.count - 1
    }
  },
  'RESET': (state) => {
    return {
      count: state.count
    }
  }
}, initState)

export default reducer
