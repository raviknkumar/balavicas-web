window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 80 || document.documentElement.scrollTop > 80) {
    document.getElementById("myNavbar").style.padding = "10px 10px 2px 10px";
    document.getElementsByClassName("navbar-brand")[0].style.fontSize = "20px";
    document.getElementById("myNavbar").style.backgroundColor = "#232526";
  } else {
    document.getElementById("myNavbar").style.padding = "30px 10px 2px 10px";
    document.getElementsByClassName("navbar-brand")[0].style.fontSize = "35px";
    document.getElementById("myNavbar").style.backgroundColor = "transparent";
  }
}

$('.navbar-toggler').click(function() {
  $('#myNavbar').toggleClass('nav-open');
});