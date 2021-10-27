import { FC } from "react"

import {
	Button,
	Card,
	CardActionArea,
	CardActions,
	CardContent,
	CardMedia,
	Typography,
} from "@mui/material"

import { Product } from "../../misc/types"

import { usePriceFormatter } from "../utils"

const ProductCard: FC<Props> = ({ product }) => {
	const formatPrice = usePriceFormatter

	return (
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
	)
}

interface Props {
	product: Product
}

export default ProductCard
