const PersonBuilder = require('./person-builder');

class PersonJobBuilder extends PersonBuilder {
  constructor(person) {
    super(person);
  }
  at(companyName) {
    this.person.companyName = companyName;
    return this
  }
  asA(position) {
    this.person.position = position;
    return this
  }
  earning(annualIncome) {
    this.person.annualIncome = annualIncome;
    return this
  }
}

module.exports = PersonJobBuilder