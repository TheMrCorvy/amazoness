import { FC } from "react"
import NextLink from "next/link"

import { Button, Card, CardContent, Grid, Typography } from "@mui/material"
import useStyles from "../styles/pages/register"

import UnderlinedTitle from "../components/UnderlinedTitle"
import BreadCrumbs from "../components/BreadCrumbs"
import RegisterForm from "../components/sections/RegisterForm"

import { appName, urlKeyWords } from "../misc/config"

const RegisterPage: FC = () => {
	const classes = useStyles()

	return (
		<>
			<BreadCrumbs title="Register" steps={{}} />
			<div className={classes.mainBgImage}>
				<Grid container justifyContent="center" className={classes.mainGridContainer}>
					<Grid item xs={12} md={6} className={classes.mainGridItem}>
						<RegisterForm />
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
