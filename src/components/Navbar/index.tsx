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
	Menu,
	MenuItem,
} from "@mui/material"
import MenuIcon from "@mui/icons-material/Menu"
import { useStyles } from "./styles"
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart"
import LoginIcon from "@mui/icons-material/Login"
import LogoutIcon from "@mui/icons-material/Logout"

import { useSelector, useDispatch } from "react-redux"
import { RootState } from "../../redux/store"
import { logout } from "../../redux/actions/userActions"

import { urlKeyWords, appName } from "../../misc/config"

const Navbar: FC = () => {
	const classes = useStyles()
	const dispatch = useDispatch()

	const { items } = useSelector((state: RootState) => state.items)
	const { user } = useSelector((state: RootState) => state.user)

	const [open, setOpen] = useState({
		drawer: false,
		menu: false,
	})
	const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null)

	const toggleDrawer = (openDrawer: boolean) => (event: KeyboardEvent | MouseEvent) => {
		if (
			event &&
			event.type === "keydown" &&
			((event as KeyboardEvent).key === "Tab" || (event as KeyboardEvent).key === "Shift")
		) {
			return
		}

		setOpen({ ...open, drawer: openDrawer })
	}

	const handleClick = (event: React.MouseEvent<HTMLElement>) => {
		setAnchorEl(event.currentTarget)
		setOpen({ ...open, menu: true })
	}
	const handleClose = (target: "menu" | "drawer", action?: string) => {
		setAnchorEl(null)

		setOpen({ ...open, [target]: false })

		if (action === "logout") {
			dispatch(logout())
		}
	}

	return (
		<>
			<AppBar position="fixed" className={classes.navbar}>
				<Toolbar>
					<NextLink href="/" passHref>
						<Link className={classes.noDecoration}>
							<Typography className={classes.brand}>{appName}</Typography>
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
						{!user ? (
							<NextLink href={urlKeyWords.login} passHref>
								<Button color="inherit" endIcon={<LoginIcon />}>
									Login
								</Button>
							</NextLink>
						) : (
							<>
								<Button
									color="inherit"
									sx={{ color: "white" }}
									onClick={handleClick}
									endIcon={<LogoutIcon />}
								>
									{user.name}
								</Button>
								<Menu
									id="user-menu"
									aria-labelledby="user-menu"
									anchorEl={anchorEl}
									open={open.menu}
									onClose={() => handleClose("menu")}
									anchorOrigin={{
										vertical: "top",
										horizontal: "left",
									}}
									transformOrigin={{
										vertical: "top",
										horizontal: "left",
									}}
								>
									<MenuItem onClick={() => handleClose("menu", urlKeyWords.home)}>
										Profile
									</MenuItem>
									<MenuItem
										onClick={() => handleClose("menu", urlKeyWords.account)}
									>
										My account
									</MenuItem>
									<MenuItem onClick={() => handleClose("menu", "logout")}>
										Logout
									</MenuItem>
								</Menu>
							</>
						)}
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
				open={open.drawer}
				onClose={toggleDrawer(false)}
				onOpen={toggleDrawer(true)}
			>
				<NextLink href={urlKeyWords.cart} passHref>
					<ListItem
						button
						key="SHOPPING CART"
						onClick={() => handleClose("drawer")}
						className={classes.drawerBtn}
					>
						<ListItemIcon>
							<Badge badgeContent={items.length} color="info">
								<ShoppingCartIcon />
							</Badge>
						</ListItemIcon>
						<ListItemText primary="SHOPPING CART" />
					</ListItem>
				</NextLink>
				<Divider />
				{!user ? (
					<NextLink href={urlKeyWords.login} passHref>
						<ListItem
							button
							onClick={() => handleClose("drawer")}
							key="LOGIN"
							className={classes.drawerBtn}
						>
							<ListItemIcon>
								<LoginIcon />
							</ListItemIcon>
							<ListItemText primary="LOGIN" />
						</ListItem>
					</NextLink>
				) : (
					<>
						<ListItem
							button
							onClick={() => handleClose("drawer")}
							key="profile"
							className={classes.drawerBtn}
						>
							<ListItemIcon>
								<LogoutIcon />
							</ListItemIcon>
							<ListItemText primary="profile" />
						</ListItem>
						<Divider />
						<ListItem
							button
							onClick={() => handleClose("drawer")}
							key="account"
							className={classes.drawerBtn}
						>
							<ListItemIcon>
								<LogoutIcon />
							</ListItemIcon>
							<ListItemText primary="account" />
						</ListItem>
						<Divider />
						<ListItem
							button
							onClick={() => handleClose("drawer", "logout")}
							key="logout"
							className={classes.drawerBtn}
						>
							<ListItemIcon>
								<LogoutIcon />
							</ListItemIcon>
							<ListItemText primary="logout" />
						</ListItem>
						<Divider />
					</>
				)}
			</SwipeableDrawer>
		</>
	)
}

export default Navbar
