import { WatchedMovie } from "./WatchedMovie";

////////////////////////////////////////////////////////////
// WatchMovieList component
export function WatchMovieList({ watched, onDelete }) {
  return (
    <ul className="list">
      {watched.map((movie) => (
        <WatchedMovie movie={movie} key={movie.imdbID} onDelete={onDelete} />
      ))}
    </ul>
  );
}
