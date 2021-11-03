import { FC, useState, useEffect } from "react"

import { Grid, List, Card } from "@mui/material"
import useStyles from "./styles"

import { data } from "../../../misc/staticData"
import { ReduxProduct } from "../../../redux/types"

import CartListItem from "../../CartListItem"
import { useSlug } from "../../utils"

const ShowCartInfo: FC = () => {
	const classes = useStyles()
	const createSlug = useSlug

	const [items, setItems] = useState<ReduxProduct[]>([])

	useEffect(() => {
		let newItems: ReduxProduct[] = []

		data.products.forEach((product) => {
			const reduxProduct: ReduxProduct = {
				...product,
				selectedAmount: product.default.stock,
				slug: createSlug(product.name),
				totalPrice: product.default.stock * product.default.price,
			}

			newItems.push(reduxProduct)
		})

		setItems(newItems)
	}, [])

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
