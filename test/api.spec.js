/**
 * Created by brett.hadley on 10/10/2016.
 */
 const expect = require('chai').expect;
 import { getVehicles, getVehicleDetail } from '../src/api'
 const server = require('../server');

 import store from '../src/store'


 describe('Test Vehicle Detail.', function() {
    let vehicles, api

    before(done => {
      api = server.listen(9988)
      getVehicles()
        .then(() => {
          vehicles = store.getState().vehiclesReducer[0]
          done()
        })
    })

    after(() => {
      api.close()
    })

    function vehicleDetailProperty(property) {
      it(`Vehicle Detail contains a property: ${property}`, done => {
        Promise.all(vehicles.map(vehicle =>
          getVehicleDetail(vehicle.id)
        ))
        .then(data => {
          data.forEach(vehicle => {
            expect(vehicle).to.have.property(`${property}`).that.is.a('string')
          })
        })
        done()
      })
    }

    vehicleDetailProperty('price')
    vehicleDetailProperty('id')
    vehicleDetailProperty('description')
})
