const Person = require('./person');
// for second way

// const PersonAddressBuilder = require('./person-address-builder');
// const PersonJobBuilder = require('./person-job-builder');
module.exports = class PersonBuilder {
  constructor(person = new Person()) {
    this.person = person
  }

  get lives() {
    console.log(this.person);
    return new (require('./person-address-builder')) // if you want spearte classes
    // return new PersonAddressBuilder(this.person) // uses all code in one file

  }

  get works() {
    return new (require('./person-job-builder'))
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