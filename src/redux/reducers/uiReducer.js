import { actionTypes } from '../actions/type';

const initialState = {
  loading: false,
  loadingTrailers: false,
  showData: false,
  error: '',
};

export const uiReducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.setIsLoading:
      return { ...state, loading: action.payload };
    case actionTypes.setLoadingTrailers:
      return { ...state, loadingTrailers: action.payload };
    case actionTypes.setError:
      return { ...state, error: action.payload };
    case actionTypes.setShowData:
      return { ...state, error: action.payload };
    default: return { ...state };
  }
};
