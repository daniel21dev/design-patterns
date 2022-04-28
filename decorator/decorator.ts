interface Component {
	getDetail(): string
}

class ProductComponent implements Component {
	constructor(protected name: string) {}
	public getDetail(): string {
		return `${this.name}`
	}
}
// decorator
abstract class ProductDecorator implements Component {
	constructor(protected component: Component) {}
	getDetail(): string {
		return this.component.getDetail()
	}
}

// decorator
class CommercialInfoProductDecorator extends ProductDecorator {
	constructor(
		component: Component,
		private tradename: string,
		private brand: string
	) {
		super(component)
	}

	getDetail(): string {
		return `${this.tradename} ${this.brand} ${super.getDetail()}`
	}
}

// decorador 2
class StoreProductDecorator extends ProductDecorator {
	constructor(component: Component, private price: number) {
		super(component)
	}

	getDetail(): string {
		return `${super.getDetail()} $${this.price}`
	}
}

//compnent
const productComponent = new ProductComponent('Cerveza')
console.log(productComponent.getDetail())

// decorator 1 with component
const commercialInfoProduct = new CommercialInfoProductDecorator(
	productComponent,
	'Londo Porter',
	'Fullers'
)
console.log(commercialInfoProduct.getDetail())

// decorator 2
const storeProduct = new StoreProductDecorator(productComponent, 15.5)
console.log(storeProduct.getDetail())

// decorator 2 with decorator 1
const storeProduct2 = new StoreProductDecorator(commercialInfoProduct, 15.5)
console.log(storeProduct2.getDetail())
