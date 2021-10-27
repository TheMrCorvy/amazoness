/********************************************************************************************** Static data for testing locally */
export interface StaticProductData {
	products: Product[] | []
}

/********************************************************************************************** Products */
export interface Product {
	id: number
	name: string
	category: string
	images: string[]
	price: number
	brand: string
	rating: number
	numReviews: number
	stock: number
	description: string
}

/********************************************************************************************** URL key words */
export interface UrlKeyWords {
	[key: string]: string
}
