jQuery(document).ready(function(){
	$("#TopMenuPlaceHolder div").mouseenter(function(){
		mouseOnMenu(this);
	});
	$("#TopMenuPlaceHolder div").mouseleave(function(){
		mouseLeaveMenu(this);
	});
	$("#TopMenuPlaceHolder div").click(function(){
		mouseClick(this);
	});
        
	$("#SearchInput").focus(function(){
		if($(this).val() == "")
			$(this).val("Search");
                    $("#SearchBox").css("transform","translateX(-100px) translatey(0px)");
		$("#SearchBox").css("width","140px");
	});
	$("#SearchInput").focusout(function(){
			$(this).val("");
		$("#SearchBox").css("width","32px");
                $("#SearchBox").css("transform","translateX(0px) translatey(0px)"); 
               // alert($("#SearchBox").width());
	})
	$("#SearchInput").keydown(function(){
		if($(this).val() == "")
			$(this).val("Search");
		else if($(this).val() == "Search")
			$(this).val("");
	});
	$("#SearchInput").keyup(function(){
		if($(this).val() == "")
			$(this).val("Search");
	});
	$("#SearchBtn").click(function(){
           
		if(($("#SearchBox").width()) == 28)
                
		{
		         $("#SearchBox").css("transform","translateX(-100px) translatey(0px)");
                        $("#SearchBox").css("width","140px");
			$("#SearchInput").focus();
		}
		else
		{
                     
			$("#SearchBox").css("width","32px");
                        
		}
	});
   

	var Doc_Width = $(document).width();
	var Menu_Width = $("#FullTop").width();
	//alert(Menu_Width + " " + Doc_Width + " " + ((Doc_Width/2)-(Menu_Width/2)));
	$("#MenuTopMiddle").css("left",((Doc_Width/2)-(Menu_Width/2))+"px");
});

function mouseOnMenu(Object)
{
	$(Object).removeClass("ParentMenu");
	$(Object).addClass("ParentMenuSelected");
}

function mouseLeaveMenu(Object)
{
	$(Object).removeClass("ParentMenuSelected");
	$(Object).addClass("ParentMenu");
}

function mouseClick(Object)
{
	window.location.replace($("a",Object).attr("href"));
}
