import { FC } from "react"

import { Card, CardActionArea, CardActions, CardContent, Skeleton } from "@mui/material"

const SkeletonProductCard: FC = () => {
	return (
		<Card elevation={0}>
			<CardActionArea>
				<Skeleton variant="rectangular" width={500} height={175} animation="wave" />
				<CardContent>
					<Skeleton variant="text" animation="wave" />
					<Skeleton variant="text" animation="wave" width={120} />
				</CardContent>
			</CardActionArea>
			<CardActions
				sx={{
					justifyContent: "space-between",
					paddingLeft: "1rem",
					paddingRight: "1rem",
				}}
			>
				<Skeleton variant="text" animation="wave" width={75} />
				<Skeleton variant="text" animation="wave" width={75} />
			</CardActions>
		</Card>
	)
}

export default SkeletonProductCard
