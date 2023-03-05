/**
* internal linkスムーズスクロール
*/
$(function() {
  $('a[href*="#"]:not([href="#"])').click(function() {
    if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') &&
    location.hostname == this.hostname) {
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
      if (target.length) {
        $('html, body').animate({
          scrollTop: target.offset().top
        }, 1000);
        return false;
      }
    }
  });
});

/**
* external linkスムーズスクロール
*/
$(function() {
  setTimeout(function() {
    if (location.hash) {
      window.scrollTo(0, 0);
      target = location.hash.split('#');
      smoothScrollTo($('#' + target[1]));
    }
  }, 1);
  
  /**
  * taken from: https://css-tricks.com/snippets/jquery/smooth-scrolling/
  */
  $('a[href*="#"]:not([href="#"])').click(function() {
    if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') &&
    location.hostname == this.hostname) {
      smoothScrollTo($(this.hash));
      return false;
    }
  });
  
  function smoothScrollTo(target) {
    target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
    
    if (target.length) {
      $('html,body').animate({
        scrollTop: target.offset().top
      }, 1000);
    }
  }
});

$(function() {
  $(".gnav li a").click(function () {
    $(".gnav li a").removeClass("active");
    $(this).addClass("active");   
  });
});

$(function() {
  $('.toggle').click(function(e) {
    e.preventDefault();
    $(this).toggleClass("active").next().slideToggle();
  });
});

$(document).ready(function(){
  $("div[id^='myModal']").each(function(){
    
    var currentModal = $(this);
    
    //click next
    currentModal.find('.btn-next').click(function(){
      currentModal.modal('hide');
      currentModal.closest("div[id^='myModal']").nextAll("div[id^='myModal']").first().modal('show');
    });
    
    //click prev
    currentModal.find('.btn-prev').click(function(){
      currentModal.modal('hide');
      currentModal.closest("div[id^='myModal']").prevAll("div[id^='myModal']").first().modal('show');
    });   
  });
});


