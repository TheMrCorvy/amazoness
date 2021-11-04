import mongoose from "mongoose"
import bcrypt from "bcrypt"
import { User } from "../misc/types"

export interface UserDocument extends User, mongoose.Document {
	createdAt: Date
	updatedAt: Date
	comparePassword(candidatePassword: string): Promise<Boolean>
}

const userSchema = new mongoose.Schema(
	{
		email: { type: String, required: true, unique: true },
		name: { type: String, required: true },
		password: { type: String, required: true },
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
