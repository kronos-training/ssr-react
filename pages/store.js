import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunkMiddleware from 'redux-thunk';
import data from '../data/data.json';

// initial state
const initialState = {
  cards: []
};

// Actions
export const initialCards = () => {
  return {
    type: 'INITIAL_CARDS',
    cards: data
  };
}

export const addItem = (item) => {
  return {
    type: 'ADD_ITEM',
    item
  };
}


export const store = (initialState) => {
  return createStore(reducer, initialState, composeWithDevTools(applyMiddleware(thunkMiddleware)));
}