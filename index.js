
var randomNumber1 = Math.floor(Math.random() * 6) + 1; //1-6

var randomDiceImage = "dice" + randomNumber1 + ".png"; //dice1.png - dice6.png

var randomImageSource = "images/" + randomDiceImage; //images/dice1.png - images/dice6.png

var image1 = document.querySelectorAll("img")[0];

image1.setAttribute("src", randomImageSource);


 

var randomDiceImage2 = "Ity" + randomNumber1 + ".jpg"; //dice1.png - dice6.png

var randomImageSource2 = "images/" + randomDiceImage2; //images/dice1.png - images/dice6.png

var image2 = document.querySelectorAll("img")[1];

image2.setAttribute("src", randomImageSource2);



var smiley = "images/"+ randomNumber1 + ".jpeg";

//If player 1 wins
if (randomNumber1 === 1) {
  document.querySelector("h2").innerHTML = "🚩 Ity is taking us out!";
}
else if (randomNumber1=== 2) {
  document.querySelector("h2").innerHTML = "🚩 Nsikak it's your turn this week";
}
else if (randomNumber1 === 3) {
  document.querySelector("h2").innerHTML = "🚩 Dor baby is balling us!";
}
else if (randomNumber1 === 4) {
  document.querySelector("h2").innerHTML = "🚩Stan shake body";
}
else if (randomNumber1 === 5) {
  document.querySelector("h2").innerHTML = "🚩  Odogwu Okwi's hood till mama calls";
}
else if (randomNumber1 === 6) {
  document.querySelector("h2").innerHTML = "🚩 Time for spiritual reflection at Ozor's";
}
else {
  document.querySelector("h2").innerHTML = "Draw!";
}

