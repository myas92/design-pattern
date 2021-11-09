// first way

const SingletonefirstWay = require('./singleton-first-way');

const sinFir1 = SingletonefirstWay
const sinFir2 = SingletonefirstWay

console.log(`Are they same? ${sinFir1 === sinFir2}`);
sinFir1.say() // I am singleton class your message is : first instance
sinFir2.say() // I am singleton class your message is : first instance

console.log('-------------------------------------------------');
//second way

const SingletoneSecondWay = require('./singleton-second-way');

const sinSec1 = new SingletoneSecondWay('first instance')
const sinSec2 = new SingletoneSecondWay('second instance')

console.log(`Are they same? ${sinSec1 === sinSec2}`);
sinSec1.say(); // I am singleton class your message is : first instance
sinSec2.say(); // I am singleton class your message is : first instance