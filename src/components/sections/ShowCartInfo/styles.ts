import { createStyles, makeStyles } from "@mui/styles"
import { Theme } from "@mui/material/styles"

const useStyles = makeStyles((theme: Theme) =>
	createStyles({
		mainCard: {
			width: "100%",
			bgcolor: "background.paper",
			height: "65vh",
			overflowY: "scroll",
		},
	})
)

export default useStyles
