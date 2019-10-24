import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { getMarvelComics } from './actions'

// Components
import ComicList from './components/ComicList'

function App() {
  const isLoading = useSelector(state => state.isLoading)
  const error = useSelector(state => state.error)
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(getMarvelComics())
  }, [])

  return (
    <div className='App'>
      <h1>Test</h1>
      {isLoading ? <div className='spinner' /> : <ComicList />}
    </div>
  )
}

export default App
