import { FC } from "react"

import Head from "next/head"

import { AppBar, Container, Toolbar, Typography } from "@material-ui/core"

const Layout: FC = ({ children }) => {
	return (
		<>
			<Head>
				<title>Amazoness</title>
			</Head>
			<AppBar position="fixed">
				<Toolbar>
					<Typography>Amazoness</Typography>
				</Toolbar>
			</AppBar>

			<Container maxWidth="xl">{children}</Container>
		</>
	)
}

export default Layout
