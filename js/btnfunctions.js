
jQuery(document).ready(function($) {


			$('.container > .mix').hover(
		       function(){ TweenMax.to($(this).find("p"), 2.5  , {opacity:1, ease:Expo. easeOut, });},
		       function(){ TweenMax.to($(this).find("p"), 2.5  , {opacity:0, ease:Expo. easeOut, }); }
		);

scroll(2000,0);




	$(".showmemore").on('click', function() {

			$(".basketcontainer").fadeToggle('400', function() {
				
			});
			
	});




	$(".closebasket").on('click', function() {

			$(".basketcontainer").fadeToggle('400', function() {
				
			});
			
	});



	$("#btnadmin").on('click', function() {

			if ($(".editalldata").hasClass('bounceOutUp')) {
				$(".editalldata").removeClass('bounceOutUp');
				$(".editalldata").addClass('bounceInDown');
			} else{
				$(".editalldata").addClass('bounceOutUp');
				$(".editalldata").removeClass('bounceInDown');
			};
			
	});


	$("#sighnupbtn").on('click', function() {

			if ($(".signuppage").hasClass('bounceOutUp')) {
				$(".signuppage").removeClass('bounceOutUp');
				$(".signuppage").addClass('bounceInDown');
			} else{
				$(".signuppage").addClass('bounceOutUp');
				$(".signuppage").removeClass('bounceInDown');
			};
			
	});


	$("#btnbasket").on('click', function() {

			if ($(".buybasketcontainer").hasClass('bounceOutUp')) {
				$(".buybasketcontainer").removeClass('bounceOutUp');
				$(".buybasketcontainer").addClass('bounceInDown');
			} else{
				$(".buybasketcontainer").addClass('bounceOutUp');
				$(".buybasketcontainer").removeClass('bounceInDown');
			};
			
	});
	

		$("#btnlogin").on('click', function() {

			if ($(".loginpage").hasClass('bounceOutUp')) {
				$(".loginpage").removeClass('bounceOutUp');
				$(".loginpage").addClass('bounceInDown');
			} else{
				$(".loginpage").addClass('bounceOutUp');
				$(".loginpage").removeClass('bounceInDown');
			};
			
	});
	


$(".container .products .fistone").on('click', function() {
	$(this).removeClass('bounceIn');
	$(this).addClass('deactivated');
	$(this).next().removeClass('deactivated');
	$(this).next().removeClass('bounceOut');
	$(this).next().addClass('bounceIn');
	// add element to list

	$(".buybasketcontainer .summary > .ui.middle").append('<div class="item" style="text-align: left;"><div class="right floated content"><div class="ui button">Remove</div></div><img class="ui avatar image" src="img/pic1.jpg"><div class="content">Lena , 2200 , 16/7/93</div></div>');
	addremoveclick();

});


$(".container .products .secondone").on('click', function() {
	$(this).removeClass('bounceIn');
	$(this).addClass('deactivated');
	$(this).prev().removeClass('deactivated');
	$(this).prev().removeClass('bounceOut');
	$(this).prev().addClass('bounceIn');

	$(".buybasketcontainer .summary .ui.button").parent().parent().remove(":last-child");

});

$("#navsearch").hide('fast', function() {
					
				});

	var someshit = true;



	$("#mainmenubtn").on('click', function() {

			if (someshit) {
				$("#navsearch").show('slow', function() {
					
				});
				TweenMax.staggerTo('.animating', .7 , {opacity:1,left:0,ease:Back.easeOut,} , 1);  
				someshit = false;

			} else{
				$("#navsearch").hide('slow', function() {
					
				});
				TweenMax.staggerTo('.animating', .7 , {opacity:0,left:-200,ease:Back.easeOut,} , 1);  
				someshit = true;

			};
			
	});



function addremoveclick () {
		$(".buybasketcontainer .summary .ui.button").on('click', function() {
		$(this).parent().parent().remove();
	});
}


addremoveclick();



$("#sendinform").on('click', function(event) {
		event.preventDefault();

	
	var first = $(".loginpage input[name=first-name]").val();
	var second = $(".loginpage input[name=last-name]").val();
	alert(first);
	$("#showname").text(first);
});
















		$('select.dropdown')
		  .dropdown()
		;
		$('.ui.checkbox')
		  .checkbox()
		;












});


// end of ready


