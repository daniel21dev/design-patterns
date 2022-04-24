class Singleton {
	constructor() {
		this.random = Math.random()
		if (Singleton.instance) {
			console.log('already exists')
			return Singleton.instance
		}
		console.log('does not exists')
		Singleton.instance = this
	}

	static getInstance() {
		return Singleton.instance
	}
}

const singleton = new Singleton()
const singleton2 = new Singleton()
const singleton3 = Singleton.getInstance()
console.log(singleton.random)
console.log(singleton2.random)
console.log(singleton3.random)
console.log(singleton === singleton2)
console.log(singleton3 === singleton2)
