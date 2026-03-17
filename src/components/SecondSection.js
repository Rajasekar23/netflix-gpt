import React from 'react'
import MovieSlider from './MovieSlider'
import { useSelector } from 'react-redux'

const SecondSection = () => {

    const movies = useSelector(store=>store?.movies);
    const nowPlayingMovies = movies?.now_playing_movies;
    const popularMovies = movies?.popular_movies;

  return (
    <div className='bg-gradient-to-t from-black relative z-20 -mt-52'> 
      <MovieSlider title="Now Playing Movies" movies={nowPlayingMovies} />
      <div className='bg-black'>
        <MovieSlider title="Popular Movies" movies={popularMovies} />
      </div>
    </div>
  )
}

export default SecondSection