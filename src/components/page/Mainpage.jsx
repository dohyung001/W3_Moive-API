import { useState, useEffect } from 'react';
import { WelcomeText, MainTest, Find, FindText, FindInput, FindInputButton, FindInputWrapper, MovieSeach } from '../styledComponents';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import MovieList from '../compo/MovieList';

export default function MainPage() {
  const [movies, setMovies] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [query, setQuery] = useState(''); // 영화 검색 API 쿼리 입력
  const [name, setName] = useState(''); // 유저의 이름 
  const [isLogin, setIsLogin] = useState(false); // 영화 검색 API 쿼리 입력
  const [isBannerLoading, setIsBannerLoading] = useState(false);


  const SEARCH_API = `https://api.themoviedb.org/3/search/movie?query=${encodeURIComponent(query)}&include_adult=false&language=en-US&page=1`;

  const options = {
    method: 'GET',
    headers: {
      accept: 'application/json',
      Authorization: 'Authorization: Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI1YjFlMWVhOTgxMTEyYmU0ZjFkNDRjZjRjNjQ0YjQ5MCIsInN1YiI6IjY2MWQxNmRmMWU2NDg5MDE2MmQ0NmUwMSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.PCFh8WM0vqJVx9y6l_tMwcORv61ElmODiBYPxlQN2d4'
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
        setMovies(data.results || []);
        setIsLoading(false);
      }).catch(() => {
        setIsLoading(false);
      });
  }

  //영화 호출
  useEffect(() => {
    if (query) getMovies();

  }, [query]);


  //스토리지
  useEffect(() => {
    if (localStorage.getItem(localStorage.key(0))) {
      const token = localStorage.getItem(localStorage.key(0)) || "";
      setIsBannerLoading(true);
      fetch('http://localhost:8080/auth/me', {
        method: 'GET',
        headers: {
          accept: 'application/json',
          Authorization: `Bearer ${token}`
        }

      })
        .then(async (response) => {
          if (response.status === 200) {
            setIsBannerLoading(false);
            return response.json(); // 성공
          } else {
            return response.json().then(data => {
              throw new Error(data.message || "실패");
            });
          }
        })
        .then(data => {
          setName(data.name)
        })
        .catch(error => {
          console.error('에러:', error);
        });
    }
  }, [])


  useEffect(() => {
    if (localStorage.key(0)) {
      setIsLogin(true)
    } else setIsLogin(false);

  }, [localStorage.key(0)]);

  return (
    <MainTest>
      <WelcomeText>{isBannerLoading ? "배너에 로딩 중..." : isLogin ? `${name}님 환영합니다` : '환영합니다'}</WelcomeText>
      <Find>
        <FindText>Find your movies!</FindText>
        <FindInputWrapper>
          <FindInput type="text" onChange={(e) => handleChange(e)}></FindInput>
          <FindInputButton><FontAwesomeIcon icon={faSearch} /></FindInputButton>
        </FindInputWrapper>
        {query && (
          <MovieSeach>
            {isLoading ? <FindInputWrapper>데이터를 받아오는 중입니다</FindInputWrapper> :
              <MovieList movies={movies || []} />}
          </MovieSeach>
        )}
      </Find>
    </MainTest>
  );
}
