import React from 'react'
import useMovieDetails from '../utils/hooks/useMovieDetails'
import { useSelector } from 'react-redux';

const MainMovieTrailer = ({movie})=> {
    const movieId = movie?.id; 
    useMovieDetails(movieId);
    const trailer = useSelector(store => store.movies?.trailer_video);
    if(!movieId) return null;
    const videoUrl = "https://www.youtube.com/embed/"+trailer?.key+"?si=_DGIHEa0ktusYoaF&autoplay=1&mute=1&controls=0&showinfo=0&rel=0&loop=1&modestbranding=1";
    return (
        <div className="w-full">
            <iframe
            className='w-full aspect-video' 
            src={videoUrl} 
            title="YouTube video player" 
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; pictur-in-picture; web-share" 
            allowFullScreen></iframe>
        </div>
    )
}

export default MainMovieTrailer