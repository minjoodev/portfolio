$(function(){
    /*---gnb 클릭---*/
    $('#gnb>ul>li:nth-child(1)').on('click',function(e){
    e.preventDefault();
    $("html,body").stop().animate({
        "scrollTop":1050
    },1400);
    })
    $('#gnb>ul>li:nth-child(2)').on('click',function(e){
        e.preventDefault();
        $("html,body").stop().animate({
            "scrollTop":1950
        },1400);
    })
    $('#gnb>ul>li:nth-child(3)').on('click',function(e){
        e.preventDefault();
        $("html,body").stop().animate({
            "scrollTop":3650
        },1400);
    })
    $('#gnb>ul>li:nth-child(4)').on('click',function(e){
        e.preventDefault();
        $("html,body").stop().animate({
            "scrollTop":6800
        },1400);
    })
    $('#gnb>ul>li:nth-child(5)').on('click',function(e){
        e.preventDefault();
        $("html,body").stop().animate({
            "scrollTop":7900
        },1400);
    })
    $('#gnb>ul>li:nth-child(6)').on('click',function(e){
        e.preventDefault();
        $("html,body").stop().animate({
            "scrollTop":9000
        },1400);
    })    
    
    /*---arrow 클릭---*/
    $('.arrow i').on('click',function(e){
        e.preventDefault();
        $("html,body").stop().animate({
            "scrollTop":1050
        },1400);
    })
    
    /*---indicator 클릭---*/
    $(".indicator>li:nth-child(1)").on("click",function(e){
		e.preventDefault();
		$("html,body").stop().animate({"scrollTop":0},1400);
	});
    $(".indicator>li:nth-child(2)").on("click",function(e){
		e.preventDefault();
		$("html,body").stop().animate({"scrollTop":1050},1400);
	});
    $(".indicator>li:nth-child(3)").on("click",function(e){
		e.preventDefault();
		$("html,body").stop().animate({"scrollTop":1950},1400);
	});
    $(".indicator>li:nth-child(4)").on("click",function(e){
		e.preventDefault();
		$("html,body").stop().animate({"scrollTop":3650},1400);
	});
    $(".indicator>li:nth-child(5)").on("click",function(e){
		e.preventDefault();
		$("html,body").stop().animate({"scrollTop":6800},1400);
	});
    $(".indicator>li:nth-child(6)").on("click",function(e){
		e.preventDefault();
		$("html,body").stop().animate({"scrollTop":7900},1400);
	});
    $(".indicator>li:nth-child(7)").on("click",function(e){
		e.preventDefault();
		$("html,body").stop().animate({"scrollTop":9000},1400);
	});
        
    
    /*---indicator 스크롤---*/
    $(window).on('scroll',function(){
        
        var scroll = $(window).scrollTop();
        
        if(scroll>= 0 && scroll< 809){
			$(".indicator>li").removeClass();
			$(".indicator>li").eq(0).addClass("on");
		}
        if(scroll>= 810 && scroll< 1799){
			$(".indicator>li").removeClass();
			$(".indicator>li").eq(1).addClass("on");
		}
        if(scroll>= 1800 && scroll< 3199){
			$(".indicator>li").removeClass();
			$(".indicator>li").eq(2).addClass("on");
		}
        if(scroll>= 3200 && scroll< 5999){
			$(".indicator>li").removeClass();
			$(".indicator>li").eq(3).addClass("on");
		}
        if(scroll>= 6000 && scroll< 7199){
			$(".indicator>li").removeClass();
			$(".indicator>li").eq(4).addClass("on");
		}
        if(scroll>= 7200 && scroll< 8199){
			$(".indicator>li").removeClass();
			$(".indicator>li").eq(5).addClass("on");
		}
        if(scroll>= 8200 && scroll< 9000){
			$(".indicator>li").removeClass();
			$(".indicator>li").eq(6).addClass("on");
		}
    
        if(scroll>= 5500 && scroll<6500 ){
         document.getElementById("mobile").setAttribute('class','mobie animate fadeInLeft animated');
         document.getElementById("tablet").setAttribute('class','tablet animate fadeInRight animated');
         document.getElementById("mobile").style.visibility = "visible";
         document.getElementById("tablet").style.visibility = "visible";
        }
        else{
         document.getElementById("mobile").setAttribute('class','mobie animate');
         document.getElementById("tablet").setAttribute('class','tablet animate');
         document.getElementById("mobile").style.visibility = "hidden";
         document.getElementById("tablet").style.visibility = "hidden";
        }
    })
})

