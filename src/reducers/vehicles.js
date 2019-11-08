
import { FETCH_VEHICLES } from '../actions/types'


export default function(state = [], action) {
  switch(action.type) {
    case FETCH_VEHICLES:
      console.log('action.payload.vehicles from reducers... ', action.payload.vehicles)
      const vehicles = action.payload.vehicles
      return [...state, vehicles ]
    default:
      return state
  }
}
