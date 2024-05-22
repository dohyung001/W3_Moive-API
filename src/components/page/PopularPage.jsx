import '../../App.css';
import MovieList from '../compo/MovieList';
import {
  Main, CustomSyncLoaderPage, ShiftPage
} from '../styledComponents';
import { useState, useEffect } from 'react';
import { SyncLoader } from 'react-spinners'; // 로딩 스피너 import
import { FaAngleRight, FaAngleLeft } from "react-icons/fa";


function PopularPage() {
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(true); // 데이터 로딩 상태를 관리하는 상태 변수
  const [currentPage, setcurrentPage] = useState(1); // 페이지 변수
  // popular 영화 api
  const POPULAR_API = `https://api.themoviedb.org/3/movie/popular?language=en-US&page=${currentPage}&region=%EB%8C%80%ED%95%9C%EB%AF%BC%EA%B5%AD`;

  // 엑세스 토큰 옵션
  const options = {
    method: 'GET',
    headers: {
      accept: 'application/json',
      Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI1YjFlMWVhOTgxMTEyYmU0ZjFkNDRjZjRjNjQ0YjQ5MCIsInN1YiI6IjY2MWQxNmRmMWU2NDg5MDE2MmQ0NmUwMSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.PCFh8WM0vqJVx9y6l_tMwcORv61ElmODiBYPxlQN2d4'
    }
  };
  useEffect(() => {
    getMovies(POPULAR_API, options);
  }, [POPULAR_API]);

  //API 데이터를 받아오는 함수
  const getMovies = (API, options) => {
    fetch(API, options)
      .then((res) => res.json())
      .then((data) => {
        setMovies(data.results);
        setLoading(false); // 데이터를 모두 받으면 로딩 상태를 false로 변경
      });
  }
  const handlePage = (e) => {
    if (e == "left" && currentPage !== 1) setcurrentPage(currentPage - 1)
    else if (e == "right") setcurrentPage(currentPage + 1)
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
          <ShiftPage>
            <div><FaAngleLeft size="40" onClick={() => handlePage("left")} style={{
              color: currentPage !== 1 ? 'white' : 'rgba(0, 0, 0, 0.5)',
              cursor: currentPage !== 1 ? 'pointer' : 'finger'
            }}
            />
            </div>
            <div style={{ fontSize: '35px' }}>{currentPage}</div>
            <div><FaAngleRight size="40" onClick={() => handlePage("right")}
              style={{ cursor: 'finger' }} /></div>
          </ShiftPage>
        </Main>
      )}
    </div>

  )
}

export default PopularPage;
