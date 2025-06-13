const colorBtn = document.querySelector("#colorBtn");
let isYellow = false;

colorBtn.addEventListener("click", function () {
  if (isYellow) {
    document.body.style.backgroundColor = "white";
    colorBtn.textContent = "Turn Yellow";
  } else {
    document.body.style.backgroundColor = "yellow";
    colorBtn.textContent = "Turn White";
  }

  isYellow = !isYellow;
});

const button = document.getElementById("sizeBtn");
const paragraph = document.getElementById("resizeText");

button.addEventListener("click", function () {
  paragraph.classList.toggle("large-text");

  if (paragraph.classList.contains("large-text")) {
    button.textContent = "Reset Text Size";
  } else {
    button.textContent = "Enlarge Text";
  }
});

const imgBtn = document.getElementById("animalBtn");
const image = document.getElementById("animal");

let isCat = true;

imgBtn.addEventListener("click", function () {
  if (isCat) {
    image.src =
      "https://www.shutterstock.com/image-photo/criminal-dog-police-station-photo-600nw-1038692722.jpg";
    imgBtn.textContent = "Show cat";
  } else {
    image.src =
      "https://www.shutterstock.com/image-vector/bad-boy-cat-sunglasses-holding-600nw-1904727058.jpg";
    imgBtn.textContent = "Show dog";
  }
  isCat = !isCat;
});

const countBtn = document.querySelector("#countBtn");
const counter = document.querySelector("#count");

let clickCount = 0;

countBtn.addEventListener("click", function () {
  clickCount++;

  counter.textContent = clickCount;
});
