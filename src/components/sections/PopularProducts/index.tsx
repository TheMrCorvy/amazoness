import { FC, useEffect, useState } from "react"

import { Container, Grid } from "@mui/material"

import { useApi } from "../../utils"

import { Product, Req } from "../../../misc/types"

import UnderlinedTitle from "../../UnderlinedTitle"
import ProductCard from "../../ProductCard"

const PopularProducts: FC = () => {
	const callApi = useApi

	const [products, setProducts] = useState<Product[] | any[]>(["", "", "", ""])
	const [loading, setLoading] = useState(true)

	useEffect(() => {
		const req: Req = {
			endpoint: "/products/recently-added",
			method: "GET",
		}

		callApi(req).then((res: any) => {
			if (res.status === 200) {
				setProducts(res.data.products)
				setLoading(false)
			}

			console.log(res)
		})
	}, [])
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
				{!loading &&
					products.map((product: Product, index: number) => (
						<Grid item xs={12} md={6} lg={3} key={index}>
							<ProductCard product={product} />
						</Grid>
					))}
			</Grid>
		</Container>
	)
}

export default PopularProducts
