let isAngelCome = confirm("Is Angel come?");
let isStephanCome = confirm("Is Stephan come?");
let isNikolasCome = confirm("Is Nikolas come?");

let maryGoodMood = "Mary is happy";
let maryBadMood = "Mary is upset";

//Маша любить, коли хтось приходить в гості І сумує, якщо не приходить ніхто
if (!isAngelCome && !isStephanCome && !isNikolasCome) {
    alert(maryBadMood);
    console.log(maryBadMood);
}

//Якщо прийдуть хлопці і Анжела, то Степан з Миколою будуть сваритись за Анжелу
else if (isAngelCome && isStephanCome && isNikolasCome) {
    alert(maryBadMood);
    console.log(maryBadMood);
}

//Маша з Анжелою подруги. Маша буде рада.
else if (isAngelCome && !isStephanCome && !isNikolasCome) {
    alert(maryGoodMood);
    console.log(maryGoodMood);
}

//А якщо прийдуть тільки хлопці - то вони будуть спілкуватись з Сашою, а Маша зможе спокійно піти дивитись вогник
else if (!isAngelCome  && isStephanCome && isNikolasCome) {
    alert(maryGoodMood);
    console.log(maryGoodMood);
}

//Маша не любить коли приходить хтось один з хлопців.
else if (!isAngelCome && (isStephanCome || isNikolasCome)) {
    alert(maryBadMood);
    console.log(maryBadMood);
}

//Але якщо прийде Анжела, хлопці переключаються на Анжелу і Маша буде рада
else if (isAngelCome && (isStephanCome || isNikolasCome)) {
    alert(maryGoodMood);
    console.log(maryGoodMood);
}



