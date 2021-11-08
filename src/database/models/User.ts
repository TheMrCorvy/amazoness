import mongoose from "mongoose"
import bcrypt from "bcrypt"
import { User } from "../../misc/types"

export interface UserDocument extends User, mongoose.Document {
	createdAt: Date
	updatedAt: Date
	comparePassword(candidatePassword: string): Promise<Boolean>
}

const userSchema = new mongoose.Schema(
	{
		name: {
			type: String,
			required: [true, "The field Name is required"],
			trim: true,
			minlength: [4, "The field Name must have at least 4 characters"],
			maxLength: [190, "The field Name must not contain more than 190 characters"],
		},
		email: {
			type: String,
			required: [true, "The field Name is required"],
			unique: true,
			minlength: [4, "The field Email must have at least 4 characters"],
			maxLength: [190, "The field Email must not contain more than 190 characters"],
			validate: {
				validator: function (v: string) {
					return /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(v)
				},
				message: (props: any) => `${props.value} is not a valid email!`,
			},
		},
		password: {
			type: String,
			required: true,
			minlength: [4, "The field Password must have at least 4 characters"],
			maxLength: [190, "The field Password must not contain more than 190 characters"],
		},
		isAdmin: { type: Boolean, required: false, default: false },
	},
	{
		timestamps: true,
	}
)

userSchema.methods.comparePassword = async function (candidatePassword: string): Promise<boolean> {
	const user = this as UserDocument

	return bcrypt.compare(candidatePassword, user.password).catch((e) => false)
}

const UserModel = mongoose.models.User || mongoose.model<UserDocument>("User", userSchema)

export default UserModel
