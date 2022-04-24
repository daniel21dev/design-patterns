class Singleton {
	private static instance: Singleton
	random: number

	private constructor() {
		this.random = Math.random()
	}

	public static getInstance(): Singleton {
		if (!this.instance) {
			this.instance = new Singleton()
		}
		return this.instance
	}
}

const singleton = Singleton.getInstance()
const singleton2 = Singleton.getInstance()

console.log(singleton.random)
console.log(singleton2.random)

singleton.random = 7

console.log(singleton.random)
console.log(singleton2.random)
