var navHeight = document.getElementById("nav").getBoundingClientRect().height;
var navHamburgerClickedOn = false


var foldImgHeight = window.innerHeight - navHeight
var foldTextHeight


var locationDiensten 
var locationZaak 
var locationOpeningstijden 
var locationContact 
var locationFooter
var atStart = false
var atDiensten = false
var atZaak = false
var atOpeningstijden = false
var atContact = false
var atFooter = false


var dienstenHeight3Elements
var dienstenHeightAllElements = 0
var gridImgs
var dienstenMaxHeightMobile


var zaakImagesHeight
var zaakImagesArrows
var zaakImagesArrowsHeight
var zaakImagesArrowsMargin
var zaakImagesWidth
var zaakMiniImages
var zaakCurrentImgNumber = 0
var zaakAllImgsNumber = 0

var zaakImagesCounterWidth
var zaakImagesMiniCounterWidth
var zaakCurrentImgNumberScroll = 0
var zaakCurrentImgMiniNumberScroll = 0
var previousImgNumber = 0
var previousImgMiniNumber = 0

var zaakAllImgs
var zaakOneImg

document.getElementById("foldImg").style.height = foldImgHeight + "px"

const weekday = ["sunday","monday","tuesday","wednesday","thursday","friday","saturday"];
const date = new Date();
//const date = new Date("September 9, 2023 01:15:00");
let day = weekday[date.getDay()];
document.getElementById(day).style.fontWeight = 700
document.getElementById(day + "Time").style.fontWeight = 700
document.getElementById(day).style.textDecoration = "underline"
document.getElementById(day + "Time").style.textDecoration = "underline"

window.onload = function(){
  if(window.innerWidth < 768){
    zaakAllImgs = document.getElementById('zaakImages').getElementsByTagName('img')
    zaakAllImgsNumber = zaakAllImgs.length
    zaakImagesCounterWidth = document.getElementById('zaakImages').getElementsByTagName('img')[0].getBoundingClientRect().width
    zaakImagesMiniCounterWidth = document.getElementById('zaakImagesMini').getElementsByTagName('img')[0].getBoundingClientRect().width

    document.getElementById('zaakImagesCountertotalImgs').innerHTML = zaakAllImgsNumber
    document.getElementById('zaakImagesMiniCountertotalImgs').innerHTML = zaakAllImgsNumber
    
    var zaakOneImg = zaakAllImgs[0]
    var zaakOneImgRatio = zaakOneImg.naturalWidth/zaakOneImg.naturalHeight
    var zaakOneImgWidth = zaakOneImg.width
    var zaakOneImgHeight = zaakOneImg.width/zaakOneImgRatio
    var zaakImagesCounterBottom = (window.visualViewport.height / 2) - (zaakOneImgHeight / 2)
    var zaakImagesXTop = zaakImagesCounterBottom - document.getElementById('zaakImagesX').getBoundingClientRect().height - 5
    document.getElementById('zaakImagesX').style.top = zaakImagesXTop + "px"
    document.getElementById('zaakImagesCounter').style.bottom = zaakImagesCounterBottom + "px"
  }
  if(window.innerWidth < 1024){
    foldTextHeight = document.getElementById('foldText').getBoundingClientRect().height
    document.getElementById('foldText').style.top = ((foldImgHeight / 2) - (foldTextHeight / 2)) + "px"
  }

  gridImgs = document.getElementsByClassName("gridImg")
  if(gridImgs.length > 3){
    dienstenHeight3Elements =  gridImgs[0].getBoundingClientRect().height + gridImgs[1].getBoundingClientRect().height + gridImgs[2].getBoundingClientRect().height
    dienstenHeightAllElements = document.getElementById("dienstenGrid").scrollHeight
    if(window.innerWidth < 768){
      //document.getElementById("dienstenGrid").style.maxHeight = (dienstenHeight3Elements * 1.5) + "px"
      dienstenMaxHeightMobile = (dienstenHeightAllElements / gridImgs.length * 1.5)
      document.getElementById("dienstenGrid").style.maxHeight = dienstenMaxHeightMobile + "px"
    }else{
      document.getElementById("dienstenGrid").style.maxHeight = dienstenHeight3Elements + "px"
    }
  }

  zaakImagesHeight = document.getElementById("zaakImages").getBoundingClientRect().height;
  zaakImagesArrows = document.getElementsByClassName("zaakImagesArrowBtns")
  zaakImagesArrowsHeight = zaakImagesArrows[0].getBoundingClientRect().height;
  zaakImagesArrowsMargin = (zaakImagesHeight / 2) - (zaakImagesArrowsHeight / 2)
  for (var i = 0; i < zaakImagesArrows.length; i++) {
    zaakImagesArrows[i].style.marginTop = zaakImagesArrowsMargin + "px";
  }
  zaakImagesWidth = document.getElementById("zaakImages").getBoundingClientRect().width;
  zaakMiniImages = document.getElementById("zaakImagesMini").getElementsByTagName("img");

  resetNavVaules()
  runOnScroll()
  window.addEventListener("scroll", runOnScroll);
}

