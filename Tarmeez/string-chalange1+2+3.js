let input = document.getElementsByTagName('input')[0];
let button = document.getElementsByTagName('button')[0];
let done = document.getElementsByTagName('p')[0];

button.onclick = function () {
    let text = input.value;
    let upper = text.toUpperCase();
    let rep = upper.replace("O", "Y");
    let rev = rep.split("").reverse().join("")
    let result = `${text}\n ${upper}\n ${rep}\n ${rev}`
    done.innerText = result;
}