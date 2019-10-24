import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { getPopularTv } from './actions'

// Components
import TvSeriesList from './components/TvSeriesList'

function App() {
  const isLoading = useSelector(state => state.isLoading)
  const error = useSelector(state => state.error)
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(getPopularTv())
  }, [])

  return (
    <div className='App'>
      <h1>Test</h1>
      {error && <h1>{error}</h1>}
      {isLoading ? <div className='spinner' /> : <TvSeriesList />}
    </div>
  )
}

export default App
