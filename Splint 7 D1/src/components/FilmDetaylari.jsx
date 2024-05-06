import { NavLink } from 'react-router-dom';
import { movies } from '../sahteVeri';

export default function FilmDetayları(props) {
  const { title, director, metascore, id } = props.movie;

  return (
    <div to="/filmler" className="movie-card">
      <NavLink to={`/filmler/${id}`}>
        {/* Görev 7: film'e tıklanınca /filmler/:id route'una yönlenmeli */}
        <h2>{title}</h2>
        <div className="movie-director">
          Director: <em>{director}</em>
        </div>
        <div className="movie-metascore">
          Metascore: <strong>{metascore}</strong>
        </div>
      </NavLink>
    </div>
  );
}
