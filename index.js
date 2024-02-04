var randomNumber = Math.floor(Math.random()*6)+1;

var randomeImageSource = "images/dice"+randomNumber+".png";

document.getElementsByTagName("img")[0].setAttribute("src", randomeImageSource);


var randomNumber2 = Math.floor(Math.random()*6)+1;

var randomImage2 = "images/dice"+randomNumber2+".png";

document.getElementsByTagName("img")[1].setAttribute("src", randomImage2);

if(randomNumber>randomNumber2){
  document.getElementsByTagName("h1")[0].innerHTML = "🚩 Play 1 Wins!";
}
else if(randomNumber<randomNumber2){
  document.getElementsByTagName("h1")[0].innerHTML = "Play 2 Wins! 🚩";
}
else if(randomNumber==randomNumber2){
  document.getElementsByTagName("h1")[0].innerHTML = "draw";
}