"use strict";
const review = "<p>Joker review:</p> <p>Joker isn’t just an awesome comic book movie, it’s an awesome movie, period. " +
"It offers no easy answers to the unsettling questions it raises about a cruel society in decline. " + 
"Joaquin Phoenix’s fully committed performance and Todd Phillips’ masterful albeit loose reinvention of the DC source "+ 
"material make Joker a film that should leave comic book fans and non-fans alike disturbed and moved in all the right ways." +
" - IGN.com</p>";

var timer;
var inputs = [];
var outputs = [];
function loadHomePage(){
    let greeting = "Hello, " + localStorage.name + " Welcome to the movie review forum! Please enter a coment about the movie!";
    document.getElementById("greeting").innerHTML = greeting;
    document.getElementById("review").innerHTML = review;
}

function load(){
    sessionStorage.setItem("count", 0);
    if (localStorage.name){
        alert("Welcome Back " + localStorage.name + "!");
        document.getElementById("user_name").value = localStorage.name;
        loadHomePage();
        if (localStorage.input){
            document.getElementById("comments").value = localStorage.input;
        }
    }
    timer = window.setInterval(function(){
        let randomNum = Math.floor(Math.random() * Math.floor(dictionary.entries[dictionary.entries.length - 1].answer.length));
        alert(dictionary.entries[dictionary.entries.length - 1].answer[randomNum]);
    }, 30000);
}

function greetUser(){
    clearInterval(timer);
    localStorage.name = document.getElementById("user_name").value;
    if (localStorage.name){
        loadHomePage();
    } else {
        alert("Please enter a valid name!");
    }
    timer = window.setInterval(function(){
        let randomNum = Math.floor(Math.random() * Math.floor(dictionary.entries[dictionary.entries.length - 1].answer.length));
        alert(dictionary.entries[dictionary.entries.length - 1].answer[randomNum]);
    }, 30000);
}

function getComments (){
    clearInterval(timer);
    let comments = document.getElementById("comments").value;
    try{
        let obj = JSON.parse(comments);
        update(obj);
    } catch {
        let words = comments.split(/\s|\.|,\s/);
        let action = words[0];
        if (action === "/clear") {
            clear();
        } else if (action === "/search") {
            searchAction(words[1]);
        } else if(action === "/history") {
            searchHistory();
        } else if (action === "/count") {
            document.getElementById("comments").value = "The number of rude words count is " + sessionStorage.count;
        } else if(action === "/list") {
            listComments();
        } else {
            inputs.push(comments);
            console.log(inputs);
            display(words);
        }
    }
    timer = window.setInterval(function() {
        let randomNum = Math.floor(Math.random() * Math.floor(dictionary.entries[dictionary.entries.length - 1].answer.length));
        alert(dictionary.entries[dictionary.entries.length - 1].answer[randomNum]);
    }, 30000);
}

/*======================== Handle User Comments ==========================*/
function display(words) {
    let newSentence = "";
    let check;
    let usedWords = [];
    for (let i in words){
        if (words[i]!= ""){
            check = search(words[i])
            if(check){
                let replacement = replace(check);
                while (usedWords.indexOf(replacement) > -1 && usedWords.length < dictionary.entries[check].answer.length){
                    replacement = replace(check);
                }
                usedWords.push(replacement);
                newSentence += replacement + " ";
            } else {
                newSentence += words[i] + " ";
            }
        }
    }
    outputs.push(newSentence);
    console.log(outputs);
    document.getElementById("comments").value = newSentence;
}

function search(word){
    let ret = false;
    let entries = dictionary.entries;
    for (let keyIndex in entries) {
        for(let keyWord in entries[keyIndex].key){
            if (word === entries[keyIndex].key[keyWord]){
                sessionStorage.count ++;
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
    let keys = [];
    Object.keys(obj).forEach(function(key){
        keys.push(key);
    });
    if(keys.length > 0){
        for (let i in keys){
            let check = search(keys[i]);
            if(check){
                addWord (check, obj[keys[i]]);
            } else {
                alert(keys[i] + " does not exist in the dictionary!!");
            }
        }
    }
}

function addWord(keyIndex, value){
    if (typeof value === 'string'){
        dictionary.entries[keyIndex].answer.push(value);
        alert(value + " has been added and the dictionary is now smarter!");
    } else if(typeof value === 'object'){
        for(let i in value){
            dictionary.entries[keyIndex].answer.push(value[i]);
        }
        alert("Values have been added and the dictionary is now smarter!");
    }
}
/*==================================================================================*/

/*=========================== Activity3 Functionality ============================= */

function clear(){
    inputs = [];
    outputs = [];
    localStorage.clear();
    sessionStorage.clear();
    location.reload();
    sessionStorage.count = 0;
}

function saveState(){
    localStorage.input = document.getElementById("comments").value;
}

function searchAction(word){
    sessionStorage.setItem(word, word);
    for(let i in dictionary.entries){
        for(let j in dictionary.entries[i].key){
            if(word === dictionary.entries[i].key[j]){
                document.getElementById("comments").value = dictionary.entries[i].answer;
            }
        }
    }
}

function searchHistory(){
    let values = "<ol>";
    for (let i in dictionary.entries){
        for (let j in dictionary.entries[i].key){
            if (sessionStorage[dictionary.entries[i].key[j]]){
                values += "<li>" + dictionary.entries[i].key[j] + "</li>";
            }
        }
    }
    document.getElementById("display").innerHTML = values + "</ol>";
}

function listComments(){
    let values;
    if (inputs && outputs){
        values = "<p>Actual Reviews</p><ol>";
        for(let i in inputs){
            values += "<li>" + inputs[i] + "</li>";
        }
        values += "</ol><p>Censored Reviews</p><ol>";
        for (let i in outputs){
            values += "<li>" + outputs[i] + "</li>";
        }
    } else {
        values = "<p>Nothing to Display!</p>"
    } 
    document.getElementById("display").innerHTML = values + "</ol>";
}
/*==================================================================================*/

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

// stupid stupid stupid stupid stupid stupid stupid stupid stupid stupid