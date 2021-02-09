
var numberOfDrumButtons = document.querySelectorAll(".drum").length;

for (var i = 0; i< numberOfDrumButtons; i++) {

  document.querySelectorAll(".drum")[i].addEventListener("click", function () {

    var buttonInnerHtml = this.innerText;

makesound(buttonInnerHtml);

buttonAnimation(buttonInnerHtml);

  });

}


document.addEventListener("keydown",function(event){

  makesound(event.key);

  buttonAnimation(event.key);
});

function makesound(key){

  switch (key) {
    case "w":
      var tom1 = new Audio("sounds/tom-1.mp3");
      tom1.play();
      break;

    case "a":
      var tom2 = new Audio("sounds/tom-2.mp3");
      tom2.play();
      break;
    case "s":
      var tom3 = new Audio("sounds/tom-3.mp3");
      tom3.play();
      break;
    case "d":
      var tom4 = new Audio("sounds/tom-4.mp3");
      tom4.play();
      break;
    case "j":
      var snare = new Audio("sounds/snare.mp3");
      snare.play();
      break;
    case "k":
      var crash = new Audio("sounds/crash.mp3");
      crash.play();
      break;
    case "l":
      var kick = new Audio("sounds/kick-bass.mp3");
      kick.play();
      break;

    default: console.log(event.key);
}
}


function buttonAnimation(currentkey){

  var activebutton = document.querySelector("." + currentkey);

  activebutton.classList.add("pressed");

  setTimeout(function(){
    activebutton.classList.remove("pressed");
  }, 100);





}



//
// function audio1(){
//
// }
// function audio2(){
// var tom2 = new Audio("sounds/tom-2.mp3");
// tom2.play();
// }
// function audio3(){
// var tom3 = new Audio("sounds/tom-3.mp3");
// tom3.play();
// }
// function audio4(){
// var tom4 = new Audio("sounds/tom-4.mp3");
// tom4.play();
// }
// function audio5(){
// var snare = new Audio("sounds/snare.mp3");
// snare.play();
// }
// function audio6(){
// var crash = new Audio("sounds/crash.mp3");
// crash.play();
// }
// function audio7(){
// var kick = new Audio("sounds/kick-bass.mp3");
// kick.play();
// }
//
// document.querySelector(".w").addEventListener("click", audio1);
// document.querySelector(".a").addEventListener("click", audio2);
// document.querySelector(".s").addEventListener("click", audio3);
// document.querySelector(".d").addEventListener("click", audio4);
// document.querySelector(".j").addEventListener("click", audio5);
// document.querySelector(".k").addEventListener("click", audio6);
// document.querySelector(".l").addEventListener("click", audio7);
