var userMoney = prompt("Скільки у вас є грошей?");

if (userMoney >= 100) {
    confirm("Ви можете купити БігМакМеню. Бажаєте?");
} else if (userMoney >= 50 && userMoney < 100) {
    confirm("Ви можете купити Чізбургер і картоплю. Бажаєте?");
} else if (userMoney >= 20 && userMoney < 50) {
    confirm("Ви можете купити колу. Бажаєте?");
} else {
    alert("Пробачте, в нашому закладі немає страв для вас :(");
}

