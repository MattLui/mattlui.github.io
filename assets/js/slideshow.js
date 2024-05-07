var images = [
  "images/rekwestbin1.png",
  "images/rekwestbin2.png",
  "images/rekwestbin3.png",
];
var currentIndex = 0;

function changeImage() {
  currentIndex++;
  if (currentIndex >= images.length) {
    currentIndex = 0;
  }
  var imgElement = document.getElementById("slideshow");
  imgElement.src = images[currentIndex];
}

setInterval(changeImage, 3000);
