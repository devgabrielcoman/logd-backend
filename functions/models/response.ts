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
		update['/responses/' + aux.transform(this.id) + '/' + this.timestamp + '/timestamp'] = Number(this.timestamp)
		update['/responses/' + aux.transform(this.id) + '/' + this.timestamp + '/answer'] = this.answer
		update['/responses/' + aux.transform(this.id) + '/' + this.timestamp + '/value'] = Number(this.value)
		return update
	}
}
