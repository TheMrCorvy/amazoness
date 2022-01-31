import type { GetServerSidePropsContext } from "next"
import { FC, useState } from "react"

import { Container, Grid } from "@mui/material"

import { useApi, useSlug } from "../../components/utils"
import { Product, Req } from "../../misc/types"

import BreadCrumbs from "../../components/BreadCrumbs"
import ProductImages from "../../components/sections/ProductImages"

import { appName } from "../../misc/config"
import ProductDetails from "../../components/sections/ProductDetails"

const ProductPage: FC<Props> = ({ product, similarProducts }) => {
	const createSlug = useSlug

	const [mainImg, setMainImg] = useState(product.default.images[0])

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

// remember to update this to "getStaticProps" & uncomment "getStaticPaths"
export async function getServerSideProps(context: GetServerSidePropsContext) {
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
			// revalidate: 60 * 60 * 24,
		}
	})
}

// export async function getStaticPaths() {
// 	const callApi = useApi

// 	const request: Req = {
// 		endpoint: "/products/get-all-slugs",
// 		method: "GET",
// 	}

// 	return await callApi(request).then((res) => {
// 		if (res.status !== 200) return { notFound: true }

// 		return {
// 			paths: res.data.products.map((product: Product) => ({
// 				params: {
// 					slug: product.slug,
// 				},
// 			})),
// 			fallback: true,
// 		}
// 	})
// }

export default ProductPage
