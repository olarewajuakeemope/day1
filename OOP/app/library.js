'use strict'

module.exports = {

  Car: function(name, model, type) {
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
    this.drive = function(num) {

      if (this.type === 'trailer') {
        var temp = 11 * num;
        this.speed = temp + ' km/h';
      } else {
        var temp = 50 * num;
        this.speed = temp + ' km/h';
      };
      return this;
    };
  }
}
