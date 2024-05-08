import React, { useState } from 'react';
import { movies } from './sahteVeri.js';
import { Route, Switch } from 'react-router-dom';
import KaydedilenlerListesi from './components/KaydedilenlerListesi';
import FilmListesi from './components/FilmListesi.jsx';
import Film from './components/Film.jsx';

export default function App() {
  /* Görev: 1
  kaydedilmiş filmler ve film listesi için 2 tane state tanımlayın.
  film listesini sahteVeri'den alın.
  */
  const [savedMovie, setSavedMovie] = useState([]);
  const [movieList, setMovieList] = useState(movies);

  const KaydedilenlerListesineEkle = (movie) => {
    /* Görev: 2
    kaydedilmiş film listesine eklemek için bir click handle fonksiyonu yazın.
    aynı filmi 2. kez eklememeli.
    Kaydet butonunun olduğu component'e prop olarak gönderin.
    */
    if (!savedMovie.includes(movie)) {
      setSavedMovie((prev) => [...prev, movie]);
    }
  };

  return (
    <>
      <KaydedilenlerListesi list={savedMovie} />
      <Switch>
        {/* 
      Görev 3: 2 adet route tanımlayın.
      1. route '/' olacak ve FilmListesi component'ini yükleyecek ve buraya film listesini prop olarak yollayacak.
      2. route '/filmler/' parametresinden sonra 'id' parametresini alacak  (örnek: '/filmler/2', '/filmler/3' id dinamik olacak). Bu route 'Film' bileşenini yükleyecek.
      */}
        <Route path="/" exact>
          <FilmListesi movies={movieList} />
        </Route>
        <Route path="/filmler/:id">
          <Film addToList={KaydedilenlerListesineEkle} />
        </Route>
      </Switch>
    </>
  );
}
