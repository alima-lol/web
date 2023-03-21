let input = document.querySelector(".number");
let check = document.querySelector(".button1");
let help = document.querySelector(".h4");
let left = document.querySelector(".count");
let record = document.querySelector(".record1");
let recordrama = document.querySelector(".h7");
let oneMore = document.querySelector(".button2");

let x = 0;
let num = 1 + Math.floor(Math.random() * 100);
console.log(num)
let life = 20;
left.innerHTML = life;
record1 = 0;
record.innerHTML = record1;

document.querySelector(".number").addEventListener("keyup", function(){
    this.value = this.value.replace(/[^\d]/g, "");
});

function myFunction(){
    if (assist()) {  // если корректное значение
        let user = input.value
    console.log(user, num)
    if (user == num) {
        input.value = "";
        input.placeholder =  "поздравляю ты угадал!!";
        x++;
        record1 = 20-life;
        record.innerHTML = record1;
        recordrama.innerHTML = num;
}   else if (user < num){
        input.value = "";
        input.placeholder = "не угадали" ;
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

    
}

function assist(){
    let user = input.value;
    console.log("user=", user)
    if ((user < 1) || (user > 100)) {
        input.value = "";
        input.placeholder =  "введите 1 до 100";
        return false
    }
    else {
        return true
    }
}




function myFunction2() {
    num = 1 + Math.floor(Math.random() * 100);
    life = 20;
    left.innerHTML = life;
    recordrama.innerHTML = "?";
}