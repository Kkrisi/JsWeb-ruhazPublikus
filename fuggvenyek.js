



export function tablazatOsszeallit(lista) {

    let txt = "";
    txt += "<div class='termekek'>";


    lista.forEach((element,i) => {
      for (const key in element) {
        
        txt += `<div class='col-md-7 row'>

                  <div class='col-md-4 border rounded-3 card'>
                      <h2 class='text-success border-bottom polocim card-header'>${element[key]}</h2>
                      <img class='border rounded-3 polokep p-1 card-body' src='${element[key][1]}'>
                      <br>

                      <div class='poloszoveg'>
                          <button>S</button>
                          <button>M</button>
                          <button>L</button>
                          <button>XL</button>
                          <button>XXL</button>

                          <p>A pólódat kifordítva 30 fokon, szárítógép használata nélkül mosd ki, így vigyázva a 100% pamut szövet és a nyomat minőségére. ...</p>
                      </div>

                      <div class='container mt-3 border-top ardiv p-2 card-footer'>
                          <p class='ar'>Ár: 6990 Ft</p>
                        <button type='button' class='btn btn-success text-warning bg-success btn-primary border-2 btn-outline-dark kosar' data-bs-toggle="modal" id="${i}" data-bs-target="#myModal2">Kosárba 🛒</button>   
                      </div>`;
                      
      }
    });

    txt += "</div>";
    return txt;
  }
  




  export function megjelenites(txt) {
    /* megjelníti egy html szoveget egy html elemben */
    const termekekELEM = $(".termekek");
    termekekELEM.html(txt);
  }









