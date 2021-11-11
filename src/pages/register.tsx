import { FC, useState } from "react"
import NextLink from "next/link"
import { useRouter } from "next/router"

import { Button, Card, CardContent, Grid, Typography, CardActions } from "@mui/material"
import useStyles from "../styles/pages/register"

import UnderlinedTitle from "../components/UnderlinedTitle"
import BreadCrumbs from "../components/BreadCrumbs"
import ValidatedInput from "../components/ValidatedInput"

import { appName, urlKeyWords } from "../misc/config"
import { useApi } from "../components/utils"
import { Req, Res } from "../misc/types"

import { useForm } from "react-hook-form"

import { useDispatch } from "react-redux"
import { ReduxUser } from "../redux/types"
import { login } from "../redux/actions/userActions"

const RegisterPage: FC = () => {
	const {
		handleSubmit,
		control,
		formState: { errors },
		getValues,
	} = useForm()

	const callApi = useApi
	const classes = useStyles()
	const dispatch = useDispatch()
	const router = useRouter()

	const [passwordmessage, setPasswordMessage] = useState("")

	const onSubmit = (formData: FormData) => {
		const request: Req = {
			endpoint: "/users/register",
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

	/**
	 * Here we have to check if passwords are the same.
	 *
	 * In order to do that, we have to pass this function to the "confirmPassword" input, asking the function to check if the value
	 * given as a param (the confirmPassword value) is the same as the password input value
	 *
	 * if you wnated give as valid the case when the two values are different, change === to !==
	 */
	const validatePassword = (value: FormData) => {
		const isValid = value === getValues().password || "Passwords do not match."

		if (typeof isValid === "string") {
			setPasswordMessage(isValid)
		} else {
			setPasswordMessage("")
		}

		return isValid
	}

	return (
		<>
			<BreadCrumbs title="Register" steps={{}} />
			<div className={classes.mainBgImage}>
				<Grid container justifyContent="center" className={classes.mainGridContainer}>
					<Grid item xs={12} md={6} className={classes.mainGridItem}>
						<Card elevation={0} className={classes.smallPadding}>
							<form onSubmit={handleSubmit(onSubmit)}>
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
											<ValidatedInput
												input={{
													name: "name",
													label: "Name",
													color: "info",
													type: "text",
												}}
												controller={{
													rules: {
														required: true,
														minLength: 3,
														maxLength: 190,
													},
													control,
													errors,
												}}
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
										<Grid item xs={12}>
											<ValidatedInput
												input={{
													name: "confirmPassword",
													label: "Confirm Password",
													color: "info",
													type: "password",
												}}
												controller={{
													rules: {
														required: true,
														minLength: 8,
														maxLength: 190,
														validate: (value) =>
															validatePassword(value),
													},
													control,
													errors,
													validationMessage: passwordmessage,
												}}
											/>
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
												type="submit"
											>
												register
											</Button>
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

interface FormData {
	name: string
	password: string
	confirmerPassword: string
	email: string
}

export default RegisterPage
