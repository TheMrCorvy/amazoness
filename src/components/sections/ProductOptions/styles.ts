import { createStyles, makeStyles } from "@mui/styles"
import { Theme } from "@mui/material/styles"

const useStyles = makeStyles((theme: Theme) =>
	createStyles({
		textGreen: {
			color: theme.palette.success.light,
		},
		textInfo: {
			color: theme.palette.info.main,
		},
		textRight: {
			textAlign: "right",
		},
		marginTop: {
			marginTop: "2rem",
		},
	})
)

export default useStyles
