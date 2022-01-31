// import mongoose from "mongoose"
// import bcrypt from "bcrypt"
// import { User } from "../../misc/types"

// export interface UserDocument extends Omit<User, "_id">, mongoose.Document {
// 	createdAt: Date
// 	updatedAt: Date
// 	comparePassword(candidatePassword: string): Promise<Boolean>
// }

// const userSchema = new mongoose.Schema(
// 	{
// 		name: {
// 			type: String,
// 			required: [true, "The field Name is required"],
// 			trim: true,
// 			minlength: [4, "The field Name must have at least 4 characters"],
// 			maxLength: [190, "The field Name must not contain more than 190 characters"],
// 		},
// 		email: {
// 			type: String,
// 			required: [true, "The field Name is required"],
// 			unique: true,
// 			minlength: [4, "The field Email must have at least 4 characters"],
// 			maxLength: [190, "The field Email must not contain more than 190 characters"],
// 			validate: {
// 				validator: function (v: string) {
// 					return /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(v)
// 				},
// 				message: (props: any) => `${props.value} is not a valid email!`,
// 			},
// 		},
// 		password: {
// 			type: String,
// 			required: true,
// 			minlength: [4, "The field Password must have at least 4 characters"],
// 			maxLength: [190, "The field Password must not contain more than 190 characters"],
// 		},
// 		isAdmin: { type: Boolean, required: false, default: false },
// 		billingAddress: {
// 			streetOne: { type: String, required: false, minLength: 3, maxLength: 190 },
// 			number: { type: Number, required: false },
// 			postalCode: { type: String, required: false, minLength: 3, maxLength: 20 },
// 			city: { type: String, required: false, minLength: 3, maxLength: 190 },
// 			country: { type: String, required: false, minLength: 3, maxLength: 190 },
// 		},
// 		shippingAddress: {
// 			streetOne: { type: String, required: false, minLength: 3, maxLength: 190 },
// 			streetTwo: { type: String, required: false, minLength: 3, maxLength: 190 },
// 			number: { type: Number, required: false },
// 			postalCode: { type: String, required: false, minLength: 3, maxLength: 20 },
// 			apartment: { type: String, required: false, minLength: 3, maxLength: 190 },
// 			description: { type: String, required: false, minLength: 3, maxLength: 190 },
// 			zone: { type: String, required: false, minLength: 3, maxLength: 190 },
// 			city: { type: String, required: false, minLength: 3, maxLength: 190 },
// 			country: { type: String, required: false, minLength: 3, maxLength: 190 },
// 		},
// 	},
// 	{
// 		timestamps: true,
// 	}
// )

// userSchema.methods.comparePassword = async function (candidatePassword: string): Promise<boolean> {
// 	const user = this as UserDocument

// 	return bcrypt.compare(candidatePassword, user.password).catch((e) => false)
// }

// const UserModel = mongoose.models.User || mongoose.model<UserDocument>("User", userSchema)

// export default UserModel
