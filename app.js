$(document).ready(function() {
  console.log( "ready!" );
  $('.parallax').parallax();
  $(".button-collapse").sideNav();
  $('#resume-btn').click(function() {
    $('#resume-modal').modal('open');
  })
  $('.modal').modal();
  $('.carousel.carousel-slider').carousel({full_width: true});
  $('a[href*="#"]:not([href="#"])').click(function() {
  if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
    var target = $(this.hash);
    target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
    if (target.length) {
      $('html, body').animate({
        scrollTop: target.offset().top
      }, 1500);
      return false;
      }
    }
  });
  $('#email-copy').click(function() {
    window.prompt("Copy to clipboard: Cmd+C, Enter", "chriskchan1230@gmail.com");
  })
  $('#project-menu-item-0').click(function() {
    $('#project-carousel').carousel('set', 0);
    $('#project-description-carousel').carousel('set', 0);
    $('#launch-project-btn').attr("href", "https://micdropshootout.herokuapp.com/")
    $('#launch-project-btn').css("border", "2px solid #83CFF6")
  })
  $('#project-menu-item-1').click(function() {
    $('#project-carousel').carousel('set', 1);
    $('#project-description-carousel').carousel('set', 1);
    $('#launch-project-btn').attr("href", "http://cardagram.herokuapp.com/")
    $('#launch-project-btn').css("border", "2px solid #FFB6F8")
  })
  $('#project-menu-item-2').click(function() {
    $('#project-carousel').carousel('set', 2);
    $('#project-description-carousel').carousel('set', 2);
    $('#launch-project-btn').attr("href", "https://trekkster.herokuapp.com/")
    $('#launch-project-btn').css("border", "2px solid white")
  })
  $('#project-menu-item-3').click(function() {
    $('#project-carousel').carousel('set', 3);
    $('#project-description-carousel').carousel('set', 3);
    $('#launch-project-btn').attr("href", "https://shopterra.herokuapp.com/")
    $('#launch-project-btn').css("border", "2px solid #703034")
  })
  $('#project-menu-item-4').click(function() {
    $('#project-carousel').carousel('set', 4);
    $('#project-description-carousel').carousel('set', 4);
    $('#launch-project-btn').attr("href", "https://ckc1230.github.io/blackbeards-revenge/")
    $('#launch-project-btn').css("border", "2px solid #000201")
  })
  $(".project-menu-div").click(function() {
        $(".project-menu-div").removeClass('project-menu-div-active');
        $(this).addClass('project-menu-div-active');
    });      
});