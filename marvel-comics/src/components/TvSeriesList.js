import React, { useEffect, useContext } from 'react'
import { useSelector } from 'react-redux'
import styled from 'styled-components'
import Show from './Show'
import { ActionsContext } from '../contexts/ActionsContext'

const TvSeriesList = () => {
  const {
    actions: { fetchTvShows }
  } = useContext(ActionsContext)

  const { isLoading, error } = useSelector(state => state)
  const series = useSelector(state => state.series)

  useEffect(() => {
    fetchTvShows()
  }, [fetchTvShows])

  return (
    <TvGrid>
      {isLoading && <h3>Loading . . .</h3>}
      {error && <h3>{error}</h3>}
      {series &&
        series.map((series, index) => <Show key={index} show={series} />)}
    </TvGrid>
  )
}

export default TvSeriesList

const TvGrid = styled.div`
  max-width: 1280px;
  margin: 0 auto;
  display: grid;
  padding: 1rem;
  grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
  grid-row-gap: 2rem;
`
