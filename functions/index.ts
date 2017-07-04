//
// import
import * as functions from 'firebase-functions';
import * as admin from 'firebase-admin';
import { Event } from 'firebase-functions';
import { DeltaSnapshot } from 'firebase-functions/lib/providers/database';
import * as save_token from './server/save-token'
import * as notify from './server/notify'
import * as get_answers from './server/get-answers'
import * as add_response from './server/add-response'

// intialize admin
admin.initializeApp(functions.config().firebase);

export let saveToken = functions.https.onRequest(save_token.saveToken)
export let notifyMorning = functions.https.onRequest(notify.notifyMorning)
export let notifyEvening = functions.https.onRequest(notify.notifyEvening)
export let getAnswers = functions.https.onRequest(get_answers.getAnswers)
export let addResponse = functions.https.onRequest(add_response.addResponse)
