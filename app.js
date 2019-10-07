"use strict";
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var Circ = __importStar(require("./math/circle"));
var rectangle_1 = __importDefault(require("./math/rectangle"));
// console.log(`Circumference: ${CircleMath.calcCirc(33)}`);
// console.log(`Rectangle: ${MyMath.calcRec(3, 10)}`);
console.log("PIE from circle.ts: " + Circ.PIE);
console.log("Circumference from circle.ts: " + Circ.calculateCircumference(100));
console.log("Rectangle Square Feet: " + rectangle_1.default(3, 9));
