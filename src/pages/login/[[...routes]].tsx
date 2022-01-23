import { FC } from "react"
import NextLink from "next/link"

import { Button, Card, CardContent, Grid, Typography } from "@mui/material"

import UnderlinedTitle from "../../components/UnderlinedTitle"
import BreadCrumbs from "../../components/BreadCrumbs"

import { appName, urlKeyWords } from "../../misc/config"

import LoginForm from "../../components/sections/LoginForm"

const LoginPage: FC = () => {
	return (
		<>
			<BreadCrumbs title="Login" steps={{}} />
			<div className="main-bg-image">
				<Grid container justifyContent="center" className="main-grid-container">
					<Grid item xs={12} md={6} className="main-grid-item">
						<LoginForm />
					</Grid>
					<Grid item xs={12} md={6} className="main-grid-item">
						<Card elevation={0} className="glass-effect">
							<CardContent className="big-card-content">
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
									sx={{
										marginTop: "1rem",
									}}
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
