import { FC, Fragment, useEffect, useState } from "react"

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
import useStyles from "./styles"

import { usePriceFormatter } from "../../utils"
import UnderlinedTitle from "../../UnderlinedTitle"

import { Product } from "../../../misc/types"

const ProductOptions: FC<Props> = ({ product, updateMainImg }) => {
	const formatPrice = usePriceFormatter
	const classes = useStyles()

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
			<Typography variant="h6" className={classes.textCapitalize}>
				{body}
			</Typography>
		)
	}

	return (
		<>
			<Grid container justifyContent="space-between" spacing={4}>
				<Grid item>
					<ButtonBase
						className={classes.buttonBase}
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
					<Grid item>
						<ButtonBase
							className={classes.buttonBase}
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
								<Grid xs={8} md={4}>
									<Typography variant="body1">Price:</Typography>
								</Grid>
								<Grid item xs={4} md={8}>
									<Typography
										variant="body1"
										className={classes.textGreen}
										sx={{ fontWeight: "bold" }}
									>
										{formatPrice(product.default.price)}
									</Typography>
								</Grid>
							</Grid>
						</ListItem>
						<Divider />
						<ListItem className={classes.marginTop}>
							<Grid container>
								<Grid item xs={8} md={4}>
									<Typography variant="body1">Available Stock:</Typography>
								</Grid>
								<Grid item xs={4} md={8}>
									<Typography
										variant="body1"
										className={classes.textInfo}
										sx={{ fontWeight: "bold" }}
									>
										{product.default.stock}
									</Typography>
								</Grid>
							</Grid>
						</ListItem>
						<Divider />
						<ListItem className={classes.marginTop} disablePadding>
							<Grid container spacing={3}>
								<Grid item xs={6}>
									<Button
										variant="outlined"
										size="large"
										className={classes.textGreen}
										color="success"
									>
										add to cart
									</Button>
								</Grid>
								<Grid item xs={6} className={classes.textRight}>
									<Button
										variant="contained"
										size="large"
										color="error"
										disableElevation
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
										<Grid xs={8} md={4}>
											<Typography variant="body1">Price:</Typography>
										</Grid>
										<Grid item xs={4} md={8}>
											<Typography
												variant="body1"
												className={classes.textGreen}
												sx={{ fontWeight: "bold" }}
											>
												{formatPrice(option.price)}
											</Typography>
										</Grid>
									</Grid>
								</ListItem>
								<Divider />
								<ListItem className={classes.marginTop}>
									<Grid container>
										<Grid item xs={8} md={4}>
											<Typography variant="body1">
												Available Stock:
											</Typography>
										</Grid>
										<Grid item xs={4} md={8}>
											<Typography
												variant="body1"
												sx={{ fontWeight: "bold" }}
												className={classes.textInfo}
											>
												{option.stock}
											</Typography>
										</Grid>
									</Grid>
								</ListItem>
								<Divider />
								<ListItem className={classes.marginTop} disablePadding>
									<Grid container spacing={3}>
										<Grid item xs={6}>
											<Button
												variant="outlined"
												size="large"
												className={classes.textGreen}
												color="success"
											>
												add to cart
											</Button>
										</Grid>
										<Grid item xs={6} className={classes.textRight}>
											<Button
												variant="contained"
												size="large"
												color="error"
												disableElevation
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
