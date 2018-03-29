import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import AppRouter from './routers/AppRouter';
import configStore from './store/configStore';
import { addExpense } from './actions/expenses';
import { setTextFilter } from './actions/filters';
import getVisibleExpenses from './selectors/expenses';

import 'normalize.css/normalize.css';
import 'react-dates/lib/css/_datepicker.css';
import './styles/styles.scss';

const store = configStore();

// Set up store as a Provider - gives all comps access to the store through connect
const jsx = (
 <Provider store={store}>
  <AppRouter />
 </Provider> 
);

ReactDOM.render(jsx, document.getElementById('app'));
