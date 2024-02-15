var images = ["1bonus.avif", "2bonus.avif", "3bonus.avif"];
var current = 0;

window.onload = () => {
  let img = document.getElementById("image");
  let buttonLeft = document.getElementById("left");
  let buttonRight = document.getElementById("right");

  
  buttonLeft.addEventListener("click", () => {
    if(--current<0)
      current=images.length-1;
    img.src = images[current];
  });
  buttonRight.addEventListener("click", () => {
    current= ++current%3;
    img.src = images[current];
  });
};