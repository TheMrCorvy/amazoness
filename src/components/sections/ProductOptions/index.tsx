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

const ProductOptions: FC<Props> = ({ product }) => {
	const formatPrice = usePriceFormatter
	const classes = useStyles()

	if (!product.subCategory || product.subCategory.length < 1) {
		return null
	}

	return (
		<>
			<Grid container justifyContent="space-between" spacing={4}>
				<Grid item>
					<ButtonBase className={classes.buttonBase}>
						<Grid container>
							<Grid item xs={6}>
								<Avatar
									alt={product.name}
									src={product.default.images[0]}
									sx={{ width: 65, height: 65 }}
								/>
							</Grid>
							<Grid item xs={6}>
								{/* <Typography
									variant="h6"
									sx={{ borderBottom: "solid", borderColor: "blue" }}
								>
									Default
								</Typography> */}
								<UnderlinedTitle
									body="Default"
									variant="h6"
									color="info"
									length={100}
								/>
							</Grid>
						</Grid>
					</ButtonBase>
				</Grid>
				<Grid item xs={12} sx={{ display: "none" }}>
					<List>
						<ListItem>
							<Grid container>
								<Grid xs={8} md={4}>
									<Typography variant="body1">Price:</Typography>
								</Grid>
								<Grid item xs={4} md={8}>
									{formatPrice(product.default.price)}
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
									{product.default.stock}
								</Grid>
							</Grid>
						</ListItem>
						<Divider />
					</List>
				</Grid>
				{product.subCategory.map((option, index) => (
					<Fragment key={index}>
						<Grid item>
							<ButtonBase sx={{ padding: "0.5rem", borderRadius: 1 }}>
								<Grid container spacing={0}>
									<Grid item xs={4}>
										<Avatar
											alt={product.name}
											src={product.default.images[0]}
											sx={{ width: 56, height: 56 }}
										/>
									</Grid>
									<Grid item xs={8}>
										<Typography variant="h6">
											{option.name + ": " + option.title}
										</Typography>
									</Grid>
								</Grid>
							</ButtonBase>
						</Grid>
						<Grid item xs={12}>
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
								<ListItem className={classes.marginTop}>
									<Grid container>
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
}

export default ProductOptions
