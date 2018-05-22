import 'normalize.css/normalize.css';
import React from 'react';
import ReactDOM from 'react-dom';
import WebFont from 'webfontloader';
import App from 'Modules/App';
import 'Src/app.sass';

// Run hot module replacement if available.
if (module.hot) {
  module.hot.accept();
}

// Render the app on the DOM.
const renderApp = () => ReactDOM.render(<App />, document.getElementById('root'));

// Render when fonts load.
WebFont.load({
  custom: {
    families: ['Cardo'],
  },
  fontactive: renderApp,
});

