import { combineReducers } from 'redux'
import { vehiclesReducer, vehicleDetailReducer } from './vehicles'

export default combineReducers({
  vehiclesReducer,
  vehicleDetailReducer
})
