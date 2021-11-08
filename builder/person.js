class Person {
  constructor() {
    this.streetAddress = '';
    this.postcode = '';
    this.city = '';
    this.companyName = '';
    this.position = '';
    this.annualIncome = 0;
  }

  printInfo() {
    return `Person lives at ${this.streetAddress}, ${this.postcode}, ${this.city}
    and works at ${this.companyName} as a ${this.position} earning ${this.annualIncome}`
  }
}

module.exports = Person;