import { FC, useEffect, useState } from "react"

import { useRouter } from "next/router"

import { Container, Grid, Typography } from "@mui/material"

import { useDispatch, useSelector } from "react-redux"
import { RootState } from "../../redux/store"

import { urlKeyWords } from "../../misc/config"
import { useApi, useSlug } from "../../components/utils"
import { Product, Req } from "../../misc/types"

import BreadCrumbs from "../../components/BreadCrumbs"
import ProductImages from "../../components/sections/ProductImages"

import { appName } from "../../misc/config"
import ProductDetails from "../../components/sections/ProductDetails"

const ProductPage: FC = () => {
	const dispatch = useDispatch()
	const { loading } = useSelector((state: RootState) => state.loading)

	const router = useRouter()
	const createSlug = useSlug
	const callApi = useApi

	const [product, setProduct] = useState<Product>(placeholder)
	const [similarProducts, setSimilarProducts] = useState<Product[]>([placeholder])
	const [mainImg, setMainImg] = useState("")

	useEffect(() => {
		if (!router.isReady) return

		const { slug } = router.query

		const req: Req = {
			endpoint: "/products/find/" + slug,
			method: "GET",
		}

		callApi(req, dispatch).then((res) => {
			if (res.status !== 200) {
				router.push(urlKeyWords.productNotFound)

				return
			}

			setProduct(res.data.product)
			setSimilarProducts(res.data.similarProducts)

			document.title = res.data.product.name + " - " + appName
		})
	}, [router])

	const updateMainImg = (src: string) => setMainImg(src)

	return (
		<Container maxWidth="lg">
			<Grid container justifyContent="space-around" spacing={6}>
				{!loading ? (
					<>
						<Grid item xs={12}>
							{product.category && (
								<BreadCrumbs
									title={product.name}
									steps={{
										[product.category]: "/" + createSlug(product.category),
									}}
								/>
							)}
						</Grid>

						<ProductImages
							mainImg={mainImg ? mainImg : product.default.images[0]}
							similarProducts={similarProducts}
							product={product}
							updateMainImg={updateMainImg}
						/>

						<ProductDetails
							updateMainImg={updateMainImg}
							product={product}
							similarProducts={similarProducts}
						/>
					</>
				) : (
					<Grid item xs={12}>
						<Typography variant="h3" sx={{ textAlign: "center", marginTop: "10vh" }}>
							We are almost done. Please wait for a few more seconds...
						</Typography>
					</Grid>
				)}
			</Grid>
		</Container>
	)
}

const placeholder: Product = {
	_id: "loading",
	slug: "",
	name: "0",
	category: "",
	description: "",
	brand: "",
	rating: 0,
	numReviews: 0,
	default: {
		stock: 0,
		price: 0,
		images: [""],
	},
}

export default ProductPage
