import React from 'react'
import { useSelector } from 'react-redux'
import styled from 'styled-components'

const TvSeriesList = () => {
  const series = useSelector(state => state.series)

  return (
    <TvGrid>
      {series &&
        series.map((series, index) => (
          <div key={index}>
            <p>{series.original_name}</p>
          </div>
        ))}
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
