import { FC, useState, useEffect } from "react"

import { useRouter } from "next/router"
import NextLink from "next/link"

import { Typography, Grid, Card, Breadcrumbs, Link, Button } from "@mui/material"
import { useSlug } from "./utils"

const BreadCrumbs: FC<Props> = ({ title, steps }) => {
	const router = useRouter()
	const slug = useSlug

	const [urlSteps, setUrlSteps] = useState<string[][]>([["", ""]])

	useEffect(() => {
		let getSteps = Object.entries(steps)

		setUrlSteps(getSteps)
	}, [steps])

	return (
		<Card
			sx={{
				padding: "16px",
				background: (theme) => theme.palette.info.main,
			}}
			elevation={0}
		>
			<Grid container textAlign="center" spacing={3}>
				<Grid
					item
					xs={12}
					sm={10}
					sx={{
						display: "flex",
						alignItems: "center",
					}}
				>
					<Breadcrumbs sx={{ color: "white" }}>
						<NextLink href="/" passHref>
							<Link
								color="inherit"
								underline="hover"
								sx={{ textTransform: "capitalize" }}
							>
								Home
							</Link>
						</NextLink>
						{urlSteps.map((step: string[], index: number) => (
							<NextLink key={index} href={slug(step[1])} passHref>
								<Link
									color="inherit"
									underline="hover"
									sx={{ textTransform: "capitalize" }}
								>
									{step[0]}
								</Link>
							</NextLink>
						))}
						<Typography
							sx={{
								color: (theme) => theme.palette.grey[200],
								fontWeight: "bold",
								textTransform: "capitalize",
							}}
						>
							{title}
						</Typography>
					</Breadcrumbs>
				</Grid>
				<Grid item xs={12} sm={2}>
					<Button onClick={() => router.back()} sx={{ color: "#fff" }}>
						Go Back
					</Button>
				</Grid>
			</Grid>
		</Card>
	)
}

interface Props {
	title: string
	steps: {
		[key: string]: string
	}
}

export default BreadCrumbs
