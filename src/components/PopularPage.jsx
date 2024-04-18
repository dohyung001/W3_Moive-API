import '../App.css';
import MovieList from './MovieList';
import {
  Main, CustomSyncLoaderPage
} from './styledComponents';
import { useState, useEffect } from 'react';
import { SyncLoader } from 'react-spinners'; // 로딩 스피너 import

// popular 영화 api
const POPULAR_API = 'https://api.themoviedb.org/3/movie/popular?language=en-US&page=1&region=%EB%8C%80%ED%95%9C%EB%AF%BC%EA%B5%AD';

// 엑세스 토큰 옵션
const options = {
  method: 'GET',
  headers: {
    accept: 'application/json',
    Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI1YjFlMWVhOTgxMTEyYmU0ZjFkNDRjZjRjNjQ0YjQ5MCIsInN1YiI6IjY2MWQxNmRmMWU2NDg5MDE2MmQ0NmUwMSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.PCFh8WM0vqJVx9y6l_tMwcORv61ElmODiBYPxlQN2d4'
  }
};

function PopularPage() {
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(true); // 데이터 로딩 상태를 관리하는 상태 변수

  useEffect(() => {
    getMovies(POPULAR_API, options);
  }, []);

  //API 데이터를 받아오는 함수
  const getMovies = (API, options) => {
    fetch(API, options)
      .then((res) => res.json())
      .then((data) => {
        setMovies(data.results);
        setLoading(false); // 데이터를 모두 받으면 로딩 상태를 false로 변경
      });
  }

  return (
    <div>
      {loading ? ( // 로딩 중인 경우
        <CustomSyncLoaderPage>
          <SyncLoader size={15} />
        </CustomSyncLoaderPage>
      ) : ( // 데이터를 받은 경우
        <Main>
          <MovieList movies={movies} />
        </Main>
      )}
    </div>
  )
}

export default PopularPage;
