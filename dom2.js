let isAngelCome = confirm("Is Angel come?");
let isStephanCome = confirm("Is Stephan come?");
let isNikolasCome = confirm("Is Nikolas come?");

var maryGoodMood = "Mary is happy";
var maryBadMood = "Mary is upset";

//Маша любить, коли хтось приходить в гості І сумує, якщо не приходить ніхто
if (isAngelCome === false && isStephanCome === false && isNikolasCome === false) {
    alert(maryBadMood);
}

//Якщо прийдуть хлопці і Анжела, то Степан з Миколою будуть сваритись за Анжелу
else if (isAngelCome === true && isStephanCome === true && isNikolasCome === true) {
    alert(maryBadMood);
}

//Маша з Анжелою подруги. Маша буде рада.
else if (isAngelCome === true && isStephanCome === false && isNikolasCome === false) {
    alert(maryGoodMood);
}

//А якщо прийдуть тільки хлопці - то вони будуть спілкуватись з Сашою, а Маша зможе спокійно піти дивитись вогник
else if (isAngelCome === false && isStephanCome === true && isNikolasCome === true) {
    alert(maryGoodMood);
}

//Маша не любить коли приходить хтось один з хлопців.
else if (isAngelCome === false && (isStephanCome || isNikolasCome)) {
    alert(maryBadMood);
}

//Але якщо прийде Анжела, хлопці переключаються на Анжелу і Маша буде рада
else if (isAngelCome === true && (isStephanCome || isNikolasCome)) {
    alert(maryGoodMood);
}


