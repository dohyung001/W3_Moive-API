import { useState, useEffect } from 'react';
import { WelcomeText, MainTest, Find, FindText, FindInput, FindInputButton, FindInputWrapper, MovieSeach } from '../styledComponents';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import MovieList from '../compo/MovieList';

export default function MainPage() {
  const [movies, setMovies] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [query, setQuery] = useState(''); // 영화 검색 API 쿼리 입력

  const SEARCH_API = `https://api.themoviedb.org/3/search/movie?query=${encodeURIComponent(query)}&include_adult=false&language=en-US&page=1`;

  const options = {
    method: 'GET',
    headers: {
      accept: 'application/json',
      Authorization: 'Bearer your_token_here'
    }
  };

  // Debounce 함수 정의
  function debounce(func, delay) {
    let timer;
    return (...args) => {
      clearTimeout(timer);
      timer = setTimeout(() => {
        func.apply(this, args);
      }, delay);
    };
  }

  //입력후 0.5초후 호출 함수
  const handleChange = debounce((e) => {
    setQuery(e.target.value);
    setIsLoading(true);
  }, 500);

  // 영화 호출 함수
  const getMovies = () => {
    fetch(SEARCH_API, options)
      .then((res) => res.json())
      .then((data) => {
        setMovies(data.results);
        setIsLoading(false);
      }).catch(() => {
        setIsLoading(false);
      });
  }

  useEffect(() => {
    if (query) getMovies();

  }, [query]);

  return (
    <MainTest>
      <WelcomeText>환영합니다</WelcomeText>
      <Find>
        <FindText>Find your movies!</FindText>
        <FindInputWrapper>
          <FindInput type="text" onChange={(e) => handleChange(e)}></FindInput>
          <FindInputButton><FontAwesomeIcon icon={faSearch} /></FindInputButton>
        </FindInputWrapper>
        {query && (
          <MovieSeach>
            {isLoading ? <FindInputWrapper>데이터를 받아오는 중입니다</FindInputWrapper> :
              <MovieList movies={movies} />}
          </MovieSeach>
        )}
      </Find>
    </MainTest>
  );
}
