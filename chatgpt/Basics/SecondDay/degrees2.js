function degree(num) {
    if(num >= 90){
        console.log("A");
    } else if(num >= 80 && num < 89){
        console.log("B");
    } else if(num >= 70 < 79){
        console.log("C");
    } else if(num < 70){
        console.log("F");
    } else{
        console.log("XXXX");
    }
}
degree()