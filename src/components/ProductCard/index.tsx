import { FC } from "react"

import NextLink from "next/link"

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

import { usePriceFormatter, useSlug } from "../utils"

const ProductCard: FC<Props> = ({ product }) => {
	const formatPrice = usePriceFormatter

	const slug = useSlug

	return (
		<Card elevation={0}>
			<NextLink href={`/product/${slug(product.name)}`} passHref>
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
			</NextLink>
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
