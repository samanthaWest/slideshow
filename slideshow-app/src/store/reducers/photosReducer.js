import {
    SUCCESS,
    FAILED,
    LOADING,
  } from '../actions/types';
  
  const initialState = {
    loading: false,
    photos: [],
    error: null
  };
  
  export default function photosReducer(state = initialState, action) {
    switch (action.type) {
      case LOADING:
        return {
          ...state,
          loading: true
        };
      case SUCCESS:
        return {
          ...state,
          loading: false,
          error: null,
          photos: action.payload
        };
      case FAILED:
        return {
          ...state,
          loading: false,
          error: action.payload.error
        };
      default:
        return state;
    }
  }