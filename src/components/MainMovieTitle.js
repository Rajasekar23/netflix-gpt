import React from 'react'

const MainMovieTitle = ({movie}) => {
  return (
    <div className='absolute top-0 left-0 w-full h-full flex flex-col justify-center px-12 bg-gradient-to-r from-black via-transparent to-transparent pointer-events-none'>
        <p className='text-4xl font-bold text-white'> {movie?.title}</p>
        <p className='mt-4 w-1/3 text-white'>{movie?.overview}</p>
        <div className='mt-6 flex gap-4 pointer-events-auto'>
          <button className='bg-white text-black px-8 py-2 rounded font-bold hover:bg-opacity-80 flex items-center gap-2'>
            ▶ Play
          </button>
          <button className='bg-gray-500 bg-opacity-50 text-white px-8 py-2 rounded font-bold hover:bg-opacity-70 flex items-center gap-2'>
            ℹ More Info
          </button>
        </div>  
    </div>
  )
} 

export default MainMovieTitle