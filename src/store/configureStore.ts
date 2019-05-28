import { createStore } from 'redux';
import reducer from './reducer';

const configureStore = () => {
  const store = createStore(reducer);
  return store;
};

export default configureStore;
