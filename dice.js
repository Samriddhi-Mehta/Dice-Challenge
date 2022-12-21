
var randomNumber1=Math.floor((Math.random()*6))+1;
var randomNumber2=Math.floor((Math.random()*6))+1;
var image1=document.getElementsByTagName("img")[0];
var image2=document.getElementsByTagName("img")[1];
image1.setAttribute("src", "images/dice"+randomNumber1+".png");
image2.setAttribute("src", "images/dice"+randomNumber2+".png");

if(randomNumber1==randomNumber2){
document.querySelector("h2").innerHTML="Draw";
}
else if(randomNumber1<randomNumber2){
  document.querySelector("h2").innerHTML="Player2 win";
}
else{
  document.querySelector("h2").innerHTML="Player1 win";
}
