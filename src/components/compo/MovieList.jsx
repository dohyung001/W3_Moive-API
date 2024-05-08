import Movie from './Moive.jsx'
import {
  MovieListContainer

} from '../styledComponents.jsx';

export default function MovieList({ movies }) {
  return (
    <MovieListContainer>
      {movies.map(movie => (
        <Movie key={movie.id} movie={movie} /> //movie컴포넌트 생성
      ))}
    </MovieListContainer>
  );
}