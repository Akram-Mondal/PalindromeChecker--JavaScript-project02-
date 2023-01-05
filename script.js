let button = document.getElementById("button");

button.addEventListener("click", function(){
    let text = document.getElementById("textarea").value;
    let reverseText = text.toString().split("").reverse().join("");
    let mytext = text.toString();
     if (mytext == reverseText) {
         document.getElementById("word").innerHTML = "Palindrome"; 
     } else{
         document.getElementById("word").innerHTML = "Not palindrome";  
     }
})