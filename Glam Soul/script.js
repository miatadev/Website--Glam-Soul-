menu.onclick =  function myFunction(){
    var x = document.getElementById("myTopnav"); 

    if (x.className === "topnav"){
        x.className += " responsive "; // пробіл перед класом responsive в лапках обов"язково! //"responsive"- не спрацює, лише- " responsive "
    } else {
        x.className = "topnav";

    }
}

console.log(className);