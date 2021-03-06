import { FC, Fragment, useState } from "react"
import { useRouter } from "next/router"

import {
	Avatar,
	Grid,
	Typography,
	List,
	ListItem,
	Divider,
	ButtonBase,
	Button,
} from "@mui/material"

import { useDispatch } from "react-redux"
import { ReduxProduct } from "../../../redux/types"
import { addToCart } from "../../../redux/actions/shoppingCartActions"

import { usePriceFormatter } from "../../utils"
import UnderlinedTitle from "../../UnderlinedTitle"

import { Product } from "../../../misc/types"
import { urlKeyWords } from "../../../misc/config"

import StyledText from "../../custom-styles/StyledText"

const ProductOptions: FC<Props> = ({ product, updateMainImg }) => {
	const formatPrice = usePriceFormatter
	const dispatch = useDispatch()
	const router = useRouter()

	const [value, setValue] = useState<number>(0)

	if (!product.subCategories || product.subCategories.length < 1) {
		return null
	}

	const handleChange = (newValue: number, newSrc: string) => {
		setValue(newValue)
		updateMainImg(newSrc)
	}

	const showLabel = (body: string, selection: number) => {
		if (value === selection) {
			return <UnderlinedTitle body={body} variant="h6" color="info" length={100} useCaps />
		}

		return (
			<StyledText variant="h6" textTransform="capitalize">
				{body}
			</StyledText>
		)
	}

	const dispatchAddToCart = (buyNow?: "now") => {
		let totalPrice = 0
		let name = ""
		let title = ""

		if (product.subCategories && value - 1 >= 0) {
			totalPrice = product.subCategories[value - 1].price
			name = product.subCategories[value - 1].name
			title = product.subCategories[value - 1].title
		}

		const baggage: ReduxProduct = {
			...product,
			selectedOption: {
				name: value === 0 ? "Default" : name,
				title: value === 0 ? "" : title,
			},
			selectedAmount: 1,
			totalPrice: value === 0 ? product.default.price : totalPrice,
		}

		dispatch(addToCart(baggage))

		if (buyNow) {
			router.push(urlKeyWords.cart)
		}
	}

	return (
		<>
			<Grid container justifyContent="space-between" spacing={4}>
				<Grid item>
					<ButtonBase
						sx={{
							padding: "0.5rem",
							paddingRight: "1rem",
							borderRadius: 1,
						}}
						onClick={() => handleChange(0, product.default.images[0])}
					>
						<Grid container>
							<Grid item xs={6}>
								<Avatar
									alt={product.name}
									src={product.default.images[0]}
									sx={{ width: 65, height: 65 }}
								/>
							</Grid>
							<Grid item xs={6}>
								{showLabel("Default", 0)}
							</Grid>
						</Grid>
					</ButtonBase>
				</Grid>
				{product.subCategories.map((option, index) => (
					<Grid item key={index}>
						<ButtonBase
							sx={{
								padding: "0.5rem",
								paddingRight: "1rem",
								borderRadius: 1,
							}}
							onClick={() => handleChange(index + 1, option.image)}
						>
							<Grid container spacing={0}>
								<Grid item xs={4}>
									<Avatar
										alt={product.name}
										src={option.image}
										sx={{ width: 56, height: 56 }}
									/>
								</Grid>
								<Grid item xs={8}>
									{showLabel(`${option.name + ": " + option.title}`, index + 1)}
								</Grid>
							</Grid>
						</ButtonBase>
					</Grid>
				))}
				<Grid item xs={12} sx={{ display: value === 0 ? "block" : "none" }}>
					<List>
						<ListItem>
							<Grid container>
								<Grid item xs={8} md={4}>
									<Typography variant="body1">Price:</Typography>
								</Grid>
								<Grid item xs={4} md={8}>
									<StyledText
										variant="body1"
										textColor="success"
										fontWeight="bold"
									>
										{formatPrice(product.default.price)}
									</StyledText>
								</Grid>
							</Grid>
						</ListItem>
						<Divider />
						<ListItem
							sx={{
								marginTop: "2rem",
							}}
						>
							<Grid container>
								<Grid item xs={8} md={4}>
									<Typography variant="body1">Available Stock:</Typography>
								</Grid>
								<Grid item xs={4} md={8}>
									<StyledText variant="body1" textColor="info" fontWeight="bold">
										{product.default.stock}
									</StyledText>
								</Grid>
							</Grid>
						</ListItem>
						<Divider />
						<ListItem
							sx={{
								marginTop: "2rem",
							}}
							disablePadding
						>
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
						</ListItem>
					</List>
				</Grid>
				{product.subCategories.map((option, index) => (
					<Fragment key={index}>
						<Grid item xs={12} sx={{ display: index + 1 === value ? "block" : "none" }}>
							<List>
								<ListItem>
									<Grid container>
										<Grid item xs={8} md={4}>
											<Typography variant="body1">Price:</Typography>
										</Grid>
										<Grid item xs={4} md={8}>
											<StyledText
												variant="body1"
												textColor="success"
												fontWeight="bold"
											>
												{formatPrice(option.price)}
											</StyledText>
										</Grid>
									</Grid>
								</ListItem>
								<Divider />
								<ListItem
									sx={{
										marginTop: "2rem",
									}}
								>
									<Grid container>
										<Grid item xs={8} md={4}>
											<Typography variant="body1">
												Available Stock:
											</Typography>
										</Grid>
										<Grid item xs={4} md={8}>
											<StyledText
												variant="body1"
												fontWeight="bold"
												textColor="info"
											>
												{option.stock}
											</StyledText>
										</Grid>
									</Grid>
								</ListItem>
								<Divider />
								<ListItem
									sx={{
										marginTop: "2rem",
									}}
									disablePadding
								>
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
								</ListItem>
							</List>
						</Grid>
					</Fragment>
				))}
			</Grid>
		</>
	)
}

interface Props {
	product: Product
	updateMainImg: (src: string) => void
}

export default ProductOptions
