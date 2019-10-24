import {
  GET_SERIES_START,
  GET_SERIES_SUCCESS,
  GET_SERIES_FAILED
} from '../actions'

const initialState = {
  series: [],
  isLoading: false,
  error: ''
}

export const reducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_SERIES_START:
      return {
        ...state,
        isLoading: !state.isLoading
      }
    case GET_SERIES_SUCCESS:
      return {
        ...state,
        series: action.payload,
        isLoading: !state.isLoading
      }
    case GET_SERIES_FAILED:
      return {
        ...state,
        isLoading: !state.isLoading,
        error: action.payload
      }
    default:
      return state
  }
}
