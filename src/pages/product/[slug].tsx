import { FC, useEffect, useState } from "react"

import { useRouter } from "next/router"

import { Container, Typography } from "@mui/material"

import { data, urlKeyWords } from "../../misc/staticData"
import { useFakeApi, useSlug } from "../../components/utils"
import { Product, Req } from "../../misc/types"

const ProductPage: FC = () => {
	const router = useRouter()
	const createSlug = useSlug

	const [stateProduct, setStateProduct] = useState<Product>(placeholder)

	useEffect(() => {
		if (!router.isReady) return

		const { slug } = router.query

		const req: Req = {
			endpoint: "/find",
			method: "GET",
		}

		useFakeApi(req).then(() => {
			let product: Product = placeholder

			data.products.forEach((element) => {
				if (createSlug(element.name) === slug) {
					product = element
				}
			})

			if (!product.id) {
				router.push(urlKeyWords.productNotFound)
			} else {
				setStateProduct(product)
			}
		})
	}, [router.isReady])

	return (
		<Container maxWidth="lg">
			<Typography variant="h1">{stateProduct.name}</Typography>
		</Container>
	)
}

const placeholder: Product = {
	name: "loading",
	id: 0,
	category: "",
	description: "",
	images: [""],
	price: 0,
	brand: "",
	rating: 0,
	numReviews: 0,
	stock: 0,
}

export default ProductPage
