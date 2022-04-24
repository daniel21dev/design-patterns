const data = [
	{
		name: 'Erdinger Pikantus',
		country: 'Germany',
		info: '...',
		img: 'https://www.impese.com/wp-content/uploads/2020/07/erdinger-pikantus-2-500x500.jpg',
	},
	{
		name: 'Corona',
		country: 'Mexico',
		info: '...',
		img: 'https://mapy.cdn1.dattamax.com/userfiles/images/productos/620/10508-1-CERVEZA-CORONA-EXTRA-BOTELLA-710ML.jpg',
	},
	{
		name: 'Tonayan',
		country: 'Mexico',
		info: '...',
		img: 'https://fotos.e-consulta.com/tonayanalcohol.jpg',
	},
]

class InfoContext {
	constructor(strategy, data, element) {
		this.setStrategy(strategy)
		this.data = data
		this.element = element
	}

	setStrategy(strategy) {
		this.strategy = strategy
	}

	show() {
		this.strategy.show(this.data, this.element)
	}
}

class ListStartegy {
	show(data, element) {
		element.innerHTML = data.reduce((ac, beer) => {
			return (
				ac +
				`<div>
                <h2>${beer.name}</h2>
                <p>${beer.country}</p>
                </div>
            <hr>`
			)
		}, '')
	}
}

class DetailedListStartegy {
	show(data, element) {
		element.innerHTML = data.reduce((ac, beer) => {
			return (
				ac +
				`<div>
                <h2>${beer.name}</h2>
                <p>${beer.country}</p>
                <p>${beer.info}</p>
                </div>
            <hr>`
			)
		}, '')
	}
}

class ListWithImageStrategy {
	show(data, element) {
		element.innerHTML = data.reduce((ac, beer) => {
			return (
				ac +
				`<div>
                    <img src="${beer.img}">
                    <h2>${beer.name}</h2>
                </div>
            <hr>`
			)
		}, '')
	}
}

const strategies = [
	new ListStartegy(),
	new DetailedListStartegy(),
	new ListWithImageStrategy(),
]
const info = new InfoContext(strategies[0], data, content)
info.show()

slcOptions.addEventListener('change', (event) => {
	const op = event.target.value
	info.setStrategy(strategies[op])
	info.show()
})
