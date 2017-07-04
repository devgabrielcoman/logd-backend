"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var request = require("request");
function makeRequest(options) {
    return new Promise(function (resolve, reject) {
        request(options, function (error, response, body) {
            try {
                var parsed = JSON.parse(body);
                resolve(parsed);
            }
            catch (e) {
                reject(e);
            }
        });
    });
}
exports.makeRequest = makeRequest;
