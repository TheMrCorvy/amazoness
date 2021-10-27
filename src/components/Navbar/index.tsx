import { FC } from "react"

import { AppBar, Toolbar, Typography } from "@mui/material"

import { useStyles } from "./styles"

const Navbar: FC = () => {
	const classes = useStyles()

	return (
		<AppBar position="fixed" className={classes.navbar}>
			<Toolbar>
				<Typography color="white" className={classes.brand}>
					Amazoness
				</Typography>
			</Toolbar>
		</AppBar>
	)
}

export default Navbar
