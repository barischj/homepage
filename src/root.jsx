import 'font-awesome/css/font-awesome.css';
import 'normalize.css/normalize.css';
import React from 'react';
import ReactDOM from 'react-dom';
import WebFont from 'webfontloader';
import App from 'Modules/App';
import 'Src/app.sass';

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

