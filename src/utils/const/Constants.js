

export const PHOTO_URL = 'https://avatars.githubusercontent.com/u/28036556?v=4&size=64';


export const TMDB_ACCESS_TOKEN  = 'eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIxZGU3MjA2MGYyYzA4YmQ4ZDY5ZGU1MzU4ZjM2N2M5ZCIsIm5iZiI6MTc3MjQ2NTgwNi4wMDgsInN1YiI6IjY5YTVhZThlYjYwZTg4ZGE2ZTQxOGNjZSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.oha-4fcoII-PHHPZ2QZKpn88bRALIyW5IcT4cPah5pU';


export const NOW_PLAYING_MOVIES = 'https://api.themoviedb.org/3/movie/now_playing';


export const OPTIONS_API_DATA =  {
    method: 'GET',
    headers: {
      accept: 'application/json',
      Authorization: 'Bearer '+TMDB_ACCESS_TOKEN
    }
  };


  export const LANGUAGES = [
    {
      name: 'English',
      value: 'en'
    },
    {
      name: 'Hindi',
      value: 'hindi'
    },
    {
      name: "Spanish",
      value: 'spanish'
    }
  ];