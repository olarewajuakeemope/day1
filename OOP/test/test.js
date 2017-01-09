(function(){
  'use strict';
  var Person = require('../app/library.js').Person;

  describe("Person Class: Create a Person instance", function() {

    it("The car should be a type of `object`, and an instance of the `Car` class", function() {
      var linda = new Person('Linda');
      expect(typeof linda).toEqual(typeof {});
      expect(linda instanceof Person).toBeTruthy();
    });

    it("The person should have a 'non provided' address and country if no cointry or address is passed as parameters", function() {
      var gm = new Person();
      expect(gm.address).toEqual('non provided');
      expect(gm.country).toBe('non provided');
    });

    it("The person age should be a property of the person", function() {
      var ope  = new Person('opeyemi', 25);
      expect(ope.age).toBe(25);
    });

    it("The person should have a an info property", function() {
      var akin  = new Person("akin", 32, "Nigeria", "Lekki", "08053143456");
      expect(akin.info()).toBe('Member name is akin, age: 32, phone number is 08053143456 lives in Nigeria with address Lekki');
    });

    it("The Person class should have a change name property", function() {
      var tola  = new Person('Tola', 23, 'US');
      expect(tola.changeName="kemi").toBe("kemi");
    });
  });
})();