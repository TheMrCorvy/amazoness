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
	})
)
