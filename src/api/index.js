import Axios from 'axios'
import store from '../store'
import { fetchVehicles, fetchVehicleDetail } from '../actions'

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
  if(!id) console.log('No id provided to API')
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
