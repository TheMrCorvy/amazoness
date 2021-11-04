import { FC, useEffect, useState } from "react"

import { useRouter } from "next/router"
import Image from "next/image"
import NextLink from "next/link"

import {
	Button,
	ButtonBase,
	Container,
	Grid,
	IconButton,
	Typography,
	Rating,
	Link,
} from "@mui/material"
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder"
import useStyles from "../../styles/pages/product/[slug]"

import { useDispatch, useSelector } from "react-redux"
import { RootState } from "../../redux/store"
import { ReduxProduct } from "../../redux/types"
import { addToCart } from "../../redux/actions/shoppingCartActions"

import { urlKeyWords } from "../../misc/staticData"
import { useApi, usePriceFormatter, useSlug } from "../../components/utils"
import { Product, Req } from "../../misc/types"

import BreadCrumbs from "../../components/BreadCrumbs"
import CardLink from "../../components/CardLink"
import UnderlinedTitle from "../../components/UnderlinedTitle"
import SimilarProducts from "../../components/sections/SimilarProducts"
import ProductOptions from "../../components/sections/ProductOptions"

import { appName } from "../../misc/staticData"

const ProductPage: FC = () => {
	const dispatch = useDispatch()
	const { loading } = useSelector((state: RootState) => state.loading)

	const router = useRouter()
	const createSlug = useSlug
	const callApi = useApi
	const classes = useStyles()
	const formatPrice = usePriceFormatter

	const [product, setProduct] = useState<Product>(placeholder)
	const [mainImg, setMainImg] = useState("")
	const [similarProducts, setSimilarProducts] = useState<Product[]>([placeholder])
	const [imagesAreLoaded, setImagesAreLoaded] = useState(false)

	useEffect(() => {
		if (!router.isReady) return

		const { slug } = router.query

		const req: Req = {
			endpoint: "/products/find/" + slug,
			method: "GET",
		}

		callApi(req, dispatch).then((res) => {
			if (res.status !== 200) {
				router.push(urlKeyWords.productNotFound)

				return
			}

			setProduct(res.data.product)
			setSimilarProducts(res.data.similarProducts)

			document.title = res.data.product.name + " - " + appName
		})
	}, [router])

	useEffect(() => {
		if (product.brand && !imagesAreLoaded) {
			setImagesAreLoaded(true)
		}
	}, [product, imagesAreLoaded])

	const updateMainImg = (src: string) => setMainImg(src)

	const dispatchAddToCart = () => {
		const baggage: ReduxProduct = {
			...product,
			selectedOption: {
				name: "Default",
				title: "",
			},
			selectedAmount: 1,
			totalPrice: product.default.price,
		}

		dispatch(addToCart(baggage))
	}

	return (
		<Container maxWidth="lg">
			<Grid container justifyContent="space-around" spacing={6}>
				{!loading ? (
					<>
						<Grid item xs={12}>
							{product.category && (
								<BreadCrumbs
									title={product.name}
									steps={{
										[product.category]: "/" + createSlug(product.category),
									}}
								/>
							)}
						</Grid>
						<Grid item xs={12} md={6}>
							<Grid container spacing={3}>
								<Grid item xs={12} md={9}>
									{imagesAreLoaded && (
										<Image
											src={mainImg ? mainImg : product.default.images[0]}
											alt={product.name}
											height={640}
											width={640}
											layout="responsive"
											className={classes.img}
											priority
										/>
									)}
								</Grid>
								<Grid item xs={12} md={3}>
									<Grid container spacing={3}>
										{imagesAreLoaded && (
											<>
												{product.default.images.map((image, index) => (
													<Grid item xs={4} md={12} key={index}>
														<ButtonBase
															className={classes.img}
															onClick={() => updateMainImg(image)}
														>
															<Image
																src={image}
																title={product.name}
																alt={product.name}
																width={150}
																height={150}
																className={classes.img}
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
						<Grid item xs={12} md={6}>
							<Grid container spacing={4}>
								<Grid item xs={10}>
									<Typography variant="h1" sx={{ fontWeight: "bold" }}>
										{product.name}
									</Typography>
								</Grid>
								<Grid item xs={2}>
									<IconButton color="error" size="large">
										<FavoriteBorderIcon />
									</IconButton>
								</Grid>
								<Grid item xs={12}>
									<Typography variant="body1">{product.description}</Typography>
								</Grid>
								{product.category && (
									<Grid item xs={12}>
										<Typography variant="h6">
											See Category:{" "}
											<NextLink href={createSlug(product.category)} passHref>
												<Link underline="hover" color="royalblue">
													{product.category}
												</Link>
											</NextLink>
										</Typography>
									</Grid>
								)}
								<Grid item xs={12} className={classes.textGreen}>
									<UnderlinedTitle
										variant="h4"
										color="info"
										body={formatPrice(product.default.price)}
									/>
								</Grid>
								<Grid item xs={12}>
									<Grid container spacing={3}>
										<Grid item xs={6} sm={4} lg={3}>
											<Rating
												name="read-only"
												value={product.rating / 2}
												readOnly
												precision={0.5}
											/>
										</Grid>
										<Grid item xs={6} sm={8} lg={9}>
											<Typography className={classes.textInfo}>
												{product.numReviews} Reviews
											</Typography>
										</Grid>
									</Grid>
								</Grid>
								<Grid item xs={12}>
									{product.subCategories && product.subCategories.length >= 1 ? (
										<ProductOptions
											product={product}
											updateMainImg={updateMainImg}
										/>
									) : (
										<Grid container spacing={3}>
											<Grid item xs={6}>
												<Button
													variant="outlined"
													size="large"
													className={classes.textGreen}
													color="success"
													onClick={dispatchAddToCart}
												>
													add to cart
												</Button>
											</Grid>
											<Grid item xs={6} className={classes.textRight}>
												<Button
													variant="contained"
													size="large"
													color="error"
													disableElevation
												>
													buy now
												</Button>
											</Grid>
										</Grid>
									)}
								</Grid>
								<Grid item xs={12}>
									<CardLink
										color="warning"
										innerText="Know more about our shipping options"
										url={urlKeyWords.shippingInfo}
									/>
								</Grid>
								<Grid item xs={12}>
									<CardLink
										color="grey"
										innerText="Frequently Asked Questions"
										url={urlKeyWords.faq}
									/>
								</Grid>
								<SimilarProducts products={similarProducts} layoutOption={2} />
							</Grid>
						</Grid>
					</>
				) : (
					<Grid item xs={12}>
						<Typography variant="h3" sx={{ textAlign: "center", marginTop: "10vh" }}>
							We are almost done. Please wait for a few more seconds...
						</Typography>
					</Grid>
				)}
			</Grid>
		</Container>
	)
}

const placeholder: Product = {
	_id: "loading",
	slug: "",
	name: "0",
	category: "",
	description: "",
	brand: "",
	rating: 0,
	numReviews: 0,
	default: {
		stock: 0,
		price: 0,
		images: [""],
	},
}

export default ProductPage
