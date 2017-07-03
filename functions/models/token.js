"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var aux = require("../utils/aux");
var Token = (function () {
    function Token(id, token) {
        this.id = id;
        this.token = token;
        if (!this.isValid()) {
            throw new Error('Invalid token object');
        }
    }
    Token.prototype.isValid = function () {
        return this.id != null && this.token != null;
    };
    Token.prototype.export = function () {
        var update = {};
        update['/tokens/' + aux.transform(this.id)] = this.token;
        return update;
    };
    return Token;
}());
exports.Token = Token;
