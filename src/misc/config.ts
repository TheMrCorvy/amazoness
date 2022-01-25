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
	home: "/home",
	account: "/account",
}

export const appName = "Amazoness"

export const saltWorkFactor = 10

export const mongoDbUri = process.env.MONGODB_URI

export const baseApiUri = process.env.BASE_API_URI || "http://localhost:3000/api"

export const jwtConfig = {
	accessTokenTtl: process.env.TOKEN_TTL || 15, //15 minutes
	refreshTokenTtl: process.env.REFRESH_TOKEN_TTL || 60 * 60 * 24, // 1 day
	privateKey: process.env.SECRET_KEY,
	publicKey: process.env.PUBLIC_KEY,
}
