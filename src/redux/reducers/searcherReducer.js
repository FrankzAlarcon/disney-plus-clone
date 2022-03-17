import { actionTypes } from '../actions/type';

const initialState = {
  value: '',
  filter: '',
};

export const searcherReducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.setValueSearcher:
      return { ...state, value: action.payload };
    case actionTypes.setFilter:
      return { ...state, filter: action.payload };
    default:
      return { ...state };
  }
};
