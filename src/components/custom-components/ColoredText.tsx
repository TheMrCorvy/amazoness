import { styled } from "@mui/material/styles"
import Typography, { TypographyProps } from "@mui/material/Typography"

interface StyledTypographyProps extends TypographyProps {
	textColor: "primary" | "secondary" | "error" | "warning" | "info" | "success"
}

const ColoredText = styled(Typography, {
	shouldForwardProp: (prop) => prop !== "color",
})<StyledTypographyProps>(({ textColor, theme }) => ({
	color: theme.palette[textColor].light,
}))

export default ColoredText
