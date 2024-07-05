$(window).load(function(){
	$('.loading').fadeOut('fast');
	$('.container').fadeIn('fast');
});
$('document').ready(function(){
		var vw;
		$(window).resize(function(){
			 vw = $(window).width()/2;
			$('#card *').hide();
			$('#b1,#b2,#b3,#b4,#b5,#b6,#b7,#b8,#b9,#b10').stop();
			$('#b11').animate({top:240, left: vw-350},500);
			$('#b22').animate({top:240, left: vw-250},500);
			$('#b33').animate({top:240, left: vw-150},500);
			$('#b44').animate({top:240, left: vw-50},500);
			$('#b55').animate({top:240, left: vw+50},500);
			$('#b66').animate({top:240, left: vw+150},500);
			$('#b77').animate({top:240, left: vw+250},500);
			$('#b88').animate({top:240, left: vw-250},500);
			$('#b99').animate({top:240, left: vw-150},500);
			$('#b1010').animate({top:240, left: vw-50},500);
		});


	$('#initial').click(function(){
		$(this).fadeOut('slow').delay(50).promise().done(function(){
			$('#turn_on').fadeIn('slow');
		});
	});

	$('#play').click(function(){
		// changeColor();
		var audio = $('.song')[0];
        audio.play();
        $('#bulb_yellow').addClass('bulb-glow-yellow-after');
		$('#bulb_red').addClass('bulb-glow-red-after');
		$('#bulb_blue').addClass('bulb-glow-blue-after');
		$('#bulb_green').addClass('bulb-glow-green-after');
		$('#bulb_pink').addClass('bulb-glow-pink-after');
		$('#bulb_orange').addClass('bulb-glow-orange-after');
		$('body').css('backgroud-color','#FFF');
		$('body').addClass('peach-after');
		$(this).fadeOut('slow').delay(5000).promise().done(function(){
			$('#bannar_coming').fadeIn('slow');
		});
	});

	$('#turn_on').click(function(){
		$('#bulb_yellow').addClass('bulb-glow-yellow');
		$('#bulb_red').addClass('bulb-glow-red');
		$('#bulb_blue').addClass('bulb-glow-blue');
		$('#bulb_green').addClass('bulb-glow-green');
		$('#bulb_pink').addClass('bulb-glow-pink');
		$('#bulb_orange').addClass('bulb-glow-orange');
		$('body').addClass('peach');
		$("#welcome_dance").remove();
		$(this).fadeOut('slow').delay(5000).promise().done(function(){
			$('#play').fadeIn('slow');
		});
	});

	$('#bannar_coming').click(function(){
		$('#banner').css("display", "block");
		$('.bannar').addClass('center');
		$('.bannar').addClass('bannar-come');
		$(this).fadeOut('slow').delay(5000).promise().done(function(){
			$('#balloons_flying').fadeIn('slow');
		});
	});

	function loopOne() {
		var randleft = Math.floor((Math.random() * $(window).width()) + 1);
		var randtop =  Math.floor((Math.random() * $(window).height()) + 1);
		$('#b1').animate({left:randleft,bottom:randtop},8000,function(){
			loopOne();
		});
	}
	function loopTwo() {
		var randleft = Math.floor((Math.random() * $(window).width()) + 1);
		var randtop =  Math.floor((Math.random() * $(window).height()) + 1);
		$('#b2').animate({left:randleft,bottom:randtop},8000,function(){
			loopTwo();
		});
	}
	function loopThree() {
		var randleft = Math.floor((Math.random() * $(window).width()) + 1);
		var randtop =  Math.floor((Math.random() * $(window).height()) + 1);
		$('#b3').animate({left:randleft,bottom:randtop},8000,function(){
			loopThree();
		});
	}
	function loopFour() {
		var randleft = Math.floor((Math.random() * $(window).width()) + 1);
		var randtop =  Math.floor((Math.random() * $(window).height()) + 1);
		$('#b4').animate({left:randleft,bottom:randtop},8000,function(){
			loopFour();
		});
	}
	function loopFive() {
		var randleft = Math.floor((Math.random() * $(window).width()) + 1);
		var randtop =  Math.floor((Math.random() * $(window).height()) + 1);
		$('#b5').animate({left:randleft,bottom:randtop},8000,function(){
			loopFive();
		});
	}

	function loopSix() {
		var randleft = Math.floor((Math.random() * $(window).width()) + 1);
		var randtop =  Math.floor((Math.random() * $(window).height()) + 1);
		$('#b6').animate({left:randleft,bottom:randtop},8000,function(){
			loopSix();
		});
	}
	function loopSeven() {
		var randleft = Math.floor((Math.random() * $(window).width()) + 1);
		var randtop =  Math.floor((Math.random() * $(window).height()) + 1);
		$('#b7').animate({left:randleft,bottom:randtop},8000,function(){
			loopSeven();
		});
	}
	function loopEight() {
		var randleft = Math.floor((Math.random() * $(window).width()) + 1);
		var randtop =  Math.floor((Math.random() * $(window).height()) + 1);
		$('#b8').animate({left:randleft,bottom:randtop},8000,function(){
			loopEight();
		});
	}
	function loopNine() {
		var randleft = Math.floor((Math.random() * $(window).width()) + 1);
		var randtop =  Math.floor((Math.random() * $(window).height()) + 1);
		$('#b9').animate({left:randleft,bottom:randtop},8000,function(){
			loopNine();
		});
	}
	function loopTen() {
		var randleft = Math.floor((Math.random() * $(window).width()) + 1);
		var randtop =  Math.floor((Math.random() * $(window).height()) + 1);
		$('#b10').animate({left:randleft,bottom:randtop},8000,function(){
			loopTen();
		});
	}

	$('#balloons_flying').click(function(){
		$('.balloon-border').animate({top:-500},8000);
		$('#b1,#b4,#b5,#b7,#b9').addClass('balloons-rotate-behaviour-one');
		$('#b2,#b3,#b6,#b8,#b10').addClass('balloons-rotate-behaviour-two');
		// $('#b3').addClass('balloons-rotate-behaviour-two');
		// $('#b4').addClass('balloons-rotate-behaviour-one');
		// $('#b5').addClass('balloons-rotate-behaviour-one');
		// $('#b6').addClass('balloons-rotate-behaviour-two');
		// $('#b7').addClass('balloons-rotate-behaviour-one');
		loopOne();
		loopTwo();
		loopThree();
		loopFour();
		loopFive();
		loopSix();
		loopSeven();
		loopEight();
		loopNine();
		loopTen();
		
		$(this).fadeOut('slow').delay(5000).promise().done(function(){
			$('#cake_fadein').fadeIn('slow');
		});
	});	

	$('#cake_fadein').click(function(){
	$('#banner').fadeOut('fast');
    $('#ballon_flying').fadeOut('fast');
    $('#b1,#b4,#b5,#b7,#b9').fadeOut('fast');
    $('#b2,#b3,#b6,#b8,#b10').fadeOut('fast');
		
		$('#cake_pink').css("display", "block");

		$('#cake_pink').fadeIn('slow');
		$(this).fadeOut('slow').delay(3000).promise().done(function(){
			$('#invite_friends').fadeIn('slow');
		});
	});

	$('#invite_friends').click(function(){
    $('#cake_pink').fadeOut('fast');

    let vw = $(window).width();
    let vh = $(window).height();
    let minDistance = 100; // Minimum distance between each GIF
    let distanceFromBottom = 4 * 16; // 2cm converted to pixels (assuming 1cm = 16px)

    let gifPositions = []; // Array to store positions of placed GIFs

    // Function to check if a new GIF position is too close to existing ones
    function isTooClose(top, left, positions) {
        for (let pos of positions) {
            let distance = Math.sqrt(Math.pow(top - pos.top, 2) + Math.pow(left - pos.left, 2));
            if (distance < minDistance) {
                return true;
            }
        }
        return false;
    }

    // Place 20 GIFs randomly on the page
    for (let i = 1; i <= 20; i++) {
        let randomTop, randomLeft;

        do {
            randomTop = Math.random() * (vh - distanceFromBottom - 100); // Adjusted to avoid placing GIFs too close to the bottom
            randomLeft = Math.random() * (vw - 100); // Adjusted to avoid placing GIFs too close to the edges
        } while (isTooClose(randomTop, randomLeft, gifPositions));

        gifPositions.push({top: randomTop, left: randomLeft});

        $('#f' + i).css({"display": "block", "top": randomTop + 'px', "left": randomLeft + 'px'});
        $('#f' + i).animate({top: randomTop, left: randomLeft}, 3000);
    }

    // After placing GIFs, fade out the Invite Friends button and show the next element
    $(this).fadeOut('slow').delay(5000).promise().done(function(){
        $('#dj_time').fadeIn('slow');
    });
});
	
 
		
	$('#dj_time').click(function(){
		$('#cake_pink').fadeOut('fast');
		var audio = $('.song')[0];
        audio.pause();

        var audio1 = $('.song1')[0];
        audio1.play();
		$('body').addClass('peach-disco');
		$('#f1').addClass('dance-one')
		$('#f3').addClass('dance-two')
		$('#f2').addClass('dance-one')
		$('#f4').addClass('dance-two')
		$('#f5').addClass('dance-one')
		$('#f6').addClass('dance-one')
		$('#f7').addClass('dance-two')
		$('#f8').addClass('dance-two')
		$('#f11').addClass('dance-two')
		$('#f12').addClass('dance-two')
		$('#self').addClass('dance-one')
		$('#f9').addClass('dance-one')
		$('#f10').addClass('dance-one')
		$('#f13').addClass('dance-one')
		$('#f14').addClass('dance-two')
		$('#f15').addClass('dance-one')
		$('#f16').addClass('dance-one')
		$('#f17').addClass('dance-two')
		$('#f18').addClass('dance-two')
		$('#f19').addClass('dance-two')
		$('#f20').addClass('dance-two')
		
		$('#bulb_yellow').addClass('bulb-glow-yellow-disco');
		$('#bulb_red').addClass('bulb-glow-red-disco');
		$('#bulb_blue').addClass('bulb-glow-blue-disco');
		$('#bulb_green').addClass('bulb-glow-green-disco');
		$('#bulb_pink').addClass('bulb-glow-pink-disco');
		$('#bulb_orange').addClass('bulb-glow-orange-disco');
		 vw = $(window).width()/2;
		 count=7

		$('#b1,#b2,#b3,#b4,#b5,#b6,#b7,#b8,#b9,#b10').stop();
		$('#b1').attr('id','b11');
		$('#b2').attr('id','b22')
		$('#b3').attr('id','b33')
		$('#b4').attr('id','b44')
		$('#b5').attr('id','b55')	
		$('#b6').attr('id','b66')
		$('#b7').attr('id','b77')
		$('#b8').attr('id','b88')
		$('#b9').attr('id','b99')
		$('#b10').attr('id','b1010')
		$('#b11').animate({top:240, left: 0},500);
		$('#b22').animate({top:240, left: vw-vw*2/3},500);
		$('#b33').animate({top:240, left: vw-vw/3},500);
		$('#b44').animate({top:240, left: vw},500);
		$('#b55').animate({top:240, left: vw+vw/3},500);
		$('#b66').animate({top:240, left: vw+vw*2/3},500);
		$('#b77').animate({top:240, left: 2*vw},500);
		$('#b88').animate({top:240, left: vw-vw*2/3},500);
		$('#b99').animate({top:240, left: vw-vw/3},500);
		$('#b1010').animate({top:240, left: vw},500);
		$('.balloons').css('opacity','0.9');
		$('.balloons h2').fadeIn(3000);
		$(this).fadeOut('slow').delay(3000).promise().done(function(){
			$('#story').fadeIn('slow');
		});
	});
	
	$('#story').click(function(){
		// var audio1 = $('.song1')[0];
  //       audio1.pause();

  //       var audio2 = $('.song')[0];
  //       audio2.play();
		$(this).fadeOut('slow');
		$('#card').css("display", "block");
		$('#card').show();
		$('#card').css('position', 'absolute');
		$('#card').css('z-index', 9999);
		$('.cake').fadeOut('fast').promise().done(function(){
			$('.message').fadeIn('slow');
		});
		$('#card').fadeIn('slow');

		$(this).fadeOut('slow').delay(3000).promise().done(function(){
			$('#picture_time').fadeIn('slow');
		});
	
		
	});

	$('#picture_time').click(function(){
		window.location.replace("src/html/surprise.html")
		
	});


});


  
   
 


//alert('hello');