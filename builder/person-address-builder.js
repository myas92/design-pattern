const PersonBuilder = require('./person-builder');

class PersonAddressBuilder extends PersonBuilder {
  constructor(person) {
    super(person);
  }
  at(streetAddress) {
    this.person.streetAddress = streetAddress;
    return this
  }
  withPostCode(postcode) {
    this.person.postcode = postcode;
    return this
  }
  in(city) {
    this.person.city = city;
    return this
  }
}

module.exports = PersonAddressBuilder