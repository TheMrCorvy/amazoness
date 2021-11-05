import { connect, connection, disconnect } from "mongoose"
import { mongoDbUri } from "../misc/config"

const conn = {
	isConnected: false,
}

export const dbConnect = async () => {
	if (conn.isConnected || !mongoDbUri) return

	const db = await connect(mongoDbUri)

	conn.isConnected = db.connections[0].readyState ? true : false
}

connection.on("connected", () => {
	console.log("Mongodb connected to db")
})

connection.on("error", (err) => {
	console.error(err.message)
})

export const dbDisconnect = async () => {
	if (conn.isConnected) {
		if (process.env.NODE_ENV !== "development") {
			await disconnect()
			conn.isConnected = false
		} else {
			console.log("not disconnected")
		}
	}
}

connection.on("disconnected", () => {
	console.log("MongoDB disconnected")
})
