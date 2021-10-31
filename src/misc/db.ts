import mongoose from "mongoose"

const connect = async () => {
	if (!process.env.MONGODB_URI) return

	if (mongoose.connections.length > 0 && mongoose.connections[0].readyState !== 1) {
		// since the connection is not ready, we need to disconnect now
		await mongoose.disconnect()

		return
	}

	await mongoose.connect(process.env.MONGODB_URI)
}

const disconnect = async () => {
	if (mongoose.connections.length > 0 && mongoose.connections[0].readyState === 1) {
		if (process.env.NODE_ENV !== "development") {
			await mongoose.disconnect()
		}
	}
}

const db = { connect, disconnect }

export default db
