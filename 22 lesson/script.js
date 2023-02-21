//this.                                 команда: внутреннее свойства обьекта

/*const teacher ={
    lastName : "hehe"
    birtYear: 1999,
    calcAge: function(){  
        this.age =2023-this.birthYear;                          пример
        return this.age
    }
};

console.log(teacher.calcAge());
delete teacher.lastName   
console.log(teacher)*/

//delete teacher.lastName                              удаление свойство (содержимого)

/*console.log("birthYear" in teacher)
if ("birthYear" in teacher) {
console.log("есть такое")                                   
} */

/*let chel1 = {
    name: "anton",
    height: 1.67,
    weight: 55,
    imt1: function(){
        this.imt = this.weight / this.height ** 2;
        return this.imt
    }
}

console.log(chel1.imt1());

let chel2 = {
    name: "tema",
    height: 1.80,
    weight: 40,
    imt2: function(){
        this.imt = this.weight / this.height **2;
        return this.imt
    }
}

console.log(chel2.imt2());*/

/*if (chel1.imt > chel2.imt) {
    alert(`выйграл ` + chel1.name)
} else {
    alert(`выйграл ` + chel2.name);}*/

// for(let jump=1; jump<=10; jump++){
//     console.log("прыг " + jump);
// }


/*let massiv = ["чел", 2, [4], {"f":4}];
for(let massiv2=0; massiv2<10; massiv2++){
    console.log(massiv[massiv2]);
}*/

/*let year = [1920, 2013, 2020, 1996, 1630];
let newf = [];

for (let age = 0;age< year.length; age++){
    newf.push(2023 - year[age])
    console.log(newf)
}*/


/*let year = [1920, 2013, 2020, 1996, 1630];

for (let age = year.length-1;age>=0; age--){
    console.log(year[age])
}*/

//92