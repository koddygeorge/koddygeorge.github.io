var randomNumber1 = Math.ceil(Math.random() * 6);
document.querySelector(".img1").setAttribute("src","images/dice"+ randomNumber1 +".png");

var randomNumber2 = Math.ceil(Math.random() * 6);
document.querySelector(".img2").setAttribute("src","images/dice"+ randomNumber2 +".png");


if(randomNumber1 > randomNumber2){
  document.querySelector("h1").innerHTML = "<i class='fas fa-flag'></i> Player 1 Wins!";
}
else if(randomNumber1 === randomNumber2){
  document.querySelector("h1").innerHTML = "Draw!";
}
else{
  document.querySelector("h1").innerHTML = "Player 2 Wins!<i class='fas fa-flag'></i>";
}
