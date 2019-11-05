"use strict";
function calc(){
    let input = parseInt(document.getElementById('inputVal').value);
    let from = parseInt(document.getElementById('input').value);
    let ret = 0;
    if(input && (typeof input === 'number' || typeof input === 'bigint')){
        console.log(from);
        switch(from){
            case 1:
                ret = input * 35273.962;
                break;
            case 2:
                ret = input * 35.274;
                break;
            case 3:
                ret = input / 28.35;
                break;
            case 4:
                ret = input / 28349.523;
                break;
            case 5:
                ret = input / (2.835 * Math.pow(10,7));
                break;
            case 6:
                ret = input * 35840;
                break;
            case 7:
                ret = input * 32000;
                break;
            case 8:
                ret = input * 224;
                break;
            case 9:
                ret = input * 16;
                break;
            case 10:
                ret = input * 1;
                break;
            default:
                alert("Conversion could not be completed!");
        }
    } else {
        alert("Please enter a valid input!");
    }
    document.getElementById('outputVal').value = ret;
 }