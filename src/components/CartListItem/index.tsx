import { FC, useState, useEffect } from "react"

import {
	Grid,
	ListItem,
	MenuItem,
	FormControl,
	Avatar,
	Divider,
	Typography,
	TextField,
	IconButton,
} from "@mui/material"
import AddIcon from "@mui/icons-material/Add"
import RemoveIcon from "@mui/icons-material/Remove"
import DeleteForeverIcon from "@mui/icons-material/DeleteForever"
import Select, { SelectChangeEvent } from "@mui/material/Select"
import { useStyles } from "./styles"

import { ReduxProduct } from "../../redux/types"
import { usePriceFormatter } from "../utils"

const CartListItem: FC<Props> = ({ reduxProduct }) => {
	const { name, totalPrice, selectedAmount, selectedOption, category, subCategories } =
		reduxProduct

	const classes = useStyles()
	const formatPrice = usePriceFormatter

	const [option, setOption] = useState("Default,")
	const [amount, setAmount] = useState(selectedAmount)

	const handleSelectChange = (event: SelectChangeEvent) => {
		setOption(event.target.value)

		//dispatch event to redux
	}

	const handleAmountChange = (newAmount: number) => {
		setAmount(newAmount)

		//dispatch event to redux
	}

	useEffect(() => {
		if (selectedOption) {
			const newOption = selectedOption.name + "," + selectedOption.title
			setOption(newOption)
		}

		if (subCategories && subCategories.length >= 1 && !selectedOption) {
			setOption("Default,")
		}
	}, [])

	return (
		<>
			<ListItem className={classes.marginTop1}>
				<Grid container spacing={4}>
					<Grid item xs={3} sm={2} lg={1}>
						<Avatar src={reduxProduct.default.images[0]} className={classes.avatar} />
					</Grid>
					<Grid item xs={6} sm={3}>
						<Typography variant="subtitle1">{name}</Typography>
						<Typography variant="body2">{category}</Typography>
					</Grid>
					<Grid item xs={12} sm={4} lg={3}>
						<FormControl fullWidth>
							<TextField
								size="small"
								value={amount}
								disabled
								onChange={() => handleAmountChange(0)}
								type="number"
								InputProps={{
									endAdornment: (
										<IconButton
											color="info"
											onClick={() => handleAmountChange(amount + 1)}
										>
											<AddIcon />
										</IconButton>
									),
									startAdornment: (
										<IconButton
											color="error"
											onClick={() => handleAmountChange(amount - 1)}
										>
											<RemoveIcon />
										</IconButton>
									),
									style: { color: "black" },
								}}
								inputProps={{
									style: {
										// this one has to be here, or else it won't work
										textAlign: "center",
									},
								}}
							/>
						</FormControl>
					</Grid>
					<Grid item xs={12} sm={3} lg={2}>
						{subCategories && (
							<FormControl fullWidth>
								<Select
									labelId="options-label"
									id="options"
									value={option}
									onChange={handleSelectChange}
									size="small"
									className={classes.selectInput}
									color="info"
								>
									<MenuItem value="Default,">Default</MenuItem>
									{subCategories &&
										subCategories.map((option, index) => (
											<MenuItem
												value={option.name + "," + option.title}
												key={index}
												sx={{
													textTransform: "capitalize",
												}}
											>
												{option.title}
											</MenuItem>
										))}
								</Select>
							</FormControl>
						)}
					</Grid>
					<Grid item xs={12} lg={3}>
						<Grid container justifyContent="space-between" spacing={2}>
							<Grid item xs={6} md={7} className={classes.textCenter}>
								<Typography variant="body1" className={classes.textGreen}>
									{formatPrice(amount * totalPrice)}
								</Typography>
							</Grid>
							<Grid item>
								<IconButton color="error">
									<DeleteForeverIcon />
								</IconButton>
							</Grid>
						</Grid>
					</Grid>
				</Grid>
			</ListItem>

			<Divider className={classes.divider} />
		</>
	)
}

interface Props {
	reduxProduct: ReduxProduct
}

export default CartListItem
