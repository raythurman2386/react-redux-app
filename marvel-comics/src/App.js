import React, { useEffect } from 'react'
import { connect, useSelector, useDispatch } from 'react-redux'
import { getMarvelComics } from './actions'

function App(props) {
  const comics = useSelector(state => state.comics)
  const isLoading = useSelector(state => state.isLoading)
  const error = useSelector(state => state.error)
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(getMarvelComics())
  }, [])

  return (
    <div className='App'>
      <h1>Test</h1>
    </div>
  )
}

export default App
