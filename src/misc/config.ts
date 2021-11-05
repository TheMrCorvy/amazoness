import { UrlKeyWords } from "./types"

export const urlKeyWords: UrlKeyWords = {
	product: "/product",
	products: "/products",
	productNotFound: "/product-was-not-found",
	cart: "/cart",
	login: "/login",
	register: "/register",
	shippingInfo: "/about-shippings",
	faq: "/frequently-asked-questions",
}

export const appName = "Amazoness"

export const saltWorkFactor = 10

export const mongoDbUri = process.env.MONGODB_URI

export const jwtConfig = {
	accessTokenTtl: 15, //15 minutes
	refreshTokenTtl: 15000,
	privateKey: process.env.JWT_SECRET,
	publicKey: process.env.JWT_PUBLIC,
}
