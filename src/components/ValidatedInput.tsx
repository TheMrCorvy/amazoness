import { FC } from "react"

import { TextField, FormControl } from "@mui/material"
import { Theme } from "@mui/material/styles"
import { SxProps } from "@mui/system"

import { Controller } from "react-hook-form"

const ValidatedInput: FC<Props> = (props) => {
	const { input, controller } = props

	const helperText = () => {
		if (!controller.errors[input.name]) return ""

		switch (controller.errors[input.name].type) {
			case "pattern":
				return `The field ${input.label} doesn't have a valid value.`

			case "minLength":
				return `The field ${input.label} must contain at least ${controller.rules.minLength} characters.`

			case "maxLength":
				return `The field ${input.label} must not contain more than ${controller.rules.maxLength} characters.`

			case "required":
				return `The field ${input.label} is required.`

			case "validate":
				return controller.validationMessage

			default:
				return ""
		}
	}

	return (
		<Controller
			name={input.name}
			control={controller.control}
			defaultValue={controller.defaultValue ? controller.defaultValue : ""}
			rules={controller.rules}
			render={({ field }) => (
				<FormControl fullWidth color={input.color ? input.color : "primary"}>
					<TextField
						color={input.color ? input.color : "primary"}
						label={input.label}
						sx={input.sx}
						variant={input.variant ? input.variant : "standard"}
						error={Boolean(controller.errors[input.name])}
						helperText={helperText()}
						id={input.id}
						type={input.type}
						{...field}
					/>
				</FormControl>
			)}
		/>
	)
}

interface Props {
	input: {
		name: string
		label: string
		type: "email" | "text" | "password" | "number" | "file"
		disabled?: boolean
		variant?: "outlined" | "filled" | "standard"
		color?: "info" | "primary" | "error" | "success" | "warning"
		sx?: SxProps<Theme>
		id?: string
	}
	controller: {
		rules: {
			required: boolean
			minLength?: number
			maxLength?: number
			pattern?: RegExp
			validate?: (value: any) => string | true
		}
		defaultValue?: number | string
		errors: any
		control: any
		validationMessage?: string
	}
}

export default ValidatedInput
