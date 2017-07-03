"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var moment = require("moment");
String.prototype.replaceAll = function (search, replacement) {
    return this.split(search).join(replacement);
};
function transform(numericToken) {
    return numericToken.split('').map(function (char) {
        if (char === '9')
            return 'A';
        else if (char === '8')
            return 'B';
        else if (char === '7')
            return 'C';
        else if (char === '6')
            return 'D';
        else if (char === '5')
            return 'E';
        else if (char === '4')
            return 'F';
        else if (char === '3')
            return 'G';
        else if (char === '2')
            return 'H';
        else if (char === '1')
            return 'I';
        else if (char === '0')
            return 'J';
        else
            return char;
    }).join('');
}
exports.transform = transform;
function getCurrentDate() {
    return moment().format("YYYY-MM-DD[T]HH:mm:ss[Z]");
}
exports.getCurrentDate = getCurrentDate;
function shuffle(array) {
    var counter = array.length;
    while (counter > 0) {
        var index = Math.floor(Math.random() * counter);
        counter--;
        var temp = array[counter];
        array[counter] = array[index];
        array[index] = temp;
    }
    return array;
}
exports.shuffle = shuffle;
function sortAsc(array) {
    return array.sort(function (a, b) {
        if (a < b)
            return -1;
        if (a > b)
            return 1;
        return 0;
    });
}
exports.sortAsc = sortAsc;
function sortDesc(array) {
    return array.sort(function (a, b) {
        if (a < b)
            return 1;
        if (a > b)
            return -1;
        return 0;
    });
}
exports.sortDesc = sortDesc;
function uniqueBy(arr, fn) {
    var unique = {};
    var distinct = [];
    arr.forEach(function (x) {
        var key = fn(x);
        if (!unique[key]) {
            distinct.push(x);
            unique[key] = true;
        }
    });
    return distinct;
}
exports.uniqueBy = uniqueBy;
