const cards = document.querySelectorAll(".news");

cards.forEach((card, index) => {
  const link = card.querySelector("a");
  link.href = `http://127.0.0.1:5500/productDetails.html?bikeId=${index}`;
});
