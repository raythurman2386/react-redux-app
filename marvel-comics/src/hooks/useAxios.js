import { useState, useEffect } from 'react'
import { useDispatch } from 'react-redux'
import {
  GET_SERIES_START,
  GET_SERIES_SUCCESS,
  GET_SERIES_FAILED
} from '../actions'

const useAxios = () => dispatch => {
  const [shows, getShows] = useState([])

  return [shows, getShows]
}
