import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import {
  MDPBackground, MDPBackgroundImg, MDPContentWrapper,
  MDPContent, MDPContentText, MDPContentTextTitle, MDPContentTextOverview
} from './styledComponents';

const NOWPLAYING_API = 'https://api.themoviedb.org/3/movie/now_playing?language=en-US&page=1'
const options = {
  method: 'GET',
  headers: {
    accept: 'application/json',
    Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI1YjFlMWVhOTgxMTEyYmU0ZjFkNDRjZjRjNjQ0YjQ5MCIsInN1YiI6IjY2MWQxNmRmMWU2NDg5MDE2MmQ0NmUwMSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.PCFh8WM0vqJVx9y6l_tMwcORv61ElmODiBYPxlQN2d4'
  }
};

function MoviedetailPage() {
  const { moviename } = useParams(); //현재 URL 매개변수 추출
  const [movies, setMovies] = useState(null);
  const [currentMovie, setCurrentMovie] = useState(null);
  const [overview, setOverview] = useState(null);

  //현재상영중인 영화중 검색
  useEffect(() => {
    fetch(NOWPLAYING_API, options)
      .then((res) => res.json())
      .then((data) => {
        setMovies(data.results);
      });
  }, []);

  useEffect(() => {
    if (movies !== null) {
      const foundMovie = movies.find(movie => movie.title === moviename);
      if (foundMovie) {
        setCurrentMovie(foundMovie);

        //줄거리가 없는경우 처리
        setOverview(foundMovie.overview ? foundMovie.overview : "TMDB에서 제공하는 API에 상세 줄거리 정보가 없습니다.")
      } else {
        console.log("해당하는 영화를 찾을 수 없습니다.");
      }
    }
  }, [moviename, movies]);

  if (!currentMovie) {
    return <div>Loading...</div>;
  }

  return (
    <MDPBackground >
      <MDPBackgroundImg
        src={`https://image.tmdb.org/t/p/w500${currentMovie.backdrop_path}`} />
      <MDPContentWrapper>
        <img
          src={`https://image.tmdb.org/t/p/w500${currentMovie.poster_path}`}
          style={{
            height: "600px", width: '400px', objectfit: "cover",
            borderBottomLeftRadius: "0px", borderBottomRightRadius: "0px",
            zIndex: '101'
          }} />
        <MDPContent>
          <MDPContentTextTitle>{currentMovie.title}</MDPContentTextTitle>
          <MDPContentText>평점 {currentMovie.vote_average}</MDPContentText>
          <MDPContentText>개봉일 {currentMovie.release_date}</MDPContentText>
          <MDPContentText>줄거리</MDPContentText>
          <MDPContentTextOverview>{overview}</MDPContentTextOverview>
        </MDPContent>
      </MDPContentWrapper>
    </MDPBackground>
  );
}

export default MoviedetailPage;