import { Theme } from "@mui/material"
import { SxProps } from "@mui/system"

export const navbar: SxProps<Theme> = {
	backgroundColor: "#203040",
	"& a": {
		color: "#fff",
		marginLeft: 10,
	},
}
