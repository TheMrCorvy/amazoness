import { FC, ReactEventHandler } from "react"

import { styled } from "@mui/material/styles"
import IconButton, { IconButtonProps } from "@mui/material/IconButton"

import MenuIcon from "@mui/icons-material/Menu"

const HamburgerBtn: FC<Props> = ({ toggleDrawer }) => {
	return (
		<Root
			size="large"
			edge="start"
			color="inherit"
			aria-label="menu"
			onClick={toggleDrawer(true)}
		>
			<MenuIcon />
		</Root>
	)
}

interface Props {
	toggleDrawer: (arg: boolean) => ReactEventHandler<{}>
}

export default HamburgerBtn

const Root = styled(IconButton)<IconButtonProps>(({ theme }) => ({
	display: "none",
	color: "white",
	paddingLeft: "8rem",
	[theme.breakpoints.down("md")]: {
		display: "block",
	},
}))
