import * as React from "react"
import { alpha, styled } from "@mui/material/styles"
import Slider, { SliderProps } from "@mui/material/Slider"
import FormControlLabel from "@mui/material/FormControlLabel"
import Switch from "@mui/material/Switch"

interface StyledSliderProps extends SliderProps {
	success?: boolean
}

const StyledSlider = styled(Slider, {
	// acá entonces evalua si existe la prop llamada success, y si es así, la pasa
	shouldForwardProp: (prop) => prop !== "success",
	// acá se ponen todas las props que se le pasan al componente (o mas bien que van a ser usadas en los estilos)
})<StyledSliderProps>(({ success, theme }) => ({
	width: 300,
	// si success = truthy, aplica los siguientes estilos
	...(success && {
		color: theme.palette.success.main,
		"& .MuiSlider-thumb": {
			[`&:hover, &.Mui-focusVisible`]: {
				boxShadow: `0px 0px 0px 8px ${alpha(theme.palette.success.main, 0.16)}`,
			},
			[`&.Mui-active`]: {
				boxShadow: `0px 0px 0px 14px ${alpha(theme.palette.success.main, 0.16)}`,
			},
		},
	}),
}))

export default function DynamicCSS() {
	const [success, setSuccess] = React.useState(false)

	const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
		setSuccess(event.target.checked)
	}

	// no estoy del todo 100% seguro, pero el componente customizado recibe igualmente las demás props que se le pasen

	return (
		<React.Fragment>
			<FormControlLabel
				control={
					<Switch
						checked={success}
						onChange={handleChange}
						color="primary"
						value="dynamic-class-name"
					/>
				}
				label="Success"
			/>

			<StyledSlider success={success} defaultValue={30} sx={{ mt: 1 }} />
		</React.Fragment>
	)
}
