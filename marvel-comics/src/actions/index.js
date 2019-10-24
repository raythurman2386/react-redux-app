import axios from 'axios'
import { publicKey } from '../private/private'

export const GET_COMICS_START = 'GET_COMICS_START'
export const GET_COMICS_SUCCESS = 'GET_COMICS_SUCCESS'
export const GET_COMICS_FAILED = 'GET_COMICS_FAILED'

export const getMarvelComics = () => dispatch => {
  dispatch({ type: GET_COMICS_START })
  axios
    .get(`https://gateway.marvel.com:443/v1/public/comics?apikey=${publicKey}`)
    .then(res =>
      dispatch({ type: GET_COMICS_SUCCESS, payload: res.data.data.results })
    )
    .catch(err => dispatch({ type: GET_COMICS_FAILED, payload: err }))
}
