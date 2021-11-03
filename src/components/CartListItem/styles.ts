import { createStyles, makeStyles } from "@mui/styles"
import { Theme } from "@mui/material/styles"

export const useStyles = makeStyles((theme: Theme) =>
	createStyles({
		textGreen: {
			color: theme.palette.success.light,
		},
		marginTop1: {
			marginTop: "1rem",
		},
		avatar: {
			width: 56,
			height: 56,
			marginRight: 2,
		},
		selectInput: {
			borderRadius: 3,
			textTransform: "capitalize",
		},
		textCenter: {
			display: "flex",
			alignItems: "center",
		},
		divider: {
			maxWidth: "95%",
			marginLeft: "2.5%",
		},
	})
)
