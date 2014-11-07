var newsScroll;
var testEmailStuff;
$(document).ready(function()
{



	if (window.location.toString().indexOf('#fill-form') > 0)
		$('html, body').animate({ scrollTop: $('#fill-form').offset().top - $('header').height() });

	$('.call a').click(function(){
		$('html, body').animate({ scrollTop: $('#fill-form').offset().top - $('header').height() });
		return false;
	});

	$('#fill-form button').click(function(){
		var th = $(this);
		$.ajax({
			url: 'send.php',
			type: 'POST',
			data: { 
				email: $('#email').val(),
				name:  $('#name').val(),
				phone: $('#phone').val()
			},
			success: function(data){
				if (data)
					th.after('<br />Thanks! We will contact you back shortly.');

                                 testEmailStuff = data;
			}
		});
		return false;
	});

	scrl();
	$(window).scroll(scrl);

	$('.navbar-default .navbar-nav > li:not(.active)').mouseover(function(){
		$('.navbar-default .navbar-nav > li.slider').show();
	});

	$('.navbar-default .navbar-nav > li').hover(
		function(){
			if ($(this).hasClass('active')) return;
			$('.navbar-default .navbar-nav > li.hover').removeClass('hover');
			$(this).addClass('hover');
			var sl = $('.navbar-default .navbar-nav > li.slider');
			sl.width($(this).width()).css({left: $(this).offset().left - $(this).parent().offset().left });
		},
		function(){
		}
	);

	var i = 1;
	$('#icons>div').each(function() {
	    $(this).moving(0.1 +  0.002* i, 0.05 + 0.003 * i, i);
	    i++;
	});

	$('#sign-up-scroll').click(function(){
		$('html,body').animate({ scrollTop: $('.signup').offset().top - 100 });
		return false;
	});

	$('.featured ul li div.hover').hide();
	$('.featured ul li a').click(function(){ 
		$('.featured ul li a').show();
		$('.featured ul li div.hover').hide();
		$(this).hide();
		$(this).next().show();
		return false;
	});

	$('#icons>div').each(function(){
		$(this).data('marginLeft', $(this).css('marginLeft'));
	});

	$('#icons>div').click(function(){
		if ($(this).hasClass('active')) {
			$(this).removeClass('active');
			$('#icons>div').fadeIn();
			$('.sub-icons, .long-line').fadeOut();
		} else {
			var thc = $(this).attr('class');
			$(this).siblings().filter('div').fadeOut();
			$(this).addClass('active');

			$(this).animate({ left: $('#icons').width() /2 - 64 - parseInt($(this).css('marginLeft')), top: 0 }, 500, function(){
				$('.long-line, .sub-icons-' + thc).css({opacity: 0, marginTop: -20}).show().animate({ marginTop: 0, opacity: 1 }, 1000);
			});

		}
	});

	$('.sub-icons').each(function(){
		if ($(this).find('li').length % 2 == 0)
			$(this).find('li:eq(' + ($(this).find('li').length / 2 - 1) + ') .line').css({ marginTop: 10, height: 40 });
	});

	jQuery('.tp-banner').show().revolution({
		dottedOverlay:"none",
		delay:8000,
		startwidth: 1000,
		startheight:453,
		hideThumbs:200,
		
		thumbWidth:100,
		thumbHeight:50,
		thumbAmount:5,
		
		navigationType:"bullet",
		navigationArrows:"solo",
		navigationStyle:"preview4",
		
		touchenabled:"on",
		onHoverStop:"on",
		
		swipe_velocity: 0.7,
		swipe_min_touches: 1,
		swipe_max_touches: 1,
		drag_block_vertical: false,
								
		parallax:"mouse",
		parallaxBgFreeze:"on",
		parallaxLevels:[7,4,3,2,5,4,3,2,1,0],
								
		keyboardNavigation:"off",
		
		navigationHAlign:"center",
		navigationVAlign:"bottom",
		navigationHOffset:0,
		navigationVOffset:-50,

		soloArrowLeftHalign:"left",
         soloArrowLeftValign:"center",
         soloArrowLeftHOffset:20,
         soloArrowLeftVOffset:0,
 
         soloArrowRightHalign:"right",
         soloArrowRightValign:"center",
         soloArrowRightHOffset:20,
         soloArrowRightVOffset:0,
				
		shadow:0,
		fullWidth:"off",
		fullScreen:"off",
		fullScreenAlignForce: "off",

		spinner:"spinner4",
		
		stopLoop:"off",
		stopAfterLoops:-1,
		stopAtSlide:-1,

		shuffle:"off",
		
		autoHeight:"off",						
		forceFullWidth:"off",						
								
								
								
		hideThumbsOnMobile:"off",
		hideNavDelayOnMobile:1500,						
		hideBulletsOnMobile:"off",
		hideArrowsOnMobile:"off",
		hideThumbsUnderResolution:0,
		
		hideSliderAtLimit:0,
		hideCaptionAtLimit:0,
		hideAllCaptionAtLilmit:0,
		startWithSlide:0,
		videoJsPath:"rs-plugin/videojs/",
		fullScreenOffsetContainer: ""	
	});
	

}); 

function scrl() {
	var st = $(window).scrollTop();
	
	$('.track').each(function(){
		$(this).find('.anim').toggleClass('active', $(this).offset().top + 50 < st + $(window).height());
	});
	
}

function isValidEmail(value) {
	return /^((([a-z]|\d|[!#\$%&'\*\+\-\/=\?\^_`{\|}~]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])+(\.([a-z]|\d|[!#\$%&'\*\+\-\/=\?\^_`{\|}~]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])+)*)|((\x22)((((\x20|\x09)*(\x0d\x0a))?(\x20|\x09)+)?(([\x01-\x08\x0b\x0c\x0e-\x1f\x7f]|\x21|[\x23-\x5b]|[\x5d-\x7e]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(\\([\x01-\x09\x0b\x0c\x0d-\x7f]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]))))*(((\x20|\x09)*(\x0d\x0a))?(\x20|\x09)+)?(\x22)))@((([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.)+(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.?$/i.test(value);
}

jQuery.fn.moving = function(vertSpeed, horiSpeed, index) {

    var rand = Math.random() * (index * 1000),
        thisH = this.height(),
        current = this;

    setInterval(function() {
    	var pos = current.index();
    	var tp = (Math.sin(new Date().getTime() * vertSpeed / 100 + rand/2) + 1) * 150;
    	var lft = (Math.sin(new Date().getTime() * horiSpeed / 100 + rand) + 1) * 50;
        
        if (!current.hasClass('active'))
        	current.css({ top: tp, left: lft });

    }, 15);
};


