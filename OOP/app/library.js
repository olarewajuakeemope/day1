'use strict'


function Car(name, model, type) {
  this.name = name || 'General';
  this.model = model || 'GM';
  this.type = type;
  this.speed = '0 km/h';
  if (this.name === 'Porshe' || this.name === 'Koenigsegg') {
    this.numOfDoors = 2;
  } else {
    this.numOfDoors = 4;
  };
  if (this.type === 'trailer') {
    this.numOfWheels = 8;
    this.isSaloon = false;
  } else {
    this.numOfWheels = 4;
    this.isSaloon = true;
  };
}
Car.prototype.drive = function(num) {

  if (this.type === 'trailer') {
    var temp = 11 * num;
    this.speed = temp + ' km/h';
  } else {
    var temp = 50 * num;
    this.speed = temp + ' km/h';
  };
  return this;
}
Car.prototype.carspeed = function() {
  console.log("I'm rolling at " + this.speed + " speed");
}

Car.prototype.displayname = function() {
  console.log(this.name + " is my car name!");
}

function FutureCar(name, model, type, flyHeight) {
  // Call the parent constructor. Note we can now pass arguments too. Woop!
  Car.call(this, name, model, type);

  this.flyHeight = flyHeight;
}
// And we inherit the parent prototype
FutureCar.prototype = Object.create(Car.prototype);
FutureCar.prototype.fly = function() {
  console.log("Nice " + this.name + " " + this.model + ", can fly to a height of " + this.flyHeight);
};

module.exports.Car = Car;
