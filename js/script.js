const swiper = new Swiper('.swiper', {
  // Directie Swiper
  direction: 'horizontal',
  loop: true,

  // Paginare swiper si delay intre poze
  pagination: {
    el: '.swiper-pagination',
  },
  autoplay: {
    delay: 5000,
  },
});

var categorie_vehicule = {
  1: {
    id:1,
    cat_v__image: "img/Cat_Motociclete.png",
    cat_v__type: "Motociclete"
  },
  2: {
    id:2,
    cat_v__image: "img/Cat_Atv.png",
    cat_v__type: "Atv"
  },
  3: {
    id:3,
    cat_v__image: "img/Cat_motocross.png",
    cat_v__type: "Motocross"
  }
};
console.log(categorie_vehicule);
console.log(typeof (categorie_vehicule));
var afis__categorie_vehicule = "";
for (var key in categorie_vehicule) {
  afis__categorie_vehicule += `
  <a href="catalog.html">
  <div class="products_categories__item" onclick="redirectToCategory($(key))">
      <div>
         <img src=" 
           ${categorie_vehicule[key].cat_v__image}
           ">
       </div>
       <div>
       <h3>
         ${categorie_vehicule[key].cat_v__type}
       </h3>
       </div>
   </div>
</a>
  `;
}
document.getElementById("afis__categorie_vehicule").innerHTML = afis__categorie_vehicule;

var categorie_detalii = {
  1: {
    id:4,
    cat_d__image: "img/Cat_Echipament.png",
    cat_d__type: "Echipament"
  },
  2: {
    id:5,
    cat_d__image: "img/Cat_Piese De Schimb.png",
    cat_d__type: "Piese De Schimb"
  },
  3: {
    id:6,
    cat_d__image: "img/Cat_Accesorii.png",
    cat_d__type: "Accesorii"
  }
};
console.log(categorie_detalii);
console.log(typeof (categorie_detalii));
var afis__categorie_detalii = "";
for (var key in categorie_detalii) {
  afis__categorie_detalii += `
  <a href="catalog.html">
  <div class="products_categories__item">
      <div>
         <img src=" 
           ${categorie_detalii[key].cat_d__image}
           ">
       </div>
       <div>
       <h3>
         ${categorie_detalii[key].cat_d__type}
       </h3>
       </div>
   </div>
</a>
  `;
}
document.getElementById("afis__categorie_detalii").innerHTML = afis__categorie_detalii;



var why_us = {
  1: {
    why_us__image: "img/Piese Oem.png",
    why_us__title: "Piese OEM",
    why_us__description:"Poți solicita informație privind prețul și stocul la piese originale pentru orice tehnică moto"
  },
  2: {
    why_us__image: "img/Garantie.png",
    why_us__title: "Garantie",
    why_us__description:"Garanție de la producător și servicii postgaranție"
  },
  3: {
    why_us__image: "img/Credit si Finantare.png",
    why_us__title: "Credit si Finantare",
    why_us__description:"Soluții de finanțare și creditare avantajoase"
  }
};
console.log(why_us);
console.log(typeof (why_us));
var afis__why_us = "";
for (var key in why_us) {
  afis__why_us += `
<div class="why_us__card">
            <div>
            <img src=" 
            ${why_us[key].why_us__image}
            ">
            </div>
            <div class="why_us__card_info">
                <div>
                <h3>
                ${why_us[key].why_us__title}
              </h3>
                </div>
                <div>
                    <p>
                    ${why_us[key].why_us__description}
                    </p>
                </div>
            </div>
        </div>
  `;
}
document.getElementById("afis__why_us").innerHTML = afis__why_us;