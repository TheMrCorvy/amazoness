import { FC } from "react"

import { Grid, List, Card } from "@mui/material"
import useStyles from "./styles"

import { useSelector } from "react-redux"
import { RootState } from "../../../redux/store"

import CartListItem from "../../CartListItem"

const ShowCartInfo: FC = () => {
	const classes = useStyles()

	const { items } = useSelector((state: RootState) => state.items)

	return (
		<Grid item xs={12}>
			<Grid container spacing={4}>
				<Grid item xs={12} md={8} xl={9}>
					<Card>
						<List className={classes.mainCard}>
							{items.map((product, index) => (
								<CartListItem key={index} reduxProduct={product} />
							))}
						</List>
					</Card>
				</Grid>
				<Grid item xs={12} md={4} xl={3}>
					Lorem ipsum dolor sit amet consectetur, adipisicing elit. Minus praesentium
					laudantium quod, itaque aperiam perspiciatis. Fuga, minus explicabo sapiente,
					delectus esse consectetur dolorum, similique corrupti dignissimos repellat
					perferendis quas blanditiis.
				</Grid>
			</Grid>
		</Grid>
	)
}

export default ShowCartInfo
