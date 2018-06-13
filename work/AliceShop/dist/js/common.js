var swiper = new Swiper('.swiper-container_h', {
  pagination: {
    el: '.swiper-pagination_h',
  },
});



jQuery('.mobile-nav').on("click", function () {
    jQuery('#menu').toggleClass('active');
});
jQuery('#menu').append('<span id="close-nav"></span>');
jQuery('#close-nav').on("click", function () {
    jQuery('#menu').removeClass('active');
});


if($(window).width() < 1200){
	$('#h_category .title').click(function () {
        $('#h_category .title').not($(this).parent()).removeClass('active');
        $(this).parent().toggleClass('active');
	});
}