import { createStyles, makeStyles } from "@mui/styles"
import { Theme } from "@mui/material/styles"

export const useStyles = makeStyles((theme: Theme) =>
	createStyles({
		navbar: {
			backgroundColor: theme.palette.grey.A200,
			"& a": {
				color: "#fff",
				marginLeft: 10,
			},
		},
		mainContainer: {
			paddingTop: "5rem",
			minHeight: "80vh",
		},
		footer: {
			textAlign: "center",
		},
		brand: {
			fontWeight: "bold",
			fontSize: "1.5rem",
		},
	})
)
