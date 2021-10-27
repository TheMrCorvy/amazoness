import { FC } from "react"

import {
	Button,
	Card,
	CardActionArea,
	CardActions,
	CardContent,
	CardMedia,
	Container,
	Grid,
	Typography,
} from "@mui/material"

import { Product } from "../../../misc/types"

import { usePriceFormatter } from "../../utils"

import { data } from "../../../misc/staticData"

import UnderlinedTitle from "../../UnderlinedTitle"

const PopularProducts: FC = () => {
	const formatPrice = usePriceFormatter

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
					<Grid item xs={12} md={6} lg={4} xl={3} key={index}>
						<Card elevation={0}>
							<CardActionArea>
								<CardMedia
									image={product.images[0]}
									title={product.name}
									sx={{
										height: 0,
										paddingTop: "100%",
										borderRadius: 1,
									}}
								/>
								<CardContent>
									<Typography variant="subtitle1">{product.name}</Typography>
								</CardContent>
							</CardActionArea>
							<CardActions
								sx={{
									justifyContent: "space-between",
									paddingLeft: "1rem",
									paddingRight: "1rem",
								}}
							>
								<Typography variant="body1" color="green">
									{formatPrice(product.price)}
								</Typography>
								<Button color="info" size="small">
									Add To Cart
								</Button>
							</CardActions>
						</Card>
					</Grid>
				))}
			</Grid>
		</Container>
	)
}

export default PopularProducts
