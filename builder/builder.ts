class Person {
	constructor(
		private name: string,
		private lastName: string,
		private age: number,
		private country: string,
		private city: string,
		private hobbies: string[]
	) {}

	getFullName(): string {
		return this.name + ' ' + this.lastName
	}
}

interface PersonBuilder {
	name: string
	lastName: string
	age: number
	country: string
	city: string
	hobbies: string[]
	setName(name: string): PersonBuilder
	setLastName(lastName: string): PersonBuilder
	setAge(age: number): PersonBuilder
	setCountry(country: string): PersonBuilder
	setCity(city: string): PersonBuilder
	addHobby(hobby: string): PersonBuilder
	build(): Person
}

class NormalPersonBuilder implements PersonBuilder {
	public name: string
	public lastName: string
	public age: number
	public country: string
	public city: string
	public hobbies: string[]

	constructor() {
		this.name = ''
		this.lastName = ''
		this.age = 0
		this.country = ''
		this.city = ''
		this.hobbies = []
	}
	setName(name: string): PersonBuilder {
		this.name = name
		return this
	}
	setLastName(lastName: string): PersonBuilder {
		this.lastName = lastName
		return this
	}
	setAge(age: number): PersonBuilder {
		this.age = age
		return this
	}
	setCountry(country: string): PersonBuilder {
		this.country = country
		return this
	}
	setCity(city: string): PersonBuilder {
		this.city = city
		return this
	}
	addHobby(hobby: string): PersonBuilder {
		this.hobbies.push(hobby)
		return this
	}
	build(): Person {
		const person = new Person(
			this.name,
			this.lastName,
			this.age,
			this.country,
			this.city,
			this.hobbies
		)
		this.reset()
		return person
	}

	reset(): void {
		this.name = ''
		this.lastName = ''
		this.age = 0
		this.country = ''
		this.city = ''
		this.hobbies = []
	}
}

class PersonDirector {
	constructor(private personBuilder: PersonBuilder) {}

	setPersonBuilder(personBuilder: PersonBuilder) {
		this.personBuilder = personBuilder
	}

	createSimplePerson(name: string, lastName: string) {
		this.personBuilder.setName(name).setLastName(lastName)
	}
}

const personBuilder = new NormalPersonBuilder()
const daniel = personBuilder
	.setName('daniel')
	.setAge(23)
	.addHobby('comer')
	.addHobby('dormir')
	.build()

console.log(daniel)

const juan = personBuilder
	.setName('juan')
	.setLastName('perez')
	.setAge(20)
	.addHobby('dormir')
	.build()
console.log(juan)

const director = new PersonDirector(personBuilder)
director.createSimplePerson('jhon', 'cena')

const jhonCena = personBuilder.build()
console.log(jhonCena)
