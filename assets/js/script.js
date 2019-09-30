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
	var topBtn = $('.backtop_res'); // khai báo 1 biến topBtn bằng nút có id "back-to-top"
	topBtn.hide(); // mặc định cho nút ẩn đi
	$(function () {
		$(window).scroll(function () { // sự kiện lăn chuột
			if ($(this).scrollTop() > 100) { // nếu khoảng cách với top lớn hơn 100px
				topBtn.fadeIn(); // thì hiện nút "back-to-top" lên
			} else {
				topBtn.fadeOut(); // ngược lại ẩn nút đi
			}
		});
		topBtn.click(function () { // bắt sự kiện khi click vào nút
			$('body,html').animate({
				scrollTop: 0
			}, 1000); // thời gian di chuyển về đầu trang
			return false;
		});
	});
	// back top

	$(".sp_hamber").click(function () {
		$(".hd_all .hd_fix .hd_menu").toggleClass("active");
	});
	// menu sp

	$(window).scroll(function () {
		if ($(this).scrollTop() > 130) {
			$(".hd_all").addClass("scroll_bg");
		} else {
			$(".hd_all").removeClass("scroll_bg");
		}
	});

	// End page restaurant

	// Page Coffee

	$(window).scroll(function () {
		var kq = "khong";
		$('.testsec').each(function (i) {
			heightdivtotop = $(this).offset().top;
			heightdivtotopEnd = $(this).offset().top + $(this).height();
			var scroll = $(window).scrollTop();

			if (scroll >= heightdivtotop-200 && scroll <= heightdivtotopEnd) {
				kq = i+1;
				// $("#gnav li a").html("<span>"+scroll + " - "+heightdivtotop+" - "+heightdivtotopEnd+"</span>"+"<span>"+scroll + " - "+heightdivtotop+" - "+heightdivtotopEnd+"</span>");
				$(".page-nav li").removeClass("active");
				$(".page-nav li:nth-of-type("+kq+")").addClass("active");
				// $("#gnav li:nth-child("+kq+") a, .page-nav li:nth-of-type("+kq+")").addClass("active");

			}
		});
		$(".result").html(kq);
		
	});
	
	// End page Coffee

	$('.hd_all .hd_fix .hd_menu ul li a, #res_slide .slide_text .slide_scroll').click(function () {
		if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
			var target = $(this.hash);
			target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
			if (target.length) {
				$('html,body').animate({
					scrollTop: target.offset().top - 50
				}, 900);
				return false;
			} else {
				$('html,body').animate({
					scrollTop: target.offset().top - 0
				}, 900);
			}
		}
	});

	$(".ib_form select, .ib_form input").change(function () {
		$(this).parent().find(".txt_value").text($(this).val());
	});

	$('.owl-carousel').owlCarousel({
		loop: true,
		margin: 10,
		nav: true,
		items: 1,
		dots: false,
		nav: false,
		autoplay: true,
		autoplayTimeout: 5000,
		autoplaySpeed: 1000,
		animateOut: 'fadeOut'
	});
	//  $('.owl-carousel.res_slide .owl-stage .item').parallax("50%", 0.05);
});