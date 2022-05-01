class Form {
	constructor(controls, action) {
		this.controls = controls
		this.action = action
	}

	getContent() {
		return `<form method="post" action="${this.action}">
            ${this.controls.reduce((ac, c) => {
							return (
								ac +
								`<div>
                        ${this.getLabel(c)}
                        ${this.getInput(c)}
                    </div>`
							)
						}, '')}
                <button type="submit">Send</button>
        </form>
        `
	}

	getLabel(control) {
		return `<label>${control.text}</label>`
	}

	getInput(control) {
		return `<input 
            type="${control.type}" 
            id="${control.name}"
            name="${control.name}"
        />`
	}
}

class FormBuilder {
	constructor() {
		this.reset()
	}

	reset() {
		this.action = ''
		this.controls = []
	}

	setAction(action) {
		this.action = action
		return this
	}

	setText(name, text) {
		this.controls.push({
			name,
			text,
			type: 'text',
		})
		return this
	}

	setEmail(name, text) {
		this.controls.push({
			name,
			text,
			type: 'email',
		})
		return this
	}

	setCheckbox(name, text) {
		this.controls.push({
			name,
			text,
			type: 'checkbox',
		})
		return this
	}

	build() {
		const form = new Form(this.controls, this.action)
		this.reset()
		return form
	}
}

class FormDirector {
	constructor(formBuilder) {
		this.setBuilder(formBuilder)
	}

	setBuilder(formBuilder) {
		this.formBuilder = formBuilder
	}

	createPeopleForm() {
		this.formBuilder.reset()
		this.formBuilder
			.setText('firstName', 'nombre')
			.setText('lastName', 'Apellidos')
	}

	createContactForm() {
		this.formBuilder.reset()
		this.formBuilder
			.setText('name', 'nombre del interesado')
			.setEmail('email', 'Correo electronico')
			.setText('message', 'mensaje')
	}
}

const formBuilder = new FormBuilder()
const formPeople = formBuilder
	.setAction('add.php')
	.setText('first name', 'nombre')
	.setText('lastName', 'Apellidos')
	.setCheckbox('drinker', 'Eres alcolico?')
	.build()

console.log(formPeople)
form1.innerHTML = formPeople.getContent()

const formEmail = formBuilder
	.setAction('send.php')
	.setText('name', 'name')
	.setEmail('email', 'email')
	.build()
form2.innerHTML = formEmail.getContent()

const director = new FormDirector(formBuilder)
director.createPeopleForm()
form3.innerHTML = formBuilder.build().getContent()

director.createPeopleForm()
form4.innerHTML = formBuilder.build().getContent()

director.createContactForm()
form5.innerHTML = formBuilder.build().getContent()
