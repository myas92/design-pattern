class SingletonSecondWay {

  constructor(message) {
    const instance = this.constructor.instance
    if (instance) {
      return instance
    }
    this.message = message
    this.constructor.instance = this;
  }

  say() {
    console.log(`I am singleton class your message is : ${this.message}`);
  }
}

module.exports = SingletonSecondWay