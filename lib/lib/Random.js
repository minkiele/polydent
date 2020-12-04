"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Random = void 0;
var Random;
(function (Random) {
    function getUpTo(upTo) {
        return Math.random() * upTo;
    }
    Random.getUpTo = getUpTo;
    function getIntRange(minIncluded, maxExcluded) {
        return Math.floor(Math.random() * (maxExcluded - minIncluded)) + minIncluded;
    }
    Random.getIntRange = getIntRange;
    function getSortRange() {
        return getIntRange(-1, 2);
    }
    Random.getSortRange = getSortRange;
})(Random = exports.Random || (exports.Random = {}));
