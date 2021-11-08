const Car = require('./car');

let firstCar = new Car('Benz','Germany')

console.log('-----------------firstCar------------------');
firstCar.getName() // Benz
firstCar.getModel() // Germany


let secondCar = firstCar.clone()// important
console.log('--------------secondCar-------------------');
secondCar.getName() // Benz
secondCar.getModel() // Germany

console.log('------------updated secondCar-------------');
secondCar.setName('BMW')
secondCar.getName()
secondCar.getModel()

let thirdCar = secondCar.clone()// important
console.log('--------------thirdCar--------------------');
thirdCar.setModel('America')
thirdCar.getName() // BMW
thirdCar.getModel() //America

console.log('-----------print SecondCar again----------');
secondCar.getName() // Benz
secondCar.getModel() // Germany