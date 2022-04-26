class Subject {
	constructor() {
		this.observers = []
	}

	subscribe(observer) {
		this.observers.push(observer)
	}

	unsubscribe(observer) {
		this.observers = this.observers.filter((obs) => obs !== observer)
	}

	notify(data) {
		this.observers.forEach((e) => {
			e.refresh(data)
		})
	}
}

class ItemSubject extends Subject {
	constructor() {
		super()
		this.data = []
	}

	add(item) {
		this.data.push(item)
		this.notify(this.data)
	}
}

class HTMLElementObserver {
	constructor(element) {
		this.element = element
	}

	refresh(data) {
		this.element.innerHTML = data.reduce((ac, e) => {
			return (
				ac +
				`<p>
                ${e}
            </p>`
			)
		}, '')
	}
}

class Observer {
	constructor(fn) {
		this.fn = fn
	}

	refresh(data) {
		this.fn(data)
	}
}

const items = new ItemSubject()
const div1Observer = new HTMLElementObserver(div1)
const div2Observer = new HTMLElementObserver(div2)
const observer1 = new Observer((data) => {
	div3.innerHTML = data.length
})

items.subscribe(div1Observer)
items.subscribe(div2Observer)
items.subscribe(observer1)

function add() {
	const name = txtName.value
	items.add(name)
}
