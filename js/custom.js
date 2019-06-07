/*==========================================================
                            SERVICES
=============================================================*/
$(function () {
	//animate on scroll
	new WOW().init();
});
/*==========================================================
                            WORK
=============================================================*/
$(function () {
	$("#work").magnificPopup({
		delegate: 'a', // child items selector, by clicking on it popup will open
		type: 'image',
		// other options
		gallery: {
			enabled: true
		}
	});
});

/*==========================================================
                            TEAM				
=============================================================*/
$(function () {

	$("#team-members").owlCarousel({
		items: 3,
		autoplay: true,
		smartSpeed: 700,
		loop: true,
		autoplayHoverPause: true,
		responsive: {
			// breakpoint from 0 up
			0: {
				items: 1
			},
			// breakpoint from 480 up
			480: {
				items: 2  
			},
			// breakpoint from 768 up
			768: {
				items: 3
			}
		}
	});

});
/*==========================================================
                            Testimonials				
=============================================================*/
$(function () {

	$("#customers-testimonials").owlCarousel({
		items: 1,
		autoplay: true,
		smartSpeed: 700,
		loop: true,
		autoplayHoverPause: true
	});

});


/*==========================================================
                            Stats				
=============================================================*/
$(function () {

	$('.counter').counterUp({

		delay: 10,
		time: 2000
	});

});

/*==========================================================
                            Clients				
=============================================================*/
$(function () {

	$("#clients-list").owlCarousel({
		items: 6,
		autoplay: true,
		smartSpeed: 400,
		loop: true,
		autoplayHoverPause: true,
		responsive: {
			// breakpoint from 0 up
			0: {
				items: 1
			},
			// breakpoint from 480 up
			480: {
				items: 3
			},
			// breakpoint from 768 up
			768: {
				items: 5
			},
			992: {
				items: 6
			}
		}
	});

});
/*==========================================================
                            Navigation
=============================================================*/
$(function () {
	$(window).scroll(function () {
		if ($(this).scrollTop() < 50) {
			$("nav").removeClass("te-top-nav");
			$("#back-to-top").fadeOut();
		} else {
			$("nav").addClass("te-top-nav");
			$("#back-to-top").fadeIn();
		}

	});
});
/*==========================================================
                            Smooth scrolling
=============================================================*/

$(function () {
	$("a.smooth-scroll").click(function (event) {
		event.preventDefault();
		//toget section id
		var section = $(this).attr("href");
		$('html,body').animate({
			scrollTop: $(section).offset().top - 64
		}, 1250, "easeInOutExpo");
	});
});


//Close Mobile menu on click
$(function() {
	
	$(".navbar-collapse ul li a").on("click touch",function(){
		$(".navbar-toggle").click();
	});

});























