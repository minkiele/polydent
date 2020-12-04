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
exports.OptionalTerm = void 0;
var NullTerm_1 = require("./NullTerm");
var WeightedCollection_1 = require("./Weighted/WeightedCollection");
var WeightedTerm_1 = require("./Weighted/WeightedTerm");
var OptionalTerm = /** @class */ (function (_super) {
    __extends(OptionalTerm, _super);
    function OptionalTerm(term) {
        return _super.call(this, new WeightedTerm_1.WeightedTerm(term), new WeightedTerm_1.WeightedTerm(new NullTerm_1.NullTerm())) || this;
    }
    return OptionalTerm;
}(WeightedCollection_1.WeightedCollection));
exports.OptionalTerm = OptionalTerm;
