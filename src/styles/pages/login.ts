import { makeStyles } from "@mui/styles"

const useStyles = makeStyles({
	mainBgImage: {
		backgroundImage: 'url("/images/bg.png")',
		backgroundRepeat: "no-repeat",
		backgroundSize: "auto",
		width: "100%",
		minHeight: "80vh",
		borderRadius: 25,
	},
	mainGridContainer: {
		width: "100%",
		minHeight: "80vh",
		padding: "3vw",
		marginLeft: -2,
		display: "flex",
		verticalAlign: "center",
		justifyContent: "center",
		alignItems: "center",
	},
	mainGridItem: {
		height: "100%",
		display: "flex",
		verticalAlign: "center",
		alignItems: "center",
		justifyContent: "center",
	},
	smallPadding: {
		padding: "0.5rem",
	},
	glassEffect: {
		width: "100%",
		background: "rgba(255,255,255,0.2)",
		backdropFilter: "blur(40px)",
	},
	bigCardContent: {
		display: "flex",
		flexDirection: "column",
		justifyContent: "space-between",
		minHeight: "50vh",
	},
	marginTop: {
		marginTop: "1rem",
	},
})

export default useStyles
