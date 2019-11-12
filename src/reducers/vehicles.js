
import { FETCH_VEHICLES, FETCH_VEHICLE_DETAIL } from '../actions/types'
import { getVehicleDetail } from '../api'


export function vehiclesReducer(state = [], action) {
  switch(action.type) {
    case FETCH_VEHICLES:
      const vehicles = action.payload.vehicles
      return [...state, vehicles ]
    default:
      return state
  }
}

export function vehicleDetailReducer(state = [], action) {
  switch(action.type) {
    case FETCH_VEHICLE_DETAIL:
      const detail = action.payload
      return [ ...state, detail ]
    default:
      return state
  }
}
