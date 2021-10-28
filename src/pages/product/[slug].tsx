import { FC, useEffect, useState } from "react"

import { useRouter } from "next/router"

import { Container, Grid } from "@mui/material"

import { data, urlKeyWords } from "../../misc/staticData"
import { useFakeApi, useSlug } from "../../components/utils"
import { Product, Req } from "../../misc/types"

import BreadCrumbs from "../../components/BreadCrumbs"

const ProductPage: FC = () => {
	const router = useRouter()
	const createSlug = useSlug
	const callApi = useFakeApi

	const [stateProduct, setStateProduct] = useState<Product>(placeholder)
	const [loading, setLoading] = useState(true)

	useEffect(() => {
		if (!router.isReady) return

		const { slug } = router.query

		const req: Req = {
			endpoint: "/find",
			method: "GET",
		}

		callApi(req).then((res) => {
			let product: Product = placeholder

			data.products.forEach((element) => {
				if (createSlug(element.name) === slug) {
					product = element
				}
			})

			if (!product.id) {
				router.push(urlKeyWords.productNotFound)
			} else {
				setLoading(false)
				setStateProduct(product)
			}
		})
	}, [router.isReady])

	return (
		<Container maxWidth="lg">
			<Grid container justifyContent="space-around" spacing={4}>
				<Grid item xs={12}>
					{!loading && stateProduct.id && (
						<BreadCrumbs
							title={stateProduct.name}
							steps={{
								home: "/",
								[stateProduct.category]: "/" + stateProduct.category,
							}}
						/>
					)}
				</Grid>
			</Grid>
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
