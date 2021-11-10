import { FC } from "react"
import NextLink from "next/link"
import { useRouter } from "next/router"

import { Button, Card, CardContent, Grid, Typography, CardActions } from "@mui/material"
import useStyles from "../../styles/pages/login"

import UnderlinedTitle from "../../components/UnderlinedTitle"
import BreadCrumbs from "../../components/BreadCrumbs"
import ValidatedInput from "../../components/ValidatedInput"

import { useDispatch } from "react-redux"
import { login } from "../../redux/actions/userActions"
import { ReduxUser } from "../../redux/types"

import { appName, urlKeyWords } from "../../misc/config"
import { Req, Res } from "../../misc/types"
import { useApi } from "../../components/utils"

import { useForm } from "react-hook-form"

const LoginPage: FC = () => {
	const classes = useStyles()
	const callApi = useApi
	const dispatch = useDispatch()
	const router = useRouter()
	const {
		handleSubmit,
		control,
		formState: { errors },
	} = useForm()

	const callLogin = (formData: FormData) => {
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

				if (router.query.routes) {
					if (router.query.routes.length > 0) {
						const route: string = Array.isArray(router.query.routes)
							? router.query.routes.join("/")
							: router.query.routes

						router.push("/" + route)
					}
				} else {
					router.push(urlKeyWords.home)
				}
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
							<form onSubmit={handleSubmit(callLogin)}>
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
											<ValidatedInput
												input={{
													name: "email",
													label: "Email",
													color: "info",
													type: "email",
												}}
												controller={{
													rules: {
														required: true,
														minLength: 3,
														maxLength: 190,
														pattern:
															/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i,
													},
													control,
													errors,
												}}
											/>
										</Grid>
										<Grid item xs={12}>
											<ValidatedInput
												input={{
													name: "password",
													label: "Password",
													color: "info",
													type: "password",
												}}
												controller={{
													rules: {
														required: true,
														minLength: 8,
														maxLength: 190,
													},
													control,
													errors,
												}}
											/>
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
												type="submit"
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
							</form>
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

interface FormData {
	email: string
	password: string
}

export default LoginPage
