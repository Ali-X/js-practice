var startTime = Number(prompt("Enter sale start time"));
var endTime = Number(prompt("Enter sale end time"));
var nowTime = Number(prompt("Enter now time"));

// debugger;
if (startTime <= endTime) {
    if (nowTime >= startTime && nowTime <= endTime) {
        console.log("It's sale!!!!!!!!")
    } else {
        console.log("Sorry, it's not sale!!!!!!!!")
    }
} else {
    //from 18 till 24 AND from 00 till 9
    if (nowTime >= startTime && nowTime <= 24 || nowTime <= endTime && nowTime >= 0) {
        console.log("It's sale!!!!!!!!")
    } else {
        console.log("Sorry, it's not sale!!!!!!!!")
    }
}