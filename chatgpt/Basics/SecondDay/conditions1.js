function check(num) {
    if(num % 2 === 0){
        console.log("Even");
    } else if (num % 2 === 1){
        console.log("Odd");
    } else {
        console.log("Please Enter A Number");
    }
}
check(4)