"use strict";
const review = "Joker review: Joker isn’t just an awesome comic book movie, it’s an awesome movie, period. " +
"It offers no easy answers to the unsettling questions it raises about a cruel society in decline. " + 
"Joaquin Phoenix’s fully committed performance and Todd Phillips’ masterful albeit loose reinvention of the DC source material make Joker a film that should leave comic book fans and non-fans alike disturbed and moved in all the right ways." +
" - IGN.com"

function greetUser(){
    let name = document.getElementById("user_name").value;
    if (name){
        let greeting = "Hello, " + name + " Welcome to the movie review forum! Please enter a coment about the movie!"
        document.getElementById("greeting").innerHTML = greeting;
        document.getElementById("review").innerHTML = review;
    } else {
        alert("Please enter a valid name!");
    }
}

function getComments (){
    let comments = document.getElementById("comments").value;
    try {
        let obj = JSON.parse(comments);
        alert(obj.key);
    } catch {
        alert("doesn't work");
    }
}