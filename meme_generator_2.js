var count = 1;
//function that is run when submit button is clicked
function createMeme() {
  var topText = document.getElementById("top"); //select text input from top box
  var bottomText = document.getElementById("bottom"); //select text input from bottom box
  var firstDiv = document.createElement("div"); //create first div that will have text from top box
  var secondDiv = document.createElement("div"); //create bottom div that will have text from bottom box
  styleDivs(firstDiv, secondDiv, topText, bottomText);
  var addFirst = document.getElementById("whole-page"); //select section of page to add image and divs
  var imageUrl = document.getElementById("url"); //select url box;
  var newImg = document.createElement("img"); //create new img element
  styleImage(newImg, imageUrl);
  addListenersToImage(newImg);
  count++;
  appendImgandDivs(newImg, firstDiv, secondDiv); // use function to add images and divs to page
  clearTextBoxes(topText, imageUrl, bottomText); // use function clear text boxes after submitting meme.
}

//FUNCTIONS USED

function styleDivs(firstDiv, secondDiv, topText, bottomText) {
  firstDiv.className = "style-top"; //add class to top div
  secondDiv.className = "style-bottom"; //add class to bottom div
  firstDiv.innerHTML = topText.value; //add inner text from top box to top div
  secondDiv.innerHTML = bottomText.value;
}


function styleImage(newImg, imageUrl) {
  newImg.className = "images"; //assign class to image element
  newImg.id = "id" + count;; //add id to image element
  newImg.setAttribute("src", imageUrl.value);
}



function addListenersToImage(newImg) {
  newImg.addEventListener("mouseover", function() { //add event listener to image for hover effect
    this.className = "hover-image";
  }, false);
  newImg.addEventListener("mouseout", function() { //add event listener to image for mouseout
    this.className = "images";
  }, false);
  newImg.addEventListener("click", function() { //add event listener for click on image to delete image and divs;
    var second = this.nextElementSibling;
    second.nextElementSibling.remove();
    this.nextElementSibling.remove();
    this.remove();
  }, false);
}

function appendImgandDivs(image, first, second) {
  var addFirst = document.getElementById("whole-page");
  addFirst.appendChild(image); //append image to page
  addFirst.appendChild(first); //append top div to page
  addFirst.appendChild(second); //append bottom div to page
}


function clearTextBoxes(top, middle, bottom) {
  top.value = ""; //cler text from top box
  middle.value = ""; //clear text from url box
  bottom.value = ""; //clear text from bottom box
}
