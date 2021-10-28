import { FC, useEffect, useState } from "react"

import { useRouter } from "next/router"
import Image from "next/image"

import { ButtonBase, Container, Grid, Typography } from "@mui/material"

import { data, urlKeyWords } from "../../misc/staticData"
import { useFakeApi, useSlug } from "../../components/utils"
import { Product, Req } from "../../misc/types"

import BreadCrumbs from "../../components/BreadCrumbs"
import ProductCard from "../../components/ProductCard"
import UnderlinedTitle from "../../components/UnderlinedTitle"

import useStyles from "./styles"

const ProductPage: FC = () => {
	const router = useRouter()
	const createSlug = useSlug
	const callApi = useFakeApi
	const classes = useStyles()

	const [product, setProduct] = useState<Product>(placeholder)
	const [loading, setLoading] = useState(true)

	useEffect(() => {
		if (!router.isReady) return

		const { slug } = router.query

		const req: Req = {
			endpoint: "/find",
			method: "GET",
		}

		callApi(req).then((res) => {
			let apiProduct: Product = placeholder

			data.products.forEach((element) => {
				if (createSlug(element.name) === slug) {
					apiProduct = element
				}
			})

			if (!apiProduct.id) {
				router.push(urlKeyWords.productNotFound)
			} else {
				setLoading(false)
				setProduct(apiProduct)
			}
		})
	}, [router.isReady])

	return (
		<Container maxWidth="lg">
			{!loading && product.id && (
				<Grid container justifyContent="space-around" spacing={4}>
					<Grid item xs={12}>
						<BreadCrumbs
							title={product.name}
							steps={{
								home: "/",
								[product.category]: "/" + product.category,
							}}
						/>
					</Grid>
					<Grid item xs={12} md={6}>
						<Grid container spacing={3}>
							<Grid item xs={12} md={9}>
								<Image
									src={product.images[0]}
									alt={product.name}
									height={640}
									width={640}
									layout="responsive"
									className={classes.img}
								/>
							</Grid>
							<Grid item xs={12} md={3}>
								<Grid container spacing={3}>
									{product.images.map((image, index) => (
										<Grid item xs={4} md={12} key={index}>
											<ButtonBase className={classes.img}>
												<Image
													src={image}
													title={product.name}
													alt={product.name}
													width={150}
													height={150}
													className={classes.img}
												/>
											</ButtonBase>
										</Grid>
									))}
								</Grid>
							</Grid>
							<Grid item xs={12} className={classes.marginTop}>
								<UnderlinedTitle
									color="info"
									variant="h5"
									body="other similar products"
									useCaps
									bold
								/>
							</Grid>
							<Grid item xs={12}>
								<Grid container spacing={4}>
									{data.products.map(
										(product, index) =>
											product.id <= 4 && (
												<Grid item xs={12} md={6} key={index}>
													<ProductCard product={product} />
												</Grid>
											)
									)}
								</Grid>
							</Grid>
						</Grid>
					</Grid>
				</Grid>
			)}
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
