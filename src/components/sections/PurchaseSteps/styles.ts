import { createStyles, makeStyles } from "@mui/styles"
import { Theme } from "@mui/material/styles"

const useStyles = makeStyles((theme: Theme) =>
	createStyles({
		secondaryCard: {
			width: "100%",
			minHeight: "65vh",
		},
		textCenter: {
			textAlign: "center",
			width: "100%",
		},
	})
)

export default useStyles
