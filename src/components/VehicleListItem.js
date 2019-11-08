import React, { Component } from 'react';

import { getVehicleDetail } from '../api';

class VehicleListItem extends Component {

  constructor(props) {
    super(props);
  }

  componentDidMount() {

  }

  findNext(slideNumber) {
    return `#item-${slideNumber + 1}`
  }

  findPrev(slideNumber) {
    if (slideNumber === 1) return '#item-5'
    return `#item-${slideNumber -1}`
  }

  render() {
    const { id, modelYear, url, media: [media] } = this.props.vehicle
    const slideNumber = this.props.slideNumber
    // console.log(media.url)
    getVehicleDetail(id)
    return (
        <div className={`carousel-item item-${slideNumber}`}>
          <a className="arrow arrow-prev" href={this.findPrev(slideNumber)}></a>
          <a className="arrow arrow-next" href={this.findNext(slideNumber)}></a>

          <div>

          </div>
        </div>
    )
  }
};

export default VehicleListItem
