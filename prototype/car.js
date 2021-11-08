class CarPrototype {
  constructor(name, model) {
    this.name = name;
    this.model = model;
  }

  clone(){
    return new CarPrototype(this.name, this.model)
  }

  setName(name){
    this.name = name;
  }
  getName(){
    console.log(this.name);
  }

  setModel(model){
    this.model = model;
  }
  getModel(){
    console.log(this.model);
  }


}

module.exports = CarPrototype;