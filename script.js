const roc = document.querySelector("#roc");
const pap = document.querySelector("#pap");
const sci = document.querySelector("#sci");
const usr = document.querySelector("#usr");
const cpu = document.querySelector("#cpu");
const bt = document.querySelector("#bt");
const para = document.querySelector("#para");
const r1 = document.querySelector("#r1");
const r2 = document.querySelector("#r2");

var pc = 0, pu = 0;
var a,b;








function reset()
{
  pc=0;
  pu=0;
  a=0;b=0;

   var myTab = document.getElementById('mt');
myTab.rows[1].cells[1].innerText = pu;
  myTab.rows[1].cells[0].innerText = pc;

  document.getElementById("cpu").src="https://www.seekpng.com/png/detail/816-8161371_rock-paper-scissor-icon-png.png";

  document.getElementById("usr").src="https://www.seekpng.com/png/detail/816-8161371_rock-paper-scissor-icon-png.png";

   document.getElementById("para").innerHTML = "ROCK PAPER SCISSORS!!!!!!";
  
}


function calc()
{
  
 if(a==0)
 {
   if(b==0)
   {
     document.getElementById("para").innerHTML = "No Points!!";
   }
   else if(b==1)
   {
    document.getElementById("para").innerHTML = "Points for computer.."; 
     pc+=1;
   }
   else
   {
     document.getElementById("para").innerHTML = "Points for user..";
     pu+=1;
   }
 }
if(a==1)
 {
   if(b==0)
   {
     document.getElementById("para").innerHTML = "Points for user..";
     pu+=1;
   }
   else if(b==1)
   {
    document.getElementById("para").innerHTML = "No points!!"; 
    
   }
   else
   {
     document.getElementById("para").innerHTML = "Points for computer..";
     pc+=1;
   }
 }


  if(a==2)
 {
   if(b==0)
   {
     document.getElementById("para").innerHTML = "Points for computer..";
     pc+=1;
   }
   else if(b==1)
   {
    document.getElementById("para").innerHTML = "Points for user.."; 
     pu+=1;
   }
   else
   {
     document.getElementById("para").innerHTML = "No Points!!";
    
   }
 }

  

  var myTab = document.getElementById('mt');
myTab.rows[1].cells[1].innerText = pu;
  myTab.rows[1].cells[0].innerText = pc;
  a=0;
  b=0;

  if(pu==3|| pc==3)
  {

    if(pu==3)
    {
           document.getElementById("para").innerHTML = "Congrats!!! User WON!!";
    }
    else
    {
           document.getElementById("para").innerHTML = "Computer WON!!";
    }


    setTimeout(reset,10000);
    
    
  }


  
}









function shk()
{
  document.getElementById("disp").classList.add("shake");
}

function rmv()
{
  document.getElementById("disp").classList.remove("shake");
}





function goRoc() {

  shk();

setTimeout(() => {
  
  let rn = Math.floor(Math.random() * 3);

  if (rn == 0) {
    document.getElementById("cpu").src = "https://www.nicepng.com/png/detail/6-61708_rock-rock-paper-scissors-clipart.png";
  

  document.getElementById("usr").src = "https://www.nicepng.com/png/detail/6-61708_rock-rock-paper-scissors-clipart.png";

    document.getElementById("cpu").width = "242";
    document.getElementById("cpu").height = "280";
    document.getElementById("usr").width = "242";
    document.getElementById("usr").height = "280";
  }

  if (rn == 1) {
    
    document.getElementById("cpu").src = "https://www.pngitem.com/pimgs/m/266-2667252_transparent-rock-paper-scissors-clipart-rock-paper-scissors.png";
    document.getElementById("usr").src = "https://www.nicepng.com/png/detail/6-61708_rock-rock-paper-scissors-clipart.png";

    document.getElementById("cpu").width = "242";
    document.getElementById("cpu").height = "280";
    document.getElementById("usr").width = "242";
    document.getElementById("usr").height = "280";
  }
  if (rn == 2) {
    
    document.getElementById("cpu").src = "https://www.seekpng.com/png/detail/111-1114370_rock-paper-scissors-rock-paper-scissors-clipart.png ";
    
    document.getElementById("usr").src = "https://www.nicepng.com/png/detail/6-61708_rock-rock-paper-scissors-clipart.png";

    document.getElementById("cpu").width = "242";
    document.getElementById("cpu").height = "280";
    document.getElementById("usr").width = "242";
    document.getElementById("usr").height = "280";
  }
   rmv();

  a=0,b=rn;
  calc();

},3000);

  

 

}



