
/* toggle demonstration */
	$(document).ready(function(){
  $("#toggle").click(function(){
    $("#hide1").toggle();
  });
  });

/* hide and show demonstration */  
  $(document).ready(function(){
    $("#hide").click(function(){
        $("#hide1").hide();
    });
    $("#show").click(function(){
        $("#hide1").show();
    });
  });

/* fadeIn demonstration */  
  $(document).ready(function(){
  $("#fadein").dblclick(function(){
    $("#image").fadeIn();
  });
});

/* fadeOut demonstration */
  $(document).ready(function(){
  $("#fadeout").dblclick(function(){
    $("#image").fadeOut();
  });
});

/* fadeTo demonstration */
  $(document).ready(function(){
  $("#fadeto").dblclick(function(){
    $("#image").fadeTo("slow", 0.33);
  });
});

/* fadeToggle demonstration */
  $(document).ready(function(){
  $("#fadetoggle").dblclick(function(){
    $("#image").fadeToggle();
  });
});
/*
		
/* mouseenter and mouseleave demonstration */
$(document).ready(function(){
        var boxHeight = $("#image").height();
		var boxWidth = $("#image").width();
        $("#image").mouseenter(function(){
            $(this).animate({
    width: "+=200px" }, 2000 );
        }).mouseleave(function(){
            $(this).stop(true);
        });
    });

/* Keypress demonstration */
$(document).ready(function(){
    $("#fadeinput").keypress(function(){
        $("#div1").fadeIn();
		$("#div2").fadeIn("slow");
		$("#div3").fadeIn(3000);
    });
});

/* Keydown demonstration 1*/	
$(document).ready(function(){
    $("#keyboard").keydown(function(){
        $("#keyboard").css("background-color", "yellow");
        $("#keyboard").css("color", "red");
        $("#keyboard").css("text-transform", "uppercase");
    });
    $("#keyboard").keyup(function(){
        $("#keyboard").css("background-color", "blue");
    });
});

/* Keydown demonstration 2*/
$(document).ready(function(){
  $("#keyboard1").keydown(function(){
	var boxHeight = $("#animatediv").height();
	var boxWidth = $("#animatediv").width();
    var div=$("#animatediv");
    div.animate({height:'300px',opacity:'0.4'},"slow");
    div.animate({width:'300px',opacity:'0.8'},"slow");
	div.animate({height: boxHeight ,width: boxWidth},"slow");
  });
});
