// var a=document.createElement("h2");
// var b=document.createTextNode("this is just text");
// a.appendChild(b);

var c=document.querySelector("#a");

// c.insertAdjacentElement("beforebegin",a);
//  c.insertAdjacentElement("afterend",a);

// var a="<h2>this is heading</h2>"

// c.insertAdjacentHTML("afterend",a);
var a="this is heading"

c.insertAdjacentText("afterend",a);