import React from 'react';
import { render } from 'react-dom';
import Root from './Root'

import mainWrapper from './components/mainWrapper'
import VehicleList from './components/VehicleList';

render(
  <Root>
    <mainWrapper>
      <VehicleList />
    </mainWrapper>
  </Root>
,
  document.getElementById('app')
);
