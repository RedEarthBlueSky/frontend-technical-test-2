import { combineReducers } from 'redux'
import { vehiclesReducer } from './vehicles'
import { vehicleDetailReducer } from './details'

export default combineReducers({
  vehiclesReducer,
  vehicleDetailReducer
})
