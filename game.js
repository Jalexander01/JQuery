var gamePattern[];
var buttonColours = ["red", "blue", "green", "yellow"];
   $("h1").on("mouseenter", function(){
     $("h1").css("color", "red");
   });
   $("h1").on("mouseleave", function(){
     $("h1").css("color", "#FEF2BF");
   });


function nextsequence(){
  var randomNumber = Math.floor(Math.random() * 4);
  return randomNumber;
 }

var randomChosenColor = buttonColours[nextsequence()];
gamePattern.push(randomChosenColor);
