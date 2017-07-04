"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var aux = require("../utils/aux");
var Response = (function () {
    function Response(id, timestamp, answer, value) {
        this.id = id;
        this.timestamp = timestamp;
        this.answer = answer;
        this.value = value;
    }
    Response.prototype.isValid = function () {
        return true;
    };
    Response.prototype.export = function () {
        var update = {};
        update['/answers/' + aux.transform(this.id) + '/' + this.timestamp + '/timestamp'] = this.timestamp;
        update['/answers/' + aux.transform(this.id) + '/' + this.timestamp + '/answer'] = this.answer;
        update['/answers/' + aux.transform(this.id) + '/' + this.timestamp + '/value'] = this.value;
        return update;
    };
    return Response;
}());
exports.Response = Response;
