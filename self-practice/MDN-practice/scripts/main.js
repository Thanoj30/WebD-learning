const myImage = document.querySelector("img");

myImage.addEventListener("click", () => {
  const mySrc = myImage.getAttribute("src");
  if (mySrc === "images/nature.jpg") {
    myImage.setAttribute("src", "images/image2.jpeg");
  } else {
    myImage.setAttribute("src", "images/nature.jpg");
  }
});