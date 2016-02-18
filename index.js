window.onload=function(){
	
	var canvas=document.querySelector("canvas")
	var ctx=canvas.getContext("2d");
	
    for(var i=1;i<16;i++){
    ctx.beginPath();
    ctx.moveTo(40*i,40);
	ctx.lineTo(40*i,600);
	ctx.stroke();
	
	
	}
	

	for(var i=1;i<16;i++){
	ctx.beginPath();
    ctx.moveTo(40,40*i);
	ctx.lineTo(600,40*i);
	ctx.stroke();

	}
	ctx.beginPath();
	ctx.arc(320,320,3,0,Math.PI*2);
	ctx.arc(160,160,3,0,Math.PI*2);
	

     ctx.fill();
	ctx.beginPath();

	ctx.arc(480,160,3,0,Math.PI*2);
     ctx.fill();
     ctx.beginPath();

	ctx.arc(480,480,3,0,Math.PI*2);
     ctx.fill();
	ctx.beginPath();

	ctx.arc(160,480,3,0,Math.PI*2);
     ctx.fill();
	

}