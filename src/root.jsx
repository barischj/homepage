import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

require('normalize.css/normalize.css');
require('./app.sass');

if (module.hot) {
  module.hot.accept();
}

ReactDOM.render(
  <App />,
  document.getElementById('root'),
);
