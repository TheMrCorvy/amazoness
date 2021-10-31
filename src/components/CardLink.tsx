import { FC } from "react"

import NextLink from "next/link"

import { ButtonBase, IconButton, Card, Link } from "@mui/material"
import DoubleArrowIcon from "@mui/icons-material/DoubleArrow"

const CardLink: FC<Props> = ({ innerText, url, color }) => {
	return (
		<NextLink href={url} passHref>
			<ButtonBase sx={{ width: "100%", borderRadius: 1 }}>
				<Card
					elevation={0}
					sx={{
						padding: "16px",
						paddingLeft: "24px",
						paddingRight: "24px",
						color: "#fff",
						background: (theme) =>
							color === "grey" ? theme.palette.grey.A100 : theme.palette[color].main,
						width: "100%",
					}}
				>
					<IconButton color="inherit">
						<DoubleArrowIcon />
					</IconButton>
					<Link color="inherit" underline="hover" component="span">
						{innerText}
					</Link>
					<IconButton color="inherit">
						<DoubleArrowIcon />
					</IconButton>
				</Card>
			</ButtonBase>
		</NextLink>
	)
}

interface Props {
	innerText: string
	url: string
	color: "success" | "primary" | "secondary" | "info" | "error" | "warning" | "grey"
}

export default CardLink
