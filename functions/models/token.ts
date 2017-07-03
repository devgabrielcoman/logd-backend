//
// imports
import * as aux from '../utils/aux'
import { DatabaseExport } from '../utils/aux'
import { NeedsValidation } from '../utils/aux'

//
// class Token
export class Token implements DatabaseExport, NeedsValidation {
	id: string
	token: string

	constructor(id: string, token: string) {

		// copy
		this.id = id
		this.token = token

		// validate
		if (!this.isValid()) {
			throw new Error('Invalid token object')
		}
	}

	isValid(): boolean {
		return this.id != null && this.token != null
	}

	export(): object {
		var update = {}
		update['/tokens/' + aux.transform(this.id)] = this.token
		return update
	}
}
