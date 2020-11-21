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



$('.hidden').removeClass('hidden').hide();
$('.toggle-text').click(function () {
    $(this).find('span').each(function () { $(this).toggle(); });
});






var currentTab = 0; // Current tab is set to be the first tab (0)
showTab(currentTab); // Display the current tab

function showTab(n) {
  // This function will display the specified tab of the form...
  var x = document.getElementsByClassName("tab");
  x[n].style.display = "block";
  //... and fix the Previous/Next buttons:
  if (n == 0) {
    document.getElementById("prevBtn").style.display = "none";
  } else {
    document.getElementById("prevBtn").style.display = "inline";
    document.getElementById("hd").style.display = "none";

  }
  if (n == (x.length - 1)) {
    document.getElementById("sbtBtn").style.display = "inline";
    document.getElementById("nextBtn").style.display = "none";
  } else {
    document.getElementById("nextBtn").style.display = "inline";
    document.getElementById("nextBtn").innerHTML = "Next";
    document.getElementById("sbtBtn").style.display = "none";

  }
  //... and run a function that will display the correct step indicator:
  fixStepIndicator(n)
}

function nextPrev(n) {
  // This function will figure out which tab to display
  var x = document.getElementsByClassName("tab");
  // Exit the function if any field in the current tab is invalid:
  // Hide the current tab:
  x[currentTab].style.display = "none";
  document.getElementsByClassName("step")[currentTab].className += " finish";
  // Increase or decrease the current tab by 1:
  currentTab = currentTab + n;
  // if you have reached the end of the form...
  if (currentTab >= x.length) {
    // ... the form gets submitted:
    document.getElementById("regForm").submit();
    return false;
  }

  // Otherwise, display the correct tab:
  showTab(currentTab);

}



function fixStepIndicator(n) {
  // This function removes the "active" class of all steps...
  var i, x = document.getElementsByClassName("step");
  for (i = 0; i < x.length; i++) {
    x[i].className = x[i].className.replace(" active", "");
  }
  //... and adds the "active" class on the current step:
  x[n].className += " active";
}




