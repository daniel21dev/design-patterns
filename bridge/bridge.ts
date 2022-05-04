interface ListImplementor {
	elements: number[]

	add(number: number): void
	getElements(): number[]
}

class OrderedList implements ListImplementor {
	elements: number[] = []

	public add(number: number): void {
		this.elements.push(number)
		this.elements.sort((a, b) => a - b)
	}

	public getElements(): number[] {
		return this.elements
	}
}

class UniqueList implements ListImplementor {
	elements: number[] = []
	public add(number: number): void {
		if (!this.elements.includes(number)) {
			this.elements.push(number)
		}
	}
	public getElements(): number[] {
		return this.elements
	}
}

interface DataAbstraction {
	implementor: ListImplementor
	add(number: number): void
	get(): number[]
	operation(fn: (n: number) => number): number[]
}

class DataRefineAbstraction implements DataAbstraction {
	implementor: ListImplementor
	constructor(implementor: ListImplementor) {
		this.implementor = implementor
	}

	public add(number: number): void {
		this.implementor.add(number)
	}

	public get(): number[] {
		return this.implementor.getElements()
	}

	public operation(fn: (n: number) => number): number[] {
		return this.implementor.getElements().map(fn)
	}
}

const uniqueData = new DataRefineAbstraction(new UniqueList())

uniqueData.add(3)
uniqueData.add(3)
uniqueData.add(1)
uniqueData.add(1)
uniqueData.add(2)
console.log(uniqueData.get())

const orderedData = new DataRefineAbstraction(new OrderedList())
orderedData.add(89)
orderedData.add(5)
orderedData.add(70)
orderedData.add(7)
orderedData.add(12)
orderedData.add(39)
console.log(orderedData.get())

const uniqueItems = uniqueData.operation((e: number) => e * 2)
console.log(uniqueItems)
