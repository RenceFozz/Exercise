var n;
$(document).ready(function(){
	$("#left").click(function(){
    	$('.image').animate({
    		marginLeft: "+=1000px",
    		opacity: 0
    	},100);
    	
    	$('.image').animate({
    		marginLeft: "-=2000px"
    	},{
    		complete: function(){
    			var s=$(".image").attr("src");
			    var q = parseInt(s.substring(0,2)) - 1;
				if(q==0)
				{
					$('.image').attr("src", "05.png");
				}
				else
				{
					$('.image').attr("src","0"+ q.toString() + ".png");
				}
			    $('.image').animate({
			        marginLeft: "+=1000px",
			        opacity: 1
			    },'fast');
			}
    	});
	});
});

$(document).ready(function(){
	$("#right").click(function(){
		$('.image').animate({
    		marginLeft: "-=1000px",
    		opacity: 0
    	},100);
    	
    	$('.image').animate({
    		marginLeft: "+=2000px"
    	},{
    		complete: function(){
    			var s = $(".image").attr("src");
				var q = parseInt(s.substring(0,2)) + 1;
				if(q==6)
				{
					$(".image").attr("src", "01.png");
				}
				else
				{
					$(".image").attr("src","0"+ q.toString() + ".png");
				}
			    $('.image').animate({
			        marginLeft: "-=1000px",
			        opacity: 1
			    },'fast');
			}
    	});
	});
});

/*function doRight()
{
	console.log("I SWING RIGHT!");
	$(document).ready(function(){
		var s = $("#find").attr("src");
		var q = parseInt(s.substring(0,2)) + 1;
		if(q==6)
		{
			$("#find").attr("src", "01.png");
		}
		else
		{
			$("#find").attr("src","0"+ q.toString() + ".png");
		}
	});
}*/
