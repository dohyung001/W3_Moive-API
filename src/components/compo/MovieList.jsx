import Movie from './Moive.jsx'
import { MovieListContainer } from '../styledComponents';

export default function MovieList({ movies }) {
  //키가 warning 처리
  const uniqueMovies = Array.from(new Set(movies.map(movie => movie.id)))
    .map(id => {
      return movies.find(movie => movie.id === id);
    });

  return (
    <MovieListContainer>
      {uniqueMovies.map(movie => (
        <Movie key={movie.id} movie={movie} />
      ))}
    </MovieListContainer>
  );
}


