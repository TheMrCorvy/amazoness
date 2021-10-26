import { FC, ReactChild } from "react"

import Head from "next/head"

import { AppBar, Container, Toolbar, Typography } from "@mui/material"

import { navbar } from "./styles"

const Layout: FC<Props> = ({ children }) => {
	return (
		<>
			<Head>
				<title>Amazoness</title>
			</Head>

			<AppBar position="sticky" sx={navbar}>
				<Toolbar>
					<Typography>Amazoness</Typography>
				</Toolbar>
			</AppBar>

			<Container maxWidth="xl">{children}</Container>

			<footer>
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
