let viewFactor;
var checkWidth = function () {
    // set the correct configuration object
    if (window.innerWidth < 768) {
        viewFactor = 0.4;
    } else {
        viewFactor = 0.4;
    }
};

window.sr = ScrollReveal();
checkWidth();

sr.reveal('.navbar', {
    duration: 2000,
    origin: 'bottom'
});
sr.reveal('.showcase-left', {
    duration: 2000,
    origin: 'top',
    distance: '300px',
    viewFactor: 0.6,
});
sr.reveal('.showcase-right', {
    duration: 2000,
    origin: 'right',
    distance: '300px'
});
sr.reveal('.showcase-btn', {
    duration: 2000,
    delay: 2000,
    origin: 'bottom'
});
sr.reveal('#testimonial div', {
    duration: 2000,
    origin: 'bottom'
});
sr.reveal('.info-left', {
    duration: 2000,
    origin: 'left',
    distance: '200px',
    viewFactor,
});
sr.reveal('.info-right', {
    duration: 2000,
    origin: 'right',
    distance: '10%',
    viewFactor
});
sr.reveal('.info-bottom', {
    duration: 2000,
    origin: 'bottom',
    distance: '200px',
    viewFactor,
});

//sr.reveal('.info-bottom-resp', config);

  window.addEventListener( 'resize', checkWidth );