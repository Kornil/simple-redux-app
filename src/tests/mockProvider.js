import React from 'react';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import reducer from './../reducers';

const store = createStore(reducer);

const MockProvider = ({ children }) => <Provider store={store}>{children}</Provider>;

export default MockProvider;
