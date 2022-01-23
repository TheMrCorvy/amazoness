import { styled } from "@mui/material/styles"
import Typography, { TypographyProps } from "@mui/material/Typography"

interface StyledTypographyProps extends TypographyProps {
	textColor?: "primary" | "secondary" | "error" | "warning" | "info" | "success"
	textAlign?: "left" | "right" | "center" | "end" | "start" | "unset"
	fontWeight?: "bold" | "inherit" | "lighter" | "unset"
	textTransform?: "capitalize"
}

const StyledText = styled(Typography)<StyledTypographyProps>(
	({ textColor, textAlign, fontWeight, textTransform, theme }) => ({
		...(textColor && {
			color: theme.palette[textColor].light,
		}),
		textAlign,
		fontWeight,
		textTransform,
	})
)

export default StyledText
