import { FC, ReactChild } from "react"

import { Container, Typography, Backdrop, CircularProgress } from "@mui/material"

import { useSelector } from "react-redux"
import { RootState } from "../redux/store"

import Navbar from "./Navbar"
import Snackbar from "./Snackbar"

const Layout: FC<Props> = ({ children }) => {
	const { loading, error } = useSelector((state: RootState) => state.loading)

	return (
		<>
			{loading && (
				<Backdrop
					sx={{ color: "#fff", zIndex: (theme) => theme.zIndex.drawer + 1 }}
					open={true}
				>
					<CircularProgress color="inherit" />
				</Backdrop>
			)}

			{error && (
				<Snackbar
					message={error}
					open={true}
					color="error"
					duration={25000}
					horizontalPosition="center"
				/>
			)}
			<Navbar />

			<Container
				maxWidth="xl"
				sx={{
					paddingTop: "7rem",
					paddingBottom: "7rem",
					minHeight: "80vh",
				}}
			>
				{children}
			</Container>

			<footer
				style={{
					textAlign: "center",
				}}
			>
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
