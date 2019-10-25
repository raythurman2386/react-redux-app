import React from 'react'
import { useAxios } from './hooks/useAxios'
import { ActionsProvider } from './contexts/ActionsContext'
import styled from 'styled-components'

// Components
import TvSeriesList from './components/TvSeriesList'

function App() {
  const actions = useAxios()

  return (
    <ActionsProvider value={{ actions }}>
      <AppWrapper>
        <AppHeader>Most Popular TV</AppHeader>
        <TvSeriesList />
      </AppWrapper>
    </ActionsProvider>
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
