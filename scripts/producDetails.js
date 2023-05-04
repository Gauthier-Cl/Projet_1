const listBike = [
  {
    id: "0",
    model: "Speed Bike model 438",
    price: "$99",
    image: "./assets/img/bike1.png",
    description:
      "Passez difficilement et rapidement de 25 à 45 km/h à tout moment en appuyant seulement sur un bouton ! Remarque : Ce vélo est livré avec l'option offrant la possibilité de basculer entre un vélo électrique classique et un speed bike dans les fonctions intégrées sur l'écran. Le vélo est livré avec les réglages par défaut sur 25 km/h et si vous le laissez avec ce réglage, ce vélo n'a donc pas besoin d'être immatriculé ou assuré en tant que Speed Bike. Pour cette raison, le vélo n'est pas équipé d'un CoC pour l'enregistrer en tant que Speed Bike et la fonction speed bike est uniquement recommandée pour une utilisation sur routes privées ",
  },
  {
    id: "1",
    model: " Chill Bike model 324",
    price: "$99",
    image: "./assets/img/bike2.png",
    description:
      "Passez facilement et rapidement de 25 à 45 km/h à tout moment en appuyant seulement sur un bouton ! Remarque : Ce vélo est livré avec l'option offrant la possibilité de basculer entre un vélo électrique classique et un speed bike dans les fonctions intégrées sur l'écran. Le vélo est livré avec les réglages par défaut sur 25 km/h et si vous le laissez avec ce réglage, ce vélo n'a donc pas besoin d'être immatriculé ou assuré en tant que Speed Bike. Pour cette raison, le vélo n'est pas équipé d'un CoC pour l'enregistrer en tant que Speed Bike et la fonction speed bike est uniquement recommandée pour une utilisation sur routes privées ",
  },
  {
    id: "2",
    model: "Dive Bike model 638",
    price: "$99",
    image: "./assets/img/bike3.png",
    description:
      "Passez facilement et rapidement de 25 à 45 km/h à tout moment en appuyant seulement sur un bouton ! Remarque : Ce vélo est livré avec l'option offrant la possibilité de basculer entre un vélo électrique classique et un speed bike dans les fonctions intégrées sur l'écran. Le vélo est livré avec les réglages par défaut sur 25 km/h et si vous le laissez avec ce réglage, ce vélo n'a donc pas besoin d'être immatriculé ou assuré en tant que Speed Bike. Pour cette raison, le vélo n'est pas équipé d'un CoC pour l'enregistrer en tant que Speed Bike et la fonction speed bike est uniquement recommandée pour une utilisation sur routes privées ",
  },
  {
    id: "3",
    model: "Speed Bike model 438",
    price: "$99",
    image: "./assets/img/bike4.png",
    description:
      "Passez facilement et rapidement de 25 à 45 km/h à tout moment en appuyant seulement sur un bouton ! Remarque : Ce vélo est livré avec l'option offrant la possibilité de basculer entre un vélo électrique classique et un speed bike dans les fonctions intégrées sur l'écran. Le vélo est livré avec les réglages par défaut sur 25 km/h et si vous le laissez avec ce réglage, ce vélo n'a donc pas besoin d'être immatriculé ou assuré en tant que Speed Bike. Pour cette raison, le vélo n'est pas équipé d'un CoC pour l'enregistrer en tant que Speed Bike et la fonction speed bike est uniquement recommandée pour une utilisation sur routes privées ",
  },
  {
    id: "4",
    model: "Sport Urban model 438",
    price: "$99",
    image: "./assets/img/bike5.png",
    description:
      "Passez facilement et rapidement de 25 à 45 km/h à tout moment en appuyant seulement sur un bouton ! Remarque : Ce vélo est livré avec l'option offrant la possibilité de basculer entre un vélo électrique classique et un speed bike dans les fonctions intégrées sur l'écran. Le vélo est livré avec les réglages par défaut sur 25 km/h et si vous le laissez avec ce réglage, ce vélo n'a donc pas besoin d'être immatriculé ou assuré en tant que Speed Bike. Pour cette raison, le vélo n'est pas équipé d'un CoC pour l'enregistrer en tant que Speed Bike et la fonction speed bike est uniquement recommandée pour une utilisation sur routes privées ",
    adresse: "C:UsersASFDesktopprojetgroupe2Projet_1productDetails.html",
  },
  {
    id: "5",
    model: "Le vélo à assitance électrique",
    price: "$99",
    image: "./assets/img/bikeelec.png",
    description:
      "Passez facilement et rapidement de 25 à 45 km/h à tout moment en appuyant seulement sur un bouton ! Remarque : Ce vélo est livré avec l'option offrant la possibilité de basculer entre un vélo électrique classique et un speed bike dans les fonctions intégrées sur l'écran. Le vélo est livré avec les réglages par défaut sur 25 km/h et si vous le laissez avec ce réglage, ce vélo n'a donc pas besoin d'être immatriculé ou assuré en tant que Speed Bike. Pour cette raison, le vélo n'est pas équipé d'un CoC pour l'enregistrer en tant que Speed Bike et la fonction speed bike est uniquement recommandée pour une utilisation sur routes privées ",
  },
];

// Bike details display
const currentBikeId = new URLSearchParams(window.location.search).get("bikeId");

const bike = listBike[+currentBikeId];

const bikeBis = listBike.find((e) => e.id === currentBikeId);
console.log("bikeBis", bikeBis);

const deschtml = document.getElementById("desc");
deschtml.textContent = bikeBis.description;

const price = document.getElementById("price");
price.textContent = bikeBis.price;

const model = document.getElementById("model");
model.textContent = bikeBis.model;

const featured = document.getElementById("featured");
featured.src = bikeBis.image;
// Carousel
/*
const thumbnails = document.getElementsByClassName("thumbnail");
thumbnails.src = bikeBis.image;
const activeImages = document.getElementsByClassName("active");
activeImages.src = bikeBis.image;
const featured = document.getElementById("featured");
featured.src = bikeBis.image;
const buttonRight = document.getElementById("slideRight");
const buttonLeft = document.getElementById("slideLeft");

for (let i = 0; i < thumbnails.length; i++) {
  thumbnails[i].addEventListener("mouseover", () => {
    console.log(activeImages);

    if (activeImages.length > 0) {
      activeImages[0].classList.remove("active");
    }

    this.classList.add("active");
    document.getElementById("featured").src = this.src;
  });
}

buttonLeft.addEventListener("click", () => {
  document.getElementById("slider").scrollLeft -= 180;
});

buttonRight.addEventListener("click", () => {
  document.getElementById("slider").scrollLeft += 180;
});*/
