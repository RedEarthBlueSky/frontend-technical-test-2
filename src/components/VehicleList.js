import React, { Component } from 'react';
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import VehicleListItem from './VehicleListItem'
import SpanList from './SpanList'
import { getVehicles, getVehicleDetail } from '../api'

class VehicleList extends Component {
	renderVehicles() {
		return this.props.vehicles.map((vehicle, i) => {
			return (
				<VehicleListItem
					key={i}
					vehicle={vehicle}
					slideNumber={i + 1}
					id={vehicle.id}
				/>
			)
		})
	}

	renderSpans() {
		return this.props.vehicles.map((vehicle, i) => {
			return (
				<SpanList
					key={i}
					slideNumber={i + 1}
				/>
			)
		})
	}

	componentWillMount() {
		getVehicles()
	}

	render() {
		const vehicles = this.props.vehicles
		if(vehicles) {
		    return (
					<div>
						<div className="vehicleList carousel-wrapper">
							  {this.renderSpans()}
								{this.renderVehicles()}
						</div>
					</div>
		    )
	    }
		return (<h1>Loading...</h1>);
	}
}

function mapStateToProps(state) {
	return {
		vehicles: state.vehiclesReducer[0],
	}
}

export default connect(mapStateToProps)(VehicleList)

VehicleList.propTypes = {
  vehicles: PropTypes.arrayOf(PropTypes.object),
  getVehicles: PropTypes.func,
	SpanList: PropTypes.elementType,
	VehicleListItem: PropTypes.elementType
}
