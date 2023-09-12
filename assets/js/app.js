let mobileView = document.querySelector(".mobileView")
let menu = document.querySelector("#menu")
let span4 = document.querySelector(".span4")
let span5 = document.querySelector(".span5")
let span6 = document.querySelector(".span6")

menu.addEventListener("click",function(){
  mobileView.classList.toggle("show");
  document.querySelector("body").classList.toggle("overflow-hidden")
  span4.classList.toggle("span1")
  span5.classList.toggle("span2")
  span6.classList.toggle("span3")
})
