////////////////////////// silde show / Carousel/////////////////////////////
////////////////////////// silde show / Carousel/////////////////////////////
const bannerImages = [
  { path: "../assets/img/bc1.jpg", alt: "biker1" },
  { path: "../assets/img/bc2.jpg", alt: "biker2" },
  { path: "../assets/img/bc3.jpg", alt: "biker3" },
  { path: "../assets/img/bc4.jpg", alt: "biker4" },
];
const rightClick = document.querySelector("#right");
const leftClick = document.querySelector("#left");
const slider = document.querySelector(".silde-show");
const dotsContainer = document.querySelector("#dots");

const dots = [];
let curSlid = 0;

const sliderImages = [];

// creating imges elemnts
for (let i = 0; i < bannerImages.length; i++) {
  const img = document.createElement("img");
  img.src = bannerImages[i].path;
  // img.style.backgroundImage = `url(${bannerImages[i].path})`;
  img.alt = bannerImages[i].alt;
  sliderImages.push(img);
  slider.append(img);
}

// creating dots
for (let i = 0; i < sliderImages.length; i++) {
  dots.push(document.createElement("div"));
  dotsContainer.append(dots[i]);
}
// first dot to red
dots[0].style.backgroundColor = "red";

// initializing images positions
const moveSlide = (curSlid) => {
  sliderImages.forEach((node, i) => {
    node.style.transform = `translateX(${100 * (i - curSlid)}%)`;
  });
};
moveSlide(0);

// changing dots colors
const changeDotColor = (div, i) => {
  const divCopy = div.slice();
  const curDiv = divCopy.splice(i, 1);
  curDiv[0].style.backgroundColor = "red";
  divCopy.forEach((rest) => (rest.style.backgroundColor = "white"));
};

dots.forEach((div, i, all) =>
  div.addEventListener("click", function () {
    curSlid = i;
    moveSlide(curSlid);
    all.forEach((_, i, all) =>
      all[i] === div
        ? (all[i].style.backgroundColor = "red")
        : (all[i].style.backgroundColor = "white")
    );
  })
);

// going forward
const NextSlide = () => {
  if (curSlid === sliderImages.length - 1) {
    curSlid = 0;
  } else {
    curSlid++;
  }
  moveSlide(curSlid);
  changeDotColor(dots, curSlid);
};

// going backwards

const prevSlide = () => {
  if (curSlid === 0) {
    curSlid = sliderImages.length - 1;
  } else {
    curSlid--;
  }

  moveSlide(curSlid);

  changeDotColor(dots, curSlid);
};

rightClick.addEventListener("click", NextSlide);
leftClick.addEventListener("click", prevSlide);

//infinite sliding
setInterval(() => {
  NextSlide();
}, 2000);

////////////////////////// silde show / Carousel/////////////////////////////
////////////////////////// silde show / Carousel/////////////////////////////
