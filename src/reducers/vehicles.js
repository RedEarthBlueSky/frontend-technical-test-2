
import { FETCH_VEHICLES } from '../actions/types'

export function vehiclesReducer(state = [], action) {
    switch(action.type) {
      case FETCH_VEHICLES:
        const vehicles = action.payload.vehicles
        return [...state, vehicles ]
      default:
        return state
    }
}
