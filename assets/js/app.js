let mobileView = document.querySelector(".mobileView")
let menu = document.querySelector("#menu")

menu.addEventListener("click",function(){
  mobileView.classList.toggle("show");
  document.querySelector("body").classList.toggle("overflow-hidden")
})
