import React from 'react';
import ReactDOM from 'react-dom';
import AppRouter from './Routers/AppRouter';
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/main.css';
import { Provider } from 'react-redux';
import { store } from './store/store'

ReactDOM.render(
  <Provider store={store}>
    <AppRouter />
  </Provider>,
  document.getElementById('root')
);
