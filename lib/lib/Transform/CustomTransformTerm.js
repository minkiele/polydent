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
exports.CustomTransformTerm = void 0;
var TransformTerm_1 = require("./TransformTerm");
var CustomTransformTerm = /** @class */ (function (_super) {
    __extends(CustomTransformTerm, _super);
    function CustomTransformTerm(term, transformFn) {
        var _this = _super.call(this, term) || this;
        _this.transformFn = transformFn;
        return _this;
    }
    CustomTransformTerm.prototype.transform = function () {
        var transformFn = this.transformFn;
        return transformFn(this.term);
    };
    CustomTransformTerm.prototype.toString = function () {
        return this.transform().toString();
    };
    return CustomTransformTerm;
}(TransformTerm_1.TransformTerm));
exports.CustomTransformTerm = CustomTransformTerm;
