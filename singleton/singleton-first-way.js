class SingletonFirstWay {

  constructor(message){
    this.message = message;
  }

  say(){
    console.log(`I am singleton class your message is : ${this.message}`);
  }
}

module.exports = new SingletonFirstWay('first instance')