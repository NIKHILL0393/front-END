var a=0;
// setInterval(animation,50);
var z=setInterval(animation,50);

function animation(){
    a=a+10;
    if (a==200){
        clearInterval(z);

    }else{
    var b=document.querySelector("#a");
    b.style.marginLeft=a +'px';
}}