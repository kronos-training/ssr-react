import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunkMiddleware from 'redux-thunk';
import data from '../data/data.json';

// initial state
const startState = {
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

// Reducers
export const reducer = (state = initialState, action) => {
  switch (action.type) {
    case 'INITIALCARDS':
      return {
        cards: action.cards,
      }
    case 'ADD':
      return {
        ...state,
        cards: [...state.cards, action.item]
      }
    default: return state
  }
}

export const store = (initialState = startState) => {
  return createStore(reducer, initialState, composeWithDevTools(applyMiddleware(thunkMiddleware)));
}