import React, { useState } from 'react'; /* ADIM 0 */

// Bu değişkeni YALNIZCA bir state'in ilk değeri olarak kullanın!
const KareIdListesi = ['sqA', 'sqB', 'sqC', 'sqD'];

export default function Kareler() {
  // ADIM 1: State'leri burada tanımlayabilirsiniz.
  const [aktif, SetAktif] = useState('');

  const classAdiAl = (id) => {
    // ADIM 2: Bu bir click handler değil, JSX içinde kullanılan bir yardımcı(helper) fonksiyondur.(aşağıda kullanımına bakabilirsin)
    // Eğer argüman olarak verilen id state'de tutulan id ile eşleşirse, class adı 'active' olan bir string döndürmeli
    // diğer durumlar için boş string dönecek.
    return id === aktif ? 'active' : '';
  };

  const aktifEt = (id) => {
    // ADIM 3: Bu click handler, tıklandığında aktif kareyi tutan state'i setter'ı ile güncellemeli.
    // eğer tıklanan önceden aktifse, aktifliğini kaldırmalıyız. (aktif kareyi tutan state'i sıfırlayabiliriz)
    SetAktif(id === aktif ? '' : id);
  };

  return (
    <div className="widget-squares container">
      <h2>Kareler</h2>
      <div className="squares">
        {
          // ADIM 4: 'KareIdListesi' değişkeni yerine bir state'den listeyi alıp .map() ile dönmek daha doğru olur.
          KareIdListesi.map((id) => (
            <div
              id={id}
              key={id}
              data-testid={id}
              className={`square ${classAdiAl(id)}`}
              onClick={() => aktifEt(id)}
            ></div>
          ))
        }
      </div>
    </div>
  );
}
