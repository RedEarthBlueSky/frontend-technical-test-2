import React from 'react'

const VehicleDetail = ({ name, id, price, description }) => {
  return (
    <div className="detailBlock">
      <h1>{name} {id}</h1>
      <h2>From {price}</h2>
      <h2>{description}</h2>
    </div>
  )
}

export default VehicleDetail
