const pButton = document.getElementById("p-button");
const imgButton = document.getElementById("img-button");
const pDiv = document.getElementById("p-div");
const imgDiv = document.getElementById("img-div");

function addParagraph() {
  pDiv.style.display = "block";
  imgDiv.style.display = "none";

  const newParagraph = document.createElement("p");
  newParagraph.textContent = "Hot chocolate is bad today!";
  
  pDiv.appendChild(newParagraph);
}

function addImage() {
  imgDiv.style.display = "block";
  pDiv.style.display = "none";

  const newImage = document.createElement("img");
  newImage.src = "images/image.png";
  
  imgDiv.appendChild(newImage);
}

pButton.addEventListener("click", addParagraph);
imgButton.addEventListener("click", addImage);
