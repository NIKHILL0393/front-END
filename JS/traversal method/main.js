document.addEventListener("DOMContentLoaded", function() {
   
    // parent element
    // var element = document.querySelector("#outer").parentElement;
    var element = document.querySelector(".x").parentElement.style.background="red";
    var element = document.querySelector("#inner").parentElement.style.background="gold";
    
    // parent Node
    // var element = document.querySelector("#outer").parentNode;

    // children 
    // var element = document.querySelector(".flex").children[1].style.background="silver";

    // child Node
    // var element = document.querySelector(".flex").childNodes[1];

    // firstElementChild
        var element = document.querySelector(".flex").firstElementChild.style.background="yellow";

    // lastElementChild
       var element = document.querySelector(".flex").lastElementChild.style.background="green";

    // nextElementSibling
        var element = document.querySelector(".x").nextElementSibling.style.background="blue";
        
    // previousElementSibling
          var element = document.querySelector(".x").previousElementSibling.style.background="violet";

        
    console.log(element);
});
