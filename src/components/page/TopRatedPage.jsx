import '../../App.css';
import MovieList from '../compo/MovieList';
import {
  Main, CustomSyncLoaderPage
} from '../styledComponents';
import { useState, useEffect } from 'react';
import { SyncLoader } from 'react-spinners'; // 로딩 스피너 import



//toprate 영화 api
const TOPRATEDPAGE_API = 'https://api.themoviedb.org/3/movie/top_rated?language=en-US&page=1'


//엑세스 토큰 옵션
const options = {
  method: 'GET',
  headers: {
    accept: 'application/json',
    Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI1YjFlMWVhOTgxMTEyYmU0ZjFkNDRjZjRjNjQ0YjQ5MCIsInN1YiI6IjY2MWQxNmRmMWU2NDg5MDE2MmQ0NmUwMSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.PCFh8WM0vqJVx9y6l_tMwcORv61ElmODiBYPxlQN2d4'
  }
};



function TopRatedPage() {
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    getMovies(TOPRATEDPAGE_API, options);
  }, []);

  const getMovies = (API, options) => {
    fetch(API, options)
      .then((res) => res.json())
      .then((data) => {
        setMovies(data.results);
        setLoading(false);
      });
  }


  return (

    <div>
      {loading ? (<CustomSyncLoaderPage><SyncLoader /></CustomSyncLoaderPage>) : (<Main>
        <MovieList movies={movies} />
      </Main>)}


    </div>
  )
}

export default TopRatedPage;