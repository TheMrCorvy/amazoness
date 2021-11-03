import { FC, Fragment, useState } from "react"

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

import { data } from "../misc/staticData"

const CartPage: FC = () => {
	const [age, setAge] = useState("")

	const handleChange = (event: SelectChangeEvent) => {
		setAge(event.target.value as string)
	}

	return (
		<Container maxWidth="xl" sx={{ marginTop: "-1rem" }}>
			<Grid container spacing={4}>
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
								<Fragment key={index}>
									<ListItem sx={{ marginTop: "1rem" }}>
										<Grid container spacing={4}>
											<Grid item xs={3} sm={2} lg={1}>
												<Avatar
													src={product.default.images[0]}
													sx={{ width: 56, height: 56, marginRight: 2 }}
												/>
											</Grid>
											<Grid item xs={6} sm={3}>
												<Typography variant="subtitle1">
													{product.name}
												</Typography>
												<Typography variant="body2">
													{product.category}
												</Typography>
											</Grid>
											<Grid item xs={12} sm={4} lg={3}>
												<FormControl fullWidth>
													<TextField
														size="small"
														value={10}
														type="number"
														InputProps={{
															endAdornment: (
																<IconButton color="info">
																	<AddIcon />
																</IconButton>
															),
															startAdornment: (
																<IconButton color="error">
																	<RemoveIcon />
																</IconButton>
															),
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
												{product.subCategories &&
													product.subCategories.length >= 1 && (
														<FormControl fullWidth>
															<Select
																labelId="demo-simple-select-label"
																id="demo-simple-select"
																value={age}
																onChange={handleChange}
																size="small"
																sx={{
																	borderRadius: 3,
																	textTransform: "capitalize",
																}}
																color="info"
															>
																<MenuItem value={10}>
																	Default
																</MenuItem>
																{product.subCategories.map(
																	(option, index) => (
																		<MenuItem
																			value={100}
																			key={index}
																			sx={{
																				textTransform:
																					"capitalize",
																			}}
																		>
																			{option.title}
																		</MenuItem>
																	)
																)}
															</Select>
														</FormControl>
													)}
											</Grid>
											<Grid item xs={12} lg={3}>
												<Grid
													container
													justifyContent="space-between"
													spacing={2}
												>
													<Grid
														item
														xs={6}
														md={7}
														sx={{
															display: "flex",
															alignItems: "center",
														}}
													>
														$ 400.54
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

									<Divider sx={{ maxWidth: "95%", marginLeft: "2.5%" }} />
								</Fragment>
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
