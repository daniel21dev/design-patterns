class Person {
	constructor(name, lastName, age, country, city, hobbies) {
		this.name = name
		this.lastName = lastName
		this.age = age
		this.coutry = country
		this.city = city
		this.hobbies = hobbies
	}

	getFullName() {
		return this.name + ' ' + this.lastName
	}
}

class PersonBuilder {
	constructor() {
		this.reset()
	}

	reset() {
		this.name = ''
		this.lastName = ''
		this.age = 0
		this.coutry = ''
		this.city = ''
		this.hobbies = []
	}

	setName(name) {
		this.name = name
		return this
	}

	setLastName(lastName) {
		this.lastName = lastName
		return this
	}

	setAge(age) {
		this.age = age
		return this
	}

	setCountry(country) {
		this.coutry = country
		return this
	}

	setCity(city) {
		this.city = city
		return this
	}

	addHobby(hobby) {
		this.hobbies.push(hobby)
		return this
	}

	build() {
		const person = new Person(
			this.name,
			this.lastName,
			this.age,
			this.coutry,
			this.city,
			this.hobbies
		)
		this.reset()
		return person
	}
}

const personBuilder = new PersonBuilder()
const daniel = personBuilder
	.setName('Daniel')
	.setLastName('Romero')
	.addHobby('drawing')
	.addHobby('cook')
	.build()

console.log(daniel)

const helena = personBuilder
	.setName('Helena')
	.setLastName('Perez')
	.setAge(25)
	.setCountry('Mexico')
	.build()

console.log(helena)
