import { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar } from '@fortawesome/free-solid-svg-icons';
import {
  MovieContainer,
  MovieInfo,
  MovieInfoVote,
  MovieCoverSt,
  MovieCoverTitle,
  MovieCoverText
} from '../styledComponents';

export default function Movie({ movie }) {
  const [isHover, setIsHover] = useState(false); //hover상태


  return (
    <MovieContainer className='movie'
      onMouseEnter={() => { setIsHover(true) }}
      onMouseLeave={() => { setIsHover(false) }}>
      <img
        src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
        style={{
          height: "300px", width: '200px', borderRadius: "6px", objectfit: "cover",
          borderBottomLeftRadius: "0px", borderBottomRightRadius: "0px"
        }} />
      <MovieInfo className='movieInfo'>
        <div className='movieInfo_title'>{movie.title}</div>
        <MovieInfoVote className='movieInfo_vote'><FontAwesomeIcon icon={faStar} />{movie.vote_average}</MovieInfoVote>
      </MovieInfo>

      <MovieCover movie={movie} isHover={isHover} />
    </MovieContainer>
  );
}


//영화 설명 창
function MovieCover({ movie, isHover }) {
  return (
    <>
      {isHover && (
        <MovieCoverSt className='movie_cover'>
          <MovieCoverTitle className='movie_cover_title'>{movie.title}</MovieCoverTitle>
          <MovieCoverText className='movie_cover_text'>{movie.overview}</MovieCoverText>
        </MovieCoverSt>
      )}
    </>
  )

}