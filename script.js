let saveherbutton = document.querySelector(".saveherbutton")
let ignorebutton = document.querySelector(".ignorebutton")
let bowser = document.querySelector(".bowserpic")
let showtext = document.querySelector(".option-one-screen-text")
let buttons2 = document.querySelector(".buttons2")
let fightbow = document.querySelector(".fightbowbutton")
let fightsword = document.querySelector(".fightswordbutton")
let storyopening = document.querySelector(".story-opening")
let title = document.querySelector(".title")
let html = document.querySelector("html")
let option1screen = document.querySelector(".option-one-screen")
let option1end = document.querySelector(".option-one-end")
let option2screen = document.querySelector(".option-two-screen")
let option2end = document.querySelector(".option-two-end")
let goinside = document.querySelector(".goinsidebutton")
let goaboutday = document.querySelector(".goaboutdaybutton")
let plant = document.querySelector(".plant")
let end = document.querySelector(".end")
let text = document.querySelector(".text")
window.onload = function() {
  option1screen.style.display = "none";
  option1end.style.display = "none";
  option2screen.style.display = "none";
  option2end.style.display = "none";
  plant.style.display = "none";
}

saveherbutton.onclick = function() {
  option1screen.style.display = "block";
  storyopening.style.display = "none";
  title.style.display = "none";
  bowser.style.display = "block";
  saveherbutton.style.display = "none";
  ignorebutton.style.display = "none";
  buttons2.style.display = "block";
}
ignorebutton.onclick = function() {
  option2screen.style.display = "block";
  storyopening.style.display = "none";
  title.style.display = "none";
  saveherbutton.style.display = "none";
  ignorebutton.style.display = "none";
}
goaboutday.onclick = function() {
  plant.style.display = "block";
  option2screen.style.display = "none";
  document.getElementById("text").innerHTML = "You Died to Bowser's Piranha Plant";
}
goinside.onclick = function() {
  document.body.innerHTML = "Cave monster ate you :/";
}
fightbow.onclick = function() {
  option1end.style.display = "block";
  option1screen.style.display = "none";
}
fightsword.onclick = function() {
  option2end.style.display = "block";
  option1screen.style.display = "none";
}