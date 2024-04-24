


import { termekekLISTA } from "./adat.js";
import { megjelenites, tablazatOsszeallit } from "./fuggvenyek.js";






export function init(lista) {
  let txt = tablazatOsszeallit(lista);  //txt = középső része a weboldalnak / termék tábázat
  megjelenites(txt);
}