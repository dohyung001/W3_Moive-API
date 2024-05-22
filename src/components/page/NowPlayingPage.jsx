import '../../App.css';
import MovieList from '../compo/MovieList';
import {
  Main, CustomSyncLoaderPage, InfiniteyncLoaderPage
} from '../styledComponents';
import { useState, useEffect, useRef } from 'react';
import { SyncLoader } from 'react-spinners';

function NowPlayingPage() {
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(true);
  const [page, setPage] = useState(1);


  const mainRef = useRef(null); //메인과 연결될 Ref

  const NOWPLAYING_API = `https://api.themoviedb.org/3/movie/now_playing?language=en-US&page=${page}`;
  const options = {
    method: 'GET',
    headers: {
      accept: 'application/json',
      Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI1YjFlMWVhOTgxMTEyYmU0ZjFkNDRjZjRjNjQ0YjQ5MCIsInN1YiI6IjY2MWQxNmRmMWU2NDg5MDE2MmQ0NmUwMSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.PCFh8WM0vqJVx9y6l_tMwcORv61ElmODiBYPxlQN2d4'
    }
  };

  useEffect(() => {
    getMovies(NOWPLAYING_API, options);
  }, [page]);

  const getMovies = (API, options) => {
    setLoading(true);
    fetch(API, options)
      .then((res) => res.json())
      .then((data) => {
        setMovies((prevMovies) => [...prevMovies, ...data.results]); //무빙 셋
        setLoading(false);

      })
      .catch((error) => {
        console.error(error);
        setLoading(false);
      });
  };

  //스크롤시 콜백함수
  const handleScroll = () => {
    if (mainRef.current) {
      const { scrollTop, scrollHeight, clientHeight } = mainRef.current;
      if (scrollTop + clientHeight >= scrollHeight - 100) {
        if (!loading) {
          setPage((prevPage) => prevPage + 1);
        }
      }
    }
  };

  useEffect(() => {
    const mainElement = mainRef.current;
    if (mainElement) {
      mainElement.addEventListener('scroll', handleScroll);
    }
    return () => {
      if (mainElement) {
        mainElement.removeEventListener('scroll', handleScroll);
      }
    };
  }, [loading]);

  return (
    <div>
      {loading && movies.length === 0 ? (
        <CustomSyncLoaderPage><SyncLoader /></CustomSyncLoaderPage>
      ) : (
        <Main ref={mainRef}>
          <MovieList movies={movies} />
          {loading && <InfiniteyncLoaderPage><SyncLoader /></InfiniteyncLoaderPage>}
        </Main>
      )}
    </div>
  );
}

export default NowPlayingPage;