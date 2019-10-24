import axios from 'axios'
import { publicKey } from '../private/private'

export const GET_SERIES_START = 'GET_SERIES_START'
export const GET_SERIES_SUCCESS = 'GET_SERIES_SUCCESS'
export const GET_SERIES_FAILED = 'GET_SERIES_FAILED'

export const getPopularTv = () => dispatch => {
  dispatch({ type: GET_SERIES_START })
  axios
    .get(`https://api.themoviedb.org/3/tv/popular?api_key=${publicKey}`)
    .then(res =>
      dispatch({ type: GET_SERIES_SUCCESS, payload: res.data.results })
    )
    .catch(err => dispatch({ type: GET_SERIES_FAILED, payload: err }))
}
