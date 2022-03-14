import { actionTypes } from '../actions/type';

const initialState = {
  loading: false,
  error: '',
};

export const uiReducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.setIsLoading:
      return { ...state, loading: action.payload };
    case actionTypes.setError:
      return { ...state, error: action.payload };
    default: return { ...state };
  }
};
