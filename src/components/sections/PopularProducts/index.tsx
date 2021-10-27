import { FC } from "react"

import { Container, Grid, Typography } from "@mui/material"

const PopularProducts: FC = () => {
	return (
		<Container maxWidth="xl">
			<Grid container justifyContent="space-around" spacing={3}>
				<Grid item xs={12}>
					<Typography variant="h6">Popular Products</Typography>
				</Grid>
			</Grid>
		</Container>
	)
}

export default PopularProducts
