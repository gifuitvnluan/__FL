$(document).ready(function () {

	// $('.fancybox').fancybox();

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
	
});