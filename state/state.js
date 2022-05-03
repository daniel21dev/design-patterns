class DocumentContext {
	constructor() {
		this.content = ''
		this.state = new BlankState()
	}

	setState(state) {
		this.state = state
	}

	write(text) {
		this.state.write(this, text)
	}
}

class BlankState {
	write(DocumentContext, text) {
		DocumentContext.content = text
		DocumentContext.setState(new WithContentState())
	}
}

class WithContentState {
	write(DocumentContext, text) {
		DocumentContext.content += ' ' + text
	}
}

class ApprovedState {
	write(DocumentContext, text) {
		console.log('Documento aprobado ya no se modifica')
	}
}

const doc = new DocumentContext()
console.log(doc.state)
doc.write('pato')
console.log(doc.content)
console.log(doc.state)
doc.write('ALGO')
doc.write('MAS')
console.log(doc.content)

doc.setState(new ApprovedState())
console.log(doc.state)
doc.write('otra cosa')
console.log(doc.content)

doc.setState(new WithContentState())
console.log(doc.state)
doc.write('no que no')
console.log(doc.content)
