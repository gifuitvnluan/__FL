$(document).ready(function() {
	$('a#page-top').click(function() {
		$('body,html').animate({scrollTop: 0}, 500);
  			 return false;
		});
	 var topBtn = $('a#page-top');
	 topBtn.hide();
	 $(window).scroll(function () {
	  if ($(this).scrollTop() > 150) {
	   topBtn.fadeIn();
	  } else {
	   topBtn.fadeOut();
	  }
	 });
	 
	 $("#owlslider").owlCarousel({
			  autoPlay : true,
			  navigation : false, // Show next and prev buttons
			  pagination:false,
			  paginationNumbers:false,
			  slideSpeed : 1000,
			  paginationSpeed : 700,
			  singleItem: true,
			   items: 1
		 }); // owl slide

		 $('.icon-menu').click(function()
		{
			$('.wrap-nav').stop().slideToggle();
		});
		
		
		$('.fancybox').fancybox();

	
});

