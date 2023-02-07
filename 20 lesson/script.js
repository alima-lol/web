//function juicemaker(apples, oranges=5) {
    //console.log(apples, oranges);
  //  const juice= `ваш сок из ${apples} яблок и ${oranges} апельсинов готов!`
 //   return juice;
//}
//console.log(juicemaker(3));






//if (oranges === undefined) {                        универсальный способ
//    oranges = "без использования";                    сделать значение по умолчанию
//}







/*function juicemaker(apples, oranges) {
    oranges = oranges || "без использования";
    console.log(apples, oranges);
    const juice = `ваш сок из ${apples} яблок и ${oranges} апельсинов готов!`
    return juice;
}
console.log(juicemaker(6));*/







/*function number(num1, num2) {
    let x =  num1 - num2
    if (num1 > num2) {
        alert(num2)
    } else {
        alert(num1)
    }
}


let num1 = prompt("ваше число");
let num2 = prompt("ваше число");
number(num1, num2)*/




/*function calcAgel(){
    return 2023 - birthYear;              
}                                           обяъвление функции
const agel = calcAgel();
console.log(age1);



const calcAgel2 = function() {
    return 2023 -birthYear;
};                                        функциональное выражение
const age2 = calcAge2 () ;
console.log(agel, age2);*/


/*function winner(dev1, dev2, dev3, des1, des2, des3){
  let xdev = (dev1 + dev2 + dev3)/3;
  let xdes = (des1, des2, des3)/3;
  if (xdev > xdes) {
    alert(`выйграли developers`)
} else {
    alert(`выйграли designers`)
}
}
winner(44, 23, 71, 65, 54, 49)*/

const name = ["ясинбек","алима","пашим"]
console.log(name[1]) //вызвать имя по индексу
console.log(name[name.length -1]) //старый вариант
console.log(name.at (-1)) //новый


const massiv = ["элемент1"];
massiv[5] = "элемент2";

console.log(massiv)
console.log(massiv[2])

const FirstName = "мико"
const MoyaCat = [FirstName, 2023-2022, "моя котяра", name]
console.log(MoyaCat)

//44 СЛАЙД