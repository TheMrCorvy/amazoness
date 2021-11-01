import { StaticProductData, UrlKeyWords } from "./types"

export const data: StaticProductData = {
	products: [
		{
			_id: "1",
			slug: "shirt-1",
			name: "Shirt 1",
			category: "Shirts",
			images: ["/images/shirt-1.jpg"],
			price: 17,
			brand: "Nike",
			rating: 6,
			numReviews: 10,
			stock: 20,
			description:
				"Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod culpa aliquam nobis pariatur quidem.",
		},
		{
			_id: "2",
			slug: "shirt-2",
			name: "Shirt 2",
			category: "Shirts",
			images: ["/images/shirt-1.jpg"],
			price: 175,
			brand: "Oliver",
			rating: 9,
			numReviews: 10,
			stock: 20,
			description:
				"Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod culpa aliquam nobis pariatur quidem.",
		},
		{
			_id: "3",
			slug: "pants-1",
			name: "Pants 1",
			category: "Pants",
			images: ["/images/pants-1.jpg"],
			price: 57,
			brand: "Nike",
			rating: 8,
			numReviews: 10,
			stock: 20,
			description:
				"Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod culpa aliquam nobis pariatur quidem.",
		},
		{
			_id: "4",
			slug: "shoe-1",
			name: "Shoe 1",
			category: "Shoes",
			images: ["/images/pants-1.jpg", "/images/shirt-1.jpg"],
			price: 7,
			brand: "Nike",
			rating: 5,
			numReviews: 10,
			stock: 20,
			description:
				"Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod culpa aliquam nobis pariatur quidem.",
		},
		{
			_id: "5",
			slug: "pants-2",
			name: "Pants 2",
			category: "Pants",
			images: ["/images/pants-1.jpg"],
			price: 100,
			brand: "Nike",
			rating: 2,
			numReviews: 10,
			stock: 20,
			description:
				"Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod culpa aliquam nobis pariatur quidem.",
		},
		{
			_id: "6",
			slug: "pants-3",
			name: "Pants 3",
			category: "Pants",
			images: ["/images/pants-1.jpg"],
			price: 50,
			brand: "Nike",
			rating: 3,
			numReviews: 10,
			stock: 20,
			description:
				"Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod culpa aliquam nobis pariatur quidem.",
		},
		{
			_id: "7",
			slug: "shirt-3",
			name: "Shirt 3",
			category: "Shirts",
			images: ["/images/shirt-1.jpg"],
			price: 37,
			brand: "Nike",
			rating: 1,
			numReviews: 10,
			stock: 20,
			description:
				"Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod culpa aliquam nobis pariatur quidem.",
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
