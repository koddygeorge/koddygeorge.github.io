// alert("hi");
var buttonColours = ["red", "blue", "green", "yellow"];

var gamePattern=[];

var userClickedPattern=[];

var randomNumber=0;

var level = 0;

var executed = false;

$("body").keydown(function(){

 if (!executed) {
             $("#level-title").html("Level "+ level);
             nextSequence();
             executed = true;
         }

});

  function nextSequence(){
    userClickedPattern = [];

    level++;
    $("#level-title").html("Level "+ level);

    randomNumber = Math.floor(Math.random() * 4);

    var randomChosenColour = buttonColours[randomNumber];
    // alert(randomChosenColour);
    gamePattern.push(randomChosenColour);

    // $("button #"+randomChosenColour);
    $("#"+randomChosenColour).fadeOut(100).fadeIn(100).fadeOut(100).fadeIn(100);

    playSound(randomChosenColour);



}

function playSound(name){
var audio = new Audio("sounds/" + name + ".mp3");
audio.play();
}
// alert("ok");

 $(".btn").on("click", function () {
   var userChosenColour = this.id;
   // alert(userChosenColour);


   userClickedPattern.push(userChosenColour);

   // console.log(userClickedPattern);
   playSound(userChosenColour);
   animatePress(userChosenColour);
   // return userChosenColour;
   checkAnswer(userClickedPattern.length-1);
 });


function animatePress(currentcolour){
  $("#"+currentcolour).addClass("pressed");

  setTimeout(function(){
    $("#" + currentcolour).removeClass("pressed");
  },100);

}

function checkAnswer(currentLevel){
  if(userClickedPattern[currentLevel] === gamePattern[currentLevel]){
    console.log("success");

    if(userClickedPattern.length === gamePattern.length){

      setTimeout(function(){
        nextSequence();
      },1000);
    }

  }
  else{
    console.log("wrong");
    var wrongaudio = new Audio("sounds/wrong.mp3");
    wrongaudio.play();
    $("body").addClass("game-over");

    setTimeout(function(){
      $("body").removeClass("game-over");
    },200);

    $("#level-title").html("Game Over, Press Any Key to Restart");

    startOver();

  }


}


function startOver(){
  level = 0;
  gamePattern = [];
  executed = false;
}
