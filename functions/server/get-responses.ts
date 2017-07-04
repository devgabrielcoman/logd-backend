//
// imports
import * as functions from 'firebase-functions'
import * as admin from 'firebase-admin'
import * as aux from '../utils/aux'
import { Response } from '../models/response'

export async function getResponses(req, res) {
	let fbId = req['query']['fbId']
	let dbId = aux.transform(fbId)

	try {

		let snapshot = await admin.database().ref('/responses/' + dbId).once('value')

		var responses = new Array<Response>()
		snapshot.forEach(snap => {
		  let val = snap.val() as Response
			responses.push(val)
		})

		res.status(200).json(responses)
	} catch (e) {
		res.status(500).send(e)
	}
}
