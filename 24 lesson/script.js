input = document.querySelector(".number");
check = document.querySelector(".button1");
help = document.querySelector(".h4");
left = document.querySelector(".count");
record = document.querySelector(".record1");
recordrama = document.querySelector(".h7")
let x = 0;
let num = 1 + Math.floor(Math.random() * 100);
life = 20;
left.innerHTML = life;
record1 = 0;
record.innerHTML = record1;


function myFunction() {
    let user = input.value
    console.log(user, num)
    if (user == num) {
    input.value = "";
    input.placeholder =  "поздравляю ты угадал!!";
    x++;
    record1 = +1;
    record.innerHTML = record1;
    recordrama.innerHTML = num;
}   else if (user < num){
    input.value = "";
    input.placeholder = "не угадали";
    help.textContent = "загаданое число больше";
    x++;
    life--;
    left.innerHTML = life;
}
    else if (user > num) {
    input.value = "";
    user.placeholder = "не угадали";
    help.textContent = "загаданое число меньше";
    x++;
    life--;
    left.innerHTML = life;
}
}