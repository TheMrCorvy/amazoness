import { createStyles, makeStyles } from "@mui/styles"
import { Theme } from "@mui/material/styles"

const useStyles = makeStyles((theme: Theme) =>
	createStyles({
		marginTop: {
			marginTop: "2rem",
		},
		img: {
			borderRadius: 10,
		},
		textGreen: {
			color: theme.palette.success.light,
		},
		textInfo: {
			color: theme.palette.info.main,
		},

		textRight: {
			textAlign: "right",
		},
	})
)

export default useStyles
