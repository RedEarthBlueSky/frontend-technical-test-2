import React from 'react'
import { getVehicleDetail } from '../api';

const VehicleDetail = ({ name, id }) => {
  return (
    <div>
      <h1>{ name } {id}</h1>
      <div> From </div>
    </div>
  )

}

export default VehicleDetail
