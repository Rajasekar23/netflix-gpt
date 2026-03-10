import React from 'react'
import MovieCard from './MovieCard'
import { useSelector } from 'react-redux'

const SecondSection = () => {

    const movies = useSelector(store=>store?.movies);
    const nowPlayingMovies = movies?.now_playing_movies;
    const popularMovies = movies?.popular_movies;

  return (
    <div className='bg-gradient-to-t from-black relative z-20 -mt-52'> 
      <div className='pl-4'>
        <p className='text-white text-2xl py-4'> Now Playing Movies </p>
        <div className='flex overflow-x-scroll no-scrollbar'>
            {nowPlayingMovies?.map(movie => 
                <MovieCard key={movie.id} movie={movie} />
            )}
        </div>
      </div>

      <div className='pl-4 bg-black'>
        <p className='text-white text-2xl py-4'> Popular Movies </p>
        <div className='flex overflow-x-scroll no-scrollbar'>
            {popularMovies?.map(movie => 
                <MovieCard key={movie.id} movie={movie} />
            )}
        </div>
      </div>
    </div>
  )
}

export default SecondSection