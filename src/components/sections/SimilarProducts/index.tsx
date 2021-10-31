import { FC } from "react"

import { Grid } from "@mui/material"

import UnderlinedTitle from "../../UnderlinedTitle"
import ProductCard from "../../ProductCard"

import { Product } from "../../../misc/types"

const SimilarProducts: FC<Props> = ({ products, layoutOption }) => {
	const display1 = { xs: "none", md: "block" }
	const display2 = { xs: "block", md: "none" }

	const layout = layoutOption === 1 ? display1 : display2

	return (
		<>
			<Grid item xs={12} sx={{ display: layout, marginTop: "2rem" }}>
				<UnderlinedTitle
					color="success"
					variant="h5"
					body="other similar products"
					useCaps
					bold
				/>
			</Grid>
			<Grid item xs={12} sx={{ display: layout }}>
				<Grid container spacing={4}>
					{products.map((product, index) => (
						<Grid item xs={12} md={6} key={index}>
							<ProductCard product={product} />
						</Grid>
					))}
				</Grid>
			</Grid>
		</>
	)
}

interface Props {
	products: Product[]
	layoutOption: 1 | 2
}

export default SimilarProducts
