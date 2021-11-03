import { createStyles, makeStyles } from "@mui/styles"
import { Theme } from "@mui/material/styles"

export const useStyles = makeStyles((theme: Theme) =>
	createStyles({
		navbar: {
			backgroundColor: theme.palette.grey.A200,
			paddingRight: "1rem",
			"& a": {
				color: "#fff",
				marginLeft: "1rem",
			},
		},
		brand: {
			fontWeight: "bold",
			fontSize: "1.5rem",
		},
		grow: {
			flexGrow: 1,
		},
		noDecoration: {
			textDecoration: "none",
		},
		navbarBtn: {
			display: "block",
			[theme.breakpoints.down("md")]: {
				display: "none",
			},
		},
		mobileBtn: {
			display: "none",
			color: "white",
			paddingLeft: "8rem",
			[theme.breakpoints.down("md")]: {
				display: "block",
			},
		},
		drawerBtn: {
			padding: "2rem",
		},
		navBtn: {
			marginRight: 30,
		},
	})
)
