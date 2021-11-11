import mongoose from "mongoose"
import { Product } from "../../misc/types"
import { useSlug } from "../../components/utils"

export interface ProductDocument extends Omit<Product, "_id" | "slug">, mongoose.Document {
	slug: string
	createdAt: Date
	updatedAt: Date
}

const productSchema = new mongoose.Schema(
	{
		name: {
			type: String,
			required: [true, "The field Name is required"],
			unique: true,
			trim: true,
			minLength: [3, "The field Name must have at least 3 characters"],
			maxlength: [190, "The field Name must not contain more than 190 characters"],
		},
		slug: {
			type: String,
			required: [true, "The field is Slug required"],
			unique: true,
			trim: true,
			minLength: [3, "The field Slug must have at least 3 characters"],
			maxlength: [190, "The field Slug must not contain more than 190 characters"],
		},
		description: {
			type: String,
			required: [true, "The field Description is required"],
			minLength: [3, "The field Description must have at least 3 characters"],
			maxlength: [700, "The field Description must not contain more than 700 characters"],
		},
		brand: {
			type: String,
			required: [true, "The field Brand is required"],
			minLength: [3, "The field Brand must have at least 3 characters"],
			maxlength: [190, "The field Brand must not contain more than 190 characters"],
		},
		category: {
			type: String,
			required: [true, "The field Category is required"],
			trim: true,
			minLength: [3, "The field Category must have at least 3 characters"],
			maxlength: [190, "The field Category must not contain more than 190 characters"],
		},
		rating: { type: Number, required: [true, "The field Rating is required"] },
		numReviews: { type: Number, required: [true, "The field NumReviews is required"] },
		default: {
			price: { type: Number, required: [true, "The field Default Price is required"] },
			images: { type: [String], required: [true, "The field Default Images is required"] },
			stock: { type: Number, required: [true, "The field Default Stock is required"] },
		},
		subCategories: [
			{
				name: {
					type: String,
					required: [true, "The field SubCategory Name is required"],
					trim: true,
					minLength: [3, "The field Name must have at least 3 characters"],
					maxlength: [190, "The field Name must not contain more than 190 characters"],
				}, // example: color || rarity
				title: {
					type: String,
					required: [true, "The field SubCategory Title is required"],
					trim: true,
					minLength: [3, "The field Title must have at least 3 characters"],
					maxlength: [190, "The field Title must not contain more than 190 characters"],
				}, // example: "black" || "ultra rare"
				image: {
					type: String,
					required: [true, "The field SubCategory Image is required"],
				},
				stock: {
					type: Number,
					required: [true, "The field SubCategory Stock is required"],
				},
				price: {
					type: Number,
					required: [true, "The field SubCategory Price is required"],
				},
			},
		],
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
