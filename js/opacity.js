$(window).scroll(function() {    
    var scroll = $(window).scrollTop();
	if (scroll >= 50 && scroll <= 100	&& $(".fixed-nav-bar").css("background-color") != "#292c2f" ) {
	     $(".fixed-nav-bar").addClass("scrolling-opacity1");
		 $(".menu a, .menu a:visited").css("color","#292c2f");
		 $("menu a:hover, .menu a:target").css("color","#292c2f");
		 $('#logo').attr('src',function(i,src){
         return "\images/logo50.png";
         });
    } else if (scroll >= 100 && scroll <= 200 && $(".fixed-nav-bar").css("background-color") != "#292c2f" ){
		  $(".fixed-nav-bar").addClass("scrolling-opacity2");
		  $(".menu a, .menu a:visited").css("color","#292c2f");
		 $("menu a:hover, .menu a:target").css("color","#292c2f");
		  $('#logo').attr('src',function(i,src){
         return "\images/logo50.png";
         });
    } else	if (scroll >= 200 && scroll <= 300 && $(".fixed-nav-bar").css("background-color") != "#292c2f" ){
		  $(".fixed-nav-bar").addClass("scrolling-opacity3");
		  $(".menu a, .menu a:visited").css("color","#292c2f");
		  $("menu a:hover, .menu a:target").css("color","#292c2f");
		  $('#logo').attr('src',function(i,src){
         return "\images/logo50.png";
         });
    } else	if (scroll >= 300 && scroll <= 400 && $(".fixed-nav-bar").css("background-color") != "#292c2f" ){
		  $(".fixed-nav-bar").addClass("scrolling-opacity4");
		  $(".menu a, .menu a:visited").css("color","#292c2f");
		 $("menu a:hover, .menu a:target").css("color","#292c2f");
		  $('#logo').attr('src',function(i,src){
         return "\images/logo50.png";
         });
    }else	if (scroll >= 400 && $(".fixed-nav-bar").css("background-color") != "#292c2f" ){
		  $(".fixed-nav-bar").addClass("scrolling-opacity5");
    }else  {
		$(".fixed-nav-bar").removeClass("scrolling-opacity1");
		$(".fixed-nav-bar").removeClass("scrolling-opacity2");
		$(".fixed-nav-bar").removeClass("scrolling-opacity3");
		$(".fixed-nav-bar").removeClass("scrolling-opacity4");
		$(".fixed-nav-bar").removeClass("scrolling-opacity5");
		$(".menu a, .menu a:visited").css("color","#fff");
		 $("menu a:hover, .menu a:target").css("color","#fff");
		$('#logo').attr('src',function(i,src){
         return "\images/blw50.png";
         });
		
	}
});