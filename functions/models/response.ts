//
// imports
import * as aux from '../utils/aux'
import { DatabaseExport } from '../utils/aux'
import { NeedsValidation } from '../utils/aux'

//
// class Response
export class Response implements DatabaseExport, NeedsValidation {
	id: string
	timestamp: number
	answer: string
	value: number

	constructor(id: string, timestamp: number, answer: string, value: number) {
		this.id = id
		this.timestamp = timestamp
		this.answer = answer
		this.value = value
	}

	isValid(): boolean {
		return true
	}

	export(): object {
		var update = {}
		update['/answers/' + aux.transform(this.id) + '/' + this.timestamp + '/timestamp'] = this.timestamp
		update['/answers/' + aux.transform(this.id) + '/' + this.timestamp + '/answer'] = this.answer
		update['/answers/' + aux.transform(this.id) + '/' + this.timestamp + '/value'] = this.value
		return update
	}
}
