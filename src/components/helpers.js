export default renderVehicles() {
  return this.props.vehicles.map((vehicle, i) => {
    return (
        <VehicleListItem key={i} vehicle={vehicle} slideNumber={i + 1}/>
    )
  })
}

export default renderSpans() {
  return this.props.vehicles.map((vehicle, i) => {
    return (
      <SpanList key={i} slideNumber={i + 1}/>
    )
  })
}
