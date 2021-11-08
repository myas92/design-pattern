const PersonBuilder = require('./person-builder');

const personBuilder = new PersonBuilder()


let person = personBuilder.works.at('part').asA('CTO').earning('1200')
  .lives.at('Ahmad Abad').in('Mashhad').withPostCode('3231')
  .build()


console.log(person.printInfo());