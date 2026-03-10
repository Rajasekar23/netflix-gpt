import React from 'react'

const MovieCard = ({movie}) => {
    const posterPath = 'https://image.tmdb.org/t/p/w500/'+movie?.poster_path;
  return (
    <img src={posterPath} alt='poster img' className='w-40 p-4' />
  )
}

export default MovieCard