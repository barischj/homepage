import 'normalize.css/normalize.css';
import 'font-awesome/css/font-awesome.css';
import 'Src/app.sass';
import App from 'Modules/App';
import React from 'react';
import ReactDOM from 'react-dom';
import WebFont from 'webfontloader';

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

