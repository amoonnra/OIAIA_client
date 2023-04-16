export interface IProductFormData {
	userId: number
	products: IProduct[]
}

interface IProduct {
	text: string
	id: number
	photo?: string
}