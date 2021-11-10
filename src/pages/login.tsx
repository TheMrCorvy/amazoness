import { FC, useState, ChangeEvent } from "react"
import NextLink from "next/link"
import { useRouter } from "next/router"

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
import useStyles from "../styles/pages/login"

import UnderlinedTitle from "../components/UnderlinedTitle"
import BreadCrumbs from "../components/BreadCrumbs"

import { useDispatch } from "react-redux"
import { login } from "../redux/actions/userActions"
import { ReduxUser } from "../redux/types"

import { appName, urlKeyWords } from "../misc/config"
import { Req, Res } from "../misc/types"
import { useApi } from "../components/utils"

const LoginPage: FC = () => {
	const [formData, setFormData] = useState({
		email: "",
		password: "",
	})

	const classes = useStyles()
	const callApi = useApi
	const dispatch = useDispatch()
	const router = useRouter()

	const handleChange = (event: ChangeEvent<{ value: unknown }>) => {
		const target = event.target as HTMLInputElement

		setFormData({
			...formData,
			[target.name]: target.value,
		})
	}

	const callLogin = () => {
		const request: Req = {
			endpoint: "/users/login",
			method: "POST",
			body: formData,
		}

		callApi(request, dispatch).then((res: Res) => {
			if (res.status == 200) {
				const reduxUser: ReduxUser = {
					...res.data.user,
					accessToken: res.data.accessToken,
					refreshToken: res.data.refreshToken,
				}
				dispatch(login(reduxUser))

				router.push(urlKeyWords.home)
			}
		})
	}

	return (
		<>
			<BreadCrumbs title="Login" steps={{}} />
			<div className={classes.mainBgImage}>
				<Grid
					container
					spacing={4}
					justifyContent="center"
					className={classes.mainGridContainer}
				>
					<Grid item xs={12} md={6} className={classes.mainGridItem}>
						<Card elevation={0} className={classes.smallPadding}>
							<CardContent>
								<Grid container justifyContent="space-between" spacing={4}>
									<Grid item xs={12}>
										<UnderlinedTitle
											variant="h4"
											color="info"
											body="Login with your account"
											useCaps
										/>
									</Grid>
									<Grid item xs={12}>
										<FormControl fullWidth color="info">
											<TextField
												color="info"
												label="Email"
												variant="standard"
												name="email"
												onChange={handleChange}
											/>
										</FormControl>
									</Grid>
									<Grid item xs={12}>
										<FormControl fullWidth color="info">
											<TextField
												color="info"
												label="Password"
												variant="standard"
												name="password"
												onChange={handleChange}
											/>
										</FormControl>
									</Grid>
								</Grid>
							</CardContent>
							<CardActions>
								<Grid justifyContent="space-between" container spacing={3}>
									<Grid item xs={12} md={6} xl={4}>
										<Button
											size="large"
											color="success"
											variant="contained"
											disableElevation
											fullWidth
											onClick={callLogin}
										>
											Login
										</Button>
									</Grid>
									<Grid item xs={12} md={6}>
										<NextLink href={urlKeyWords.register} passHref>
											<Button color="info" size="large" component="a">
												{"don't have an account? register"}
											</Button>
										</NextLink>
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
									color="success"
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
								<NextLink href={urlKeyWords.register} passHref>
									<Button size="large" color="info" component="a">
										{"don't have an account? register"}
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

export default LoginPage
