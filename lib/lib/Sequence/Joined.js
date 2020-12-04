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
exports.Joined = void 0;
var Sequence_1 = require("./Sequence");
var CONCAT_CHAR = '';
var Joined = /** @class */ (function (_super) {
    __extends(Joined, _super);
    function Joined() {
        var terms = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            terms[_i] = arguments[_i];
        }
        return _super.call(this, CONCAT_CHAR, terms) || this;
    }
    return Joined;
}(Sequence_1.Sequence));
exports.Joined = Joined;
