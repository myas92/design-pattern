class Drink {
  consume() { }
}

class Tea extends Drink {
  consume() {
    console.log('This is Tea');
  }
}

class Coffee extends Drink {
  consume() {
    console.log('This is Coffee');
  }
}

module.exports = {
  Tea,
  Coffee
}