import React, { Component } from 'react';
import VehicleDetail from './VehicleDetail'
import { connect } from 'react-redux'
import { getVehicleDetail } from '../api'

class VehicleListItem extends Component {

  constructor(props) {
    super(props)

    this.state = {
      details: {}
    }
  }

  findNext(slideNumber) {
    return `#item-${slideNumber + 1}`
  }

  findPrev(slideNumber) {
    if (slideNumber === 1) return '#item-5'
    return `#item-${slideNumber -1}`
  }

  async componentDidMount() {
    const id = this.props.vehicle.id
    const detail = await getVehicleDetail(id)
    this.setState({ details: detail })
  }

  render() {
    const { id, modelYear, url, media: [media] } = this.props.vehicle
    const { name } = media
    const slideNumber = this.props.slideNumber
    if(this.state.details) {
      const { description, price } = this.state.details
      return (
          <div className={`carousel-item item-${slideNumber}`}>
            <a className="arrow arrow-prev" href={this.findPrev(slideNumber)}></a>
            <a className="arrow arrow-next" href={this.findNext(slideNumber)}></a>
            <VehicleDetail
              name={name.toUpperCase()}
              id={id.toUpperCase()}
              price={price}
              description={description}
            />
          </div>
      )
    }
    return (<h1>Loading...</h1>);
  }
};

export default VehicleListItem
