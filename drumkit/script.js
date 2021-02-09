
var music = document.querySelector("img");

function once(){
  var love = new Audio("sounds/iloveu.aac")
  love.play();

  music.removeEventListener("click", once);

  setTimeout("location.href = 'https://giphy.com/gifs/yc2pHdAoxVOrJ2m5Ha/tile';", 18000);

}

music.addEventListener("click", once);
