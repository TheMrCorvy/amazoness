import { FC } from "react"

import NextLink from "next/link"

import { AppBar, Link, Toolbar, Typography, Button } from "@mui/material"

import { useStyles } from "./styles"

const Navbar: FC = () => {
	const classes = useStyles()

	return (
		<AppBar position="fixed" className={classes.navbar}>
			<Toolbar>
				<NextLink href="/" passHref>
					<Link sx={{ textDecoration: "none" }}>
						<Typography className={classes.brand}>Amazoness</Typography>
					</Link>
				</NextLink>
				<div className={classes.grow} />
				<NextLink href="/cart" passHref>
					<Button color="inherit">Cart Items</Button>
				</NextLink>
				<NextLink href="/login" passHref>
					<Button color="inherit">Login</Button>
				</NextLink>
			</Toolbar>
		</AppBar>
	)
}

export default Navbar
