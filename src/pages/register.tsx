import { FC } from "react"
import NextLink from "next/link"

import {
	Button,
	Card,
	CardContent,
	TextField,
	Grid,
	Typography,
	FormControl,
	CardActions,
} from "@mui/material"
import useStyles from "../styles/pages/register"

import UnderlinedTitle from "../components/UnderlinedTitle"
import BreadCrumbs from "../components/BreadCrumbs"

import { appName, urlKeyWords } from "../misc/config"

const RegisterPage: FC = () => {
	const classes = useStyles()

	return (
		<>
			<BreadCrumbs title="Register" steps={{}} />
			<div className={classes.mainBgImage}>
				<Grid container justifyContent="center" className={classes.mainGridContainer}>
					<Grid item xs={12} md={6} className={classes.mainGridItem}>
						<Card elevation={0} className={classes.smallPadding}>
							<CardContent>
								<Grid container justifyContent="space-between" spacing={4}>
									<Grid item xs={12}>
										<UnderlinedTitle
											variant="h4"
											color="success"
											body="register your account"
											useCaps
										/>
									</Grid>
									<Grid item xs={12}>
										<FormControl fullWidth color="info">
											<TextField
												color="info"
												label="Name"
												variant="standard"
											/>
										</FormControl>
									</Grid>
									<Grid item xs={12}>
										<FormControl fullWidth color="info">
											<TextField
												color="info"
												label="Email"
												variant="standard"
											/>
										</FormControl>
									</Grid>
									<Grid item xs={12}>
										<FormControl fullWidth color="info">
											<TextField
												color="info"
												label="Password"
												variant="standard"
											/>
										</FormControl>
									</Grid>
									<Grid item xs={12}>
										<FormControl fullWidth color="info">
											<TextField
												color="info"
												label="Confirm Password"
												variant="standard"
											/>
										</FormControl>
									</Grid>
								</Grid>
							</CardContent>
							<CardActions>
								<Grid justifyContent="space-between" container spacing={3}>
									<Grid item xs={12} md={6}>
										<NextLink href={urlKeyWords.login} passHref>
											<Button color="info" size="large" component="a">
												already have an account? login
											</Button>
										</NextLink>
									</Grid>
									<Grid item xs={12} md={6} xl={4}>
										<Button
											size="large"
											color="info"
											variant="contained"
											disableElevation
											fullWidth
										>
											register
										</Button>
									</Grid>
								</Grid>
							</CardActions>
						</Card>
					</Grid>
					<Grid item xs={12} md={6} className={classes.mainGridItem}>
						<Card elevation={0} className={classes.glassEffect}>
							<CardContent className={classes.bigCardContent}>
								<UnderlinedTitle
									variant="h5"
									length={20}
									color="info"
									body={`your ${appName} account`}
									useCaps
								/>

								<Typography
									variant="subtitle1"
									paragraph
									gutterBottom
									className={classes.marginTop}
								>
									Lorem ipsum dolor sit amet consectetur, adipisicing elit.
									Deleniti, quasi nemo. Eveniet, pariatur numquam incidunt
									mollitia corrupti aperiam, delectus perspiciatis non soluta
									quasi voluptates! Totam, aliquam. Repudiandae aliquid cumque
									similique.
								</Typography>

								<ul>
									<li>
										<Typography variant="body1" paragraph>
											Lorem ipsum dolor, sit amet consectetur adipisicing
											elit.
										</Typography>
									</li>
									<li>
										<Typography variant="body1" paragraph>
											Lorem ipsum dolor, sit amet consectetur adipisicing
											elit.
										</Typography>
									</li>
								</ul>
								<NextLink href={urlKeyWords.login} passHref>
									<Button size="large" color="info" component="a">
										already have an account? login
									</Button>
								</NextLink>
							</CardContent>
						</Card>
					</Grid>
				</Grid>
			</div>
		</>
	)
}

export default RegisterPage
