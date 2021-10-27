import { FC } from "react"

import { useRouter } from "next/router"

import { Container, Typography } from "@mui/material"

import { data, urlKeyWords } from "../../misc/staticData"
import { useSlug } from "../../components/utils"

const ProductPage: FC = () => {
	const router = useRouter()
	const createSlug = useSlug
	const { slug } = router.query

	const product = data.products.find((element) => createSlug(element.name) === slug)

	if (!product) {
		router.push(urlKeyWords.productNotFound)
	}

	return (
		<Container maxWidth="lg">
			<Typography variant="h1">{product.name}</Typography>
		</Container>
	)
}

export default ProductPage
