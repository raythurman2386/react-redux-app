import {
  GET_COMICS_START,
  GET_COMICS_SUCCESS,
  GET_COMICS_FAILED
} from '../actions'

const initialState = {
  comics: [],
  isLoading: false,
  error: ''
}

export const reducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_COMICS_START:
      return {
        ...state,
        isLoading: !state.isLoading
      }
    case GET_COMICS_SUCCESS:
      return {
        ...state,
        comics: action.payload,
        isLoading: !state.isLoading
      }
    case GET_COMICS_FAILED:
      return {
        ...state,
        isLoading: !state.isLoading,
        error: action.payload
      }
    default:
      return state
  }
}
