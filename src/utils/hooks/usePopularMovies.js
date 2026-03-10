import { useEffect } from "react";
import { OPTIONS_API_DATA } from "../const/Constants"
import { useDispatch } from "react-redux";
import { addPopularMovies } from "../store/MovieSlice";

const usePopularMovies = () => {

    const dispatch = useDispatch();

    useEffect(() => {
        fetchMovies();
    }, []);

    const fetchMovies = async () => {
        const response = await fetch('https://api.themoviedb.org/3/movie/top_rated', OPTIONS_API_DATA);
        const json = await response.json();
        const popularMovies = json?.results;
        dispatch(addPopularMovies(popularMovies));

        console.log(json);
    }
}

export default usePopularMovies;