$(document).ready ( function () {
	//set up vars
	var caterpillarBody = $("#tail");
	var caterpillarHead = $("#head");
	var caterpillar = $("#caterpillar");
	var segment = "<div class='body'></div>" ; 
	
	//animate 
	function animate() {
	
		$("#animator").html("watch it go!");
		
		for(var i = 1; i<20; i++) {
			caterpillarBody.animate( {width: '100px'} , 'fast').animate({width: '50px', 'margin-left': 50*i+'px'}, 'fast');
		} 
		
		caterpillarBody.animate({width: '100px'}, 'slow').animate(
			{width: '50px', 'margin-left': '1000px'}, 'slow', 
			
			function() {
				caterpillarBody.css( {'margin-left':"0px", width: '50px'} ); 
				$('#animator').html('Animate (1)');
			}
			);
			
	
	}
	
	//reset caterpillar
	function reset() {
	caterpillarBody.stop(true);
	caterpillarBody.css({'margin-left':"0px", width: '50px'});
	$('#animator').html('Animate (1)');
	}
	
	//fade caterpillar 
	function fadeCaterpillar() {
	caterpillar.fadeToggle(2000); 
	}
	
	//grow caterpillar 
	function grow(){
			caterpillarBody.after(segment); 
	}
	
	//set up buttons
	$("#animator").click(function() { animate(); });
	
	$("#reset").click(function() { reset(); });
	
	$("#fader").click(function() { fadeCaterpillar(); });
	
	$("#grow").click(function() { grow(); });
	
});
