import { FC, KeyboardEvent, MouseEvent, useState } from "react"

import NextLink from "next/link"

import {
	AppBar,
	Link,
	Toolbar,
	Typography,
	Button,
	IconButton,
	ListItem,
	ListItemIcon,
	ListItemText,
	SwipeableDrawer,
	Divider,
	Badge,
} from "@mui/material"
import MenuIcon from "@mui/icons-material/Menu"
import { useStyles } from "./styles"
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart"
import LoginIcon from "@mui/icons-material/Login"

import { useSelector } from "react-redux"
import { RootState } from "../../redux/store"

import { urlKeyWords } from "../../misc/staticData"

const Navbar: FC = () => {
	const classes = useStyles()

	const { items } = useSelector((state: RootState) => state.items)

	const [open, setOpen] = useState(false)

	const toggleDrawer = (open: boolean) => (event: KeyboardEvent | MouseEvent) => {
		if (
			event &&
			event.type === "keydown" &&
			((event as KeyboardEvent).key === "Tab" || (event as KeyboardEvent).key === "Shift")
		) {
			return
		}

		setOpen(open)
	}

	return (
		<>
			<AppBar position="fixed" className={classes.navbar}>
				<Toolbar>
					<NextLink href="/" passHref>
						<Link className={classes.noDecoration}>
							<Typography className={classes.brand}>Amazoness</Typography>
						</Link>
					</NextLink>
					<div className={classes.grow} />
					<div className={classes.navbarBtn}>
						<NextLink href={urlKeyWords.cart} passHref>
							<Button
								className={classes.navBtn}
								color="inherit"
								endIcon={
									<Badge badgeContent={items.length} color="info">
										<ShoppingCartIcon />
									</Badge>
								}
							>
								Shopping Cart
							</Button>
						</NextLink>
						<NextLink href={urlKeyWords.login} passHref>
							<Button color="inherit" endIcon={<LoginIcon />}>
								Login
							</Button>
						</NextLink>
					</div>
					<IconButton
						size="large"
						edge="start"
						color="inherit"
						aria-label="menu"
						className={classes.mobileBtn}
						onClick={toggleDrawer(true)}
					>
						<MenuIcon />
					</IconButton>
				</Toolbar>
			</AppBar>
			<SwipeableDrawer
				anchor="right"
				open={open}
				onClose={toggleDrawer(false)}
				onOpen={toggleDrawer(true)}
			>
				<NextLink href={urlKeyWords.cart} passHref>
					<ListItem button key="SHOPPING CART" className={classes.drawerBtn}>
						<ListItemIcon>
							<Badge badgeContent={items.length} color="info">
								<ShoppingCartIcon />
							</Badge>
						</ListItemIcon>
						<ListItemText primary="SHOPPING CART" />
					</ListItem>
				</NextLink>
				<Divider />
				<NextLink href={urlKeyWords.login} passHref>
					<ListItem button key="LOGIN" className={classes.drawerBtn}>
						<ListItemIcon>
							<LoginIcon />
						</ListItemIcon>
						<ListItemText primary="LOGIN" />
					</ListItem>
				</NextLink>
			</SwipeableDrawer>
		</>
	)
}

export default Navbar
