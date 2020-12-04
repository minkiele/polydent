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
exports.Term = void 0;
var GenericTerm_1 = require("./GenericTerm");
var Term = /** @class */ (function (_super) {
    __extends(Term, _super);
    function Term(term) {
        var _this = _super.call(this) || this;
        _this.term = term;
        return _this;
    }
    Term.prototype.toString = function () {
        return this.term;
    };
    return Term;
}(GenericTerm_1.GenericTerm));
exports.Term = Term;
