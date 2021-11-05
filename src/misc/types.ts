/********************************************************************************************** Static data for testing locally */
export interface StaticData {
	products: Omit<Product, "slug" | "_id">[] | []
	users: User[]
}

/********************************************************************************************** Products */
export interface Product {
	_id: string
	name: string
	category: string
	brand: string
	rating: number
	numReviews: number
	description: string
	slug: string
	default: DefaultProductOption
	subCategories?: SubCategory[]
}

export interface DefaultProductOption {
	images: string[]
	price: number
	stock: number
}

export interface SubCategory {
	name: string //example: color || rarity
	title: string //example: "black" || "ultra rare"
	price: number
	stock: number
	image: string
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
	data: {
		[key: string]: any
	}
	status: number
	request?: object
}

/********************************************************************************************** User */
export interface User {
	email: string
	name: string
	password: string
	isAdmin?: boolean
}
