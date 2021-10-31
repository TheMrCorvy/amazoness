import mongoose from "mongoose"
import { Product } from "../misc/types"

export interface ProductDocument extends Omit<Product, "_id">, mongoose.Document {
	createdAt: Date
	updatedAt: Date
}

const productSchema = new mongoose.Schema(
	{
		name: { type: String, required: true, unique: true },
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

const Product = mongoose.models.Product || mongoose.model<ProductDocument>("Product", productSchema)

export default Product
