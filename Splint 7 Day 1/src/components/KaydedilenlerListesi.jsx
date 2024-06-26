import { Link } from 'react-router-dom';
import React from 'react';

export default function KaydedilenlerListesi(props) {
  return (
    <div className="saved-list">
      <h3>Kaydedilen Filmler:</h3>
      {props.list.map((movie, index) => (
        <span key={index} className="saved-movie">
          {movie.title}
        </span>
      ))}
      {/* Görev 4: Anasayfa butonu ana sayfayı açmalı */}
      <Link to="/" className="home-button">
        Anasayfa
      </Link>
    </div>
  );
}
