//  actions index
import { FETCH_VEHICLES, FETCH_VEHICLE_DETAIL } from './types'

export function fetchVehicles(data) {
  return {
    type: FETCH_VEHICLES,
    payload: data
  }
}

export function fetchVehicleDetail(detail) {
  // console.log('fetchVehicleDetail action data, ', data)
  return {
    type: FETCH_VEHICLE_DETAIL,
    payload: detail
  }
}
