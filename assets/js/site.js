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