let mobileView = document.querySelector(".mobileView")
let menu = document.querySelector("#menu")
let home =document.querySelector(".home")
let srvice =document.querySelector(".srvice")
let product =document.querySelector(".product")
let about =document.querySelector(".about")

menu.addEventListener("click",function(){
  mobileView.classList.toggle("show");
  document.querySelector("body").classList.toggle("overflow-hidden")
})
