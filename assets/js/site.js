function sidebar_open() {

    document.getElementById("mySidebar").style.display = "block";
    document.getElementById("myOverlay").style.display = "block";


}

function sidebar_close() {
    document.getElementById("mySidebar").style.display = "none";
    document.getElementById("myOverlay").style.display = "none";

}
function addLocationsidebar_open() {

    document.getElementById("addLocationSidebar").style.display = "block";
    document.getElementById("myOverlay2").style.display = "block";


}

function addLocationsidebar_close() {
    document.getElementById("addLocationSidebar").style.display = "none";
    document.getElementById("myOverlay2").style.display = "none";

}
function sortsidebar_open() {

  document.getElementById("sortsidebar").style.display = "block";
  document.getElementById("myOverlay3").style.display = "block";


}

function sortsidebar_close() {
  document.getElementById("sortsidebar").style.display = "none";
  document.getElementById("myOverlay3").style.display = "none";

}
function filtersidebar_open() {

  document.getElementById("filtersidebar").style.display = "block";
  document.getElementById("myOverlay4").style.display = "block";


}

function filtersidebar_close() {
  document.getElementById("filtersidebar").style.display = "none";
  document.getElementById("myOverlay4").style.display = "none";

}

window.onscroll = function() {myFunction()};

var navbar = document.getElementById("searchbox");
var sticky = navbar.offsetTop;

function myFunction() {
  if (window.pageYOffset >= sticky) {
    navbar.classList.add("sticky")
  } else {
    navbar.classList.remove("sticky");
  }
}