//
// imports
import * as functions from 'firebase-functions'
import * as admin from 'firebase-admin'
import * as aux from '../utils/aux'
import { Response } from '../models/response'

export async function addAnswer(req, res) {
	let fbId = req['query']['fbId'] as string
	let answer = req['query']['answer'] as string
	let timestamp = req['query']['timestamp'] as number
	let value = req['query']['value'] as number

	try {
		let response = new Response(fbId, timestamp, answer, value)
		let update = response.export()
		let result = await admin.database().ref('/').update(update)
		res.status(200).json(update)
	} catch (e) {
		res.status(500).send(e)
	}
}