function goPap() {

  shk();

setTimeout(() => {
  
  let rn = Math.floor(Math.random() * 3);

  if (rn == 0) {
    document.getElementById("cpu").src = "https://www.nicepng.com/png/detail/6-61708_rock-rock-paper-scissors-clipart.png";
  

      document.getElementById("usr").src = "https://www.pngitem.com/pimgs/m/266-2667252_transparent-rock-paper-scissors-clipart-rock-paper-scissors.png";

    document.getElementById("cpu").width = "242";
    document.getElementById("cpu").height = "280";
    document.getElementById("usr").width = "242";
    document.getElementById("usr").height = "280";
  }

  if (rn == 1) {
    
    document.getElementById("cpu").src = "https://www.pngitem.com/pimgs/m/266-2667252_transparent-rock-paper-scissors-clipart-rock-paper-scissors.png";
        document.getElementById("usr").src = "https://www.pngitem.com/pimgs/m/266-2667252_transparent-rock-paper-scissors-clipart-rock-paper-scissors.png";

    document.getElementById("cpu").width = "242";
    document.getElementById("cpu").height = "280";
    document.getElementById("usr").width = "242";
    document.getElementById("usr").height = "280";
  }
  if (rn == 2) {
    
    document.getElementById("cpu").src = "https://www.seekpng.com/png/detail/111-1114370_rock-paper-scissors-rock-paper-scissors-clipart.png ";
    
    document.getElementById("usr").src = "https://www.pngitem.com/pimgs/m/266-2667252_transparent-rock-paper-scissors-clipart-rock-paper-scissors.png";

    document.getElementById("cpu").width = "242";
    document.getElementById("cpu").height = "280";
    document.getElementById("usr").width = "242";
    document.getElementById("usr").height = "280";
  }
   rmv();

  a=1,b=rn;
  calc();

},3000);

  

 

}




function goSci() {

  shk();

setTimeout(() => {
  
  let rn = Math.floor(Math.random() * 3);

  if (rn == 0) {
    document.getElementById("cpu").src = "https://www.nicepng.com/png/detail/6-61708_rock-rock-paper-scissors-clipart.png";
  

    document.getElementById("usr").src = "https://www.seekpng.com/png/detail/111-1114370_rock-paper-scissors-rock-paper-scissors-clipart.png ";

    document.getElementById("cpu").width = "242";
    document.getElementById("cpu").height = "280";
    document.getElementById("usr").width = "242";
    document.getElementById("usr").height = "280";
  }

  if (rn == 1) {
    
    document.getElementById("cpu").src = "https://www.pngitem.com/pimgs/m/266-2667252_transparent-rock-paper-scissors-clipart-rock-paper-scissors.png";
        document.getElementById("usr").src = "https://www.seekpng.com/png/detail/111-1114370_rock-paper-scissors-rock-paper-scissors-clipart.png ";

    document.getElementById("cpu").width = "242";
    document.getElementById("cpu").height = "280";
    document.getElementById("usr").width = "242";
    document.getElementById("usr").height = "280";
  }
  if (rn == 2) {
    
    document.getElementById("cpu").src = "https://www.seekpng.com/png/detail/111-1114370_rock-paper-scissors-rock-paper-scissors-clipart.png ";
    
    document.getElementById("usr").src = "https://www.seekpng.com/png/detail/111-1114370_rock-paper-scissors-rock-paper-scissors-clipart.png ";

    document.getElementById("cpu").width = "242";
    document.getElementById("cpu").height = "280";
    document.getElementById("usr").width = "242";
    document.getElementById("usr").height = "280";
  }
   rmv();

  a=2,b=rn;
  calc();

},3000);

  

 

}





roc.onclick = goRoc;
bt.onclick = reset;
pap.onclick = goPap;
sci.onclick = goSci;