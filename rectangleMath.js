"use strict";
var MyMath;
(function (MyMath) {
    function calcRec(width, length) {
        return width * length;
    }
    MyMath.calcRec = calcRec;
})(MyMath || (MyMath = {}));
