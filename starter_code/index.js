const Elevator = require('./elevator.js');
const Person = require('./person.js');

const myElevator  = new Elevator();

const mary = new Person('Mary', 2, 8);
const sabina = new Person('Sabina', 7, 1);
const fernanda = new Person('Fernanda', 4, 3);

myElevator.floorDown();
myElevator.floorDown();
myElevator.floorDown();
myElevator.floorDown();
myElevator.floorDown();
myElevator.floorDown();
myElevator.floorDown();
myElevator.log();

myElevator.floorUp();
myElevator.floorUp();
myElevator.floorUp();
myElevator.floorUp();
myElevator.floorUp();
myElevator.floorUp();
myElevator.floorUp();
myElevator.floorUp();
myElevator.floorUp();
myElevator.floorUp();
myElevator.floorUp();
myElevator.floorUp();
myElevator.floorUp();
myElevator.floorUp();
myElevator.log();
