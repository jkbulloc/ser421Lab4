"use strict";
const review = "<p>Joker review:</p> <p>Joker isn’t just an awesome comic book movie, it’s an awesome movie, period. " +
"It offers no easy answers to the unsettling questions it raises about a cruel society in decline. " + 
"Joaquin Phoenix’s fully committed performance and Todd Phillips’ masterful albeit loose reinvention of the DC source "+ 
"material make Joker a film that should leave comic book fans and non-fans alike disturbed and moved in all the right ways." +
" - IGN.com</p>";

var name;

function loadHomePage(){
    let greeting = "Hello, " + name + " Welcome to the movie review forum! Please enter a coment about the movie!";
    document.getElementById("greeting").innerHTML = greeting;
    document.getElementById("review").innerHTML = review;
}

function load(){
    if (name){
        alert("Welcome Back " + name + "!");
        document.getElementById("user_name").value = name;
        loadHomePage();
    }
}

function greetUser(){
    name = document.getElementById("user_name").value;
    if (name){
        loadHomePage();
    } else {
        alert("Please enter a valid name!");
    }
}

function getComments (){
    console.log("get comments");
    let comments = document.getElementById("comments").value;
    try {
        let obj = JSON.parse(comments);
        update(obj);
    } catch {
        let words = comments.split(/\s|\.|,\s/);
        display(words);
    }
}

/*======================== Handle User Comments ==========================*/
function display(words) {
    let newSentence = "";
    let check;
    for (let i in words){
        if (words[i]!= ""){
            check = search(words[i])
            if(check){
                newSentence += replace(check) + " ";
            } else {
                newSentence += words[i] + " ";
            }
        }
    }
    document.getElementById("comments").value = newSentence;
}

function search(word){
    let ret = false;
    let entries = dictionary.entries;
    for (let keyIndex in entries) {
        for(let keyWord in entries[keyIndex].key){
            if (word === entries[keyIndex].key[keyWord]){
                ret = keyIndex;
            }
        }
    }
    return ret;
}

function replace(keyIndex){
    let randomNum = Math.floor(Math.random() * Math.floor(dictionary.entries[keyIndex].answer.length));
    return dictionary.entries[keyIndex].answer[randomNum];
}

/*===============================================================================*/

/*============================ Handle User JSON Object =============================*/
function update(obj){
    console.log("updating...");
    let keys = [];
    Object.keys(obj).forEach(function(key){
        keys.push(key);
    });
    //console.log(keys);
    if(keys.length > 0){
        for (let i in keys){
            let check = search(keys[i]);
            if(check){
                let temp = keys[i];
                console.log("i never get here because check = 0!");
                console.log(obj[keys[i]]);
                addWord (check, obj[keys[i]]);
            } else {
                alert(keys[i] + " does not exist in the dictionary!!");
            }
        }
    }
}

function addWord(keyIndex, value){
    console.log("made it to add function");
    dictionary.entries[keyIndex].answer.push(value);
    alert(value + " has been added and the dictionary is now smarter!");
}
/*==================================================================================*/

/*
{
    "key":"value"
}
{
    "stupid":"intelligent"
}
{
    "stupid":"intelligent",
    "idiot":"smart person"
}

stupid stupid stupid stupid stupid stupid stupid stupid stupid stupid stupid stupid stupid stupid stupid

*/

var dictionary = {
    "dictionary_name": "default",
    "entries":
        [{
            "key": ["stupid", "dumb", "idiot", "unintelligent", "simple-minded", "braindead", "foolish", "unthoughtful"],
            "answer": ["educated", "informed", "schooled", "skilled", "trained", "logical", "rational", "reasonable", "valid"]
        }, {
            "key": ["unattractive", "hideous", "ugly"],
            "answer": ["attractive", "beauteous", "beautiful", "lovely", "pretty", "ravishing"]
        }, {
            "key": ["ambiguous", "cryptic", "dark", "nebulous", "obscure", "unintelligible"],
            "answer": ["obvious", "plain", "unambiguous", "understandable", "unequivocal"]
        }, {
            "key": ["incapable", "incompetent", "inept", "unable", "unfit", "unqualified", "weak", "artless"],
            "answer": ["accomplished", "fit", "adept", "complete", "consummate"]
        }, {
            "key": ["emotionless", "heartless", "unkind", "mean", "selfish", "evil"],
            "answer": ["benevolent", "benignant", "gentle", "kind", "clement"]
        }, {
            "key": ["idle"],
            "answer": ["Can you reply something?", "You have been idle for more than 30 seconds", "Whats the matter with you? Submit something"]
        }]
};