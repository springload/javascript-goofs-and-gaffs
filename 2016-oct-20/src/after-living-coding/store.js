import { combineReducers, createStore } from 'redux';

function TabThree(previousState = {}, action){
  const state = Object.assign({}, previousState);
  switch(action.type){
    case 'SET_CARD':
        Object.assign(state, action);
    default:
      // pass
  }
  return state;
}

const reducers = combineReducers({ TabThree });

export default createStore(reducers);
