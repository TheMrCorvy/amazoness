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

import { useDispatch } from "react-redux"
import { addToCart } from "../redux/actions/shoppingCartActions"
import { ReduxProduct } from "../redux/types"

import { Product } from "../misc/types"

import { usePriceFormatter, useSlug } from "./utils"
import { urlKeyWords } from "../misc/config"

const ProductCard: FC<Props> = ({ product }) => {
	const formatPrice = usePriceFormatter
	const slug = useSlug
	const dispatch = useDispatch()

	if (!product.default.images[0]) return null

	const dispatchAddToCart = () => {
		const baggage: ReduxProduct = {
			...product,
			selectedOption: {
				name: "Default",
				title: "",
			},
			selectedAmount: 1,
			totalPrice: product.default.price,
		}

		dispatch(addToCart(baggage))
	}

	return (
		<Card elevation={0}>
			<NextLink href={`${urlKeyWords.product}/${slug(product.name)}`} passHref>
				<CardActionArea>
					<CardMedia
						image={product.default.images[0]}
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
					{formatPrice(product.default.price)}
				</Typography>
				<Button color="info" size="small" onClick={dispatchAddToCart}>
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
