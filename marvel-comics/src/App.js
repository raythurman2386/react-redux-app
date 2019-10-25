import React, { useEffect } from 'react'
import { useSelector } from 'react-redux'
import { useAxios } from './hooks/useAxios'
import styled from 'styled-components'

// Components
import TvSeriesList from './components/TvSeriesList'

function App() {
  const { fetchTvShows } = useAxios()
  const { isLoading, error } = useSelector(state => state)

  useEffect(() => {
    fetchTvShows()
  }, [])

  return (
    <AppWrapper>
      <AppHeader>Most Popular TV</AppHeader>
      {error && <h1>{error}</h1>}
      {isLoading ? <h1>Loading . . .</h1> : <TvSeriesList />}
    </AppWrapper>
  )
}

export default App

const AppWrapper = styled.div`
  text-align: center;
`
const AppHeader = styled.header`
  font-size: 3rem;
  background-color: #111;
  color: white;
  height: 6rem;
  display: flex;
  justify-content: space-around;
  align-items: center;
`
