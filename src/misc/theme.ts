import { createTheme } from "@mui/material/styles"

const theme = createTheme({
	palette: {
		primary: {
			light: "#fcc277",
			main: "#FEBD69",
			dark: "#edb366",
		},
		secondary: {
			light: "#ba68c8",
			main: "#208080",
			dark: "#7b1fa2",
		},
		error: {
			light: "#ef5350",
			main: "#d32f2f",
			dark: "#c62828",
		},
		warning: {
			light: "#ff9800",
			main: "#ED6C02",
			dark: "#e65100",
		},
		info: {
			light: "#42a5f5",
			main: "#1976d2",
			dark: "#1565c0",
		},
		success: {
			light: "#4caf50",
			main: "#2e7d32",
			dark: "#1b5e20",
		},
		grey: {
			/**
			 * I'm setting these colors here, so I can make use of the default light grey colors, and at the same time,
			 * use Amazon's dark colors
			 */
			A100: "#37475A",
			A200: "#232F3E",
			A400: "#131A22",
		},
		background: {
			default: "#eeeeee",
			paper: "#fff",
		},
	},
	shape: {
		borderRadius: 15,
	},
	typography: {
		h1: {
			fontSize: "1.6rem",
			fontWeight: 400,
			margin: "1rem 0",
		},
		h2: {
			fontSize: "1.4rem",
			fontWeight: 400,
			margin: "1rem 0",
		},
	},
})

export default theme
