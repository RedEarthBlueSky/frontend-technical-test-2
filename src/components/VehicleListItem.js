import React, { Component } from 'react';
import store from '../store'
import VehicleDetail from './VehicleDetail'

class VehicleListItem extends Component {

  constructor(props) {
    super(props);

    this.state = {
      detail: null
    }
  }

  findNext(slideNumber) {
    return `#item-${slideNumber + 1}`
  }

  findPrev(slideNumber) {
    if (slideNumber === 1) return '#item-5'
    return `#item-${slideNumber -1}`
  }

  componentDidMount() {
  }

  render() {
    const { id, modelYear, url, media: [media] } = this.props.vehicle
    const { name } = media
    const slideNumber = this.props.slideNumber
    getVehicleDetail(this.props.vehicle.id)
    return (
        <div className={`carousel-item item-${slideNumber}`}>
          <a className="arrow arrow-prev" href={this.findPrev(slideNumber)}></a>
          <a className="arrow arrow-next" href={this.findNext(slideNumber)}></a>
          <div>
            <VehicleDetail
              name={name.toUpperCase()}
              id={id.toUpperCase()}
            />
          </div>
        </div>
    )
  }
};

export default VehicleListItem
