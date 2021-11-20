const Circle = require("./circle");
const RasterRenderer = require("./raster-renderer");
const VectorRenderer = require("./vector-renderer");

const raster = new RasterRenderer();
const vector = new VectorRenderer();

const circle = new Circle(raster, 5)

circle.draw();
circle.resize(2);
circle.draw();