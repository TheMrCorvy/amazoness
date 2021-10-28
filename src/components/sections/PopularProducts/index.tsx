import { FC } from "react"

import { Container, Grid } from "@mui/material"

import { Product } from "../../../misc/types"

import { data } from "../../../misc/staticData"

import UnderlinedTitle from "../../UnderlinedTitle"
import ProductCard from "../../ProductCard"

const PopularProducts: FC = () => {
	return (
		<Container maxWidth="lg">
			<Grid container justifyContent="space-around" spacing={4}>
				<Grid item xs={12}>
					<UnderlinedTitle
						color="info"
						body="popular products"
						useCaps
						bold
						variant="h4"
					/>
				</Grid>
				{data.products.map((product: Product, index: number) => (
					<Grid item xs={12} md={6} lg={3} key={index}>
						<ProductCard product={product} />
					</Grid>
				))}
			</Grid>
		</Container>
	)
}

export default PopularProducts
