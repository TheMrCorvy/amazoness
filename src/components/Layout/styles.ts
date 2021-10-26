import { makeStyles } from "@mui/styles"

export const useStyles = makeStyles({
	navbar: {
		backgroundColor: "#203040",
		"& a": {
			color: "#fff",
			marginLeft: 10,
		},
	},
	mainContainer: {
		minHeight: "80vh",
	},
	footer: {
		textAlign: "center",
	},
})
