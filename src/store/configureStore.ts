import { createStore } from 'redux';
import state from '../reducers/state';

export default () => {
  const store = createStore(state);
  return store;
};
