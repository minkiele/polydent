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
exports.WeightedTerm = void 0;
var GenericTerm_1 = require("../GenericTerm");
var WeightedTerm = /** @class */ (function (_super) {
    __extends(WeightedTerm, _super);
    function WeightedTerm(term, weight) {
        if (weight === void 0) { weight = 0; }
        var _this = _super.call(this) || this;
        _this.term = term;
        _this.weight = weight;
        return _this;
    }
    WeightedTerm.prototype.getWeight = function () {
        return this.weight;
    };
    WeightedTerm.prototype.toString = function () {
        return this.term.toString();
    };
    return WeightedTerm;
}(GenericTerm_1.GenericTerm));
exports.WeightedTerm = WeightedTerm;
