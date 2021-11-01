import mongoose from "mongoose"
import { Product } from "../misc/types"
import { useSlug } from "../components/utils"

export interface ProductDocument extends Omit<Product, "_id" | "slug">, mongoose.Document {
	slug: string
	createdAt: Date
	updatedAt: Date
}

const productSchema = new mongoose.Schema(
	{
		name: { type: String, required: true, unique: true },
		slug: { type: String, required: true, unique: true },
		description: { type: String, required: true },
		price: { type: Number, required: true },
		images: { type: [String], required: true },
		brand: { type: String, required: true },
		category: { type: String, required: true },
		rating: { type: Number, required: true },
		stock: { type: Number, required: true },
		numReviews: { type: Number, required: true },
	},
	{
		timestamps: true,
	}
)

productSchema.pre("validate", async function (next) {
	let product = this as ProductDocument

	if (!product.isModified("name")) {
		return next()
	}

	const createSlug = useSlug

	product.slug = createSlug(product.name)

	return next()
})

const Product = mongoose.models.Product || mongoose.model<ProductDocument>("Product", productSchema)

export default Product
