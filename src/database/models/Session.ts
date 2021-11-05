import mongoose from "mongoose"
import { UserDocument } from "./User"

export interface SessionDocument extends mongoose.Document {
	user: UserDocument["_id"]
	valid: boolean
	createdAt: Date
	updatedAt: Date
}

const sessionSchema = new mongoose.Schema(
	{
		user: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
		valid: { type: Boolean, default: true },
	},
	{
		timestamps: true,
	}
)

const SessionModel =
	mongoose.models.Session || mongoose.model<SessionDocument>("Session", sessionSchema)

export default SessionModel
