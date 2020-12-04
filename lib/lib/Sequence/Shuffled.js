"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
exports.Shuffled = void 0;
var Random_1 = require("../Random");
var Sequence_1 = require("./Sequence");
var Shuffled = /** @class */ (function (_super) {
    __extends(Shuffled, _super);
    function Shuffled() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Shuffled.prototype.shuffle = function () {
        this.terms.sort(Random_1.Random.getSortRange);
    };
    Shuffled.prototype.toString = function () {
        this.shuffle();
        return _super.prototype.toString.call(this);
    };
    return Shuffled;
}(Sequence_1.Sequence));
exports.Shuffled = Shuffled;
