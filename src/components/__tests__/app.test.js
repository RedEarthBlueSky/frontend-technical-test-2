import React from 'react'
import { shallow } from 'enzyme'

import App from '../../app'
import Root from '../../Root'
import mainWrapper from '../mainWrapper'
import VehicleList from '../VehicleList'

let wrapped

beforeEach(() => {
  wrapped = shallow(<App />)
})

it('shows a Root component', () => {
  expect(wrapped.find(Root).length).toEqual(1)
})

it('shows a mainWrapper', () => {
  expect(wrapped.find(mainWrapper).length).toEqual(1)
})

it('shows a VehicleList', () => {
  expect(wrapped.find(VehicleList).length).toEqual(1)
})
