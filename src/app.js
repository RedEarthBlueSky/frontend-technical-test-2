import React from 'react';
import { render } from 'react-dom';
import Root from './Root'

import VehicleList from './components/VehicleList';

render(
  <Root>
    <VehicleList />
  </Root>
,
  document.getElementById('app')
);
