import { FC, useState, useEffect } from "react"
import Image from "next/image"

import { ButtonBase, Grid } from "@mui/material"

import { Product } from "../../misc/types"

import SimilarProducts from "../../components/sections/SimilarProducts"

const ProductImages: FC<Props> = ({ product, similarProducts, mainImg, updateMainImg }) => {
	const [imagesAreLoaded, setImagesAreLoaded] = useState(false)

	useEffect(() => {
		if (product.brand && !imagesAreLoaded) {
			setImagesAreLoaded(true)
		}
	}, [product, imagesAreLoaded])

	return (
		<Grid item xs={12} md={6}>
			<Grid container spacing={3}>
				<Grid item xs={12} md={9}>
					{imagesAreLoaded && (
						<div
							style={{
								borderRadius: 10,
								overflow: "hidden",
							}}
						>
							<Image
								src={mainImg}
								alt={product.name}
								height={640}
								width={640}
								layout="responsive"
								priority
							/>
						</div>
					)}
				</Grid>
				<Grid item xs={12} md={3}>
					<Grid container spacing={3}>
						{imagesAreLoaded && (
							<>
								{product.default.images.map((image, index) => (
									<Grid item xs={4} md={12} key={index}>
										<ButtonBase
											sx={{
												borderRadius: 1,
												overflow: "hidden",
											}}
											onClick={() => updateMainImg(image)}
										>
											<Image
												src={image}
												title={product.name}
												alt={product.name}
												width={150}
												height={150}
											/>
										</ButtonBase>
									</Grid>
								))}
							</>
						)}
					</Grid>
				</Grid>
				<SimilarProducts products={similarProducts} layoutOption={1} />
			</Grid>
		</Grid>
	)
}

interface Props {
	product: Product
	similarProducts: Product[]
	mainImg: string
	updateMainImg: (image: string) => void
}

export default ProductImages
