import { FC, ChangeEvent, useState } from "react"

import { Grid, Switch, Typography } from "@mui/material"

import { useForm } from "react-hook-form"

import ValidatedInput from "../../ValidatedInput"

const ShippingForm: FC = () => {
	const [useShipping, setUseShipping] = useState(true)

	const {
		handleSubmit,
		control,
		formState: { errors },
	} = useForm()

	const handleShipping = (event: ChangeEvent<HTMLInputElement>) => {
		setUseShipping(event.target.checked)
	}
	return (
		<Grid item xs={12}>
			<form>
				<Grid container spacing={2}>
					<Grid item xs={12} sx={{ textAlign: "center" }}>
						<Typography>Send Purchase</Typography>
						<Switch
							checked={useShipping}
							onChange={handleShipping}
							color="info"
							inputProps={{ "aria-label": "send purchase" }}
						/>
					</Grid>
					<Grid item xs={12} lg={6}>
						<ValidatedInput
							input={{
								color: "info",
								variant: "outlined",
								type: "text",
								name: "streetOne",
								id: "streetOne",
								label: "Street One",
								disabled: !useShipping,
							}}
							controller={{
								rules: {
									required: true,
								},
								errors,
								control,
								defaultValue: "",
							}}
						/>
					</Grid>
					<Grid item xs={12} lg={6}>
						<ValidatedInput
							input={{
								color: "info",
								variant: "outlined",
								type: "text",
								name: "streetTwo",
								id: "streetTwo",
								label: "Street Two",
								disabled: !useShipping,
							}}
							controller={{
								rules: {
									required: true,
								},
								errors,
								control,
								defaultValue: "",
							}}
						/>
					</Grid>
				</Grid>
			</form>
		</Grid>
	)
}

export default ShippingForm
