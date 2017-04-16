import React from 'react';
import ReactDOM from 'react-dom';
import WebFont from 'webfontloader';

import App from 'App';

require('normalize.css/normalize.css');
require('font-awesome/css/font-awesome.css');
require('./app.sass');

if (module.hot) {
  module.hot.accept();
}

WebFont.load({
  custom: {
    families: ['Cardo'],
  },
  fontactive: () => {
    ReactDOM.render(
      <App />,
      document.getElementById('root'),
    );
  },
});

