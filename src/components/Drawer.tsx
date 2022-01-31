import { FC, ReactEventHandler } from "react"
import NextLink from "next/link"

import {
	ListItem,
	ListItemIcon,
	ListItemText,
	SwipeableDrawer,
	Divider,
	Badge,
} from "@mui/material"

import ShoppingCartIcon from "@mui/icons-material/ShoppingCart"
import LoginIcon from "@mui/icons-material/Login"
import LogoutIcon from "@mui/icons-material/Logout"

import { urlKeyWords } from "../misc/config"

const Drawer: FC<Props> = ({ open, amountOfItems, user, toggleDrawer, handleClose }) => {
	return (
		<SwipeableDrawer
			anchor="right"
			open={open}
			onClose={toggleDrawer(false)}
			onOpen={toggleDrawer(true)}
		>
			<NextLink href={urlKeyWords.cart} passHref>
				<ListItem
					button
					key="SHOPPING CART"
					onClick={() => handleClose("drawer")}
					sx={{
						padding: "2rem",
						textTransform: "uppercase",
					}}
				>
					<ListItemIcon>
						<Badge badgeContent={amountOfItems} color="info">
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
						sx={{
							padding: "2rem",
							textTransform: "uppercase",
						}}
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
						sx={{
							padding: "2rem",
							textTransform: "uppercase",
						}}
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
						sx={{
							padding: "2rem",
							textTransform: "uppercase",
						}}
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
						sx={{
							padding: "2rem",
							textTransform: "uppercase",
						}}
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
	)
}

interface Props {
	open: boolean
	amountOfItems: number
	user: null
	toggleDrawer: (arg: boolean) => ReactEventHandler<{}>
	handleClose: (target: "menu" | "drawer", action?: string) => void
}

export default Drawer
