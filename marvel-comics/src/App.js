import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { getPopularTv } from './actions'
import styled from 'styled-components'

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
    <AppWrapper>
      <AppHeader>Test</AppHeader>
      {error && <h1>{error}</h1>}
      {isLoading ? <div className='spinner' /> : <TvSeriesList />}
    </AppWrapper>
  )
}

export default App

const AppWrapper = styled.div`
  text-align: center;
`
const AppHeader = styled.header`
  background-color: #111;
  color: white;
  height: 6rem;
  display: flex;
  justify-content: space-around;
  align-items: center;
`
