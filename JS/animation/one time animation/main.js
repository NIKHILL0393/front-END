var x =setTimeout(animation,2000);
 function animation(){
   var b=document.querySelector("#a");
   b.style.width= "500px";
}
function stop(){
   clearTimeout(x); 
}