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
exports.NullTerm = void 0;
var Term_1 = require("./Term");
var NULL_PRODUCTION = '';
var NullTerm = /** @class */ (function (_super) {
    __extends(NullTerm, _super);
    function NullTerm() {
        return _super.call(this, NULL_PRODUCTION) || this;
    }
    return NullTerm;
}(Term_1.Term));
exports.NullTerm = NullTerm;
