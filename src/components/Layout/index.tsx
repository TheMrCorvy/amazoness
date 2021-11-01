import { FC, ReactChild } from "react"

import { Container, Typography, Backdrop, CircularProgress } from "@mui/material"

import { useSelector } from "react-redux"
import { RootState } from "../../redux/store"

import Navbar from "../Navbar"
import Snackbar from "../Snackbar"

import { useStyles } from "./styles"

const Layout: FC<Props> = ({ children }) => {
	const loading = useSelector((state: RootState) => state.loading)

	const classes = useStyles()

	return (
		<>
			{loading.loading && (
				<Backdrop
					sx={{ color: "#fff", zIndex: (theme) => theme.zIndex.drawer + 1 }}
					open={true}
				>
					<CircularProgress color="inherit" />
				</Backdrop>
			)}

			{loading.error && (
				<Snackbar
					message={loading.error}
					open={true}
					color="error"
					duration={25000}
					horizontalPosition="center"
				/>
			)}
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
