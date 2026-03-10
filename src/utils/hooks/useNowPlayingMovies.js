import { useEffect } from "react";
import { TMDB_ACCESS_TOKEN, NOW_PLAYING_MOVIES, OPTIONS_API_DATA } from '../const/Constants';
import { useDispatch } from "react-redux";
import { addMovie } from "../store/MovieSlice";

const useNowPlayingMovies = () => {


    const dispatch = useDispatch();
    useEffect(()=>{
        const fetchMovies = async () => {
          const response = await fetch(NOW_PLAYING_MOVIES, OPTIONS_API_DATA);
          const json = await response.json();
          dispatch(addMovie(json.results));
        };
        fetchMovies();
    }, []);
}


export default useNowPlayingMovies;