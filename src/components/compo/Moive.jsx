import { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar } from '@fortawesome/free-solid-svg-icons';
import { useNavigate } from 'react-router-dom';
import {
  MovieContainer,
  MovieInfo,
  MovieInfoVote,
  MovieCoverSt,
  MovieCoverTitle,
  MovieCoverText
} from '../styledComponents';

export default function Movie({ movie }) {
  const [isHover, setIsHover] = useState(false); // hover 상태
  const navigate = useNavigate(); // 네비게이션 함수를 컴포넌트 최상단에서 호출

  return (
    <MovieContainer className='movie'
      onMouseEnter={() => setIsHover(true)}
      onMouseLeave={() => setIsHover(false)}>
      <img
        src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
        style={{
          height: "300px", width: '200px', borderRadius: "6px", objectFit: "cover",
          borderBottomLeftRadius: "0px", borderBottomRightRadius: "0px"
        }} />
      <MovieInfo>
        <div>{movie.title}</div>
        <MovieInfoVote><FontAwesomeIcon icon={faStar} />{movie.vote_average}</MovieInfoVote>
      </MovieInfo>

      <MovieCover movie={movie} isHover={isHover} navigate={navigate} />
    </MovieContainer>
  );
}

// 영화 설명 창
function MovieCover({ movie, isHover, navigate }) {
  const handleNavigate = () => {

    navigate(`/movie/${movie.id}`);
  };

  return (
    <>
      {isHover && (
        <MovieCoverSt onClick={handleNavigate}>
          <MovieCoverTitle>{movie.title}</MovieCoverTitle>
          <MovieCoverText>{movie.overview}</MovieCoverText>
        </MovieCoverSt>
      )}
    </>
  );
}
