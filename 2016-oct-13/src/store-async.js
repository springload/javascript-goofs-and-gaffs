import { combineReducers, createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';

function Search(previousState = {}, action){
  const state = Object.assign({}, previousState);
  switch(action.type){
    case 'SET_TEXT':
      state.text = action.text;
  }
  return state;
}

function Footer(previousState = {}, action){
  return Object.assign({}, previousState);
}

const reducers = combineReducers({ Search, Footer });

export default createStore(reducers, applyMiddleware(thunk));
