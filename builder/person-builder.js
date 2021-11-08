const Person = require('./person');
// for second way

// const PersonAddressBuilder = require('./person-address-builder');
// const PersonJobBuilder = require('./person-job-builder');
module.exports = class PersonBuilder {
  constructor(person = new Person()) {
    this.person = person;
    this.PersonAddressBuilder = require('./person-address-builder')
    this.PersonJobBuilder = require('./person-job-builder')
  }

  get lives() {
    return new this.PersonAddressBuilder(this.person) // if you want spearte classes
    // return new PersonAddressBuilder(this.person) // uses all code in one file

  }

  get works() {
    return new this.PersonJobBuilder(this.person)
    // return new PersonJobBuilder(this.person)
  }

  build() {
    return this.person;
  }
}


// for second way

// class PersonAddressBuilder extends PersonBuilder {
//   constructor(person) {
//     super(person);
//   }
//   at(streetAddress) {
//     this.person.streetAddress = streetAddress;
//     return this
//   }
//   withPostCode(postcode) {
//     this.person.postcode = postcode;
//     return this
//   }
//   in(city) {
//     this.person.city = city;
//     return this
//   }
// }

// class PersonJobBuilder extends PersonBuilder {
//   constructor(person) {
//     super(person);
//   }
//   at(companyName) {
//     this.person.companyName = companyName;
//     return this
//   }
//   asA(position) {
//     this.person.position = position;
//     return this
//   }
//   earning(annualIncome) {
//     this.person.annualIncome = annualIncome;
//     return this
//   }
// }


// module.exports = PersonBuilder;