function resetNavVaules(){
  locationDiensten = window.pageYOffset + document.getElementById("diensten").getBoundingClientRect().top
  locationZaak = window.pageYOffset + document.getElementById("zaak").getBoundingClientRect().top
  locationOpeningstijden = window.pageYOffset + document.getElementById("openingstijden").getBoundingClientRect().top
  locationContact = window.pageYOffset + document.getElementById("contact").getBoundingClientRect().top
  locationFooter = window.pageYOffset + document.getElementById("footer").getBoundingClientRect().top
}

function runOnScroll() {
  if(window.scrollY < (Math.floor(locationDiensten - navHeight)) && atStart == false){
    selectNav("Start")
    atStart = true
  }else if (window.scrollY >= (Math.floor(locationDiensten - navHeight)) && window.scrollY < (Math.floor(locationZaak - navHeight)) && atDiensten == false) {
    selectNav("Diensten")
    atDiensten = true
  }else if (window.scrollY >= (Math.floor(locationZaak - navHeight)) && window.scrollY < (Math.floor(locationOpeningstijden - navHeight)) && atZaak == false) {
    selectNav("Zaak")
    atZaak = true
  }else if (window.scrollY >= (Math.floor(locationOpeningstijden - navHeight)) && window.scrollY < (Math.floor(locationContact - navHeight)) && atOpeningstijden == false) {
    selectNav("Openingstijden")
    atOpeningstijden = true
  }else if (window.scrollY >= (Math.floor(locationContact - navHeight)) && window.scrollY < (Math.floor(locationFooter - navHeight)) && atContact == false) {
    selectNav("Contact")
    atContact = true
  }else if (window.scrollY >= (Math.floor(locationFooter - navHeight)) && atFooter == false){
    selectNav("Footer")
    atFooter = true
  }
}; 
function selectNav(correctNavBtn){
  var allNavBtns = document.getElementsByClassName("navText")
  for (var i = 0; i < allNavBtns.length; i++) {
    allNavBtns[i].classList.remove("navTextSelected")
  }
  atStart = false
  atDiensten = false
  atZaak = false
  atOpeningstijden = false
  atContact = false
  atFooter = false
  if(correctNavBtn == "Start"){
    document.getElementById('navBtn').style.visibility = "hidden"
  }
  if(correctNavBtn !== "Start" && correctNavBtn !== "Footer"){
    document.getElementById("nav" + correctNavBtn).classList.add("navTextSelected");
    document.getElementById('navBtn').style.visibility = "visible"
  }
}
function navTop(){
  if(window.innerWidth < 1024 && navHamburgerClickedOn == true){
    openHamburgerMenu()
    setTimeout(function(){
      window.scrollTo(0, 0)
    }, 250)
  }else{
    window.scrollTo(0, 0)
  }
}
function navigate(navElement){
  let element = document.getElementById(navElement)
  var bodyRect = document.body.getBoundingClientRect(),
    elemRect = element.getBoundingClientRect(),
    offset   = elemRect.top - bodyRect.top;
    offset = offset - navHeight;
    if(window.innerWidth < 1024 && navHamburgerClickedOn == true){
      openHamburgerMenu()
      setTimeout(function(){
        window.scrollTo(0, offset)
      }, 250)
    }else{
      window.scrollTo(0, offset)
    }
}
function openHamburgerMenu(){
  if(navHamburgerClickedOn == false){
    document.getElementById('hamburgerMenu').style.rotate = '-90deg'
    document.getElementById('navUl').classList.add('navUlSelected')
    document.getElementsByTagName('body')[0].style.overflow = 'hidden'
    document.getElementById("navUl").style.paddingTop = (navHeight + (navHeight / 2)) + "px"
    document.getElementById("navUl").style.paddingBottom = navHeight + "px"
    navHamburgerClickedOn = true
  }else{
    document.getElementById('hamburgerMenu').style.rotate = '0deg'
    document.getElementById('navUl').classList.remove('navUlSelected')
    document.getElementsByTagName('body')[0].style.overflow = 'auto'
    document.getElementById("navUl").style.paddingTop = "0px"
    document.getElementById("navUl").style.paddingBottom = "0px"
    navHamburgerClickedOn = false
  }
}

