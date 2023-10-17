
/*for(let i = 0;i<10;i++){
    console.log(i);
}

let i = 0;

while(i < 10){
    console.log(i)
    i++
}*/

/*
let myArray = [1,2,3,4,5,6,7,8,9,10]
*/
/*for (let i = 0;i< myArray.length;i++){
    console.log(myArray [i])
}*/

/*
let i = 0;

while(i < myArray.length){
    console.log(myArray[i])
    i++
}*/
/*
x = 0; 

for (let i = 0;i<2;i++){
    x+=i
    console.log(i)
}
*/
/*
class Car{
    constructor(make, year, doors){
        this.make = make;
        this.year = year;
        this.doors = doors;
    }

    drive(){
        if (this.year <= 2023){
            console.log('old car');
        }else{
            console.log("bran new car");
        }
    }
}

let subaru = new Car("subaru", 2022, 4)
subaru.drive();

let chevy = new Car("chevy", 2023, 2)
chevy.drive()
*/
/*
class Car{
    constructor(make, model, color){
        this.make = make
        this.model = model
        this.color = color
    }
    addYear(year){
        return this.make + " Year: " + year
    }
}

let Jaguar = new Car("Jaguar", 2021, "red")
let myCar = Jaguar.addYear('2021')
console.log(myCar)
*/
/*
class Car{
    constructor(make, model, color){
        this.make = make
        this.model = model
        this.color = color
    }
    addYear(year){
        return this.make + " Year: " + year + " Awesome color " +this.color
    }
}

let Jaguar = new Car("Jaguar", 2021, "red")
let myCar = Jaguar.addYear('2021')
console.log(myCar)

let BMW = new Car("BMW", 2022, "green")
let otherCar = BMW.addYear("2023")
console.log(otherCar)

*/

/*
class Car{
    constructor(make, model, color){
        this.make = make
        this.model = model
        this.color = color
    }
    addYear(year){
        return this.make + " Year: " + year
    }
}

let chevy = new Car("Chevy", "Corvette", "Silver")
let mychoo = chevy.addYear("2023")
console.log(mychoo)

*/
/*
let numbers = [ 1, 2, 3 ];

let squared = numbers.map(function(chicken){
          return chicken * 2                
  })

console.log(squared);


numbers.forEach(function(chicken){
    console.log(chicken + 10)
})

*/

/*
let myArray = ["blue", "green", "orange", "purple"]

myArray.forEach(function(egg){
    console.log(egg.indexOf)
})

myArray.filter(function(feather){
    console.log(feather)
})

const numbers = [1, 2, 3, 4, 5];

numbers.forEach(function(number, index) {
  console.log(`Element at index ${index} is ${number}`);
});
*/
/*
let students = ["rowan", "katrina", "li", 'franchesca', "june" ]

let transformed = students.map(students => {
    return students.slice(0, 2)
})

console.log(transformed)
*/
/*

const tacoTruck = {
    revenue: 300,
    expenses: 100,
    profit: profit
}

function profit(){
    return tacoTruck.revenue - tacoTruck.expenses
}

tacoTruck.profit()

*/
/*
function allNames(){
    return user.name + " " + user.last
}

function nameAge(){
    console.log(this)
    return this.name + " " + this.age + " " + " Years old"
}



let user = {
    name: "Carl",
    last: "Hern",
    age: 75,
    height: 80,
    weight: 450,
    fullName: allNames,
    nameAndAge: nameAge

}

console.log(user.fullName())
console.log(user.nameAndAge())

*/
/*
let rectangle = {
    width: 100, 
    height: 100, 
    area: function(){
        return this.width * this.height
    }
}

console.log(rectangle.area())
*/
/*
let dog = {
    sound: "arrrf",
    playSound: function(){
        console.log(this.sound)
    }
}

let cat = {
    sound: "meooww",
    playSound: dog.playSound
}

cat.playSound()
*/
/*
let btn = document.querySelector("#btn");

btn.onclick = function(){
    alert("clicked");
};
*/
/*
async function wellingtonEats(hamburger){
    await sleep(259200000)
    return "$3.50"
    
}
*/
/*
function makeBreakfast(){
    let afterAllitems = Promise.all([
        cookBacon(),
        cookEggs(),
        makeTea()
    ])
    console.log(afterAllitems)

    afterAllitems.then(() => {
        serve()
    })
}*/

/*
for(i = 0;i <= 10; i+=2){
    console.log(i)
}
*/
/*
let i = 0;

while(i <= 10){
    console.log(i)
    i= i + 2
}
*/
/*
async function getReddit(){
    let response = await fetch('https//://www.reddit.com/');
    console.log(response)
}
*/

const username = localStorage.getItem("username")
const showOnDiv = document.getElementById("test")
showOnDiv.textContent = `Player, ${username || "Guest"}!`;

const updateButton = document.getElementById("updateButton");
updateButton.addEventListener("click", () => {
    const nameInput = document.getElementById("nameInput");
    const newName = nameInput.value;

    localStorage.setItem("username", newName);
    showOnDiv.textContent = `Hello, ${newName}!;`

});