const PointFactory = require('./point-factory');
let point = PointFactory.newPolarPoint(5, 6)
let point2 = PointFactory.newCartesianPoint(5, 6)

console.log(point);
console.log(point2);