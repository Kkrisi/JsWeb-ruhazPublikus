


import { termekekLISTA } from "./adat.js";
import { megjelenites, tablazatOsszeallit } from "./fuggvenyek.js";
import { tablazatRendez,szuresNevSzerint } from "./adatkezelo.js";





let nevIrany = 1;
init(termekekLISTA);
nevRendezEsemeny();


export function init(lista) {
  let txt = tablazatOsszeallit(lista);  //txt = középső része a weboldalnak / termék tábázat
  megjelenites(txt);
  nevRendezEsemeny(lista);
}


init(termekekLISTA)





function nevRendezEsemeny(lista) {

  const h2Element = $('h2').textContent;

  const nevELEM = $(".termekek h2");
  nevELEM.on("click", function () {
    const LISTA = tablazatRendez(lista, nevIrany);

    nevIrany *= -1;
    init(LISTA);
  });
}

















function nevSzuresEsemeny() {
  /* a szűrőbe írt szó alaján kilistázza azokat az adatokat a listából, amelyekben szerepel a név mezőjében az adott szó. 
Ezután megjelenítjük a szűrt listát az oldalon. 
Akkor fog lefutni, amikor megváltozik a szűrőmező tartalma  */
  const szuroELEM = $("#szNev");
  szuroELEM.on("keyup", function () {
    let szuroSZoveg = szuroELEM.val();
    const LISTA = szuresNevSzerint(emberekLISTA, szuroSZoveg);
    init(LISTA);
  });
}
/* szorgalmi: szűrés más mezők alaőpján is működjön  */


