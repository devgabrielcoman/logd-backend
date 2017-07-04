"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var functions = require("firebase-functions");
var admin = require("firebase-admin");
var save_token = require("./server/save-token");
var notify = require("./server/notify");
admin.initializeApp(functions.config().firebase);
exports.saveToken = functions.https.onRequest(save_token.saveToken);
exports.notifyMorning = functions.https.onRequest(notify.notifyMorning);
