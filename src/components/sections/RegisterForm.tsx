import { FC, useState } from "react"
import NextLink from "next/link"
import { useRouter } from "next/router"

import { Button, Card, CardContent, Grid, CardActions } from "@mui/material"

import { useApi } from "../utils"
import { Req, Res } from "../../misc/types"
import { urlKeyWords } from "../../misc/config"

import { useForm } from "react-hook-form"

import { useDispatch } from "react-redux"
import { ReduxUser } from "../../redux/types"
import { login } from "../../redux/actions/userActions"

import ValidatedInput from "../ValidatedInput"
import UnderlinedTitle from "../UnderlinedTitle"

const RegisterForm: FC = () => {
	const {
		handleSubmit,
		control,
		formState: { errors },
		getValues,
	} = useForm()

	const callApi = useApi
	const dispatch = useDispatch()
	const router = useRouter()

	// const [passwordmessage, setPasswordMessage] = useState("")

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
	 * given as a param (confirmPassword value) is the same as the password's input value
	 *
	 * if you wnated give as valid the case when the two values are different, change === to !==
	 */
	const validatePassword = (value: FormData) => {
		return value === getValues().password || "Passwords do not match."
	}
	return (
		<Card elevation={0} sx={{ padding: "0.5rem" }}>
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
										pattern: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i,
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
										validate: (value) => validatePassword(value),
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
	)
}

interface FormData {
	name: string
	password: string
	confirmerPassword: string
	email: string
}

export default RegisterForm
