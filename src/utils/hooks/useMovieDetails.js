import { useEffect } from "react";
import { TMDB_ACCESS_TOKEN } from "../const/Constants";
import { useDispatch } from "react-redux";
import { mainMovie, trailerVideo } from "../store/MovieSlice";


const useMovieDetails = (movieId) =>{

    const dispatch = useDispatch();
    useEffect(()=>{
        if(!movieId) return;
        movieDetails();
        }, [movieId]);

    const movieDetails = async () => {
        const options = {
            method: 'GET',
            headers: {
              accept: 'application/json',
              Authorization: 'Bearer '+TMDB_ACCESS_TOKEN
            }
          };
        const response = await fetch('https://api.themoviedb.org/3/movie/'+movieId+'/videos', options);
        const movieInfo = await response.json();
        const videos = await movieInfo?.results;
        const trailerVideos =  videos?.filter(video => video.type === 'Trailer');
        const trailer =  trailerVideos?.length > 0 ? trailerVideos?.[0]  : videos?.[0];
        dispatch(trailerVideo(trailer));
    }
}

export default useMovieDetails;