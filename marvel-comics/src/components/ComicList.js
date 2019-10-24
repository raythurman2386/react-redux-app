import React from 'react'
import { useSelector } from 'react-redux'

const ComicList = () => {
  const comics = useSelector(state => state.comics)

  return (
    <div>
      {comics &&
        comics.map((comic, index) => <h1 key={index}>{comic.title}</h1>)}
    </div>
  )
}

export default ComicList
