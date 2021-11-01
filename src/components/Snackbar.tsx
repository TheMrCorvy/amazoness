import React, { FC, useState } from "react"
import { Snackbar as MuiSnackbar } from "@mui/material"
import MuiAlert, { AlertProps } from "@mui/material/Alert"

const Snackbar: FC<Props> = (props) => {
	const { message, open, duration, verticalPosition, horizontalPosition, color } = props

	//this part is necessary to autohide the snackbar
	const [isOpen, setIsOpen] = useState<boolean>(open)

	const handleClose = () => {
		setIsOpen(false)
	}

	return (
		<MuiSnackbar
			anchorOrigin={{
				vertical: verticalPosition ? verticalPosition : "bottom",
				horizontal: horizontalPosition ? horizontalPosition : "left",
			}}
			open={isOpen}
			autoHideDuration={duration && duration > 1000 ? duration : 6000}
			message={message}
			onClose={handleClose}
		>
			<Alert severity={color ? color : "info"}>{message}</Alert>
		</MuiSnackbar>
	)
}

const Alert = React.forwardRef<HTMLDivElement, AlertProps>(function Alert(props, ref) {
	return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />
})

type Props = {
	open: boolean
	message: string
	color?: "error" | "info" | "success" | "warning"
	duration?: number
	verticalPosition?: "bottom" | "top"
	horizontalPosition?: "center" | "left" | "right"
}

export default Snackbar
