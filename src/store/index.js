import { createStore, combineReducers } from 'redux';
import reducer from '../reducers/index'
import { createDevTools } from 'redux-devtools';
import DevTools from '../DevTools';
import { getCountries } from '../actions/actions-countries';

const store = createStore(
  reducer,
  DevTools.instrument()
);
store.dispatch(getCountries())

export default store;
