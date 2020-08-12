window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  navicon = $(".navIcon");
  if (document.body.scrollTop > 80 || document.documentElement.scrollTop > 80) {
    document.getElementById("myNavbar").style.padding = "10px 10px 2px 10px";
    document.getElementsByClassName("navbar-brand")[0].style.fontSize = "20px";
    document.getElementById("myNavbar").style.backgroundColor = "#232526";
    navicon.attr("width", "45px");
  } else {
    document.getElementById("myNavbar").style.padding = "30px 10px 2px 10px";
    document.getElementsByClassName("navbar-brand")[0].style.fontSize = "35px";
    document.getElementById("myNavbar").style.backgroundColor = "transparent";
    navicon.attr("width", "75px");
  }
}

$('.navbar-toggler').click(function() {
  $('#myNavbar').toggleClass('nav-open');
});

// Init AOS
function aos_init() {
  AOS.init({
    duration: 1000,
    once: true
  });
}
$(window).on('load', function() {
  aos_init();
});