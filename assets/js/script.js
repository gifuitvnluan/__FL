$(document).ready(function () {

	// $('.fancybox').fancybox();

	// Page middlemen
	$("#sec_middlemen").height($(document).height() - $(".ft_middlemen").height());

	$("#sec_middlemen>a").hover(
		function () {
			$("#sec_middlemen>a").addClass("a_nohover");
			$(this).removeClass("a_nohover");
			$(this).addClass("a_hover");
		},
		function () {
			$(this).removeClass("a_hover");
			$("#sec_middlemen>a").removeClass("a_nohover");
		}
	);
	
	// End Page middlemen

	// Page restaurant
	$('.owl-carousel.res_slide').owlCarousel({
		loop:true,
		margin:10,
		nav:true,
		items:1,
		dots:false,
		nav:false,
		autoplay:true,
		autoplayTimeout:5000,
		autoplaySpeed:1000,
		animateOut: 'fadeOut'
	});
	$('.owl-carousel.res_slide .owl-stage .item').height($(window).height());
	setInterval(function(){ 
		$('.owl-carousel.res_slide .owl-stage .item').height($(window).height());
	 }, 3000);
	//  $('.owl-carousel.res_slide .owl-stage .item').parallax("50%", 0.05);
	
	// End page restaurant
	$(".sp_hamber").click(function() {
		$(".hd_all .hd_fix .hd_menu").toggleClass("active");
	});
});