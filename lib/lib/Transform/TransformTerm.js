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
exports.TransformTerm = void 0;
var GenericTerm_1 = require("../GenericTerm");
var TransformTerm = /** @class */ (function (_super) {
    __extends(TransformTerm, _super);
    function TransformTerm(term) {
        var _this = _super.call(this) || this;
        _this.term = term;
        return _this;
    }
    TransformTerm.prototype.toString = function () {
        return this.transform().toString();
    };
    return TransformTerm;
}(GenericTerm_1.GenericTerm));
exports.TransformTerm = TransformTerm;
