import { createStore, applyMiddleware } from 'redux'
import reduxPromise from 'redux-promise'
import reducers from './reducers'

const initialState = {}

const store = createStore(
  reducers,
  initialState,
  applyMiddleware(reduxPromise)
)

export default store
