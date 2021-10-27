import { FC, ReactChild } from "react"

import { Container, Typography } from "@mui/material"

import Navbar from "../Navbar"

import { useStyles } from "./styles"

const Layout: FC<Props> = ({ children }) => {
	const classes = useStyles()

	return (
		<>
			<Navbar />

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

interface Props {
	children: ReactChild
}

export default Layout
