import React from 'react'
import { useSelector } from 'react-redux'

const TvSeriesList = () => {
  const series = useSelector(state => state.series)

  return (
    <div>
      {series &&
        series.map((series, index) => (
          <div key={index}>
            <p>{series.original_name}</p>
          </div>
        ))}
    </div>
  )
}

export default TvSeriesList
