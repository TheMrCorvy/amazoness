import { FC, ReactChild } from "react"

import Head from "next/head"

import { AppBar, Container, Toolbar, Typography } from "@mui/material"

import { useStyles } from "./styles"

const Layout: FC<Props> = ({ children }) => {
	const classes = useStyles()

	return (
		<>
			<Head>
				<title>Amazoness</title>
			</Head>

			<AppBar position="sticky" className={classes.navbar}>
				<Toolbar>
					<Typography>Amazoness</Typography>
				</Toolbar>
			</AppBar>

			<Container maxWidth="xl" className={classes.mainContainer}>
				{children}
			</Container>

			<footer className={classes.footer}>
				<Typography variant="body1" color="warning">
					Amazoness 2021 All rights recerved.
				</Typography>
			</footer>
		</>
	)
}

export default Layout

interface Props {
	children: ReactChild
}
