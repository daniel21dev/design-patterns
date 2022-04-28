//component
class ProductComponent {
	constructor(name) {
		this.name = name
	}

	getDetail() {
		return `${this.name}`
	}
}
// decorator
class ProductDecorator {
	constructor(productComponent) {
		this.ProductComponent = productComponent
	}

	getDetail() {
		return this.ProductComponent.getDetail()
	}
}
// decorador 2
class StoreProductDecorator extends ProductDecorator {
	constructor(productComponent, price) {
		super(productComponent)
		this.price = price
	}

	getDetail() {
		return super.getDetail() + `$ ${this.price}`
	}
}

class CommercialInfoProductDecorator extends ProductDecorator {
	constructor(productComponent, tradename, brand) {
		super(productComponent)
		this.tradename = tradename
		this.brand = brand
	}

	getDetail() {
		return `${this.tradename} ${this.brand} ` + super.getDetail()
	}
}

class HTMLProductDecorator extends ProductDecorator {
	getDetail() {
		return `<h1>Informacion del producto</h1>
        <p>${super.getDetail()}</p>`
	}
}

// ejecucion
// component
const productComponent = new ProductComponent('Cerveza')
console.log(productComponent.getDetail())

// decorator 1 con component
const commercialInfoProduct = new CommercialInfoProductDecorator(
	productComponent,
	'London Porter',
	'Fullers'
)
console.log(commercialInfoProduct.getDetail())

const storeProduct = new StoreProductDecorator(productComponent, 15.5)
console.log(storeProduct.getDetail())

const product = new StoreProductDecorator(storeProduct)
console.log(product.getDetail())

const htmlProductDecorator = new HTMLProductDecorator(product)
myDiv.innerHTML = htmlProductDecorator.getDetail()
