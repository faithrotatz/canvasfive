   window.onload=function(){
    //时间表
    var show=document.querySelector("#timeshow")
    var sec=0;
    var xinxi=document.querySelector("#xinxi")
   var time=function(){
         
         var x=0;
         var y=Math.PI/15*sec;
         
         var t=30-sec;
         show.innerHTML=t+"s";
         sec+=1;
       
        
        var biao=document.querySelector("#time")
        var ctx=biao.getContext("2d") 
        ctx.clearRect(0,0,300,300)
        ctx.save();
        ctx.beginPath();
        ctx.translate(150,150);
        ctx.strokeStyle="rgba(0,0,0,0.7)";
        ctx.lineWidth=4;
        ctx.arc(0,0,120,0,Math.PI*2);
        /*var a=ctx.createRadialGradient(0,0,115,0,0,120)
        a.addColorStop("0.8","white")
        a.addColorStop("0.9","#ccc")
        a.addColorStop("1","black")

        ctx.strokeStyle=a;*/

        ctx.stroke();
        ctx.restore();
        ctx.save();
        ctx.translate(150,150);
         
        ctx.beginPath();
        for(var i=1;i<61;i++){
        ctx.rotate(Math.PI/30)
        if(i%5==0){
        ctx.moveTo(0,90)
        }else{
        ctx.moveTo(0,100);
        }
        
        
        ctx.lineTo(0,110);
        }
        
        ctx.lineWidth=3;
        ctx.stroke();

        ctx.restore();

        ctx.save();
       
        ctx.translate(150,150);
        
        ctx.rotate(-Math.PI/2)
        ctx.beginPath();
        ctx.arc(0,0,140,0,Math.PI*2)
        ctx.strokeStyle="rgba(0,0,0,0.5)"
        ctx.stroke();
        ctx.beginPath();
        ctx.rotate(y)

        ctx.arc(140,0,4,0,Math.PI*2)
        ctx.fillStyle="rgba(0,0,0,0.7)";
        ctx.fill();
        ctx.restore();
        ctx.save();
        ctx.translate(150,150);
        
        ctx.rotate(-Math.PI/2)
        ctx.lineWidth=3;
        ctx.beginPath();
        ctx.rotate(x)
        ctx.moveTo(-20,0);
        ctx.lineTo(50,0);
        ctx.lineCap="round";
        ctx.moveTo(60,0)
        ctx.arc(55,0,5,0,Math.PI*2)
        ctx.lineTo(80,0);
        ctx.strokeStyle="red";
        ctx.stroke();
        ctx.beginPath();
        ctx.fillStyle="red"; 
        ctx.arc(0,0,5,0,Math.PI*2)
        ctx.fill();
        ctx.restore();
        ;
        if(sec==31){
         
          sec=0;
         suiji();
         }
        };
 time();
 var suiji=function(){
 var a=Math.floor(Math.random()*15);
 var b=Math.floor(Math.random()*15);
 if(jilu[a+'_'+b]){
     a=Math.floor(Math.random()*15);
     b=Math.floor(Math.random()*15);
}else{
  luo(a,b,kaiguan);
  jilu[a+'_'+b]=kaiguan;
  if(kaiguan==="black"){kaiguan="white"}else{kaiguan="black"}
   xinxi.innerHTML=kaiguan;
   localStorage.data=JSON.stringify(jilu);
   if(kaiguan==="white"){localStorage.xian=1}else{
   localStorage.removeItem("xian")
   }

  return true; 
}
 
 }
 var ti=setInterval(time,1000)

   //时间控制
   var ctl=true;
   var item=document.querySelector("#item")
   item.onclick=function(){
   if(ctl){clearInterval(ti)
    item.innerHTML="关闭时间";
    ctl=!ctl}
    else{ti=setInterval(time,1000);
     item.innerHTML="开启时间";
     sec=0;
     ctl=!ctl;
     }

   } 

   //////////////////////////////////////////
   var canvas=document.querySelector("#canvas1")
   var  ctx=canvas.getContext("2d");
  var canvas2=document.querySelector("#canvas2")
  var ct=canvas2.getContext("2d")
   var huaxian=function(){
   for(var i=1;i<16;i++){
   var li=ct.createLinearGradient(40,40,40,600);
   li.addColorStop(0.7,"black")
   li.addColorStop(0.3,"black")

   ct.strokeStyle=li;
   ct.beginPath();
   ct.moveTo(40*i,40);
   ct.lineTo(40*i,600);
   ct.stroke();


   }


   for(var i=1;i<16;i++){
   var li1=ct.createLinearGradient(40,40,600,40);
   li1.addColorStop(0.7,"black")
   li1.addColorStop(0.3,"black")
   ct.strokeStyle=li1;
   ct.beginPath();
   ct.moveTo(40,40*i);
   ct.lineTo(600,40*i);
   ct.stroke();

   }
   ct.fillStyle="black"
   ct.beginPath();
   ct.arc(320,320,3,0,Math.PI*2);
   ct.arc(160,160,3,0,Math.PI*2);


   ct.fill();
   ct.beginPath();

   ct.arc(480,160,3,0,Math.PI*2);
   ct.fill();
   ct.beginPath();

   ct.arc(480,480,3,0,Math.PI*2);
   ct.fill();
   ct.beginPath();

   ct.arc(160,480,3,0,Math.PI*2);
   ct.fill();
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

   var jingx1=ctx.createRadialGradient(hx,sy,20,hx,sy,0);
   
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

   xinxi.innerHTML=kaiguan;
   canvas.onclick=function(e){
   var x=Math.round((e.offsetX-40)/40);
   var y=Math.round((e.offsetY-40)/40);
   
   if(jilu[x+'_'+y]){return;} 

   jilu[x+'_'+y]=kaiguan;
   luo(x,y,kaiguan);
   panduan(x,y,kaiguan);
   if(panduan(x,y,kaiguan)){alert(kaiguan+"方获胜")};
   //confirm("是否再来一局");
   //if(confirm("是否再来一局")){
   //localStorage.clear();
   //ctx.clearRect(0,0,640,640);
   //huaxian();
   //}
   //}
   jx=x;
   jy=y;
    
   if(kaiguan==="black"){kaiguan="white"}else{kaiguan="black"}
   xinxi.innerHTML=kaiguan;
   localStorage.data=JSON.stringify(jilu);
   if(kaiguan==="white"){localStorage.xian=1}else{
   localStorage.removeItem("xian")
   }


   }
    var xy2id = function(x,y) {
     return x + '_' + y;
   }
   //判断输赢
    function panduan(x,y,color){
    
    var shuju;
    shuju=filter(color);
      var tx,ty,hang = 1;shu = 1; zuoxie= 1;youxie = 1;
     tx=x;ty=y;while( shuju[ xy2id( tx-1,ty ) ]){tx--;hang++};
     tx=x;ty=y;while( shuju[ xy2id( tx+1,ty ) ]){tx++;hang++};
     if(hang >= 5){return true};
     tx=x;ty=y;while( shuju[ xy2id( tx,ty-1 ) ]){ty--;shu++};
     tx=x;ty=y;while( shuju[ xy2id( tx,ty+1 ) ]){ty++;shu++};
    if(shu >= 5){return true};
     tx=x;ty=y;while( shuju[ xy2id( tx+1,ty-1 ) ]){tx++;ty--;zuoxie++};
     tx=x;ty=y;while( shuju[ xy2id( tx-1,ty+1 ) ]){tx--;ty++;zuoxie++};
     if(zuoxie >= 5){return true};
     tx=x;ty=y;while( shuju[ xy2id( tx-1,ty-1 ) ]){tx--;ty--;youxie++};
     tx=x;ty=y;while( shuju[ xy2id( tx+1,ty+1 ) ]){tx++;ty++;youxie++};
     if(youxie >= 5){return true};
  
    }
    function filter(color){
    var r={};
    for(var i in jilu){
    if( jilu[i]==color){r[i]=jilu[i]}
   
    }
    return r;
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
   var clear=document.querySelector("#clear")
   canvas.ondblclick=function(e){e.stopPropagation();}
 
   clear.onclick=function(){
   //ctx.clearRect(0,0,640,640);

   location.reload();
   localStorage.clear();

   }

   var huiqi=document.querySelector("#huiqi")
   huiqi.onclick=function(){
   ctx.clearRect((jx+1)*40-20,(jy+1)*40-20,40,40);
   if(kaiguan==="black"){kaiguan="white"}else{kaiguan="black"}
      delete jilu[jx+'_'+jy];
      localStorage.data=JSON.stringify(jilu)

 
   
   }

   



   }