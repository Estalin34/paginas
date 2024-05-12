const prevBTN = document.getElementById("prevBTN");
const nextBTN = document.getElementById("nextBTN");
const images = document.querySelectorAll(".carousel-images img");

let currentIndex = 0;

function showImage(index) {
  images.forEach((image) => (image.style.display = "none"));
  images[index].style.display = "block";
}

function nextImage() {
  currentIndex++;
  if (currentIndex >= images.length) {
    currentIndex = 0;
  }
  showImage(currentIndex);
}
function prevImage() {
  currentIndex--;
  if (currentIndex < 0) {
    currentIndex = images.length - 1;
  }
  showImage(currentIndex);
}

nextBTN.addEventListener("click", nextImage);
prevBTN.addEventListener("click", prevImage);

setInterval(nextImage, 3000); // Cambiar imagen cada 3 segundos
