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
		brand: {
			fontWeight: "bold",
			fontSize: "1.5rem",
		},
	})
)
