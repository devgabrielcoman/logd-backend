//
// imports
import * as functions from 'firebase-functions'
import * as admin from 'firebase-admin'
import * as aux from '../utils/aux'

//
// declare promises
declare var Promise: any;

export async function getAnswers(req, res) {
	let isMorning = req['query']['isMorning'] as boolean
	let db = isMorning ? "morning" : "evening"
	let snapshot = await admin.database().ref('/answers/' + db).once('value')

	var result = new Array<string>()
	snapshot.forEach((snap) => {
		let val = snap.val()
		if (val != null) {
			result.push(val)
		}
	})

	let answers = aux.shuffle(result).splice(0, 3)
	res.status(200).json({
		'data': answers
	})
}
