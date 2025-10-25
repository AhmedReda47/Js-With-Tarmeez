let input = document.getElementsByTagName("input")[0];
let btn = document.getElementsByTagName("button")[0];
let inputText = input.value;
function user(){
    if(inputText < 13){
        console.log("Child");
    } else if(inputText > 13 && num < 19) {
        console.log("Teenager");
    } else if(inputText > 20 < 64) {
        console.log("Adult");
    } else if(inputText >= 65){
        console.log("Senior");
    } else {
        "please try with another age"
    }
}