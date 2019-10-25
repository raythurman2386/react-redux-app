import axios from 'axios'
import { useCallback } from 'react'
import { useDispatch } from 'react-redux'
import { publicKey } from '../private/private'
import {
  GET_SERIES_START,
  GET_SERIES_SUCCESS,
  GET_SERIES_FAILED
} from '../actions'

export const useAxios = () => {
  const dispatch = useDispatch()

  const fetchTvShows = useCallback(() => {
    dispatch({ type: GET_SERIES_START })
    axios
      .get(`https://api.themoviedb.org/3/tv/popular?api_key=${publicKey}`)
      .then(res =>
        dispatch({ type: GET_SERIES_SUCCESS, payload: res.data.results })
      )
      .catch(err =>
        dispatch({ type: GET_SERIES_FAILED, payload: err.response })
      )
  }, [dispatch])

  return { fetchTvShows }
}
