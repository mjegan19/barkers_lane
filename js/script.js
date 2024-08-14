/* Toggle between adding and removing the "responsive" class to navbar when the user clicks on the icon */
function myFunction() {
  var x = document.getElementById("hamburger");
  if (x.className === "navbar") {
    x.className += " responsive";
  } else {
    x.className = "navbar";
  }
}