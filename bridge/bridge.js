class EncoderTextAbstraction {
	constructor(encoder) {
		this.encoder = encoder
	}
	encode(str) {
		return this.encoder.encode(str)
	}
	decode(str) {
		return this.encoder.decode(str)
	}
}

class Base64EncoderImplementor {
	encode(str) {
		return btoa(unescape(encodeURIComponent(str)))
	}
	decode(str) {
		return decodeURIComponent(escape(atob(str)))
	}
}

class HTMLEncoderImplemets {
	encode(str) {
		return str.split('.').reduce((ac, e) => {
			return ac + `<p>${e.trim()}</p>`
		}, '')
	}
	decode(str) {
		return str.split('</p>').reduce((ac, e) => {
			return e !== '' ? ac + e.replace('<p>', '') + '. ' : ac + ''
		}, '')
	}
}
const encoder1 = new EncoderTextAbstraction(new Base64EncoderImplementor())
console.log(encoder1.encode('pato'))
console.log(encoder1.decode('cGF0bw=='))

const encoder2 = new EncoderTextAbstraction(new HTMLEncoderImplemets())
console.log(encoder2.encode('hello world. nose. x alv'))
console.log(encoder2.decode('<p>hello world</p><p>nose</p><p>x alv</p>'))
