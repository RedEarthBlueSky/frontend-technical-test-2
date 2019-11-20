
import { FETCH_VEHICLE_DETAIL } from '../actions/types'

export function vehicleDetailReducer(state = {}, action) {
  switch(action.type) {
    case FETCH_VEHICLE_DETAIL:
      return { detail: action.payload }
    default:
      return state
  }
}
