//
// import
import * as functions from 'firebase-functions';
import * as admin from 'firebase-admin';
import { Event } from 'firebase-functions';
import { DeltaSnapshot } from 'firebase-functions/lib/providers/database';
import * as save_token from './server/save-token'
import * as notify from './server/notify'

// intialize admin
admin.initializeApp(functions.config().firebase);

export let saveToken = functions.https.onRequest(save_token.saveToken)
export let notifyMorning = functions.https.onRequest(notify.notifyMorning)
