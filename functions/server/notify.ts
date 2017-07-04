//
// imports
import * as aux from '../utils/aux'
import * as functions from 'firebase-functions'
import * as admin from 'firebase-admin'
import { makeRequest } from '../utils/network'

export async function notifyMorning(req, res) {

	let options = {
		method: 'POST',
		url: 'https://fcm.googleapis.com/fcm/send',
		headers: {
			'Content-Type': 'application/json',
			'Authorization': 'key=' + functions.config().firmessaging.key
		},
		body: {
			"notification" : {
	      "body" : "Test",
	      "title" : "Server Test",
	      "data": {
	      	"isMorning": true
	      }
	    },
	    "to":"/topics/morning_questions"
		}
	}

  try {
		let result = await makeRequest(options)
		res.status(200).json(result)
	} catch (e) {
		res.status(500).send(e)
	}
}
