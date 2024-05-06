import React, { useEffect, useState } from 'react';
import { movies } from '../sahteVeri';
import { useParams } from 'react-router-dom/cjs/react-router-dom.min';

export default function Film(props) {
  const [movie, setMovie] = useState();
  /* Görev 5: Film component'i yüklendiğinde id'yi params'dan almalı ve sahteVeri'deki movies içinden ilgili id'li filmi bulup getirmeli */
  let { id } = useParams();
  useEffect(() => {
    const findMovie = movies.find((m) => m.id == id);
    return setMovie(findMovie);
  }, [id]);

  if (!movie) {
    return <div>Film bilgisi yükleniyor...</div>;
  }

  const { title, director, metascore, stars } = movie;
  return (
    <div className="save-wrapper">
      <div className="movie-card">
        <p>Film ID: {id}</p>
        <h2>{title}</h2>
        <div className="movie-director">
          Director: <em>{director}</em>
        </div>
        <div className="movie-metascore">
          Metascore: <strong>{metascore}</strong>
        </div>
        <h3>Actors</h3>

        {stars.map((star) => (
          <div key={star} className="movie-star">
            {star}
          </div>
        ))}
      </div>
      {/* Görev 6: kaydet butonu kaydedilenler state'ine filmi eklemeli */}
      <button className="save-button" onClick={() => props.addToList(movie)}>
        Kaydet
      </button>
    </div>
  );
}
