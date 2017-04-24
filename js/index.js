
  if($('section').height() < window.innerHeight) {
    $('section').height(window.innerHeight);
  }

$(document).ready(function() {

  $('a[href*="#"]:not([href="#"])').click(function() {
    if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
      if (target.length) {
        $('html, body').animate({
          scrollTop: target.offset().top,
        }, 1000);
        return false;
      }
    }
  });

  // inView.threshold(1);
  inView.threshold(0.5);
  inView('#home')
    .on('enter', function(target){
      console.log(target);
      $('.navbar-inverse').animate({
        backgroundColor: 'rgba(78, 205, 196, 1)'
      }, 1000);
    });

  inView('#about')
    .on('enter', function(target){

      console.log(target);
      $('.navbar-inverse').animate({
        backgroundColor:$(target).css('background-color')
      }, 1000);
    });

  inView('#portfolio')
    .on('enter', function(target){
      console.log(target);
      $('.navbar-inverse').animate({
        backgroundColor:$(target).css('background-color')
      }, 1000);
    });

  inView('#contact')
    .on('enter', function(target){
      console.log(target);
      $('.navbar-inverse').animate({
        backgroundColor:$(target).css('background-color')
      }, 1000);
      $('.navbar-brand').animate({
        color: 'rgba(247, 247, 255, 1)'
      }, 1000);
    })
    .on('exit', function(){
      $('.navbar-brand').animate({
        color: 'rgba(236, 78, 32, 1)'
      }, 1000);
    });








});
