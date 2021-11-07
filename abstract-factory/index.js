
let {TeaFactory} = require(`./drink-factory`);
let teaDrinkFactory = new TeaFactory();
let tea = teaDrinkFactory.makeTea();
tea.consume()