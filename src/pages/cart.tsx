import { FC } from "react"

import { Container, Grid } from "@mui/material"

import UnderlinedTitle from "../components/UnderlinedTitle"
import BreadCrumbs from "../components/BreadCrumbs"
import ShowCartInfo from "../components/sections/ShowCartInfo"

const CartPage: FC = () => {
	return (
		<Container maxWidth="xl" sx={{ marginTop: "-1rem" }}>
			<Grid container spacing={4}>
				<Grid item xs={12}>
					<BreadCrumbs title="Shopping Cart" steps={{}} />
				</Grid>
				<Grid item xs={12}>
					<UnderlinedTitle body="shopping cart" useCaps bold color="info" variant="h4" />
				</Grid>
				<ShowCartInfo />
			</Grid>
		</Container>
	)
}

export default CartPage
