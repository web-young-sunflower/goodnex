$(document).ready(function(){
   $(".ul-nav li").hover(function(){
   	var index=$(this).index();
   	console.log(index);
		 $(".ul-nav .li-nav").removeClass("social-hover").eq(index).addClass("social-hover");
   	// $(this).eq(index).css("background","#79BE0B");
   	// $(this).css("background","#fff");
   	// $(this a).css("color","#fff");
   })
	var banner=$("#banner");
	// banner.mouseover(function(){
	// 	$(".ba").css("display","none");
	// });
	var tu=$(".tu-banner");
	console.log(tu);
	tu.slice(1).css("opacity",0);
	var t=setInterval(move,2000);
	var now=0;
	var next=0;
      function move(){
        next++;
        if(next>3){
        	next=0;
        }
        tu.eq(next).css("opacity",1);
        tu.eq(now).css("opacity",0)
        tu.eq(now).removeClass("action");
        tu.eq(next).addClass("action");
        now=next;
      }
      $("#banner").mouseover(function(){clearInterval(t)});
      $("#banner").mouseout(function(){t=setInterval(move,2000);});
     $(".right-ba").click(function(){
     	next++;
        if(next>3){
        	next=0;
        }
        tu.eq(next).css("opacity",1);
        tu.eq(now).css("opacity",0)
        tu.eq(now).removeClass("action");
        tu.eq(next).addClass("action");
        now=next;
     })
     $(".left-ba").click(function(){
     	next--;
        if(next<0){
        	next=3;
        }
        tu.eq(next).css("opacity",1);
        tu.eq(now).css("opacity",0)
        tu.eq(now).removeClass("action");
        tu.eq(next).addClass("action");
        now=next;
     })
})