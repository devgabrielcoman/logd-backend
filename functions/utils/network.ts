//
// imports
import * as request from 'request'

//
// declare promises
declare var Promise: any;

//
// try and make a post request w/o massively failing
export function makeRequest(options: object): Promise<object> {
	return new Promise((resolve: Function, reject: Function) => {
		request.post(options, (error, response, body) => {
			try {
				let parsed = JSON.parse(body)
				resolve(parsed)
			} catch (e) {
				reject(e)
			}
		})
	})
}
