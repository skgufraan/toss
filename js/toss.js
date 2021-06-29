var randomNumber1 = Math.floor(Math.random() * 6 + 1);
var randomNumber2 = Math.floor(Math.random() * 6 + 1);

var image1 = "images/dice"+ randomNumber1 +".png";
var image2 = "images/dice"+ randomNumber2 +".png";

document.querySelector(".dice .img1").setAttribute("src", image1);
document.querySelector(".dice .img2").setAttribute("src", image2);


if (image1 > image2) {
    document.querySelector("h1").innerHTML = "Player 1 Wins!";
}
else if (image1 < image2) {
    document.querySelector("h1").innerHTML = "Player 2 Wins!";
}  else {
    document.querySelector("h1").innerHTML = "Draw!";
}