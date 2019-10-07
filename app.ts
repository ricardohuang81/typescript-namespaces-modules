/// <reference path="circleMath.ts" />
/// <reference path="rectangleMath.ts" />
import CircleMath = MyMath.Circle;

import * as Circ from "./math/circle";
import sqFeet from './math/rectangle';



// console.log(`Circumference: ${CircleMath.calcCirc(33)}`);
// console.log(`Rectangle: ${MyMath.calcRec(3, 10)}`);

console.log(`PIE from circle.ts: ${Circ.PIE}`);
console.log(`Circumference from circle.ts: ${Circ.calculateCircumference(100)}`);
console.log(`Rectangle Square Feet: ${sqFeet(3, 9)}`);