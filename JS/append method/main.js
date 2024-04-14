
var a=document.createElement("h4");
var b=document.createTextNode("this is a text");
a.appendChild(b);

 document.querySelector("#a").appendChild(a);
// var c= document.querySelector("#a").appendChild(a);
// c.insertBefore(a,c.childNodes[0]);
console.log(a);
