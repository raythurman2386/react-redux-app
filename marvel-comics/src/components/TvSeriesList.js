import React from 'react'
import { useSelector } from 'react-redux'
import styled from 'styled-components'
import Show from './Show'

const TvSeriesList = () => {
  const series = useSelector(state => state.series)

  return (
    <TvGrid>
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
