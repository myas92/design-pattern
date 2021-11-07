let {Tea, Coffee} = require('./drink');
class DrinkFactory {
  prepare(amount) { }
}

class TeaFactory extends DrinkFactory {
  makeTea() {
    console.log('Tea Created');
    return new Tea()
  }
}

class CoffeeFactory extends DrinkFactory {
  makeCoffee() {
    console.log('Coffee Created');
    return new Coffee()
  }
}

module.exports = {
  TeaFactory,
  CoffeeFactory
}