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
exports.Sequence = void 0;
var GenericTerm_1 = require("../GenericTerm");
var Sequence = /** @class */ (function (_super) {
    __extends(Sequence, _super);
    function Sequence(joinChar) {
        var terms = [];
        for (var _i = 1; _i < arguments.length; _i++) {
            terms[_i - 1] = arguments[_i];
        }
        var _this = _super.call(this) || this;
        _this.joinChar = joinChar;
        _this.terms = terms;
        return _this;
    }
    Sequence.prototype.toString = function () {
        return this.terms.join(this.joinChar);
    };
    return Sequence;
}(GenericTerm_1.GenericTerm));
exports.Sequence = Sequence;
