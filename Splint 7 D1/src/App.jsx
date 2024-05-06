import React, { useEffect } from 'react';
import { useState } from 'react';
import { movies } from './sahteVeri.js';
import KaydedilenlerListesi from './components/KaydedilenlerListesi';
import { BrowserRouter, Route } from 'react-router-dom';
import Film from './components/Film.jsx';
import FilmListesi from './components/FilmListesi';
import { Switch } from 'react-router-dom';

export default function App() {
  /* Görev: 1
  kaydedilmiş filmler ve film listesi için 2 tane state tanımlayın.
  film listesini sahteVeri'den alın.
  */
  const [kaydedilmisFilmler, setKaydedilmisFilmler] = useState([]);
  const [filmListesi, setFilmListesi] = useState(movies);

  const KaydedilenlerListesineEkle = (movie) => {
    /* Görev: 2
    kaydedilmiş film listesine eklemek için bir click handle fonksiyonu yazın.
    aynı filmi 2. kez eklememeli.
    Kaydet butonunun olduğu component'e prop olarak gönderin.
    */
    if (kaydedilmisFilmler.indexOf(movie) === -1) {
      setKaydedilmisFilmler((prevFilms) => [...prevFilms, movie]);
    }
  };

  return (
    <>
      <KaydedilenlerListesi list={kaydedilmisFilmler} />
      <Switch>
        {/* 
      Görev 3: 2 adet route tanımlayın.
      1. route '/' olacak ve FilmListesi component'ini yükleyecek ve buraya film listesini prop olarak yollayacak.
      2. route '/filmler/' parametresinden sonra 'id' parametresini alacak  (örnek: '/filmler/2', '/filmler/3' id dinamik olacak). Bu route 'Film' bileşenini yükleyecek.
    */}
        <Route path="/" exact>
          <FilmListesi movies={filmListesi} />
        </Route>
        <Route path="/filmler/:id">
          <Film addToList={KaydedilenlerListesineEkle} />
        </Route>
      </Switch>
    </>
  );
}
