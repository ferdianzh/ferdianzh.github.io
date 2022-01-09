window.onscroll = function () {
  var nav = document.querySelector(".navbar");
  var title = document.querySelector(".title");
  if (window.pageYOffset > 400) {
    nav.classList.add("navbar-border");
    title.classList.add("text-dark");
    document.getElementsByClassName("link")[0].style.color = "black";
    document.getElementsByClassName("link")[1].style.color = "black";
    document.getElementsByClassName("link")[2].style.color = "black";
    if (window.innerWidth < 700) {
      document.getElementsByClassName("link")[3].style.color = "black";
    } else {
      document.getElementsByClassName("link")[3].style.color = "white";
    }
  } else {
    nav.classList.remove("navbar-border");
    title.classList.remove("text-dark");
    document.getElementsByClassName("link")[0].style.color = "white";
    document.getElementsByClassName("link")[1].style.color = "white";
    document.getElementsByClassName("link")[2].style.color = "white";
    document.getElementsByClassName("link")[3].style.color = "white";
  }
};
