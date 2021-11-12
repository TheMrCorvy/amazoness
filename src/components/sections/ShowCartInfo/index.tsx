import { FC } from "react"
import NextLink from "next/link"

import { Grid, List, Card, CardContent, Button } from "@mui/material"
import useStyles from "./styles"

import { useSelector } from "react-redux"
import { RootState } from "../../../redux/store"

import { urlKeyWords } from "../../../misc/config"

import CartListItem from "../../CartListItem"
import UnderlinedTitle from "../../UnderlinedTitle"
import PurchaseSteps from "../PurchaseSteps"

const ShowCartInfo: FC = () => {
	const classes = useStyles()

	const { items } = useSelector((state: RootState) => state.items)
	const { user } = useSelector((state: RootState) => state.user)

	return (
		<Grid item xs={12}>
			<Grid container spacing={4}>
				<Grid item xs={12} md={8} xl={9}>
					<Card>
						<List
							className={items.length > 0 ? classes.mainCard : classes.mainCardAlter}
						>
							{items.length >= 1 ? (
								items.map((product, index) => (
									<CartListItem key={index} reduxProduct={product} />
								))
							) : (
								<UnderlinedTitle
									body="You have 0 items in your Shopping Cart..."
									color="error"
									variant="h5"
									length={25}
								/>
							)}
						</List>
					</Card>
				</Grid>
				<Grid item xs={12} md={4} xl={3}>
					<Card>
						{user ? (
							<PurchaseSteps />
						) : (
							<CardContent className={classes.secondaryCardAlter}>
								<UnderlinedTitle
									body="You need to login to continue with your purchase."
									color="info"
									variant="h5"
									length={100}
								/>
								<NextLink href={urlKeyWords.login + urlKeyWords.cart} passHref>
									<Button
										variant="contained"
										disableElevation
										color="success"
										fullWidth
									>
										login
									</Button>
								</NextLink>
								<NextLink href={urlKeyWords.register} passHref>
									<Button
										variant="contained"
										disableElevation
										color="info"
										fullWidth
									>
										register
									</Button>
								</NextLink>
							</CardContent>
						)}
					</Card>
				</Grid>
			</Grid>
		</Grid>
	)
}

export default ShowCartInfo
