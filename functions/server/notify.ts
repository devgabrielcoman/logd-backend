//
// imports
import * as aux from '../utils/aux'
import * as functions from 'firebase-functions'
import * as admin from 'firebase-admin'
import { makeRequest } from '../utils/network'
//
// declare promises
declare var Promise: any;

async function notifyTopic(topic: string, isMorning: boolean, question: string): Promise<object> {

	let options = {
		method: 'POST',
		url: 'https://fcm.googleapis.com/fcm/send',
		headers: {
			'Content-Type': 'application/json',
			'Authorization': 'key=' + functions.config().firmessaging.key
		},
		body: JSON.stringify({
			"data": {
				"title": "Logd",
				"question": question,
				"isMorning": isMorning
			},
	    "to":"/topics/" + topic
		})
	}

	return await makeRequest(options)
}

export async function notifyMorning(req, res) {
	let topic = "morning_questions"
	let isMorning = true
	let question  = "How is your morning?"

	try {
		let result = await notifyTopic(topic, isMorning, question)
		res.status(200).json(result)
	} catch (e) {
		res.status(500).send(e)
	}
}

export async function notifyEvening(req, res) {
	let topic = "morning_questions"
	let isMorning = false
	let question  = "How has your day been?"

	try {
		let result = await notifyTopic(topic, isMorning, question)
		res.status(200).json(result)
	} catch (e) {
		res.status(500).send(e)
	}
}
