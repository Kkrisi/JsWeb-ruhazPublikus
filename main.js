


import { termekekLISTA } from "./adat.js";
import { megjelenites, tablazatOsszeallit } from "./fuggvenyek.js";
import { tablazatRendez, szuresNevSzerint } from "./adatkezelo.js";





let nevIrany = 1;
init(termekekLISTA);
nevRendezEsemeny();
nevSzuresEsemeny();


export function init(lista) {
  let txt = tablazatOsszeallit(lista);  //txt = középső része a weboldalnak / termék tábázat
  megjelenites(txt);
  nevRendezEsemeny(lista);
}


init(termekekLISTA)






function nevRendezEsemeny(lista) {

  $(".termekek .kulso .belso").each(function() {
    const h2szoveg = $(this).find("h2").text();
  });

  $(".rendezes").on("click", function() {
    const LISTA = tablazatRendez(lista, nevIrany);
    nevIrany *= -1;
    init(LISTA);
  });
}












function nevSzuresEsemeny() {

  const szuroELEM = $("#termekNev");
  szuroELEM.on("keyup", function () {
    let szuroSZoveg = szuroELEM.val();
    const LISTA = szuresNevSzerint(termekekLISTA, szuroSZoveg);
    init(LISTA);
  });
}









