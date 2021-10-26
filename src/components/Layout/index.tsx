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

				<link
					rel="stylesheet"
					href="https://fonts.googleapis.com/icon?family=Material+Icons"
				/>
				<link
					rel="stylesheet"
					href="https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&display=swap"
				/>
				<meta charSet="utf-8" />
				<meta httpEquiv="X-UA-Compatible" content="IE=edge" />

				<meta
					name="description"
					content="Visita la Tienda Online de Stallion Marroquinería"
				/>
				<meta name="keywords" content="Marroquineria Stallion" />

				{/* Google Fonts */}
				<link rel="preconnect" href="https://fonts.googleapis.com"></link>
				<link rel="preconnect" href="https://fonts.gstatic.com"></link>
				<link
					href="https://fonts.googleapis.com/css2?family=Roboto+Slab&display=swap"
					rel="stylesheet"
				></link>

				<meta name="viewport" content="initial-scale=1, width=device-width" />
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
