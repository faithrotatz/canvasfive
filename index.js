   window.onload=function(){

   var canvas=document.querySelector("canvas")
   var ctx=canvas.getContext("2d");
   
   var huaxian=function(){
   for(var i=1;i<16;i++){
   var li=ctx.createLinearGradient(40,40,40,600);
   li.addColorStop(0.7,"red")
   li.addColorStop(0.3,"green")

   ctx.strokeStyle=li;
   ctx.beginPath();
   ctx.moveTo(40*i,40);
   ctx.lineTo(40*i,600);
   ctx.stroke();


   }


   for(var i=1;i<16;i++){
   var li1=ctx.createLinearGradient(40,40,600,40);
   li1.addColorStop(0.7,"black")
   li1.addColorStop(0.3,"blue")
   ctx.strokeStyle=li1;
   ctx.beginPath();
   ctx.moveTo(40,40*i);
   ctx.lineTo(600,40*i);
   ctx.stroke();

   }
   ctx.fillStyle="#f00"
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
   huaxian();
   //落子函数下x,y为坐标，z为颜色接受white和black
   var luo=function(x,y,z){
   var hx=x*40+40;
   var sy=y*40+40;
   if(z=="black"){


   ctx.beginPath();
   var jingx=ctx.createRadialGradient(hx,sy,0,hx,sy,20) 
   
   jingx.addColorStop(0,"white")
   jingx.addColorStop(0.9,"black")
   ctx.fillStyle=jingx;
   ctx.arc(hx,sy,20,0,Math.PI*2);

   ctx.fill();
   }else{
   ///白
   ctx.beginPath();

   var jingx1=ctx.createRadialGradient(hx,sy,20,hx,sy,0) 
   
   jingx1.addColorStop(0.1,"#bbb")
   jingx1.addColorStop(0.7,"white")
   ctx.fillStyle=jingx1;
   ctx.arc(hx,sy,20,0,Math.PI*2);

   ctx.fill();
   }
   }
   //luo();
    jilu={};
   var kaiguan=localStorage.xian?"white":"black";//true;
   var jx=0;
   var jy=0;


   canvas.onclick=function(e){
   var x=Math.round((e.offsetX-40)/40);
   var y=Math.round((e.offsetY-40)/40);
   
   if(jilu[x+'_'+y]){return;} 

   jilu[x+'_'+y]=kaiguan;
   luo(x,y,kaiguan);
   jx=x;
   jy=y;

   if(kaiguan==="black"){kaiguan="white"}else{kaiguan="black"}

   localStorage.data=JSON.stringify(jilu);
   if(kaiguan==="white"){localStorage.xian=1}else{
   localStorage.removeItem("xian")
   }


   }

   function chonghui(){

   if(!localStorage.data){return;}
   jilu=JSON.parse(localStorage.data)
   for(var i in jilu){

   var arr=i.split("_");
   var x=arr[0];
   var y=arr[1];
   var color=jilu[i];
   
   
   luo(x,y,color)

   }

   };
   chonghui();
   canvas.ondblclick=function(e){e.stopPropagation();}
   document.ondblclick=function(){
   //ctx.clearRect(0,0,640,640);

   location.reload();
   localStorage.clear();

   }

   var huiqi=document.querySelector("#huiqi")
   huiqi.onclick=function(){
   ctx.clearRect((jx+1)*40-20,(jy+1)*40-20,40,40)
   }

   



   }