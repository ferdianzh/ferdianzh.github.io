window.onscroll = navbarBehavior;

function navbarBehavior() {
   var pos = window.pageYOffset;
   if (pos >= 597 ) {
      document.getElementById("navbar").style.top = "0";
   } else {
      document.getElementById("navbar").style.top = "-60px";
   }
}