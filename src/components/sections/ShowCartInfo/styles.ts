import { createStyles, makeStyles } from "@mui/styles"
import { Theme } from "@mui/material/styles"

const useStyles = makeStyles((theme: Theme) =>
	createStyles({
		mainCard: {
			width: "100%",
			height: "65vh",
			overflowY: "scroll",
		},
		mainCardAlter: {
			width: "100%",
			height: "65vh",
			overflowY: "scroll",
			display: "flex",
			justifyContent: "center",
			alignItems: "center",
			verticalAlign: "center",
			textAlign: "center",
		},
		secondaryCard: {
			width: "100%",
			minHeight: "65vh",
		},
		secondaryCardAlter: {
			width: "100%",
			minHeight: "65vh",
			display: "flex",
			justifyContent: "space-around",
			flexDirection: "column",
			alignItems: "center",
			textAlign: "center",
		},
	})
)

export default useStyles
