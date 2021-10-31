/********************************************************************************************** Static data for testing locally */
export interface StaticProductData {
	products: Product[] | []
}

/********************************************************************************************** Products */
export interface Product {
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

/********************************************************************************************** API Request */
export interface Req {
	method: "GET" | "POST" | "PUT" | "DELETE"
	endpoint: string
	body?: object
	token?: string
	apiUri?: string
	headers?: {
		[key: string]: string
	}
}

export interface Res {
	message: string
	data: object
	status: number
	request?: object
}
