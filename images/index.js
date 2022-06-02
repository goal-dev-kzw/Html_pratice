$(window).on("load",function () {
	$('#status').fadeOut(1000);
	$('#preloader').delay(1100).fadeOut(1000);
})


$(document).ready(function () {
	$(".owl-carousel").owlCarousel({
		loop:true,
		margin:10,
		nav:true,
		dots:false,
		autoplay:true,
		responsive:{
			0:{
				items:1
			},
			1000:{
				items:2
			}
		}
	})
})


$(document).ready(function(){
	$("#progress-elements").waypoint(
		function () {
			$('.progress-bar').each(function () {
				$(this).animate(
				{
					width: $(this).attr('aria-valuenow') + "%"
				},
				3000);
			});
			this.destroy();
		},{
			offset:"bottom-in-view"
		}
		)
})