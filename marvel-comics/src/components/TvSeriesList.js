import React from 'react'
import { useSelector } from 'react-redux'

const ComicList = () => {
  const comics = useSelector(state => state.comics)

  return (
    <div>
      {comics &&
        comics.map((comic, index) => (
          <div key={index}>
            <p>{comic.title}</p>
            <img
              src={`${comic.thumbnail.path}/portrait_xlarge.jpg`}
              alt={comic.title}
            />
          </div>
        ))}
    </div>
  )
}

export default ComicList
