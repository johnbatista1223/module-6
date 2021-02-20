var grow = document.getElementById("button1");
var colorB = document.getElementById("button2");
var fadeAway = document.getElementById("button3");
var ResetB = document.getElementById("button4");
var all = ["button1", "button2", "button3"];

grow.addEventListener("click", function(){
document.getElementById("box").style.height=("250px")
});

colorB.addEventListener("click", function(){
document.getElementById("box").style.backgroundColor=("blue")
});

fadeAway.addEventListener("click", function(){
document.getElementById("box").style.opacity="0.5"
});

ResetB.addEventListener("click", function(){
document.getElementById("box").style.opacity="50"
document.getElementById("box").style.backgroundColor=("orange")
document.getElementById("box").style.height=("150px")
});