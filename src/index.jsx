import React from 'react';
import ReactDOM from 'react-dom';
import Root from './containers/Root/Root';

import init from './utils/init';

require('./style.css');
require('bootstrap/dist/css/bootstrap.min.css');
require('animate.css/animate.min.css');


const store = init();

ReactDOM.render(
  <Root store={store} />,
  document.getElementById('root')
);
