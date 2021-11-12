import { FC, useState } from "react"

import { CardContent, Stepper, Step, StepLabel, Grid } from "@mui/material"
import useStyles from "./styles"

import ShippingForm from "../ShippingForm"

const PurchaseSteps: FC = () => {
	const [activeStep, setActiveStep] = useState(0)

	const classes = useStyles()

	const renderSteps = () => {
		switch (activeStep) {
			case 0:
				return <ShippingForm onSubmit={handleSubmit} />
			case 1:
				return null
			case 2:
				return null

			default:
				return null
		}
	}

	const handleSubmit = () => {
		setActiveStep(activeStep + 1)
	}

	return (
		<CardContent className={classes.secondaryCard}>
			<Grid container spacing={4} justifyContent="space-between">
				<Grid item xs={12}>
					<Stepper color="info" alternativeLabel activeStep={activeStep}>
						<Step color="info" completed={activeStep > 0}>
							<StepLabel>Select Shipping Options</StepLabel>
						</Step>
						<Step completed={activeStep > 1}>
							<StepLabel>Billing Info</StepLabel>
						</Step>
						<Step completed={activeStep > 2}>
							<StepLabel>Purchase</StepLabel>
						</Step>
					</Stepper>
				</Grid>
				{renderSteps()}
			</Grid>
		</CardContent>
	)
}

export default PurchaseSteps
