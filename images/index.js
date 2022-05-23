$(document).ready(function () {
	$('.js-section-feature').waypoint(function (direction) {
		if(direction == 'down'){
			$('nav').addClass('sticky');
		}else{
			$('nav').removeClass('sticky');
		}
	},{
		offset:'150px'
	})
})


$('.js-btn-first').click(function(){
	$('html,body').animate({
		scrollTop: $('.js-section-plan').offset().top }, 1500);
});


$('.js-btn-second').click(function(){
	$('html,body').animate({
		scrollTop: $('.js-section-feature').offset().top }, 1000);
});


$('.js-mobile-nav-icon').click(function(){
	$('.js-main-nav').slideToggle(200);
	if($('.js-mobile-nav-icon i').hasClass('fa-bars')){
		$('nav').css("height","180px");
		$('.logo-brand').css('display','none');
		$('.js-mobile-nav-icon i').addClass('fa-times');
		$('.js-mobile-nav-icon i').removeClass('fa-bars');
	}else{
		$('nav').css("height","80px");
		$('.logo-brand')
		.delay(300)
		.queue(function(next) {
			$(this).css('display','inline-block');
			next()
		});
		$('.js-mobile-nav-icon i').addClass('fa-bars');
		$('.js-mobile-nav-icon i').removeClass('fa-times');
	}
})


$('a[href*="#"]')
  // Remove links that don't actually link to anything
  .not('[href="#"]')
  .not('[href="#0"]')
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
      // Does a scroll target exist?
      if (target.length) {
        // Only prevent default if animation is actually gonna happen
        event.preventDefault();
        $('html, body').animate({
          scrollTop: target.offset().top
        }, 1000, function() {
          // Callback after animation
          // Must change focus!
          var $target = $(target);
          $target.focus();
          if ($target.is(":focus")) { // Checking if the target was focused
            return false;
          } else {
            $target.attr('tabindex','-1'); // Adding tabindex for elements not focusable
            $target.focus(); // Set focus again
          };
        });
      }
    }
  });