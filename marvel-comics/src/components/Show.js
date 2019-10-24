import React from 'react'
import styled from 'styled-components'

const POSTER_PATH = 'http://image.tmdb.org/t/p/w154'

const Show = ({ show }) => {
  return (
    <div>
      <Poster
        src={`${POSTER_PATH}${show.poster_path}`}
        alt={show.original_name}
      />
    </div>
  )
}

export default Show

export const Poster = styled.img`
  box-shadow: 0 0 35px black;
  :hover {
    box-shadow: 0 0 35px white;
    transform: scale(1.2);
  }
`
