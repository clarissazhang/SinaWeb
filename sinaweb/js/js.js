$(function(){
	/*头部下拉菜单*/
		var q=$('.down_link').parent('li').length;
		for(var i=0;i<q;i++){
		
		$('.down_link').parent('li').eq(i).mouseover(function(){
			$(this).children('.pulldownlist').css('display','block');
		})}
		for(var i=0;i<q;i++){
		
		$('.down_link').parent('li').eq(i).mouseout(function(){
			$(this).children('.pulldownlist').css('display','none');
		})}
		
	/*搜索框下拉菜单*/
		$('.searchboxleft').mouseover(function(){
			$('.search_pulldown').css('display','block');
		})
		$('.searchboxleft').mouseout(function(){
			$('.search_pulldown').css('display','none');
		})
    /*获取时间*/
		var oTime=document.getElementById('time');
		
	
		setInterval(function(){
			var oDate=new Date();
		var oYear=oDate.getFullYear();
		var oMon=oDate.getMonth();
		var oDay=oDate.getDate();
		var oHours=oDate.getHours();
		var oMin=oDate.getMinutes();
		var oSec=oDate.getSeconds();
	
	    oTime.innerHTML='北京时间:'+oYear+'-'+(oMon+1)+'-'+oDay;//年月日 
		//oTime.innerHTML='北京时间:'+p(oHours)+':'+p(oMin)+':'+p(oSec);时分秒
		},1000)
	    //函数加零
	    function p(s) {
        return s < 10 ? '0' + s: s;
        }
	
	
	var q=$('.banner_bar li');
	for(var i=0;i<q.length;i++){
		 
		 q.eq(i).mouseover(function(){
		for(var i=0;i<q.length;i++){
      
		
		$(this).siblings().removeClass('active');
		$(this).parents('.banner_bar').siblings('.content_con').eq(i).css('display','none')	
	 } 
	//$(this).parent('.banner_bar').siblings('.content_con')
	$(this).addClass('active');
	$(this).parents('.banner_bar').siblings('.content_con').eq($(this).index()).css('display','block')	})
	
	
	}
	
	/*获取高度*/
	var p=$('.forturn .th_mid_news').height();
	$('.forturn').css('height',p)
	
	/*小轮播*/
	var i=0;
	var len=$('.container ul').length;
	
	$('.btn_link').hover(function(){
		index=$(this).index();
		$('.container').animate({left:-360*index})
		$('.btn_link').eq(index).addClass('guessactive').siblings().removeClass('guessactive');
	})
	$('.container').hover(function(){
		clearInterval(t);
	},function(){
		t=setInterval(function(){
		
		
		i++;
		$('.container').animate({left:-360*i})
		if(i==len-1){
			$('.container').css({left:0})
			i=-1;
		}
		
		$('.btn_link').eq(i).addClass('guessactive').siblings().removeClass('guessactive');
		
		
	},2000)
	})
	t=setInterval(function(){
		
		
		i++;
		$('.container').animate({left:-360*i})
		if(i==len-1){
			$('.container').css({left:0})
			i=-1;
		}
		
		$('.btn_link').eq(i).addClass('guessactive').siblings().removeClass('guessactive');
		
		
	},2000)
	
	$('.prev_link').click(function(){
		i++;
		if(i==len){
			$('.container').css({left:0})
			i=0;
		}
		$('.container').animate({left:-360*i})
		
	
	})
	$('.next_link').click(function(){
		i--;
		if(i==-1){
			$('.container').css({left:-(len-1)*360})
			i=len-1;
		}
		$('.container').animate({left:-360*i})
		
		$('.btn_link').eq(i).addClass('guessactive').siblings().removeClass('guessactive');
	})
	
			
  /*长图轮播*/
        $('.num li').first().addClass('on');
        var j=0;
        var li=$('.allpic li').size();
      var size=li/5;

      $('.num li').hover(function(){
        var index=$(this).index();

        j=index;
        $('.allpic').animate({left:-1000*j})
        $('.num li').eq(j).addClass('on').siblings().removeClass('on');
      })
    $('.btn_l').click(function(){
      j--
      
      
      if(j==-1){
        
        $('.allpic').css('left',-(size-1)*1000)
        j=size-1;
      }
      $('.allpic').animate({left:-1000*j})
    })

      $('.btn_r').click(function(){
      j++
      
      
      if(j==size){
        
        $('.allpic').css('left',0)
        j=0;
      }
      $('.allpic').animate({left:-1000*j})
    })

/*定时器*/
      var t=setInterval(function(){
        j++
      if(j==size){
        
        $('.allpic').css('left',0)
        j=0;
      }
      $('.allpic').animate({left:-1000*j})
      $('.num li').eq(j).addClass('on').siblings().removeClass('on');
      },2000)
 /*移入时停止 移出时继续*/
      $('.wh100').hover(function(){
        clearInterval(t)
      }, function(){
        var t=setInterval(function(){
        j++
      if(j==size){
        $('.allpic').css('left',0)
        j=0;
      }
      $('.allpic').animate({left:-1000*j})
      $('.num li').eq(j).addClass('on').siblings().removeClass('on');
      },5000)})

/*登录框*/

      var timer=null;
 $('.loginpull').mouseover(function(){
  clearInterval(timer)
  $('.login').css('display','block')
  
})  
$('.loginpull').mouseout(function(){
  
  timer=setInterval(function(){
    $('.login').css('display','none')
  },500)
})  

$('.login').mouseover(function(){
   clearInterval(timer)
}) 
$('.login').mouseout(function(){
  timer=setInterval(function(){
    $('.login').css('display','none')
  },500)
}) 


$('.loginclose').click(function(){
  $('.login').css('display','none')
})


/*左边栏选项卡*/
 var q=$('.edu_banner li');
 var b=$('.edu_pic')
  for(var l=0;l<q.length;l++){
  	q.eq(l).mouseover(function(){
  		for(var l=0;l<q.length;l++){
  		q.eq(l).removeClass('edu_active');
        b.eq(l).css('display','none')

  	}
    $(this).addClass('edu_active');
    b.eq($(this).index()).css('display','block')
  	})
	}

	
})
	

	

	
	