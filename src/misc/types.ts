/********************************************************************************************** Static data for testing locally */
export interface StaticData {
	products: Omit<Product, "slug" | "_id">[] | []
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
// export interface User {
// 	email: string
// 	name: string
// 	password: string
// 	isAdmin?: boolean
// 	_id: string
// 	shippingAddress: {
// 		streetOne: string,
// 		streetTwo?: string,
// 		number: number,
// 		postalCode: string,
// 		apartment: string,
// 		description?: string,
// 		zone: string,
// 		city: string,
// 		country: string,
// 	}
// 	billingAddress: {
// 		streetOne: string,
// 		number: number,
// 		postalCode: string,
// 		city: string,
// 		country: string
// 	}
// }
