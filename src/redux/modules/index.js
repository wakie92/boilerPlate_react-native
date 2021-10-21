import { combineReducers } from 'redux';
import { reducer as toastr } from 'react-redux-toastr';

// [Note]: auth should always loaded first to init Amplify config
import todos from './todos';

const reducers = {
  todos,
  toastr,
  next: (state = { tick: 'init' }, action) => {
    switch (action.type) {
      case 'TICK':
        return { ...state, tick: action.payload };
      default:
        return state;
    }
  },
};

export default combineReducers(reducers);
