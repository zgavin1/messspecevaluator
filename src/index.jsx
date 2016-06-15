import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { createStore } from 'redux';

import app from './reducers';
import App from './components/app.jsx';

render(
   <Provider store={createStore(app)}>
      <App />
   </Provider>,
  document.getElementById('root')
);