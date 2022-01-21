import { FC, useState, useEffect } from "react"
import NextLink from "next/link"

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
	ButtonBase,
} from "@mui/material"
import AddIcon from "@mui/icons-material/Add"
import RemoveIcon from "@mui/icons-material/Remove"
import DeleteForeverIcon from "@mui/icons-material/DeleteForever"
import Select, { SelectChangeEvent } from "@mui/material/Select"

import { useDispatch } from "react-redux"
import {
	removeFromCart,
	updateItemAmount,
	updateSubCategory,
} from "../../redux/actions/shoppingCartActions"
import { ReduxProduct } from "../../redux/types"
import { usePriceFormatter } from "../utils"
import { urlKeyWords } from "../../misc/config"

const CartListItem: FC<Props> = ({ reduxProduct }) => {
	const { name, totalPrice, selectedAmount, selectedOption, category, subCategories, slug } =
		reduxProduct

	const formatPrice = usePriceFormatter
	const dispatch = useDispatch()

	const [option, setOption] = useState("Default,")

	const handleSelectChange = (event: SelectChangeEvent) => {
		setOption(event.target.value)

		dispatch(updateSubCategory(event.target.value, name))
	}

	const handleAmountChange = (newAmount: number) => {
		dispatch(updateItemAmount(option, newAmount, name))
	}

	const dispatchRemoveFromCart = () => {
		dispatch(removeFromCart(name))
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
			<ListItem
				sx={{
					marginTop: "1rem",
				}}
			>
				<Grid container spacing={4}>
					<Grid item xs={3} sm={2} lg={1}>
						<NextLink passHref href={urlKeyWords.product + "/" + slug}>
							<ButtonBase sx={{ borderRadius: 3 }}>
								<Avatar
									src={reduxProduct.default.images[0]}
									sx={{
										width: 56,
										height: 56,
										marginRight: 2,
									}}
								/>
							</ButtonBase>
						</NextLink>
					</Grid>
					<Grid item xs={6} sm={3}>
						<NextLink href={urlKeyWords.product + "/" + slug} passHref>
							<Typography variant="subtitle1">{name}</Typography>
						</NextLink>
						<NextLink href={"/" + category} passHref>
							<Typography variant="body2">{category}</Typography>
						</NextLink>
					</Grid>
					<Grid item xs={12} sm={4} lg={3}>
						<FormControl fullWidth>
							<TextField
								size="small"
								value={selectedAmount}
								disabled
								onChange={() => handleAmountChange(0)}
								type="number"
								InputProps={{
									endAdornment: (
										<IconButton
											color="info"
											onClick={() => handleAmountChange(selectedAmount + 1)}
										>
											<AddIcon />
										</IconButton>
									),
									startAdornment: (
										<IconButton
											color="error"
											onClick={() => handleAmountChange(selectedAmount - 1)}
										>
											<RemoveIcon />
										</IconButton>
									),
									style: { color: "black" },
								}}
								inputProps={{
									style: {
										textAlign: "center",
									},
								}}
							/>
						</FormControl>
					</Grid>
					<Grid item xs={12} sm={3} lg={2}>
						{subCategories && subCategories.length > 0 && (
							<FormControl fullWidth>
								<Select
									labelId="options-label"
									id="options"
									value={option}
									onChange={handleSelectChange}
									size="small"
									sx={{
										borderRadius: 30,
										textTransform: "capitalize",
									}}
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
							<Grid
								item
								xs={6}
								md={7}
								sx={{
									display: "flex",
									alignItems: "center",
								}}
							>
								<Typography
									variant="body1"
									sx={{
										color: (theme) => theme.palette.success.light,
									}}
								>
									{formatPrice(selectedAmount * totalPrice)}
								</Typography>
							</Grid>
							<Grid item>
								<IconButton color="error" onClick={dispatchRemoveFromCart}>
									<DeleteForeverIcon />
								</IconButton>
							</Grid>
						</Grid>
					</Grid>
				</Grid>
			</ListItem>

			<Divider
				sx={{
					maxWidth: "95%",
					marginLeft: "2.5%",
				}}
			/>
		</>
	)
}

interface Props {
	reduxProduct: ReduxProduct
}

export default CartListItem
