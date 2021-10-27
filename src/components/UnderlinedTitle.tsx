import { FC } from "react"

import { Divider, Typography } from "@mui/material"
import { Theme } from "@mui/material/styles"

const UnderlinedTitle: FC<Props> = ({ variant, bold, body, color, useCaps }) => {
	return (
		<Typography
			variant={variant}
			sx={{
				fontWeight: bold ? "bold" : "normal",
				textTransform: useCaps ? "capitalize" : "initial",
			}}
		>
			{body}
			<br />
			<Divider
				sx={{
					height: 3,
					width: "10%",
					borderRadius: 10,
					border: "none",
					backgroundColor: (theme: Theme) => theme.palette[color].light,
				}}
			/>
		</Typography>
	)
}

interface Props {
	variant: "h1" | "h2" | "h3" | "h4" | "h5" | "h6" | "subtitle1" | "subtitle2"
	body: string
	color: "primary" | "secondary" | "error" | "info" | "success" | "warning"
	bold?: boolean
	useCaps?: boolean
}

export default UnderlinedTitle
