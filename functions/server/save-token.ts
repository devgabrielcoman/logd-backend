//
// import
import * as aux from '../utils/aux'
import * as functions from 'firebase-functions'
import * as admin from 'firebase-admin'
import { Token } from '../models/token'

//
// Main function of the module, that saves the notification token to the db
export async function saveToken(req, res) {

	let fbId = req['query']['fbId'] as string
	let tokenString = req['query']['token'] as string

	try {
		let token = new Token(fbId, tokenString)
		let update = token.export()
		let result = await admin.database().ref('/').update(update)
		res.status(200).json(update)
	} catch (e) {
		res.status(500).send(e)
	}
}