function dienstenMore(){
  if(document.getElementById("dienstenGridBtn").innerHTML.includes("Meer")){
    document.getElementById("dienstenGrid").style.maxHeight = dienstenHeightAllElements + "px"
    document.getElementById("dienstenGrid").style.webkitMaskImage = "none"
    document.getElementById("dienstenGridBtn").innerHTML = "Minder"
    document.getElementById("diensten").style.paddingBottom = "110px"
    setTimeout(function(){
      resetNavVaules()
    }, 500);
  }else if(document.getElementById("dienstenGridBtn").innerHTML = "Minder"){
    if(window.innerWidth < 768){
      setTimeout(function(){
        document.getElementById("dienstenGrid").style.maxHeight = dienstenMaxHeightMobile + "px"
      }, 100);
      window.scrollBy(0, -(dienstenHeightAllElements - dienstenMaxHeightMobile))
    }else{
      document.getElementById("dienstenGrid").style.maxHeight = dienstenHeight3Elements + "px"
    }
    document.getElementById("dienstenGrid").style.webkitMaskImage = "-webkit-gradient(linear, left 70%, left bottom, from(rgba(0,0,0,1)), to(rgba(0,0,0,0)))"
    document.getElementById("dienstenGridBtn").innerHTML = "Meer"
    document.getElementById("diensten").style.paddingBottom = "2.5rem"
    if(window.innerWidth < 768){
      setTimeout(function(){
        resetNavVaules()
      }, 700);
    }else{
      setTimeout(function(){
        resetNavVaules()
      }, 500);
    }
  }
}

function zaakSlideImageToLeft(){
  if(zaakCurrentImgNumber > 0){
    zaakCurrentImgNumber = zaakCurrentImgNumber - 1
    zaakSlideImages(zaakCurrentImgNumber)
  }
}
function zaakSlideImageToRight(){
  if(zaakCurrentImgNumber < (zaakMiniImages.length - 1)){
    zaakCurrentImgNumber = zaakCurrentImgNumber + 1
    zaakSlideImages(zaakCurrentImgNumber)
  }
}
function zaakSlideImages(numberImg){
  var scrollImageTo = zaakImagesWidth * numberImg
  document.getElementById("zaakImages").scrollTo(scrollImageTo, 0)

  zaakCurrentImgNumber = numberImg
  if(window.innerWidth < 768){
    document.getElementById('zaakImages').style.visibility = 'visible'
    document.getElementsByTagName('body')[0].style.overflow = "hidden"
    document.getElementById('zaakImagesCounterCurrentImg').innerHTML = zaakCurrentImgMiniNumberScroll + 1
    previousImgNumber = zaakCurrentImgNumberScroll
  }else{
    zaakSelectCorrectMiniImage()
  }
}
function zaakSelectCorrectMiniImage(){
  for(var i = 0; i < zaakMiniImages.length; i++) {
    if(zaakMiniImages[i].classList.contains("selected")){
      zaakMiniImages[i].classList.remove("selected")
    }
  }
  zaakMiniImages[zaakCurrentImgNumber].classList.add("selected")
}
document.getElementById('zaakImages').addEventListener("scroll", updateZaakImagesCounter)
function updateZaakImagesCounter(){
  zaakCurrentImgNumberScroll = Math.floor(document.getElementById('zaakImages').scrollLeft / zaakImagesCounterWidth)
  if(zaakCurrentImgNumberScroll != previousImgNumber){
    document.getElementById('zaakImagesCounterCurrentImg').innerHTML = zaakCurrentImgNumberScroll + 1
    previousImgNumber = zaakCurrentImgNumberScroll
  }
}
document.getElementById('zaakImagesMini').addEventListener("scroll", updateZaakImagesMiniCounter)
function updateZaakImagesMiniCounter(){
  zaakCurrentImgMiniNumberScroll = Math.floor(document.getElementById('zaakImagesMini').scrollLeft / zaakImagesMiniCounterWidth)
  if(zaakCurrentImgMiniNumberScroll != previousImgMiniNumber){
    document.getElementById('zaakImagesMiniCounterCurrentImg').innerHTML = zaakCurrentImgMiniNumberScroll + 1
    previousImgMiniNumber = zaakCurrentImgMiniNumberScroll
  }
}
function closeZaakImagesPopUp(){
  document.getElementById('zaakImages').style.visibility = 'hidden'
  document.getElementsByTagName('body')[0].style.overflow = "auto"
}