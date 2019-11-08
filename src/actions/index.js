//  actions index
import { FETCH_VEHICLES } from './types'


export function fetchVehicles(data) {
  console.log('action has been called with data, ', data)
  return {
    type: FETCH_VEHICLES,
    payload: data
  }
}
