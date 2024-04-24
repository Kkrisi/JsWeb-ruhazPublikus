# Webáruház

## Specifikáció

1. A publikus felületen div-ekben jelenítsük meg az adatokat.
2. Reszponzív oldal
3. Az oldalon legyen szűrési lehetőség, pl: keresés névben, leírásban, szűrés kategória szerint, bizonyos árnál olcsóbb, vagy drágább termékek.
4. Rendezési lehetőség , pl: ár szerinti növekvő vagy csökkenő
5. Kosár funkció: A publikus felületen a terméket helyezheted a kosárba. A kosarat táblázatos formában jelenítsd meg.
6. A kosárban lévő termékeket listázhatod, törölheted, módosíthatod az elemszámát, majd leadhatod a rendelést!
7. ++ Lehet, hogy szükséged lesz a localStorage használatára. 
8. ++ Ilyenkor készíthetsz a kosárba tett termékekről egy PDF dokumentumot is.  :D
9. ++ Minden termékhez (divhez) tartozik egy gomb, amivel meg tudjuk nézni azt az egyetlen terméket. A kiemelt termék mellett megjelenik egy bal és egy jobb léptető gomb, amivel léptetni tudjuk a terméket.



## Alkalmazott függvények

**fuggvenyneve(par1,par2)->visszateresiErtek**:
1. tablazatOsszeallit(lista)->txt - összeállítja a html kódot szöveges formátumban, minden sor végén legyen egy kuka!
2. megjelenites(txt)->nincs - megjelníti egy html szoveget egy html elemben
3. tablazatbaTesz(lista) - összeszedi az űrlapadatokat, és hozzáfűzi a listához, majd megjeleníti újra a táblázatot. - akkor hívódik meg, ha a Submit gombra kattintunk
4. szuresNevSzerint(lista, szurtSzoveg) -> szurtLista - a szűrőbe írt szó alaján kilistázza azokat az adatokat a listából, amelyekben szerepel a név mezőjében az adott szó. 
5. tablazatRendez(lista) - adott mező szerint rendezi a táblázatot. - akkor hívódik meg, ha a táblázat név fejlécmezőjére kattintunk. Berendezzük a listát, és megjelenítjük újra a táblázatot.
6. kosarbaRakas(lista,index) - a listából egy adott termék adatait belerakjuk a kosárba
7. kosarMegjelenites() ???
8. sorTorles(lista, index) - minden sor végén legyen egy kuka, a sor indexével, erre a kukára kattintva töröljük az adott sort a listából, és újra megjelenítjük a táblázatot a módosult listával.
9. kosarElemModositas() - a kosárban lévő termékek számát növelni ???
