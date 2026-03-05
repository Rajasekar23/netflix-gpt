import { useEffect } from "react";
import { TMDB_ACCESS_TOKEN, NOW_PLAYING_MOVIES } from '../const/Constants';
import { useDispatch } from "react-redux";
import { addMovie } from "../store/MovieSlice";

const useNowPlayingMovies = () => {


    const dispatch = useDispatch();
    useEffect(()=>{
        const fetchMovies = async () => {
          const options = {
            method: 'GET',
            headers: {
              accept: 'application/json',
              Authorization: 'Bearer '+TMDB_ACCESS_TOKEN
            }
          };
          const response = await fetch(NOW_PLAYING_MOVIES, options);
          const json = await response.json();
          dispatch(addMovie(json.results));
        };
        fetchMovies();
    }, []);
}


export default useNowPlayingMovies;