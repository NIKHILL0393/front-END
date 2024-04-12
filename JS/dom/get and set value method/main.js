document.addEventListener("DOMContentLoaded", function() {

    // (get the values)

    // var element = document.querySelector("#e").innerText;
    // var element = document.querySelector("#e").innerHTML;    var element = document.querySelector("#e").innerText;
    // var element = document.querySelector("#e").getAttribute("id");
    // var element = document.querySelector("#e").getAttributeNode("id");

    // (set the values)
    // var element = document.querySelector(".f").innerText="HTML";
    // var element = document.querySelector(".f").setAttribute=("id","z");
    var element = document.querySelector(".f").attributes[1].value=" border:10px solid pink";
    // var element = document.querySelector(".f").removeAttribute("style");

    console.log(element);
});
