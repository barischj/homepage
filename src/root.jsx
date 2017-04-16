import React from 'react';
import ReactDOM from 'react-dom';

import App from 'App';

require('normalize.css/normalize.css');
require('font-awesome/css/font-awesome.css');
require('./app.sass');

if (module.hot) {
  module.hot.accept();
}

ReactDOM.render(
  <App />,
  document.getElementById('root'),
);
