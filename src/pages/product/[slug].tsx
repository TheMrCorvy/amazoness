import type { GetServerSidePropsContext } from "next"
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

const ProductPage: FC<Props> = ({ product, similarProducts }) => {
	// const dispatch = useDispatch()
	// const { loading } = useSelector((state: RootState) => state.loading)

	// const router = useRouter()
	const createSlug = useSlug
	// const callApi = useApi

	// const [product, setProduct] = useState<Product>(placeholder)
	// const [similarProducts, setSimilarProducts] = useState<Product[]>([placeholder])
	const [mainImg, setMainImg] = useState(product.default.images[0])

	// useEffect(() => {
	// 	if (!router.isReady) return

	// 	const { slug } = router.query

	// 	const req: Req = {
	// 		endpoint: "/products/find/" + slug,
	// 		method: "GET",
	// 	}

	// 	callApi(req, dispatch).then((res) => {
	// 		if (res.status !== 200) {
	// 			router.push(urlKeyWords.productNotFound)

	// 			return
	// 		}

	// 		setProduct(res.data.product)
	// 		setSimilarProducts(res.data.similarProducts)

	// 		document.title = res.data.product.name + " - " + appName
	// 	})
	// }, [router])

	const updateMainImg = (src: string) => setMainImg(src)

	return (
		<Container maxWidth="lg">
			<Grid container justifyContent="space-around" spacing={6}>
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
					mainImg={mainImg}
					similarProducts={similarProducts}
					product={product}
					updateMainImg={updateMainImg}
				/>

				<ProductDetails
					updateMainImg={updateMainImg}
					product={product}
					similarProducts={similarProducts}
				/>
			</Grid>
		</Container>
	)
}

interface Props {
	product: Product
	similarProducts: Product[]
}

export async function getStaticProps(context: GetServerSidePropsContext) {
	const callApi = useApi

	const slug = context.params?.slug

	if (!slug) return { notFound: true }

	const request: Req = {
		endpoint: "/products/find/" + slug,
		method: "GET",
	}

	return await callApi(request).then((res) => {
		if (res.status === 404) return { notFound: true }

		return {
			props: {
				product: res.data.product,
				similarProducts: res.data.similarProducts,
			},
		}
	})
}

export async function getStaticPaths() {
	const callApi = useApi

	const request: Req = {
		endpoint: "/products/get-all-slugs",
		method: "GET",
	}

	return await callApi(request).then((res) => {
		if (res.status !== 200) return { notFound: true }

		return {
			paths: res.data.products.map((product: Product) => ({
				params: {
					slug: product.slug,
				},
			})),
			fallback: true,
		}
	})
}

export default ProductPage
