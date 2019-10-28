"use strict";

//1 Output to the console the <ol> element encompassing the results of the search
console.log(document.getElementById("b_results"));

//2 Output to the console the code for the "onload" event on the <body> element
console.log(document.body.onload);

//3 Output to the console the 2nd child node underneath the <body> element
console.log(document.body.childNodes[1]);

//4 Output to the console the number of <h2> tags in the page
console.log(document.getElementsByTagName("h2").length);

//5 Output to the console the value in the search bar
console.log(document.getElementById("sb_form_q").value);

//6 make the "add bing new tab extension" text in the upper right corner result go away
document.getElementsByClassName("b_op_atxt")[0].innerHTML = "";