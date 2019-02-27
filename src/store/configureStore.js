import { createStore } from 'redux';
import state from '../reducers/state';


export default () => {
  const store = createStore(state, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());
  return store;
};
