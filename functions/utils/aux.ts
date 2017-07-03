
//
// imports
import * as moment from 'moment'

//
// string extension that allows proper replacement
String.prototype.replaceAll = function(this:string, search:string, replacement:string):string {
	return this.split(search).join(replacement)
}

export interface String {
	replaceAll(search:string, replacement:string):string
}

declare global {
	interface String {
		replaceAll(search:string, replacement:string):string
	}
}

//
// transform a numeric id like '012' to 'abc'
export function transform(numericToken: string): string {
	return numericToken.split('').map(char => {
		if 			(char === '9') return 'A'
		else if (char === '8') return 'B'
		else if (char === '7') return 'C'
		else if (char === '6') return 'D'
		else if (char === '5') return 'E'
		else if (char === '4') return 'F'
		else if (char === '3') return 'G'
		else if (char === '2') return 'H'
		else if (char === '1') return 'I'
		else if (char === '0') return 'J'
		else return char
	}).join('')
}

//
// get the current date in a format needed by Amazon signing
export function getCurrentDate(): string {
	return moment().format("YYYY-MM-DD[T]HH:mm:ss[Z]")
}

//
// shuffle an array
export function shuffle (array: Array<any>) {
    let counter = array.length;

    // While there are elements in the array
    while (counter > 0) {
        // Pick a random index
        let index = Math.floor(Math.random() * counter);

        // Decrease counter by 1
        counter--;

        // And swap the last element with it
        let temp = array[counter];
        array[counter] = array[index];
        array[index] = temp;
    }

    return array;
}

//
// sort ascending
export function sortAsc <T> (array: Array<T>): Array<T> {
	return array.sort((a,b) => {
		if(a < b) return -1;
    if(a > b) return 1;
    return 0;
	})
}

//
// sort descending
export function sortDesc <T> (array: Array<T>): Array<T> {
	return array.sort((a,b) => {
		if(a < b) return 1;
    if(a > b) return -1;
    return 0;
	})
}

//
// get all unique values
export function uniqueBy<T>(arr: Array<T>, fn) {
  var unique = {}
  var distinct = []
  arr.forEach(function (x: T) {
    let key = fn(x);
    if (!unique[key]) {
      distinct.push(x)
      unique[key] = true
    }
  })
  return distinct
}

//
// interface that defines the object that classes/functions need to return
// so that it can be written in the database
export interface DatabaseExport {
	export(): object
}

//
// interface for requests
export interface ServiceRequest {
	url(): string
}

//
// interface for validation
export interface NeedsValidation {
	isValid():boolean
}
