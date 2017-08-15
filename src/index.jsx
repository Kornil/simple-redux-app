/* eslint-disable import/no-extraneous-dependencies */
/* issue with redux-logger and react-hot-loader
   even tho those 2 deps are only used in development
   eslint has no way to tell that and outputs an error */

// react deps
import React from 'react';
import { unmountComponentAtNode, render } from 'react-dom';
// redux deps
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import logger from 'redux-logger';
import thunk from 'redux-thunk';
// hot reload for development
import { AppContainer } from 'react-hot-loader';
import reducer from './reducers';
import App from './App';
import './style.scss';

const middleware = [thunk];
if (process.env.NODE_ENV !== 'production') middleware.push(logger);

const store = createStore(
  reducer,
  applyMiddleware(...middleware),
);

const root = document.getElementById('root');

render(
  <AppContainer>
    <Provider store={store}>
      <App />
    </Provider>
  </AppContainer>,
  root,
);

if (module.hot) module.hot.accept(App, () => { unmountComponentAtNode(root); render(App); });
