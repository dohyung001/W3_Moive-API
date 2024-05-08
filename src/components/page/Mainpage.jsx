import { WelcomeText, MainTest, Find, FindText, FindInput, FindInputButton, FindInputWrapper, MovieSeach } from '../styledComponents'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';

import { useState, useEffect } from 'react';
import MovieList from '../compo/MovieList';



// Debounce 함수 정의
function debounce(func, delay) {
  let timer;
  return function (...args) {
    clearTimeout(timer);
    timer = setTimeout(() => func.apply(this, args), delay);
  };
}


export default function MainPage() {
  const [movies, setMovies] = useState([]);
  const [Query, setQuery] = useState(''); //영화 검색 API 쿼리 입력

  const SEARCH_API = `https://api.themoviedb.org/3/search/movie?query=${encodeURIComponent(Query)}&include_adult=false&language=en-US&page=1`

  const options = {
    method: 'GET',
    headers: {
      accept: 'application/json',
      Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI1YjFlMWVhOTgxMTEyYmU0ZjFkNDRjZjRjNjQ0YjQ5MCIsInN1YiI6IjY2MWQxNmRmMWU2NDg5MDE2MmQ0NmUwMSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.PCFh8WM0vqJVx9y6l_tMwcORv61ElmODiBYPxlQN2d4'
    }
  };

  //쿼리 입력
  function handleChange(e) {
    setQuery(e.target.value)

  }
  //영화 호출 함수
  const getMovies = (API, options) => {
    fetch(API, options)
      .then((res) => res.json())
      .then((data) => {
        setMovies(data.results);
      }).catch(() => { })
      ;
  }

  useEffect(() => {
    if (Query) getMovies(SEARCH_API, options);
    const debouncedFetchData = debounce(getMovies, 500); // 입력이 멈춘 후 0.5초 후에 요청을 보냄
    debouncedFetchData();

    return () => clearTimeout(debouncedFetchData);
  }, [Query]);




  return (
    <MainTest>
      <WelcomeText>환영합니다</WelcomeText>
      <Find>
        <FindText>Find your movies !</FindText>
        <FindInputWrapper>
          <FindInput type="text" onChange={handleChange}></FindInput>
          <FindInputButton><FontAwesomeIcon icon={faSearch} /></FindInputButton>
        </FindInputWrapper>
        {Query ? <MovieSeach>
          <MovieList movies={movies} />

        </MovieSeach> : <></>

        }
      </Find>
    </MainTest>
  )
}