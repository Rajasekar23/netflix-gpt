import React, { useRef } from 'react'
import MovieCard from './MovieCard'

const MovieSlider = ({ title, movies }) => {
  const sliderRef = useRef(null);

  const scrollLeft = () => {
    if (sliderRef.current) {
      sliderRef.current.scrollBy({ left: -800, behavior: 'smooth' });
    }
  };

  const scrollRight = () => {
    if (sliderRef.current) {
      sliderRef.current.scrollBy({ left: 800, behavior: 'smooth' });
    }
  };

  return (
    <div className='pl-4 py-4'>
      <p className='text-white text-2xl py-4'>{title}</p>
      <div className='relative group'>
        <button 
          onClick={scrollLeft}
          className='absolute left-0 top-1/2 -translate-y-1/2 z-10 bg-black/70 hover:bg-black/90 text-white p-2 rounded-full opacity-0 group-hover:opacity-100 transition-opacity'
        >
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-6 h-6">
            <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5" />
          </svg>
        </button>

        <div 
          ref={sliderRef}
          className='flex overflow-x-scroll scrollbar-hide scroll-smooth'
        >
          {movies?.map(movie => 
            <MovieCard key={movie.id} movie={movie} />
          )}
        </div>

        <button 
          onClick={scrollRight}
          className='absolute right-0 top-1/2 -translate-y-1/2 z-10 bg-black/70 hover:bg-black/90 text-white p-2 rounded-full opacity-0 group-hover:opacity-100 transition-opacity'
        >
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-6 h-6">
            <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
          </svg>
        </button>
      </div>
    </div>
  )
}

export default MovieSlider
