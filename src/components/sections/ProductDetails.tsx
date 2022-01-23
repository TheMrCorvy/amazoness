import { FC } from "react"
import { useRouter } from "next/router"
import NextLink from "next/link"

import { Button, Grid, IconButton, Typography, Rating, Link } from "@mui/material"

import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder"

import { useDispatch } from "react-redux"
import { ReduxProduct } from "../../redux/types"
import { addToCart } from "../../redux/actions/shoppingCartActions"

import { urlKeyWords } from "../../misc/config"
import { usePriceFormatter, useSlug } from "../utils"
import { Product } from "../../misc/types"

import CardLink from "../CardLink"
import UnderlinedTitle from "../UnderlinedTitle"
import SimilarProducts from "../sections/SimilarProducts"
import ProductOptions from "../sections/ProductOptions"
import StyledText from "../custom-styles/StyledText"

const ProductDetails: FC<Props> = ({ product, similarProducts, updateMainImg }) => {
	const formatPrice = usePriceFormatter
	const createSlug = useSlug
	const dispatch = useDispatch()
	const router = useRouter()

	const dispatchAddToCart = (buyNow?: "now") => {
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

		if (buyNow) {
			router.push(urlKeyWords.login)
		}
	}

	return (
		<Grid item xs={12} md={6}>
			<Grid container spacing={4}>
				<Grid item xs={10}>
					<Typography variant="h1" sx={{ fontWeight: "bold" }}>
						{product.name}
					</Typography>
				</Grid>
				<Grid item xs={2}>
					<IconButton color="error" size="large">
						<FavoriteBorderIcon />
					</IconButton>
				</Grid>
				<Grid item xs={12}>
					<Typography variant="body1">{product.description}</Typography>
				</Grid>
				{product.category && (
					<Grid item xs={12}>
						<Typography variant="h6">
							See Category:{" "}
							<NextLink href={createSlug(product.category)} passHref>
								<Link underline="hover" color="royalblue">
									{product.category}
								</Link>
							</NextLink>
						</Typography>
					</Grid>
				)}
				<Grid
					item
					xs={12}
					sx={{
						color: (theme) => theme.palette.success.light,
					}}
				>
					<UnderlinedTitle
						variant="h4"
						color="info"
						body={formatPrice(product.default.price)}
					/>
				</Grid>
				<Grid item xs={12}>
					<Grid container spacing={3}>
						<Grid item xs={6} sm={4} lg={3}>
							<Rating
								name="read-only"
								value={product.rating / 2}
								readOnly
								precision={0.5}
							/>
						</Grid>
						<Grid item xs={6} sm={8} lg={9}>
							<StyledText textColor="info">{product.numReviews} Reviews</StyledText>
						</Grid>
					</Grid>
				</Grid>
				<Grid item xs={12}>
					{product.subCategories && product.subCategories.length >= 1 ? (
						<ProductOptions product={product} updateMainImg={updateMainImg} />
					) : (
						<Grid container spacing={3}>
							<Grid item xs={6}>
								<Button
									variant="outlined"
									size="large"
									sx={{
										color: (theme) => theme.palette.success.light,
									}}
									color="success"
									onClick={() => dispatchAddToCart()}
								>
									add to cart
								</Button>
							</Grid>
							<Grid
								item
								xs={6}
								sx={{
									textAlign: "right",
								}}
							>
								<Button
									variant="contained"
									size="large"
									color="error"
									disableElevation
									onClick={() => dispatchAddToCart("now")}
								>
									buy now
								</Button>
							</Grid>
						</Grid>
					)}
				</Grid>
				<Grid item xs={12}>
					<CardLink
						color="warning"
						innerText="Know more about our shipping options"
						url={urlKeyWords.shippingInfo}
					/>
				</Grid>
				<Grid item xs={12}>
					<CardLink
						color="grey"
						innerText="Frequently Asked Questions"
						url={urlKeyWords.faq}
					/>
				</Grid>
				<SimilarProducts products={similarProducts} layoutOption={2} />
			</Grid>
		</Grid>
	)
}

interface Props {
	product: Product
	similarProducts: Product[]
	updateMainImg: (image: string) => void
}

export default ProductDetails
