'use strict'
var today = new Date();
var dd = today.getDate();
var mm = today.getMonth() + 1; //January is 0!

var yyyy = today.getFullYear();
if (dd < 10) {
  dd = '0' + dd;
}
if (mm < 10) {
  mm = '0' + mm;
}
var todaysDate = dd + '/' + mm + '/' + yyyy;


function Person(name, age, country, address, phone) {
  this._name = name;
  this.age = age;
  this.country = country || "non provided";
  this.address = address || "non provided";
  this.phone = phone;
  this.info = function() {
    return "Member name is " + this._name + ", age: " + this.age + ", phone number is " + this.phone + " lives in " + this.country + " with address " + this.address;
  };
  this.registrationDate = todaysDate;
  this.noYrsOfMembership = function() {
    var dob = todaysDate.split("/");
    var year = Number(dob[2]);
    var month = Number(dob[1]) - 1;
    var day = Number(dob[0]);
    var newToday = new Date();
    var sinceYr = newToday.getFullYear() - year;
    if (newToday.getMonth() < month || (newToday.getMonth() == month && newToday.getDate() < day)) { sinceYr--; }
    return "being a member since" + sinceYr;
  }
}

//give users opportunity to change their names

Person.prototype = {
  set changeName(newName) {
    this._name = newName;
  },
  get changeName() {
    return this._name;
  }

};


//Add, check and remove people from the sytem

var SystemPeople = function() {
  this.system_pple = [];
}
SystemPeople.prototype = {
  addPeopleToSytem: function(person_obj) {
    if (!(SystemPeople.isPersonInSytem(person_obj))) {
      this.sytem_pple.push(person_obj);
    } else {
      return "person already exists, please enter another name";
    }
  },

  removePeopleFromSystem: function(person_object) {
    for (i = 0; i < this.sytem_pple.length; i++) {
      if (this.sytem_pple[i] === person_object)
        this.sytem_pple.splice(i, 1);
    }
  },
  isPersonInSytem: function(personIn) {
    for (i = 0; i < this.sytem_pple.length; i++) {
      if (this.sytem_pple[i] === personIn)
        return true;
    }
    return false;
  }
}

//assign appropriate roles to members

function MemberRole(memberType) {
  this.memberType = memberType;
}
MemberRole.prototype = new Person();
MemberRole.prototype.constructor = MemberRole;

module.exports.Person = Person;