/**
* This is an example request. Create your own using best practises for
* handling asynchronous data fetching
**/

import Axios from 'axios'
import store from '../store'
import { fetchVehicles, fetchVehicleDetail } from '../actions'

export const getData = (cb) => {
    const vehicles = new XMLHttpRequest();
    vehicles.open('GET', 'http://localhost:9988/api/vehicle');

    vehicles.onreadystatechange = function() {
        if(vehicles.readyState === 4) {
 		    if(vehicles.status === 200) {
 			    cb(vehicles.responseText);
		    }
		}
	};
	vehicles.send();
};

export const getVehicles = () => {
  const url = 'http://localhost:9988/api/vehicle'
  return Axios.get(url)
    .then(res => {
      if(res.status !== 200) {
        console.log('API issue.  Status:  ', res.status)
        return;
      }
      store.dispatch(fetchVehicles(res.data))
    })
    .catch(err => {
      console.log('Fetch error:  ', err)
    })
}

export const getVehicleDetail = (id) => {
  const url = `http://localhost:9988/api/vehicle/${id}`
  return Axios.get(url)
    .then(res => {
      if(res.status !== 200) {
        console.log('API issue.  Status:  ', res.status)
        return;
      }
       return res.data
    })
    .catch(err => {
      console.log('Fetch error:  ', err)
    })
}
