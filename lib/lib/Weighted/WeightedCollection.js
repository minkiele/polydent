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
exports.WeightedCollection = void 0;
var GenericTerm_1 = require("../GenericTerm");
var Random_1 = require("../Random");
var WeightedCollection = /** @class */ (function (_super) {
    __extends(WeightedCollection, _super);
    function WeightedCollection() {
        var collection = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            collection[_i] = arguments[_i];
        }
        var _this = _super.call(this) || this;
        if (collection.length === 0) {
            throw new Error('Cannot provide an empty WeightedCollection');
        }
        _this.collection = collection;
        _this.initWeights();
        return _this;
    }
    WeightedCollection.prototype.initWeights = function () {
        var _this = this;
        this.totalWeight = 0;
        this.upperLimits = [];
        this.collection.forEach(function (term) {
            _this.totalWeight += Math.pow(Math.E, term.getWeight());
            _this.upperLimits.push(_this.totalWeight);
        });
    };
    WeightedCollection.prototype.pick = function () {
        var randomWeight = Random_1.Random.getUpTo(this.totalWeight);
        var i = 1;
        for (; i < this.upperLimits.length; i += 1) {
            if (this.upperLimits[i] > randomWeight) {
                break;
            }
        }
        return this.collection[i - 1];
    };
    WeightedCollection.prototype.toString = function () {
        return this.pick().toString();
    };
    return WeightedCollection;
}(GenericTerm_1.GenericTerm));
exports.WeightedCollection = WeightedCollection;
