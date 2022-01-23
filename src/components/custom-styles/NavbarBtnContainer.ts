import { styled } from "@mui/material/styles"

const NavbarBtnContainer = styled("div")(({ theme }) => ({
	display: "block",
	[theme.breakpoints.down("md")]: {
		display: "none",
	},
}))

export default NavbarBtnContainer
