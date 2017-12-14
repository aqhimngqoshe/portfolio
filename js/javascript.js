
//dropdown menu
$(function(){
  $('.list').hide();
});

$(function(){
  $('#default').click(function(){
    $('.list').toggle();
  });
});
//Work Experience Button toggle the information(hide/show)
// 2WayTravel Work EXPERIENCE
$(function(){
  $('.2waytravel-caption').hide();
});
// Toggle when pressing the button
$(function(){
  $('#2waytravel-button').click(function(){
    $('.2waytravel-caption').toggle();
  });
});

// iKusasa Lethu Work EXPERIENCE
$(function(){
  $('.ikusasa-caption').hide();
});
// Toggle when pressing the button
$(function(){
  $('#ikusasa-button').click(function(){
    $('.ikusasa-caption').toggle();
  });
});

// Life Choices
$(function(){
  $('.lc-caption').hide();
  function myFunction(x) {
    x.classList.toggle("change");
}
});
//Toggle function
$(function(){
  $('#lifechoices-button').click(function(){
    $('.lc-caption').toggle();
  });
});

// Smooth Scroll BAck to top
$("#back-to-top").click(function() {
    $('html, body').animate({
        scrollTop: $("#home").offset().top
    }, 3000);
});

// jQuery for smooth a href jump links
$('a[href*="#"]')

.click(function(event) {
  // On-page links
  if (
    location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '')
    &&
    location.hostname == this.hostname
  ) {
    // Figure out element to scroll to
    var target = $(this.hash);
    target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
    // if statement for a href existance
    if (target.length) {
      // allows animation to take place over after jump links have been pressed.
      event.preventDefault();
      $('html, body').animate({
        scrollTop: target.offset().top
      }, 2000, function() {
      // Callback after animation
      // changes focus
        var $target = $(target);
        $target.focus();
      });
    }
  }
});
