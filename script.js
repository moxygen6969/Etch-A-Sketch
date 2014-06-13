$(document).ready(function()
{


  for(var j=0;j<16;j++)
     {
	 $(".wrapper").append("<div class='inside'></div>");
	 }
  
     $('.inside').mouseenter(function()
     {
	   $(this).addClass('highlighted');
	 });
	 
	 $('.inside').height("75px");
     $('.inside').width("75px");
	 
	 $('.clearnew').click(function()
	 {
	        $('.inside').removeClass('highlighted');
	        $('.inside').remove();
	         var boxsize=prompt("Please Enter the Grid Size");
	         var squared=boxsize*boxsize;
	         var area_side1=300;
	         var divider=area_side1/boxsize;
	   
	      for (var i=0;i<squared;i++)
	       {
		      $(".wrapper").append("<div class='inside'></div>");
		   } 
		 
		   $('.inside').mouseenter(function()
             {
	             $(this).addClass('highlighted');
	         });
		 
		      $('.inside').width(divider+'px');
	          $('.inside').height(divider+'px');
	   
	      
	 }); 
  
     
});