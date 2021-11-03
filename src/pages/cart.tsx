import { FC, Fragment } from "react"

import {
	Container,
	Grid,
	List,
	ListItem,
	MenuItem,
	FormControl,
	InputLabel,
	Avatar,
	Divider,
	Card,
	Typography,
	TextField,
	IconButton,
} from "@mui/material"
import AddIcon from "@mui/icons-material/Add"
import RemoveIcon from "@mui/icons-material/Remove"
import DeleteForeverIcon from "@mui/icons-material/DeleteForever"
import Select, { SelectChangeEvent } from "@mui/material/Select"

import UnderlinedTitle from "../components/UnderlinedTitle"
import BreadCrumbs from "../components/BreadCrumbs"

import { data } from "../misc/staticData"

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
				<Grid item xs={12} md={8} xl={9}>
					<Card>
						<List
							sx={{
								width: "100%",
								bgcolor: "background.paper",
								height: "65vh",
								overflowY: "scroll",
							}}
						>
							{data.products.map((product, index) => (
								<Fragment key={index}></Fragment>
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
		</Container>
	)
}

export default CartPage
