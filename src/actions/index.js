//  actions index
import { FETCH_VEHICLES, FETCH_VEHICLE_DETAIL } from './types'
import { getVehicleDetail } from '../api'

export function fetchVehicles(data) {
  return {
    type: FETCH_VEHICLES,
    payload: data
  }
}

export function fetchVehicleDetail(detail) {
  return {
    type: FETCH_VEHICLE_DETAIL,
    payload: detail
  }
}
