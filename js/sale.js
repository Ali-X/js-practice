let startTimeStr = prompt("Enter sale start time");
let endTimeStr = prompt("Enter sale end time");
let nowTimeStr = prompt("Enter now time");

if (!startTimeStr || !endTimeStr || !nowTimeStr) {
    console.log("Please, enter all time")
} else {
    let startTime = Number(startTimeStr);
    let endTime = Number(endTimeStr);
    let nowTime = Number(nowTimeStr);

    if (isNaN(startTime) || isNaN(endTime) || isNaN(nowTime)) {
        console.log("Please, enter numeric time")
    } else if (startTime < 0 || startTime > 24 || endTime < 0 || endTime > 24 || nowTime < 0 || nowTime > 24) {
        console.log("Please, enter 24 format time")
    } else {
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
    }
}