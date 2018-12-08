let startTimeStr = prompt("Enter sale start time");
let endTimeStr = prompt("Enter sale end time");
let nowTimeStr = prompt("Enter now time");

if (startTimeStr == null || endTimeStr == null || nowTimeStr == null
    || startTimeStr === "" || endTimeStr === "" || nowTimeStr === "") {
    console.log("Please, enter all time")
} else {
    var startTime = Number(startTimeStr);
    var endTime = Number(endTimeStr);
    var nowTime = Number(nowTimeStr);

    if (isNaN(startTime) || isNaN(endTime) || isNaN(nowTime)) {
        console.log("Please, enter numeric time")
    } else {
        debugger;
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