jQuery(document).ready(function($) {


	$("#btnbasket").on('click', function() {

			if ($(".buybasketcontainer").hasClass('bounceOutUp')) {
				$(".buybasketcontainer").removeClass('bounceOutUp');
				$(".buybasketcontainer").addClass('bounceInDown');
			} else{
				$(".buybasketcontainer").addClass('bounceOutUp');
				$(".buybasketcontainer").removeClass('bounceInDown');
			};
			
	});
	
	// $(".iconstogerhter.fistone").on('click', function() {
	// 		$(this).removeClass('bounceIn');
	// 		$(this).addClass('deactivated');
	// 		$(".iconstogerhter.secondone").removeClass('deactivated');
	// 		$(".iconstogerhter.secondone").removeClass('bounceOut');
	// 		$(".iconstogerhter.secondone").addClass('bounceIn');

						
	// });


	// $(".iconstogerhter.secondone").on('click', function() {
	// 		$(this).removeClass('bounceIn');
	// 		$(this).addClass('deactivated');
	// 		$(".iconstogerhter.fistone").removeClass('deactivated');
	// 		$(".iconstogerhter.fistone").removeClass('bounceOut');
	// 		$(".iconstogerhter.fistone").addClass('bounceIn');
	// });


$(".container .products .fistone").on('click', function() {
	$(this).removeClass('bounceIn');
	$(this).addClass('deactivated');
	$(this).next().removeClass('deactivated');
	$(this).next().removeClass('bounceOut');
	$(this).next().addClass('bounceIn');
});


$(".container .products .secondone").on('click', function() {
	$(this).removeClass('bounceIn');
	$(this).addClass('deactivated');
	$(this).prev().removeClass('deactivated');
	$(this).prev().removeClass('bounceOut');
	$(this).prev().addClass('bounceIn');
});

});