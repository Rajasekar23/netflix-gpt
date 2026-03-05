import React, { useMemo } from 'react';
import useNowPlayingMovies from '../utils/hooks/useNowPlayingMovies';
import { useSelector } from 'react-redux';
import MainMovieTitle from './MainMovieTitle';
import MainMovieTrailer from './MainMovieTrailer';

const Browse = () => {
  useNowPlayingMovies();
  const movies = useSelector(store=>store?.movies);
  const nowPlayingMovies = movies?.now_playing_movies;
  // const mainMovie =nowPlayingMovies?.[0];

  const mainMovie = useMemo(() => {
    if (!nowPlayingMovies?.length) return null;
    return nowPlayingMovies[Math.floor(Math.random() * nowPlayingMovies.length)];
  }, [nowPlayingMovies]);




  return (
    <div className="bg-black">
        <div className="relative w-full">
          <MainMovieTrailer movie={mainMovie} />
          <MainMovieTitle movie={mainMovie}/>
        </div>
    </div>
  )
}

export default Browse