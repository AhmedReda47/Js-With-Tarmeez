function dayOfTheWeek(day){
    switch(day){
        case "Monday":
            console.log("Start of the week");
            break;
            case "Friday":
                console.log("Weekend is close");
                break;
            case "Saturday":
            case "Sunday":
                console.log("Holiday");
                break;
              default:
                console.log("Normal Day");
    }
}
dayOfTheWeek("Friday")