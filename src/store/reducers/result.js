import * as actionTypes from '../actions/actions';

const initialState = {
  results: []
}

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.STORE_RESULT:
      return {
        ...state,
        results: [...state.results, { id: new Date(), value: action.result }]
      }
    case actionTypes.DELETE_RESULT:
      const updatedArray = state.results.filter((result) => result.id !== action.deleteId);
      return {
        ...state,
        results: updatedArray
      }
  } 
  return state;
}

export default reducer;