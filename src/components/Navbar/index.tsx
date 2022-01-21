import { FC, KeyboardEvent, MouseEvent, useState } from "react"

import NextLink from "next/link"
import { useRouter } from "next/router"

import { AppBar, Link, Toolbar, Typography, Button, Badge, Menu, MenuItem } from "@mui/material"

import ShoppingCartIcon from "@mui/icons-material/ShoppingCart"
import LoginIcon from "@mui/icons-material/Login"
import LogoutIcon from "@mui/icons-material/Logout"

import DivFlexGrow from "../custom-components/DivFlexGrow"
import NavbarBtnContainer from "../custom-components/NavbarBtnContainer"
import HamburgerBtn from "../HamburgerBtn"

import { useSelector, useDispatch } from "react-redux"
import { RootState } from "../../redux/store"
import { logout } from "../../redux/actions/userActions"

import { urlKeyWords, appName } from "../../misc/config"
import { useApi } from "../utils"
import { Req, Res } from "../../misc/types"
import Drawer from "../Drawer"

const Navbar: FC = () => {
	const dispatch = useDispatch()
	const callApi = useApi
	const router = useRouter()

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

		if (action === "logout" && user) {
			const request: Req = {
				method: "GET",
				endpoint: "/users/logout",
				token: user.accessToken,
			}

			callApi(request, dispatch).then((res: Res) => {
				if (res.status === 200) {
					dispatch(logout())
					router.push("/")
				}
			})
		}
	}

	return (
		<>
			<AppBar
				position="fixed"
				sx={{
					backgroundColor: (theme) => theme.palette.grey.A200,
					paddingRight: "1rem",
					"& a": {
						color: "#fff",
						marginLeft: "1rem",
					},
				}}
			>
				<Toolbar>
					<NextLink href="/" passHref>
						<Link
							sx={{
								textDecoration: "none",
							}}
						>
							<Typography
								sx={{
									fontWeight: "bold",
									fontSize: "1.5rem",
								}}
							>
								{appName}
							</Typography>
						</Link>
					</NextLink>
					<DivFlexGrow />
					<NavbarBtnContainer>
						<NextLink href={urlKeyWords.cart} passHref>
							<Button
								sx={{
									marginRight: 30,
								}}
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
					</NavbarBtnContainer>
					<HamburgerBtn toggleDrawer={toggleDrawer} />
				</Toolbar>
			</AppBar>
			<Drawer
				user={user}
				toggleDrawer={toggleDrawer}
				open={open.drawer}
				handleClose={handleClose}
				amountOfItems={items.length}
			/>
		</>
	)
}

export default Navbar
