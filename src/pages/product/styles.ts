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
		card: {
			padding: "16px",
			paddingLeft: "24px",
			paddingRight: "24px",
			color: "#fff",
			background: theme.palette.warning.main,
			width: "100%",
		},
		card2: {
			padding: "16px",
			paddingLeft: "24px",
			paddingRight: "24px",
			color: "#fff",
			background: theme.palette.grey.A100,
			width: "100%",
		},
	})
)

export default useStyles
