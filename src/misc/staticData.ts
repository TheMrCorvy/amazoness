import { StaticProductData, UrlKeyWords } from "./types"

export const data: StaticProductData = {
	products: [
		{
			name: "Shirt 1",
			category: "Shirts",
			brand: "Nike",
			rating: 6,
			numReviews: 10,
			description:
				"Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod culpa aliquam nobis pariatur quidem.",
			default: {
				images: ["/images/shirt-1.jpg"],
				price: 17,
				stock: 20,
			},
			subCategories: [
				{
					name: "color",
					title: "black",
					price: 50,
					stock: 2,
					image: "/images/black-shirt.jpeg",
				},
			],
		},
		{
			name: "Shirt 2",
			category: "Shirts",
			brand: "Oliver",
			rating: 9,
			numReviews: 10,
			description:
				"Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod culpa aliquam nobis pariatur quidem.",
			default: {
				images: ["/images/shirt-1.jpg"],
				price: 175,
				stock: 20,
			},
		},
		{
			name: "Pants 1",
			category: "Pants",
			brand: "Nike",
			rating: 8,
			numReviews: 10,
			description:
				"Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod culpa aliquam nobis pariatur quidem.",
			default: {
				images: ["/images/pants-1.jpg"],
				price: 57,
				stock: 20,
			},
		},
		{
			name: "Shoe 1",
			category: "Shoes",
			brand: "Nike",
			rating: 5,
			numReviews: 10,
			description:
				"Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod culpa aliquam nobis pariatur quidem.",
			default: {
				images: ["/images/pants-1.jpg", "/images/shirt-1.jpg"],
				price: 7,
				stock: 20,
			},
		},
		{
			name: "Pants 2",
			category: "Pants",
			brand: "Nike",
			rating: 2,
			numReviews: 10,
			description:
				"Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod culpa aliquam nobis pariatur quidem.",
			default: {
				images: ["/images/pants-1.jpg"],
				price: 100,
				stock: 20,
			},
		},
		{
			name: "Pants 3",
			category: "Pants",
			brand: "Nike",
			rating: 3,
			numReviews: 10,
			description:
				"Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod culpa aliquam nobis pariatur quidem.",
			default: {
				images: ["/images/pants-1.jpg"],
				price: 50,
				stock: 20,
			},
		},
		{
			name: "Shirt 3",
			category: "Shirts",
			brand: "Nike",
			rating: 1,
			numReviews: 10,
			description:
				"Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod culpa aliquam nobis pariatur quidem.",
			default: {
				images: ["/images/shirt-1.jpg"],
				price: 37,
				stock: 20,
			},
		},
	],
}

export const urlKeyWords: UrlKeyWords = {
	product: "/product",
	products: "/products",
	productNotFound: "/product-was-not-found",
	cart: "/cart",
	login: "/login",
	shippingInfo: "/about-shippings",
	faq: "/frequently-asked-questions",
}

export const appName = "Amazoness"
