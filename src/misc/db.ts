import mongoose from "mongoose"

const connect = async () => {
	if (!process.env.MONGODB_URI) return

	await mongoose.connect(process.env.MONGODB_URI)
}

const disconnect = async () => {
	await mongoose.disconnect()

	console.log("diconnected from db")
}

const db = { connect, disconnect }

export default db
